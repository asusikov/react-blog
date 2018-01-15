import React from 'react';
import { fromJS, List, Map } from 'immutable';

import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';

const { Component } = React;

class BlogPage extends Component {
  constructor(props) {
    super(...arguments);
    this.state = { items: fromJS(props.items) };
    this.likePost = this.likePost.bind(this);
  }
  likePost(postId) {
    this.setState(({ items }) => {
      const postIndex = items.findIndex((item) => item.get('id') === postId);
      return {
        items: items.updateIn([postIndex, 'numberOfLikes'], 0, (numberOfLikes) => numberOfLikes + 1)
      };
    });
  }
  render() {
    const items = this.state.items.toJS();
    const columns = items.map((item) => [item.title, item.numberOfLikes || 0]);
    return (
      <div>
        <h1>Awesome React Blog!</h1>
        <BlogList items={items} likePost={this.likePost}/>
        <PieChart columns={columns} />
      </div>
    );
  }
}

export default BlogPage;
