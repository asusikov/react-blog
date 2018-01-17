import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const { Component } = React;

class Image extends Component {
  render() {
    const { className, width, src, alt, height } = this.props;
    return (
      <div className={`card-image ${className}`}>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

Image.defaultProps = {
  src: '../public/images/no-image-icon.png',
  alt: '',
  width: 100,
  height: 100
}

const StyledImage = styled(Image)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default StyledImage;
