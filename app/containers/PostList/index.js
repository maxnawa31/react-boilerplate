import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import saga from './saga';
import { loadPosts } from './actions';

class PostList extends Component {
  componentDidMount() {
    loadPosts('https://localhost:5000');
  }
  render() {
    console.log(this.props);
    return <div />;
  }
}

const mapStateToProps = state => ({
  posts: state,
});

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: url => dispatch(loadPosts(url)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
