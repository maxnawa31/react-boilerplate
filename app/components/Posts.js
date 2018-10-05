import React from 'react';

export const Posts = props => {
  const allPosts = props.posts.map(post => <div>{post.text}</div>);
  return <div>{allPosts}</div>;
};
