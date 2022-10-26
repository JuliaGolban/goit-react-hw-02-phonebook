import { Component } from 'react';
import { ContactForm } from 'components/Form/Form';
import { ContactList } from 'components/List/List';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = formData => {
    this.addToContacts(formData);
  };

  addToContacts = data => {
    const { contacts } = this.state;
    const contactsList = contacts.concat(data);
    return this.setState({ contacts: contactsList });
  };

  render() {
    const { contacts } = this.state;
    console.log('App ~ render ~ contacts', contacts);
    return (
      <Container>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <ContactList contacts={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
