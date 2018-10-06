import { fromJS } from 'immutable';
import newPostReducer from '../reducer';

describe('newPostReducer', () => {
  it('returns the initial state', () => {
    expect(newPostReducer(undefined, {})).toEqual(fromJS({}));
  });
});
