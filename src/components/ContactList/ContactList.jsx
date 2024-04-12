import React from "react";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import "./ContactList.css";
import Contact from "../Contact/Contact";

const ContactList = ({ nameFilter }) => {
  const contacts = useSelector(selectContacts);

  // Фільтруємо контакти за значенням фільтру
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div className="contact-list">
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className="contact-item">
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
