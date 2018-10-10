/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${props => (props.newPost ? 'goldenrod' : 'black')};
  color: ${props => (props.newPost ? 'white' : 'white')};
  height: 80px;
  width: 200px;
  border-raidus: 4%;
  margin: ${props => (props.allPosts ? '10px' : '0 auto')};
`;
/* eslint-disable react/prefer-stateless-function */
const HomePage = props => (
  <div>
    <Link to="/posts/new">
      <StyledButton newPost>Click Here to make a new post</StyledButton>
    </Link>
    <Link to="/posts">
      <StyledButton allPosts>Click Here to see all posts</StyledButton>
    </Link>
  </div>
);
export default HomePage;
