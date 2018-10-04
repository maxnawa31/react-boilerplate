/*
 *
 * AllPostsList actions
 *
 */

import { LOAD_POSTS, LOAD_POSTS_SUCCESS, LOAD_POSTS_ERROR } from './constants';
import { DEFAULT_ACTION } from './constants';

export function loadPosts(url) {
  console.log(url);
  return {
    type: LOAD_POSTS,
  };
}

export function loadPostsSuccess() {
  return {
    type: LOAD_POSTS_SUCCESS,
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
