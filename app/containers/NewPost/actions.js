/*
 *
 * NewPost actions
 *
 */

import {
  NEW_POST,
  NEW_POST_SUCCESS,
  NEW_POST_ERROR,
  DEFAULT_ACTION,
} from './constants';

export function newPost(newPostData) {
  return {
    type: NEW_POST,
    newPost: newPostData,
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function newPostSuccess() {
  return {
    type: NEW_POST_SUCCESS,
  };
}

export function newPostError() {
  return {
    type: NEW_POST_ERROR,
  };
}
