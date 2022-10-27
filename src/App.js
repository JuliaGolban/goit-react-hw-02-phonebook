import { Component } from 'react';
import { ContactForm } from 'components/Form/Form';
import { ContactList } from 'components/List/List';
import { Filter } from 'components/Filter/Filter';
import { Container, Section, Title } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = formData => {
    this.addToContacts(formData);
  };

  addToContacts = data => {
    const { contacts } = this.state;
    const contactsList = contacts.concat(data);
    return this.setState({ contacts: contactsList });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Section>
          <Title as="h1">Phonebook</Title>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>
        <Section>
          <Title as="h2">Contacts</Title>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList contacts={visibleContacts} />
        </Section>
      </Container>
    );
  }
}

export default App;
