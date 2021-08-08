let axios = require('axios');

exports.get_price = async(idList) => {
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