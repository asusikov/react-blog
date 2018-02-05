import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LikeButton = ({ className, numberOfLikes, likePost}) => (
  <button
    onClick={likePost}
    className={`${className} waves-effect waves-light btn`}
  >
      Like ({numberOfLikes})
  </button>
);

LikeButton.propTypes = {
  className: PropTypes.string,
  numberOfLikes: PropTypes.number,
  likePost: PropTypes.func.isRequired
};

LikeButton.defaultProps = {
  numberOfLikes: 0
};

const StyledLikeButton = styled(LikeButton)`
  width: max-content;
`;

export default StyledLikeButton;
