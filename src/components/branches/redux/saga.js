import {call, put} from 'redux-saga/effects';
import {fetchBranchesSuccess, fetchBranchesFailed} from './action';
import {branches} from '../../apis/branch';

export function* fetchBranchesSaga(action) {
  try {
    const response = yield call(branches, action);
    yield put(fetchBranchesSuccess(response));
  } catch (errors) {
    yield put(fetchBranchesFailed(errors.response.data.message));
  }
}
