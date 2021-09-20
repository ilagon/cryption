const { Client } = require("@notionhq/client");
const axios = require('axios');
const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN });

const findTrackingList = async () => {
    const dbID = process.env.NOTION_STOCK_ID;
    const response = await notion.databases.query({
      database_id: dbID,
    });
    return response.results;
    //response.results[0].properties["Ticker Symbol"].title[0].text.content
  };

const getPrice = async(ticker) => {
  const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${process.env.FINNHUB_API_KEY}`)
  .then(res => res.data)
  .catch(err => console.log(err));
  return response;
}

exports.updateStockPrices = async (req, res) => {
  try {
    const trackingList = await findTrackingList();
    trackingList.forEach(async tracker => {
      const newPrice = await getPrice(tracker.properties["Ticker Symbol"].title[0].text.content);
      await notion.pages.update({
        page_id: tracker.id,
        properties: {
          "Current Price": {
            number: newPrice.c
          }
        }
      })
    });
    res.status(200).json({
      message: "Update Completed.",
    });
  } catch (err) {
    res.status.json({
      error: err,
    });
  }
};


