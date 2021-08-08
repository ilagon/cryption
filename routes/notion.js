const express = require('express');
const router = express.Router();
const notionController = require('../controller/notionController');

router.get("/crypto", notionController.updateTrackedPrices);

module.exports = router;