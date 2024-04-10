// SearchBox.jsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import "./SearchBox.css"; // Підключення файлу стилів

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const contacts = useSelector(selectContacts);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    dispatch(changeFilter({ term: searchTerm, by: "name" }));
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm)
  );

  const shouldShowContacts = searchTerm !== "" && filteredContacts.length > 0;

  return (
    <div className="search-box-container">
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
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
