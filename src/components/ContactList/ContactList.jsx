// ContactList.jsx
import React from "react";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import "./ContactList.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="contact-item">
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
