import "./App.css";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Title from "./components/Title";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const changeFilter = (e) => {
    return setFilter(e.currentTarget.value);
  };

  const formSubmitHandler = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(name + " is already in contacts");
      return;
    }

    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const getFilteredContactList = () => {
    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts.length !== 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <div className="App">
      <Title title="Phonebook" />

      <ContactForm onSubmit={formSubmitHandler} />

      <Title title="Contacts" />

      <Filter value={filter} onChange={changeFilter} />

      <ContactList
        contacts={getFilteredContactList()}
        deleteContact={deleteContact}
      />
    </div>
  );
}
