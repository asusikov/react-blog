import React from 'react';

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

export default Image;
