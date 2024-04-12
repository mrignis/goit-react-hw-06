// ContactsForm.jsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { ImAccessibility } from "react-icons/im";
import "./ContactForm.css"; // Підключення файлу стилів

const ContactsForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState(1); // Початкове значення лічильника

  const handleSubmit = (e) => {
    e.preventDefault();
    // Перевірка на заповнення полів ім'я та номер телефону
    if (!name || !phone) {
      alert("Please fill in all fields"); // Повідомлення про помилку
      return; // Відміна дії
    }
    const nextId = id <= 200 ? id : 1;

    dispatch(addContact({ id, name, phone }));
    setId(id + 1);
    setName("");
    setPhone("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=" Name"
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactsForm;
