import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import "./ContactList.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

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