import { call, put } from "redux-saga/effects";
import {
  fetchRepositoriesSuccess,
  fetchRepositoriesFailed
} from "./action";
import { repositories } from "../../apis/repository";


export function* fetchRepositoriesSaga(action) {
  try {
    const response = yield call(repositories, action);
    yield put(fetchRepositoriesSuccess(response));
  } catch (errors) {
    yield put(fetchRepositoriesFailed(errors.response.data.message));
  }
}