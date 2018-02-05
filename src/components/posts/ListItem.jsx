import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CardTitle from 'elements/CardTitle';
import Image from 'elements/Image';
import LikeButton from './LikeButton';
import Link from 'elements/Link';

import { postPath } from 'helpers/routes';

class PostItem extends Component {
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
            <Link to={postPath(item.id)}>
              <CardTitle>
                {item.title}
              </CardTitle>
            </Link>
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

PostItem.propTypes = {
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

PostItem.defaultProps = {
  item: {
    image: {},
    title: 'No Title',
    author: 'No author',
    createdAt: moment(),
    updatedAt: moment()
  }
};

const StyledPostItem = styled(PostItem)`
  .card-content {
    display: flex;
    flex-direction: column;
    .meta-data {
      font-size: 14px;
      font-weight: lighter;
    }
  }

`;

export default StyledPostItem;
