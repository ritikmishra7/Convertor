import CryptoConvert from "crypto-convert";

function Supported() {
  const convert = new CryptoConvert({
    cryptoInterval: 5000, //Crypto prices update interval in ms (default 5 seconds on Node.js & 15 seconds on Browsers)
    fiatInterval: 60 * 1e3 * 60, //Fiat prices update interval (default every 1 hour)
    calculateAverage: true, //Calculate the average crypto price from exchanges
    binance: true, //Use binance rates
    bitfinex: true, //Use bitfinex rates
    coinbase: true, //Use coinbase rates
    kraken: true, //Use kraken rates
    HTTPAgent: null, //HTTP Agent for server-side proxies (Node.js only)
  }); //HTTP Agent for server-side proxies (Node.js only));

  (async function () {
    await convert.ready(); //Wait for the initial cache to load
    const list = convert.list;
    return list;
    // handleOption(list);
  })();
}

export default Supported;
