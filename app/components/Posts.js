import React from 'react';
import uuid from 'uuid'
export const Posts = props => {
  const allPosts = props.posts.map(post => <div key={uuid()}>{post.text}</div>);
  return <div>{allPosts}</div>;
};
