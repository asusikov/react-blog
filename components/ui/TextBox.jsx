import React from 'react';

const { Component } = React;

class TextBox extends Component {
  render() {
    return (
      <span>
        {this.props.children}
      </span>
    )
  }
}

export default TextBox;
