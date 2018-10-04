import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  SELECT_POST,
} from './constants';

export function loadPosts(url) {
  console.log('inside LOAD_POSTS action', url);
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

export function selectPost() {
  return {
    type: SELECT_POST,
  };
}
