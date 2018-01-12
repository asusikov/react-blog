import React from 'react';
import ReactDOM from 'react-dom';

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
    )
  }
}

export default LikeButton;
