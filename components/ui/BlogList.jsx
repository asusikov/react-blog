import React from 'react';
import PropTypes from 'prop-types';

import BlogItem from './BlogItem';

const { Component } = React;

class BlogList extends Component {
  render() {
    const blogItems = this.props.items.map((item) => {
      return (
        <BlogItem key={item.id} item={item} likePost={this.props.likePost}/>
      );
    });

    return (
      <div>
        {blogItems}
      </div>
    );
  }
};

BlogList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  likePost: PropTypes.func.isRequired
}

BlogList.defaultProps = {
  items: []
}

export default BlogList;
