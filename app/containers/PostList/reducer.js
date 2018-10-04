import { LOAD_POSTS, LOAD_POSTS_SUCCESS, LOAD_POSTS_ERROR } from './constants';

export const initialState = {
  posts: ['hello'],
  loading: false,
  error: true,
};

export default function mainPageReducer(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case LOAD_POSTS:
      console.log('inside posts');
      return state.set('loading', true).set('error', false);
    case LOAD_POSTS_SUCCESS:
      return state
        .set('loading', false)
        .set('posts', action.posts)
        .set('error', false);
    case LOAD_POSTS_ERROR:
      return state.set('loading', false).set('error', action.error);
    default:
      console.log('hello from default');
      return state;
  }
}
