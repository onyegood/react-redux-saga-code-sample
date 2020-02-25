import { takeLatest } from "redux-saga/effects";
import { 
  FETCH_POSTS, 
  FETCH_POST, 
  EDIT_POST, 
  CREATE_NEW_POST, 
  DELETE_POST, 
  SEARCH_POST 
} from "../pages/post/redux/type";
import { 
  fetchPostsSaga,
  fetchPostSaga,
  createNewPostSaga,
  editPostSaga,
  deletePostSaga,
  searchPostSaga
} from "../pages/post/redux/saga";

export default function* rootSaga() {
  yield takeLatest(FETCH_POSTS, fetchPostsSaga);
  yield takeLatest(FETCH_POST, fetchPostSaga);
  yield takeLatest(CREATE_NEW_POST, createNewPostSaga);
  yield takeLatest(EDIT_POST, editPostSaga);
  yield takeLatest(DELETE_POST, deletePostSaga);
  yield takeLatest(SEARCH_POST, searchPostSaga);
}