const express = require('express');
const router = express.Router();
const coingeckoController = require('../controller/CoingeckoController');
const finnhubController = require('../controller/FinnhubController');

router.get("/crypto", coingeckoController.updateTrackedPrices);


module.exports = router;