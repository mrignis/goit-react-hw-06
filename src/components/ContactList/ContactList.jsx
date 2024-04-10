import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, deleteContact } from "../../redux/contactsSlice";
import "./ContactList.css"; // Шлях до вашого CSS файлу

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="contact-list">
      {/* Список контактів */}
      <ul>
        {/* Рендер всіх контактів */}
        {contacts.map((contact, index) => (
          <li key={index} className="contact-item">
            <div className="contact-info">
              {contact.name} - {contact.phone}
            </div>
            <div className="contact-actions">
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
