import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../redux/filtersSlice";
import { useSelector } from "react-redux";
import { selectContacts } from "../redux/contactsSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(""); // Стейт для зберігання пошукового терміну
  const contacts = useSelector(selectContacts); // Отримання контактів зі store

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Відправляємо об'єкт зі значенням пошукового терміну та ключем 'name'
    dispatch(changeFilter({ term: searchTerm, by: "name" }));
  };

  // Функція для фільтрації контактів за введеним користувачем пошуковим терміном
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) || // Фільтрація за іменем
      contact.phone.includes(searchTerm) // Фільтрація за телефоном
  );

  // Визначення, чи потрібно відображати список контактів
  const shouldShowContacts = searchTerm !== "" && filteredContacts.length > 0;

  return (
    <div>
      {/* Пошукове поле */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      {/* Кнопка пошуку */}
      <button onClick={handleSearch}>Search</button>

      {/* Відображення відфільтрованих контактів, якщо вони є */}
      {shouldShowContacts && (
        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} - {contact.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
