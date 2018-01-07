import React from 'react';

import TextBox from './TextBox';
import Image from './Image';

const { Component } = React;

class BlogItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <Image src={item.image} width={300} height={52} alt={item.alt}/>
        <h3>
          <TextBox>
            {item.title}
          </TextBox>
        </h3>
      </div>
    )
  }
};

export default BlogItem;
