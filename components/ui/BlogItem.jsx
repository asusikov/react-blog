import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import TextBox from './TextBox';
import Image from './Image';
import LikeButton from './LikeButton';

const { Component } = React;

class BlogItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div style={{ marginBottom: '20px' }}>
        <Image {...item.image}/>
        <h3>
          <TextBox>
            {item.title}
            <LikeButton numberOfLikes={item.numberOfLikes}/>
          </TextBox>
          <span style={{ fontSize: '14px', fontWeight: 'lighter' }}>
            Created by {item.author} {moment(item.createdAt).fromNow()}
          </span>
        </h3>
        <span style={{ fontSize: '14px', fontWeight: 'lighter' }}>
          Last updated {moment(item.updatedAt).fromNow()}
        </span>
      </div>
    )
  }
};

BlogItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.shape(Image.propTypes),
    title: PropTypes.string,
    author: PropTypes.string,
    createdAt: PropTypes.instanceOf(moment),
    updatedAt: PropTypes.instanceOf(moment)
  })
}

BlogItem.defaultProps = {
  item: {
    image: {},
    title: 'No Title',
    author: 'No author',
    createdAt: moment(),
    updatedAt: moment()
  }
}

export default BlogItem;
