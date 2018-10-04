import { fromJS } from 'immutable';
import allPostsListReducer from '../reducer';

describe('allPostsListReducer', () => {
  it('returns the initial state', () => {
    expect(allPostsListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
