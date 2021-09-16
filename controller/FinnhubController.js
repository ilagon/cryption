const { Client } = require("@notionhq/client");
const axios = require('axios');
const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN });

const findTrackingList = async () => {
    const dbID = process.env.NOTION_STOCK_ID;
    const response = await notion.databases.query({
      database_id: dbID,
    });
    return response.results;
  };



