/**
 *
 * NewPost
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { newPost } from './actions';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid black;
`;

/* eslint-disable react/prefer-stateless-function */
export class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPost: '',
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
      <form onSubmit={this.onSubmit}>
        <Input onChange={this.onChange} type="text" name="newPost" />
        <button>Submit</button>
      </form>
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
