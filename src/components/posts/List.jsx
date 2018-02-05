import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const List = ({ items, likePost }) => {
  const posts = items.map((item) => (
    <ListItem key={item.id} item={item} likePost={likePost}/>
  ));

  return (
    <div>
      {posts}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  likePost: PropTypes.func.isRequired
};

List.defaultProps = {
  items: []
};

export default List;
