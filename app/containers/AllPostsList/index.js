/**
 *
 * AllPostsList
 *
 */

import React from 'react';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Posts } from '../../components/Posts';
import {
  makeSelectAllPostsListSelector,
  makeSelectLoadingSelector,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadPosts } from './actions';
import { Loader } from '../../components/Loader';
/* eslint-disable react/prefer-stateless-function */
export class AllPostsList extends React.Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    const { loading, posts } = this.props;
    return <div>{loading ? <Loader /> : <Posts posts={posts} />}</div>;
  }
}

AllPostsList.propTypes = {
  loadPosts: PropTypes.func.isRequired,
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectAllPostsListSelector(),
  loading: makeSelectLoadingSelector(),
});

export function mapDispatchToProps(dispatch) {
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
