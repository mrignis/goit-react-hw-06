// SearchBox.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice"; // Імпорт екшену та селектора для фільтрації
import "./SearchBox.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterTerm = useSelector(selectNameFilter); // Використання селектора для отримання значення поля term зі стору

  const [searchTerm, setSearchTerm] = useState(""); // Стан для зберігання введеного користувачем тексту пошуку

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term); // Оновлення стану з введеним користувачем текстом пошуку
    dispatch(changeFilter({ term })); // Відправка об'єкту з полем term для фільтрації у Redux store
  };

  // Використання useSelector для отримання контактів зі стору Redux
  const contacts = useSelector((state) => state.contacts.items);

  // Фільтрація контактів за введеним користувачем текстом пошуку
  const filteredContacts = contacts.filter((contact) => {
    return (
      filterTerm && // Перевірка, чи існує значення filterTerm
      contact.name && // Перевірка, чи існує значення contact.name
      contact.name.toLowerCase().includes(filterTerm.toLowerCase())
    );
  });

  return (
    <div className="search-box-container">
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div className="search-results">
        <h2>Search Results:</h2>
        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBox;
