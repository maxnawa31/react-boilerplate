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
import { Posts } from '../../components/Posts';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectAllPostsListSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadPosts } from './actions';
/* eslint-disable react/prefer-stateless-function */
export class AllPostsList extends React.Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    let posts;
    if (Array.isArray(this.props.posts)) {
      posts = this.props.posts;
    }
    return <div>{posts !== undefined ? <Posts posts={posts} /> : ''}</div>;
  }
}

// AllPostsList.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  posts: makeSelectAllPostsListSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: () => dispatch(loadPosts()),
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
