import React, { Component } from 'react';
import { fromJS } from 'immutable';
import request from 'superagent';
import qs from 'qs';

import PostsList from 'components/posts/List';
import PieChart from 'elements/PieChart';
import CardPanel from 'elements/CardPanel';
import SearchForm from 'elements/SearchForm';

import { postsPath } from 'helpers/routes';

class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = { items: fromJS([]) };

    this.likePost = this.likePost.bind(this);
    this.redirectToPosts = this.redirectToPosts.bind(this);
  }
  componentDidMount() {
    this.fetchPosts();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.fetchPosts();
    }
  }
  fetchPosts() {
    request.get(
      `${process.env.API_HOST}/posts${this.props.location.search}`,
      {},
      (err, res) => this.setState({ items: fromJS(res.body) })
    );
  }
  likePost(postId) {
    this.setState(({ items }) => {
      const postIndex = items.findIndex((item) => item.get('id') === postId);
      return {
        items: items.updateIn(
          [postIndex, 'numberOfLikes'],
          0,
          (numberOfLikes) => numberOfLikes + 1
        )
      };
    });
  }
  redirectToPosts(queryParams) {
    this.props.history.push(postsPath(queryParams));
  }
  render() {
    const items = this.state.items.toJS();
    const isItemsPresent = items.length > 0;
    const columns = items.map((item) => [item.title, item.numberOfLikes || 0]);
    const { query } = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true
    });
    return (
      <div className="row">
        <div className="col s8">
          {isItemsPresent ? (
            <PostsList items={items} likePost={this.likePost}/>
          ) : (
            <CardPanel>
              <h3>The list is empty</h3>
              <p>There are no posts { query ? `with title ${query}` : '' }</p>
            </CardPanel>
          )}
        </div>
        <div className="col s4">
          <CardPanel>
            <SearchForm
              query={query}
              redirectToPosts={this.redirectToPosts}
            />
          </CardPanel>
          {isItemsPresent &&
            <CardPanel>
              <PieChart columns={columns} />
            </CardPanel>
          }
        </div>
      </div>
    );
  }
}

export default Index;
