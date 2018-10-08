import React from 'react';
import { shallow, mount } from 'enzyme';
import { loadPosts } from '../actions';
import { AllPostsList } from '../index';

describe('<AllPostsList />', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(true);
  });
  it('should fetch posts on mount', () => {
    const fetchSpy = jest.fn();
    mount(<AllPostsList loadPosts={fetchSpy} loading={false} posts={[1, 2]} />);
    expect(fetchSpy).toHaveBeenCalled();
  });
});
