import React from 'react';
import BlogList from '../ui/BlogList';

const { Component } = React;

class BlogPage extends Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      items: props.items.map((item) => {
        item.numberOfLikes = item.numberOfLikes || 0;
        return item;
      })
    };
    this.likePost = this.likePost.bind(this);
  }
  likePost(postId) {
    this.setState((prevState) => prevState.items.map((item) => {
      if (item.id === postId) item.numberOfLikes++;
      return item;
    }));
  }
  render() {
    return (
      <div>
        <h1>Awesome React Blog!</h1>
        <BlogList items={this.state.items} likePost={this.likePost}/>
      </div>
    );
  }
}

export default BlogPage;
