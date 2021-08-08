let express = require('express');
let router = express.Router();
let cryptoController = require('../controller/crypto-controller');

//Put Routes here
router.get("/crypto/price", cryptoController.get_price);

//


module.exports = router;