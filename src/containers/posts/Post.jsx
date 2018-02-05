import React, { Component } from 'react';
import PostComponent from 'components/posts/Post';

import request from 'superagent';

class Post extends Component {
  constructor() {
    super(...arguments);
    this.state = { item: {} };
  }
  componentDidMount() {
    this.fetchPost();
  }
  fetchPost() {
    const postId = this.props.match.params.id;
    request.get(
      `${process.env.API_HOST}/posts/${postId}`,
      {},
      (err, res) => this.setState({ item: res.body })
    );
  }
  render() {
    const { item } = this.state;
    return (
      <div className="row">
        <div className="col s12">
          {item ? (
            <PostComponent post={item}/>
          ) : (
            <h3>The data is loading...</h3>
          )}
        </div>
      </div>
    );
  }
}

export default Post;
