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

const Button = styled.button`
  background: ${props => (props.primary ? 'goldenrod' : 'black')};
  color: ${props => (props.primary ? 'white' : 'white')};
  height: 80px;
  width: 200px;
  border-raidus: 4%;
  margin: 10px;
`;
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Link to="/posts/new">
          <Button primary>Click Here to make a new post</Button>
        </Link>
        <Link to="/posts">
          <Button>Click Here to see all posts</Button>
        </Link>
      </div>
    );
  }
}
