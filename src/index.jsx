import React from "react";
import { createRoot } from "react-dom";
import "./index.scss";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import CookieConsent from "react-cookie-consent";
// import { register } from 'swiper/element/bundle';
// // register Swiper custom element
// register();

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    
      <App />
    </Provider>
  </React.StrictMode>
);
