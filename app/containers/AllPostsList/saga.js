import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { loadPostsError, loadPostsSuccess } from './actions';
import { LOAD_POSTS } from './constants';

function* fetchPostsAsync() {
  try {
    const response = yield axios.get('http://localhost:5000');
    yield put(loadPostsSuccess(response.data));
  } catch (err) {
    yield put(loadPostsError(err));
  }
}

export default function* watchLoadPostsAsync() {
  yield takeLatest(LOAD_POSTS, fetchPostsAsync);
}

// export default function* postsData() {
//   yield takeLatest(LOAD_POSTS, watchLoadPostsAsync);
// }
