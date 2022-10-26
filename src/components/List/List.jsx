import React from 'react';
import PropTypes from 'prop-types';
import { Section} from '../Section/Section';
import { List, Item } from './List.styled';

export const ContactList = ({ contacts }) => {
    return (
        <Section title='Contacts'>
            <List>
                {contacts.map(({ id, name, number }) => {
                    return (<Item key={id}>{name}: {number}</Item>)
                })}
            </List>
        </Section>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.PropTypes.arrayOf(
         PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
         }))
}