import React from 'react';
import { shallow, mount } from 'enzyme';
import { loadPosts } from '../actions';
import { AllPostsList } from '../index';

describe('<AllPostsList />', () => {
  xit('Expect to have unit tests specified', () => {
    expect(true).toEqual(true);
  });
  xit('should fetch posts on mount', () => {
    const fetchSpy = jest.fn();
    mount(<AllPostsList loadPosts={fetchSpy} loading={false} posts={[1, 2]} />);
    expect(fetchSpy).toHaveBeenCalled();
  });
});
