import React from 'react';
import PropTypes from 'prop-types';
import * as SC from '../Section/Section.styled';

export const Section = ({title ="", children}) => {
    return (
        <SC.Section>
            <SC.Title>{title}</SC.Title>
            {children}
        </SC.Section>)
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};