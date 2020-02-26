import { put } from "redux-saga/effects";
import axios from "axios";

import {
  fetchBranchesSuccess,
  fetchBranchesFailed
} from "./action";

export function* fetchBranchesSaga(action) {
  try {
      const response = yield axios.get(`https://api.github.com/repos/${action.payload.userName}/${action.payload.name}/branches`);
      yield put(fetchBranchesSuccess(response.data));
  } catch (errors) {
    yield put(fetchBranchesFailed(errors));
  }
}