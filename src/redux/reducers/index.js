import { combineReducers } from "redux";
import { AllApiData } from "../../services/api";
import user from "./user";
import cart from "./cart";

export default combineReducers({
  [AllApiData.reducerPath]: AllApiData.reducer,
  user,
  cart
});
