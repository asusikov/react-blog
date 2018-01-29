import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TextBox from './TextBox';
import Image from './Image';
import LikeButton from './LikeButton';

const { Component } = React;

class BlogItem extends Component {
  constructor() {
    super(...arguments);
    this.likePost = this.likePost.bind(this);
  }
  likePost() {
    this.props.likePost(this.props.item.id);
  }
  render() {
    const { className, item } = this.props;
    return (
      <div className={`card horizontal ${className}`}>
        <Image {...item.image}/>
        <div className="card-stacked">
          <div className="card-content">
            <TextBox>
              {item.title}
            </TextBox>
            <LikeButton
              numberOfLikes={item.numberOfLikes}
              likePost={this.likePost}
            />
            <span className="meta-data">
              Created by {item.author} {moment(item.createdAt).fromNow()}
            </span>
            <span className="meta-data">
              Last updated {moment(item.updatedAt).fromNow()}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

BlogItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.shape(Image.propTypes),
    title: PropTypes.string,
    author: PropTypes.string,
    createdAt: PropTypes.instanceOf(moment),
    updatedAt: PropTypes.instanceOf(moment)
  }),
  likePost: PropTypes.func.isRequired,
  className: PropTypes.string,
};

BlogItem.defaultProps = {
  item: {
    image: {},
    title: 'No Title',
    author: 'No author',
    createdAt: moment(),
    updatedAt: moment()
  }
};

const StyledBlogItem = styled(BlogItem)`
  .card-content {
    display: flex;
    flex-direction: column;
    .meta-data {
      font-size: 14px;
      font-weight: lighter;
    }
  }

`;

export default StyledBlogItem;
