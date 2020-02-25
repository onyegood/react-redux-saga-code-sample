import { put } from "redux-saga/effects";
import axios from "axios";

import {
  fetchPostSuccess, 
  fetchPostsSuccess, 
  createNewPostSuccess, 
  editPostSuccess, 
  deletePostSuccess
} from "./action";

export function* fetchPostsSaga(action) {
  try {
      const response = yield axios.get("https://jsonplaceholder.typicode.com/posts");

      yield put(fetchPostsSuccess(response.data));
  } catch (errors) {
      // yield put(displayMessage({ success: false, message: errors.message }));
      console.log("Error", errors);
  }
}

export function* fetchPostSaga(action) {
  try {
    const response = yield axios.get("https://jsonplaceholder.typicode.com/posts");

    yield put(fetchPostSuccess(response.data));
  } catch (errors) {
    console.log("Error", errors);
  }
}

export function* createNewPostSaga(action) {
  try {
    const response = yield axios.get("https://jsonplaceholder.typicode.com/posts");

    yield put(createNewPostSuccess(response.data));
  } catch (errors) {
    console.log("Error", errors);
  }
}

export function* editPostSaga(action) {
  try {
    const response = yield axios.get("https://jsonplaceholder.typicode.com/posts");

    yield put(editPostSuccess(response.data));
  } catch (errors) {
    console.log("Error", errors);
  }
}

export function* deletePostSaga(action) {
  try {
    const response = yield axios.get("https://jsonplaceholder.typicode.com/posts");

    yield put(deletePostSuccess(response.data));
  } catch (errors) {
    console.log("Error", errors);
  }
}

export function* searchPostSaga(action) {
  try {
    const response = yield axios.get("https://jsonplaceholder.typicode.com/posts");

    yield put(fetchPostsSuccess(response.data));
  } catch (errors) {
    console.log("Error", errors);
  }
}