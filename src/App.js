import { Component } from 'react';
// import { nanoid } from 'nanoid';
// model.id = nanoid();
import { ContactForm } from 'components/Form/Form';
import { ContactList } from 'components/List/List';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  render() {
    return (
      <Container>
        <ContactForm onSubmit={this.handleSubmit} />
        <ContactList contacts={Object.keys(this.state)} />
      </Container>
    );
  }
}

export default App;
