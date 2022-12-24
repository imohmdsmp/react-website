import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { store } from './redux/Store';
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <ToastContainer autoClose={3000} />
    <ScrollToTop />
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
