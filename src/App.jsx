// App.jsx
import React, { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import store, { persistor } from "./redux/store";
import "./App.css";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [nameFilter, setNameFilter] = useState(""); // Стейт для фільтра

  const handleChange = (value) => {
    setNameFilter(value); // Оновлення значення фільтра
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app">
          <h1>Книга контактів</h1>
          <div className="container">
            <ContactForm />
            <SearchBox value={nameFilter} onChange={handleChange} />{" "}
            {/* Передача функції handleChange компоненту SearchBox */}
            <ContactList nameFilter={nameFilter} />{" "}
            {/* Передача фільтра до ContactList */}
            <Contact />
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
