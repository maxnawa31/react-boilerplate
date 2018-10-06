/*
 *
 * NewPost reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  NEW_POST,
  NEW_POST_ERROR,
  NEW_POST_SUCCESS,
} from './constants';

export const initialState = fromJS({
  error: true,
  loading: false,
  newPost: '',
});

function newPostReducer(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case NEW_POST:
      return state
        .set('loading', true)
        .set('error', false)
        .set('newPost', action.newPost);
    case NEW_POST_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('newPost', '');
    case NEW_POST_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error)
        .set('newPost', '');
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default newPostReducer;
