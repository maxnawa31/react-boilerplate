import { fromJS, Iterable } from 'immutable';
import allPostsListReducer, { initialState } from '../reducer';
import { LOAD_POSTS, LOAD_POSTS_SUCCESS, LOAD_POSTS_ERROR } from '../constants';

describe('AllPost Reducer', () => {
  it('Should return the initial state', () => {
    const expectedState = initialState;
    expect(allPostsListReducer(undefined, {})).toEqual(expectedState);
  });

  it('Should handle the LOAD_POST action', () => {
    const expectedState = initialState.set('loading', true).set('error', false);
    expect(allPostsListReducer(initialState, { type: LOAD_POSTS })).toEqual(
      expectedState,
    );
  });

  it('Should handle the LOAD_POSTS_SUCCESS action', () => {
    const response = {
      data: [
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
      ],
    };
    const expectedState = initialState
      .set('loading', false)
      .set('posts', response.data)
      .set('error', false);
    expect(
      allPostsListReducer(initialState, {
        type: LOAD_POSTS_SUCCESS,
        posts: response.data,
      }),
    ).toEqual(expectedState);
  });

  it('Should handle the LOAD_POSTS_ERROR action', () => {
    const error = new Error('This is an error');
    const expectedState = initialState
      .set('loading', false)
      .set('error', error);
    expect(
      allPostsListReducer(initialState, { type: LOAD_POSTS_ERROR, error }),
    ).toEqual(expectedState);
  });
});
