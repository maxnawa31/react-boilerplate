/*
 *
 * AllPostsList actions
 *
 */

import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  DEFAULT_ACTION,
} from './constants';

export function loadPosts() {
  console.log('inside loadPosts');
  return {
    type: LOAD_POSTS,
  };
}

export function loadPostsSuccess(posts) {
  return {
    type: LOAD_POSTS_SUCCESS,
    posts,
  };
}

export function loadPostsError() {
  return {
    type: LOAD_POSTS_ERROR,
  };
}
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
