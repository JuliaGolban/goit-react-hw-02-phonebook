import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section} from '../Section/Section';
import { Form, Field, Label, Input, Submit } from './Form.styled';

export class ContactForm extends Component {
    state = {
        id: '',
        name: '',
    };

    handleChange = e => {
        const { name, value} = e.currentTarget;
        this.setState({ [name]: value })
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
        this.setState({ name: '', id: ''});
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
                    <Submit type="submit">Add contact</Submit>
                </Form>
            </Section>
            );
        }
}