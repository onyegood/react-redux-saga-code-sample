import { takeLatest } from "redux-saga/effects";
import { 
  FETCH_REPOSITORIES_REQUEST
} from "../components/repositories/redux/type";
import { 
  fetchRepositoriesSaga
} from "../components/repositories/redux/saga";

import { 
  FETCH_BRANCHES_REQUEST
  } from "../components/branches/redux/type";
  import { 
    fetchBranchesSaga
  } from "../components/branches/redux/saga";

export default function* rootSaga() {
  yield takeLatest(FETCH_REPOSITORIES_REQUEST, fetchRepositoriesSaga);
  yield takeLatest(FETCH_BRANCHES_REQUEST, fetchBranchesSaga);
}