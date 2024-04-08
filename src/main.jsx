import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Додайте імпорт Provider
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store.js";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
