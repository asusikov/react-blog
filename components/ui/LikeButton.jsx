import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const { Component } = React;

const LikeButton = ({ numberOfLikes, likePost}) => {
  return (
    <button onClick={likePost}>
      Like ({numberOfLikes})
    </button>
  );
}

LikeButton.propTypes = {
  numberOfLikes: PropTypes.number,
  likePost: PropTypes.func.isRequired
}

LikeButton.defaultProps = {
  numberOfLikes: 0
}

export default LikeButton;
