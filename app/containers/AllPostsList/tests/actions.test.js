import { loadPosts, loadPostsError, loadPostsSuccess } from '../actions';
import { LOAD_POSTS, LOAD_POSTS_ERROR, LOAD_POSTS_SUCCESS } from '../constants';

describe('AllPostsList actions', () => {
  it('Should create an action for LOAD_POSTS', () => {
    const expectedAction = { type: LOAD_POSTS };
    expect(loadPosts()).toEqual(expectedAction);
  });

  it('Should create an action for LOAD_POSTS_SUCCESS', () => {
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
    const expectedAction = { type: LOAD_POSTS_SUCCESS, posts: response.data };
    expect(loadPostsSuccess(response.data)).toEqual(expectedAction);
  });

  it('Should create an action for LOAD_POSTS_ERROR', () => {
    const response = new Error('There was an error');
    const expectedAction = { type: LOAD_POSTS_ERROR, error: response };
    expect(loadPostsError(response)).toEqual(expectedAction);
  });
});
