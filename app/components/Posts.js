import React from 'react';
import uuid from 'uuid';
import styled from 'styled-components';

const StyledOrderedList = styled.ol`
  margin-left: 2%;
`;
export const Posts = props => {
  const filtredPosts = props.posts.filter(post => post.text !== null);
  const postsToRender = filtredPosts.map(post => (
    <li key={uuid()}>{post.text}</li>
  ));

  return <StyledOrderedList>{postsToRender}</StyledOrderedList>;
};
