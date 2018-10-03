import React, { Component } from 'react';

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: undefined,
    };
  }
  componentDidMount() {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data =>
        this.setState({
          posts: data,
        }),
      );
  }
  render() {
    return <div />;
  }
}
