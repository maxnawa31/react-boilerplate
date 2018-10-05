import { put, takeEvery, all, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_POSTS, LOAD_POSTS_SUCCESS } from './constants';

export function* fetchPostsAsync() {
  console.log('inside fetch');
  const response = yield axios.get('http://localhost:5000');
  yield put({ type: LOAD_POSTS_SUCCESS, posts: response.data });
}

export default function* watchLoadPostsAsync() {
  console.log('inside watchload');
  yield takeEvery(LOAD_POSTS, fetchPostsAsync);
}

// export default function* postsData() {
//   yield takeLatest(LOAD_POSTS, watchLoadPostsAsync);
// }
