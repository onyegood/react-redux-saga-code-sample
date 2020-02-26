import { put } from "redux-saga/effects";
import axios from "axios";

import {
  fetchRepositoriesSuccess,
  fetchRepositoriesFailed
} from "./action";

export function* fetchRepositoriesSaga(action) {
  console.log("action", action);
  try {
    const response = yield axios.get(`https://api.github.com/users/${action.payload}/repos`);
    console.log("response", response);
    yield put(fetchRepositoriesSuccess(response.data));
  } catch (errors) {
    yield put(fetchRepositoriesFailed(errors));
  }
}