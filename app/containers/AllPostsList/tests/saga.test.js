/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { fetchPostsAsync, watchLoadPostsAsync } from '../saga';
import { loadPostsError, loadPostsSuccess } from '../actions';
import { LOAD_POSTS_ERROR, LOAD_POSTS_SUCCESS, LOAD_POSTS } from '../constants';
// const generator = defaultSaga();

describe('defaultSaga Saga', () => {
  let getDataGenerator;
  beforeEach(() => {
    getDataGenerator = fetchPostsAsync();
    expect(getDataGenerator).toMatchSnapshot();

    const apiCall = getDataGenerator.next().value;
    expect(apiCall).toMatchSnapshot();
  });
  it('should dispatch data if api call is successful', () => {
    const response = {
      data: [
        {
          created_at: '2018-10-06T00:33:39.788Z',
          id: 235,
          text: 'sdfsfs',
        },
        {
          created_at: '2018-10-06T00:36:49.251Z',
          id: 236,
          text: 'sfsdfs',
        },
      ],
    };
    const putDescriptor = getDataGenerator.next(response).value;

    expect(putDescriptor).toMatchSnapshot();
    expect(putDescriptor).toEqual(put(loadPostsSuccess(response.data)));
  });
  it('should call loadPostError if api call is not successful', () => {
    const response = new Error('There was an error');
    const putDescriptor = getDataGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(loadPostsError(response)));
  });
});

describe('watchLoadPostsAsync Saga', () => {
  const loadPostWatcher = watchLoadPostsAsync();
  it('should start task to watch for LOAD_POSTS action', () => {
    const takeLatestDescriptor = loadPostWatcher.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(LOAD_POSTS, fetchPostsAsync),
    );
  });
});
