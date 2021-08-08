let axios = require('axios');

exports.get_price = async(req, res) => {
  const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
    params: {
      ids: "bitcoin,ethereum,zilliqa,matic-network",
      vs_currencies: "usd"
    }
  })
  .then(price => price.data)
  .catch(err => res.status(500).json({
    error: err,
  }));
  console.log(response);
  res.send(response);
}