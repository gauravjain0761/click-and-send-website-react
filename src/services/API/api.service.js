import { fetch } from "../axios.services";
import _constant from "../../_constant";

const CONSTNAT = _constant.TOKEN;

const BASE_URL = "http://io.pixelsoftwares.com:5670/exchange";

const BASE_URL_2 = "https://www.mlm.pixelsoftwares.com/vynksafe_v1/";

export const currencyPair = (crypto) => {
  return fetch("get", `${BASE_URL}/currency_pair/${crypto}`);
};

export const orderBook = (pair) => {
  return fetch("get", `${BASE_URL}/spot/orderbook/${pair}`);
};

export const login = (data) => {
  return fetch("post", `${BASE_URL_2}/api/login`, data, {
    Token: CONSTNAT.LOGINTOKEN,
  });
};

export const allSymbols = () => {
  return fetch("get", `${BASE_URL}/symbols`);
};

export const placeOrder = (pair, data, headerData) => {
  return fetch("post", `${BASE_URL}/spot/${pair}`, data, headerData);
};

export const recentTrade = (pair) => {
  return fetch("get", `${BASE_URL}/spot/trades/${pair}`);
};

export const getUserbalance = (coin, headerData) => {
  return fetch("get", `${BASE_URL}/user/balance/${coin}`, {}, headerData);
};

export const getAllorders = (coin, page, headerData) => {
  return fetch(
    "get",
    `${BASE_URL}/user/all_order/${coin}?page=${page}`,
    {},
    headerData
  );
};

export const getCloseOrders = (pair, page, headerData) => {
  return fetch(
    "get",
    `${BASE_URL}/user/get_order/${pair}/3/?page=${page}`,
    {},
    headerData
  );
};

export const getOpenOrders = (pair, page, headerData) => {
  return fetch(
    "get",
    `${BASE_URL}/user/get_order/${pair}/0/?page=${page}`,
    {},
    headerData
  );
};

export const getFavPairs = (headerData) => {
  return fetch("get", `${BASE_URL}/user/get_pair`, {}, headerData);
};

export const AddRemoveFavPairs = (data, headerData) => {
  return fetch("post", `${BASE_URL}/user/user_fav_coin`, data, headerData);
};

export const cancelOrders = (data, headerData) => {
  return fetch("post", `${BASE_URL}/user/orders/cancel`, data, headerData);
};

export const cancelAllOrders = (pair, headerData) => {
  return fetch(
    "post",
    `${BASE_URL}/user/orders/cancel_all/${pair}`,
    {},
    headerData
  );
};

export const getOrderBalance = (data, headerData) => {
  return fetch("get", `${BASE_URL}/user/fund`, data, headerData);
};

export const allCoins = () => {
  return fetch("get", `${BASE_URL}/coins`);
};
