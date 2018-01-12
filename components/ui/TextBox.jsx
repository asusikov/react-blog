import React from 'react';
import PropTypes from 'prop-types';

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

TextBox.propTypes = {
  // children:
}

export default TextBox;
