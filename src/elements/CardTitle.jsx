import React from 'react';
import PropTypes from 'prop-types';

const CardTitle = ({ children }) => (
  <span className="card-title">
    {children}
  </span>
);

CardTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default CardTitle;
