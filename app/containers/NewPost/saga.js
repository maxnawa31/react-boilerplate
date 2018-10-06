import {
  take,
  call,
  put,
  takeEvery,
  takeLatest,
  select,
} from 'redux-saga/effects';
import axios from 'axios';
import { newPostSuccess, newPostError, newPost } from './actions';
import { NEW_POST_SUCCESS, NEW_POST, NEW_POST_ERROR } from './constants';
import { newPostDataSelector } from './selectors';
// Individual exports for testing

function* makeNewPostAsync(action) {
  try {
    const postData = action.newPost;
    // yield take(NEW_POST);
    yield call(axios.post, 'http://localhost:5000/', {
      text: postData,
    });
    yield put({ type: NEW_POST_SUCCESS });
  } catch (error) {
    yield put({ type: NEW_POST_ERROR, error });
  }
}

export default function* watchNewPostAsync() {
  yield takeEvery(NEW_POST, makeNewPostAsync);
}
