import React from "react";
import ReactDOM from "react-dom/client"; // Змінено імпорт
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store"; // Змінено імпорт

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
