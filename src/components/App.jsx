
import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export default function App() {

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts])

  // const addContact = newContact => {

  //   const existingContact = contacts.find(contact =>
  //     contact.name === newContact.name);
    
  //   if (existingContact) {
  //     alert(`${newContact.name} is already in contacts`)
  //     return
  //   }

  //   setContacts([newContact, ...contacts]);
  // }

  // const deleteContact = id => {
  //   setContacts(contacts => contacts.filter(contact => contact.id !== id));
  // }

  // const changeFilter = event => {
  //   setFilter(event.currentTarget.value)
  // }

  // const filterContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
    
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)      
  //   );
  // }

  // const filteredContacts = filterContacts();

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}