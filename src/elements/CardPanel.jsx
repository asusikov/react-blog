import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className }) => (
  <div className={`card-panel ${className}`}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Card;
