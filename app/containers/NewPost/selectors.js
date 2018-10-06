import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the newPost state domain
 */

// const selectNewPostDomain = state => state.get('newPost', initialState);

// export default createSelector(state => state.get('newPost', initialState));

/**
 * Other specific selectors
 */

/**
 * Default selector used by NewPost
 */

// const makeSelectNewPost = () =>
//   createSelector(selectNewPostDomain, substate => substate.get('newPost'));

// export { selectNewPostDomain, makeSelectNewPost };

export const newPostDataSelector = state => state.newPostData;
