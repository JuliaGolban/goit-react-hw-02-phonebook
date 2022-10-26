import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import { Section} from '../Section/Section';
import { Form, Field, Label, Input, Submit } from './Form.styled';

export class ContactForm extends Component {
 state = {
    contacts: [],
    name: '',
  };

    handleChange = e => {
        const { name, value} = e.currentTarget;

        this.setState({[name]: value})
    }
    
    handleSubmit = e => {
        // e.preventDefault();

        this.props.onSubmit(this.state);

        this.reset();
    }

    reset = () => {
    this.setState({ name: ''});
    };
    
    render(){
        return (
            <Section title='Phonebook'>
                <Form onSubmit={this.handleSubmit}>
                    <Field>
                        <Label>Name</Label>
                        <Input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            placeholder=" "
                            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required />
                    </Field>
                    <Submit type="submit">Add contact</Submit>
                </Form>
            </Section>
            );
        }
}

// ContactForm.propTypes = {
//     contacts: PropTypes.array
// }