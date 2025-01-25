import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";

const App = () => {
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    setContacts(savedContacts || initialContacts);
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  const filterFunction = (e) => {
    setFilter(e.target.value);
  };

  const getFilterContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterContacts = getFilterContacts();

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const addContact = ({ name, number }) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filter} onChange={filterFunction} />
      <ContactList contacts={filterContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
