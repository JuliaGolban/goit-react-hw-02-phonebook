import React from 'react';
import PropTypes from 'prop-types';
import { Section} from '../Section/Section';
import { List, Item } from './List.styled';

export const ContactList = ({ contacts }) => {
    return (
        <Section title='Contacts'>
            <List>
                {contacts.map((name) => {
                    return (<Item key={name}>{name}</Item>)
                })}
            </List>
        </Section>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.any.isRequired
}