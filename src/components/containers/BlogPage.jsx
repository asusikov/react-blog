import React from 'react';
import { fromJS, List, Map } from 'immutable';
import styled from 'styled-components';

import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';

import moment from 'moment';

const blogItems = [
  {
    id: 1,
    title: 'Hello, World!',
    author: 'The teacher',
    numberOfLikes: 99,
    createdAt: moment().subtract(7, 'days'),
    updatedAt: moment().subtract(6, 'days'),
    image: {
      src: 'https://static.tildacdn.com/5d8f0d6b-4de8-4527-bd2e-56ea4400c1c9/thinknetica_transparent_grey_with_slogan.png',
      alt: 'Hello, World!',
      width: 300,
      height: 52
    }
  },
  {
    id: 2,
    title: 'The new entry. Part I.',
    author: 'The first learner',
    numberOfLikes: 57,
    createdAt: moment().subtract(2, 'days'),
    updatedAt: moment().subtract(1, 'days'),
    image: {
      src: 'http://teachbase.ru/media/static/images/logo.svg',
      alt: 'The new entry. Part I.',
      width: 300,
      height: 52
    }
  },
  {
    id: 3,
    title: '[WIP] The new entry. Part II.',
    author: 'The first learner',
    createdAt: moment(),
    updatedAt: moment(),
  },
];

const { Component } = React;

class BlogPage extends Component {
  constructor() {
    super(...arguments);
    this.state = { items: fromJS(blogItems) };
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
      <div className={this.props.className}>
        <nav className="blue-grey">
          <div className="nav-wrapper">
            <div className="container">
              <a href="#" className="brand-logo">Awesome React Blog</a>
            </div>
          </div>
        </nav>
        <div className="main container">
          <div className="row">
            <div className="col s8">
              <BlogList items={items} likePost={this.likePost}/>
            </div>
            <div className="col s4">
              <div className="card-panel">
                <PieChart columns={columns} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const StyledBlogPage = styled(BlogPage)`
  .main.container {
    margin-top: 15px;
  }
`;

export default StyledBlogPage;
