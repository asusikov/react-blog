import React from 'react';
import PropTypes from 'prop-types';

import BlogItem from './BlogItem';

const BlogList = ({ items, likePost }) => {
  const blogItems = items.map((item) => (
    <BlogItem key={item.id} item={item} likePost={likePost}/>
  ));

  return (
    <div>
      {blogItems}
    </div>
  );
};

BlogList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  likePost: PropTypes.func.isRequired
};

BlogList.defaultProps = {
  items: []
};

export default BlogList;
