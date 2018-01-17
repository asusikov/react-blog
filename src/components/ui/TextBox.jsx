import React from 'react';
import PropTypes from 'prop-types';

const { Component } = React;

class TextBox extends Component {
  render() {
    return (
      <span className="card-title">
        {this.props.children}
      </span>
    )
  }
}

TextBox.propTypes = {
  // children:
}

export default TextBox;
