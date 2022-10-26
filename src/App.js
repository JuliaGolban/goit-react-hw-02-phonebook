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
    console.log('App ~ formData', formData);
    this.addToContacts(formData);
  };

  addToContacts = data => {
    const { contacts } = this.state;
    contacts.push(data);
  };

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <ContactList contacts={contacts} />
      </Container>
    );
  }
}

export default App;
