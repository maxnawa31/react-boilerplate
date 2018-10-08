import React from 'react';
import { shallow, mount } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import { loadPosts } from '../actions';
import { AllPostsList, mapDispatchToProps } from '../index';
import { initialState } from '../reducer';
import { Loader } from '../../../components/Loader';
import { Posts } from '../../../components/Posts';

describe('<AllPostsList/>', () => {
  let wrapper;
  it('has a child Loader component when loading prop is true', () => {
    wrapper = shallow(<AllPostsList loading loadPosts={jest.fn()} />);
    expect(wrapper.find(Loader)).toHaveLength(1);
    expect(wrapper.find(Posts)).toHaveLength(0);
  });

  it('has a child Posts component when loading is false', () => {
    wrapper.setProps({ loading: false });
    expect(wrapper.find(Posts)).toHaveLength(1);
    expect(wrapper.find(Loader)).toHaveLength(0);
  });

  it('Should call props.loadPosts on mount', () => {
    const submitSpy = jest.fn();
    const response = [
      {
        created_at: '2018-10-06T00:33:39.788Z',
        id: 235,
        text: 'sdfsfs',
      },
      {
        created_at: '2018-10-06T00:36:49.251Z',
        id: 236,
        text: 'sfsdfs',
      },
    ];
    mount(
      <AllPostsList loading={false} loadPosts={submitSpy} posts={response} />,
    );
    expect(submitSpy).toHaveBeenCalled();
  });
});

describe('mapDispatchToProps', () => {
  describe('loadPosts', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.loadPosts).toBeDefined();
    });
  });
});
