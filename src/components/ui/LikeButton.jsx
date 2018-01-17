import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const { Component } = React;

const LikeButton = ({ className, numberOfLikes, likePost}) => {
  return (
    <button onClick={likePost} className={`${className} waves-effect waves-light btn`}>
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

const StyledLikeButton = styled(LikeButton)`
  width: max-content;
`;

export default StyledLikeButton;
