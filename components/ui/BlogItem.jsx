import React from 'react';
import moment from 'moment';

import TextBox from './TextBox';
import Image from './Image';
import LikeButton from './LikeButton';

const { Component } = React;

class BlogItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div style={{ marginBottom: '20px' }}>
        <Image src={item.image} width={300} height={52} alt={item.alt}/>
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

export default BlogItem;
