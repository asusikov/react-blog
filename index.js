import React from 'react';
import ReactDOM from 'react-dom';

import BlogPage from './components/containers/BlogPage';

const blogItems = [
  {
    id: 1,
    title: 'Hello, World!',
    image: 'https://static.tildacdn.com/5d8f0d6b-4de8-4527-bd2e-56ea4400c1c9/thinknetica_transparent_grey_with_slogan.png',
    alt: 'Hello, World!'
  },
  {
    id: 2,
    title: 'The new entry. Part I.',
    image: 'http://teachbase.ru/media/static/images/logo.svg',
    alt: 'The new entry. Part I.'
  },
  {
    id: 3,
    title: 'The new entry. Part II.',
    image: 'http://teachbase.ru/media/static/images/logo.svg',
    alt: 'The new entry. Part II.'
  },
];

ReactDOM.render(
  <BlogPage items={blogItems} />,
  document.getElementById('root')
);
