import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, BtnDelete } from './List.styled';

export const ContactList = ({ contacts }) => {
    return (
        <List>
            {contacts.map(({ id, name, number }) => {
                return (
                    <Item key={id}>{name}: {number}
                        <BtnDelete aria-label="Delete">x</BtnDelete>
                    </Item>)
            })}
        </List>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
         PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
         }))
}