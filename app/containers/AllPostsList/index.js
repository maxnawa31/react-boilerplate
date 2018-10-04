/**
 *
 * AllPostsList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAllPostsList from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadPosts } from './actions';
/* eslint-disable react/prefer-stateless-function */
export class AllPostsList extends React.Component {
  componentDidMount() {
    this.props.loadPosts('http://localhost:5000');
  }
  render() {
    return <div />;
  }
}

// AllPostsList.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
  posts: state.posts,
});
function mapDispatchToProps(dispatch) {
  return {
    loadPosts: url => dispatch(loadPosts(url)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'allPostsList', reducer });
const withSaga = injectSaga({ key: 'allPostsList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AllPostsList);
