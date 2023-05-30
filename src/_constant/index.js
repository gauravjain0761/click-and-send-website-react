const SYMBOL_ID = {
  "BNB/ETH": "1",
  "BNB/USDT": "2",
  "ETH/USDT": "3",
  "PIXEL/LINK": "4",
  "BNB/ETHTEST": "7",
  "BNB/TRX": "10",
  "LINK/BNB": "12",
  "LINK/PAREA": "14",
  "BTCU/SDT": "15",
  "BNB/PIXEL": "18",
};
/** for build */
// const BASE_URL = "/exchange/v1/";
/** for development */
const BASE_URL = "/";

const PRICEPER = {
  ONE: 25,
  TWO: 50,
  THREE: 75,
  FOUR: 100,
};

const DEVICE_TOKEN = {
  TOKEN: "33c6a6e7431e1db08e80fc3a8d9e0571",
  LOGINTOKEN: "88e1893f659709cad1a8b03cbe306edb",
};

export default {
  SYMBOL_ID: SYMBOL_ID,
  PRICEPER: PRICEPER,
  TOKEN: DEVICE_TOKEN,
  BASE_URL: BASE_URL,
};
