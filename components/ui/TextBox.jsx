import React from 'react';

const { Component } = React;

class TextBox extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default TextBox;
