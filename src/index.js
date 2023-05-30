import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-day-picker/dist/style.css';
import { Provider } from "react-redux"
import store from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import './assets/css/style.css';
import './assets/css/responsive.css';

let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

export const storeInstance = store;
