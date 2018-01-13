import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const { Component } = React;

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { numberOfLikes: props.numberOfLikes };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ numberOfLikes: this.state.numberOfLikes + 1 });
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        Like ({this.state.numberOfLikes})
      </button>
    );
  }
}

LikeButton.propTypes = {
  numberOfLikes: PropTypes.number
}

LikeButton.defaultProps = {
  numberOfLikes: 0
}

export default LikeButton;
