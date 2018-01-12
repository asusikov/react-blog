import React from 'react';
import PropTypes from 'prop-types';

const { Component } = React;

class Image extends Component {
  render() {
    const { width, src, alt, height } = this.props;
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
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

export default Image;
