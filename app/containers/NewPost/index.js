/**
 *
 * NewPost
 *
 */

import React from 'react';
import styled from 'styled-components';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { newPost } from './actions';
import reducer from './reducer';
import saga from './saga';
import { StyledButton } from '../HomePage/index';
const Container = styled.div`
  margin-top: 2%;
  text-align: center;
`;

const Input = styled.input`
  border: 1px solid black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  margin: 0 auto;
`;
const Button = styled.button`
  border: 1px solid black;
  width: 100%;
  margin-top: 2%;
`;
export const StyledLink = styled(Link)`
  margin: 0 auto;
  color: black;
`;

/* eslint-disable react/prefer-stateless-function */
export class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    this.props.newPost(text);
  };
  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <Input
            placeholder="Enter text here"
            onChange={this.onChange}
            type="text"
            name="text"
          />
          <Button>Submit</Button>
        </Form>
        <Link to="/posts">
          <StyledButton allPosts>Click here to see all posts</StyledButton>
        </Link>
      </Container>
    );
  }
}

NewPost.propTypes = {
  newPost: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    newPost: newPostData => dispatch(newPost(newPostData)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'newPost', reducer });
const withSaga = injectSaga({ key: 'newPost', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NewPost);
