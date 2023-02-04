import React from "react";
import ReactDOM from "react-dom/client";
/* App stylesheet */
import "./index.css";
import App from "./App";
/* React Router */
import { BrowserRouter } from "react-router-dom";
/* Redux ToolKit */
import { Provider } from "react-redux";
import { store } from "./rtk/store";

// TODO:

// FIXME:
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // FIXME:
