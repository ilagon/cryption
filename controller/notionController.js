const {Client} = require("@notionhq/client");
const cryptoUtils = require("../util/cryptoUtil");
const notion = new Client({auth: process.env.NOTION_INTEGRATION_TOKEN});
let idList = [];

findTrackingList = async () => {
    const dbID = process.env.NOTION_CRYPTO_ID;
    const response = await notion.databases.query({
        database_id: dbID,
        filter: {
            property: "Active Track",
            checkbox: {
                equals: true
            }
        }
    });
    return response.results;
}

exports.updateTrackedPrices = async (req,res) => {
    let trackingList = await findTrackingList();
    trackingList.forEach(tracker => {
        idList.push(tracker.properties.ID.rich_text[0].text.content);
    });
    let currentPrices = await cryptoUtils.get_price(idList.join(","));
    console.log(currentPrices);

}