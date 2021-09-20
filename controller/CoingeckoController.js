const { Client } = require("@notionhq/client");
const axios = require('axios');
const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN });

const findTrackingList = async () => {
  const dbID = process.env.NOTION_CRYPTO_ID;
  const response = await notion.databases.query({
    database_id: dbID,
  });
  return response.results;
};

const get_price = async(idList) => {
  const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
    params: {
      ids: idList,
      vs_currencies: "usd"
    },
  })
  .then(res => res.data)
  .catch(err => console.log(err));
  return response;
}

exports.updateTrackedPrices = async (req, res) => {
  try {
    let idList = [];
    let trackingList = await findTrackingList();

    //Retrieve tracked IDs
    trackingList.forEach((tracker) => {
      idList.push(tracker.properties.ID.rich_text[0].text.content);
    });
    let currentPrices = await get_price(idList.join(","));
    console.log(currentPrices);

    //Updated prices
    trackingList.forEach(async (tracker) => {
      const pageId = tracker.id;
      const response = await notion.pages.update({
        page_id: pageId,
        properties: {
          Price: {
            number:
              currentPrices[tracker.properties.ID.rich_text[0].text.content]
                .usd,
          },
        },
      });
      //console.log(response);
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
