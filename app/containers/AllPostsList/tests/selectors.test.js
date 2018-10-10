// import { fromJS } from 'immutable';
import { fromJS } from 'immutable';
import {
  makeSelectAllPostsListSelector,
  makeSelectLoadingSelector,
} from '../selectors';

describe('AllPostsList Selectors', () => {
  it('Should filter out the posts from state', () => {
    const postsSelector = makeSelectAllPostsListSelector();
    const allPosts = fromJS([]);
    const mockedState = fromJS({
      posts: allPosts,
    });
    expect(postsSelector(mockedState)).toEqual(allPosts);
  });

  it('Should filter out the loading status from state', () => {
    const loadingSelector = makeSelectLoadingSelector();
    const loading = false;
    const mockedState = fromJS({ loading });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});
