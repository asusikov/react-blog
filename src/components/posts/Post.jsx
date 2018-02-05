import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import CardPanel from 'elements/CardPanel';
import Image from 'elements/Image';

const Post = ({ post, className }) => (
  <CardPanel className={className}>
    <div className='meta'>
      <div className="author">{post.author}</div>
      <div>
        {moment(post.createdAt).format('MMMM D, YYYY')}
      </div>
    </div>
    <h3>{post.title}</h3>
    <Image {...post.image}/>
  </CardPanel>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.shape(Image.propTypes),
    title: PropTypes.string,
    author: PropTypes.string,
    createdAt: PropTypes.instanceOf(moment),
    updatedAt: PropTypes.instanceOf(moment)
  }),
  className: PropTypes.string
};

const StyledPost = styled(Post)`
  .meta {
    .author {
      font-weight: bold;
    }
  }
`;

export default StyledPost;
