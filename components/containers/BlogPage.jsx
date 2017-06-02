import React from 'react';
import BlogList from '../ui/BlogList';

const { Component } = React;

class BlogPage extends Component {
  render() {
    return (
      <div>
        <h1>Awesome React Blog!</h1>
        <BlogList items={this.props.items}/>
      </div>
    );
  }
}

export default BlogPage;
