import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the allPostsList state domain
 */

const selectAllPostsListDomain = state =>
  state.get('allPostsList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AllPostsList
 */

const makeSelectAllPostsList = () =>
  createSelector(selectAllPostsListDomain, substate => substate.toJS());

const makeSelectAllPostsListSelector = () =>
  createSelector(selectAllPostsListDomain, substate => substate.get('posts'));

const makeSelectLoadingSelector = () =>
  createSelector(selectAllPostsListDomain, substate => substate.get('loading'));

export default makeSelectAllPostsList;
export {
  selectAllPostsListDomain,
  makeSelectAllPostsListSelector,
  makeSelectLoadingSelector,
};
