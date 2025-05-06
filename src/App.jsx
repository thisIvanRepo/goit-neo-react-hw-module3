import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import useLocalStorage from "./hooks/useLocalStorage";

const initContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", initContacts);
  const [filter, setFilter] = useState("");

  const handleFilter = (value) => {
    setFilter(value);
  };

  const handleCreateContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: nanoid() }]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  const visibleContacts = contacts.filter((contact) => {
    return contact.name
      .toUpperCase()
      .trim()
      .includes(filter.toUpperCase().trim());
  });

  console.log("Visible contacts:", visibleContacts);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleCreateContact} />
        {contacts.length > 0 && <SearchBox onInput={handleFilter} />}
        {contacts.length !== 0 && visibleContacts.length === 0 ? (
          <p>No contacts found matching your search...</p>
        ) : (
          <ContactList
            contacts={visibleContacts}
            onDelete={handleDeleteContact}
          />
        )}
      </div>
    </>
  );
}

export default App;
