/*
 *
 * AllPostsList reducer
 *
 */
import { fromJS } from 'immutable';
import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  DEFAULT_ACTION,
} from './constants';

export const initialState = fromJS({
  posts: [],
  loading: false,
  error: true,
});

function allPostsListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return state.set('loading', true).set('error', false);
    case LOAD_POSTS_SUCCESS:
      return state
        .set('loading', false)
        .set('posts', action.posts)
        .set('error', false);
    case LOAD_POSTS_ERROR:
      return state.set('loading', false).set('error', action.error);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default allPostsListReducer;
