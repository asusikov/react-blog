import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ children }) => (
  <span className="card-title">
    {children}
  </span>
);

TextBox.propTypes = {
  children: PropTypes.element.isRequired
};

export default TextBox;
