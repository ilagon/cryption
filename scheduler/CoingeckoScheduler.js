const scheduler = require('node-cron');
const axios = require('axios');


exports.task = scheduler.schedule('*/1 * * * *', async () => {
    console.log("[Crypto] Task Starting...");
    await axios.get("/v1/notion/crypto");
    console.log("[Crypto] Task Completed");
}, {
    //Change to true to activate the task
    scheduled: false
});


