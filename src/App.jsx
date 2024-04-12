import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import store, { persistor } from "./redux/store"; // Виправлено тут
import "./App.css"; // Підключення файлу стилів

import ContactsForm from "./components/ContactsForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import Contact from "./components/Contact/Contact"; // Додано імпорт

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app">
          <h1>Книга контактів</h1>
          <div className="container">
            <ContactsForm />
            <SearchBox />
            <ContactList />
            {/* Включення компонента Contact */}
            <Contact />
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
