import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

import { store, persistor } from "./redux/store";
import ContactsForm from "./components/ContactsForm";
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app">
          <h1>Книга контактів</h1>
          <ContactsForm />
          <SearchBox />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
