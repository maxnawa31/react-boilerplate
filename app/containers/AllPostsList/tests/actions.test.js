import {
  defaultAction,
  loadPosts,
  loadPostsError,
  loadPostsSuccess,
} from '../actions';
import {
  DEFAULT_ACTION,
  LOAD_POSTS,
  LOAD_POSTS_ERROR,
  LOAD_POSTS_SUCCESS,
} from '../constants';

describe('AllPostsList actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
  describe('loadPosts', () => {
    it('fires off a LOAD_POST action', () => {
      const expected = {
        type: LOAD_POSTS,
      };
      expect(loadPosts()).toEqual(expected);
    });
  });
});
