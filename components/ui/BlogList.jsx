import React from 'react';

import BlogItem from './BlogItem';

const { Component } = React;

class BlogList extends Component {
  render() {
    const blogItems = this.props.items.map((item) => {
      return (
        <BlogItem key={item.id} item={item}/>
      );
    });

    return (
      <div>        
        {blogItems}
      </div>
    );
  }
};

export default BlogList;
