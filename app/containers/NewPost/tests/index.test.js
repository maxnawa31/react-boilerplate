import React from 'react';
import NewPost from '../index';
import renderer from 'react-test-renderer';

describe('<NewPost/>', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<NewPost />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
