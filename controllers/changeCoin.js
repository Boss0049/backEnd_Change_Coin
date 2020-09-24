const axios = require("axios");

const mainChange = async (ctx, next) => {
  try {
    const { coin, currency } = ctx.request.body;
    const getApi = await axios.get(
      "http://data.fixer.io/api/latest?access_key=bba950d832d01f83dce4f6edcfc420d7"
    );
    let sum = (getApi.data.rates[currency] * coin).toFixed(2);
    ctx.status = 200;
    ctx.body = sum;
  } catch (err) {
    ctx.app.emit("error", err, ctx);
  }
};

module.exports = { mainChange };
