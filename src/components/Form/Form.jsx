import React, { Component } from 'react';
import { nanoid, customAlphabet } from 'nanoid';
import { Section} from '../Section/Section';
import { Form, Field, Label, Input, Submit } from './Form.styled';

export class ContactForm extends Component {
    state = {
        id: '',
        name: '',
        number:'',
    };

    handleChange = e => {
        const { name, number, value} = e.currentTarget;
        this.setState({ [name]: value, [number]: value })
        this.createID();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }
        
    createID = () => {
        const contactId = nanoid(4);
        this.setState({ id: contactId })
    }

    reset = () => {
        this.setState({ id: '', name: '', number:'' });
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
                            contactId={this.state.id}
                            value={this.state.name}
                            onChange={this.handleChange}
                            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required />
                    </Field>
                    <Field>
                        <Label>Number</Label>
                        <Input
                            type="tel"
                            name="number"
                            contactId={this.state.id}
                            value={this.state.number}
                            onChange={this.handleChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            />
                    </Field>
                    <Submit type="submit">Add contact</Submit>
                </Form>
            </Section>
            );
        }
}