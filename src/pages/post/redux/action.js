import { FETCH_POSTS, FETCH_POST, CREATE_NEW_POST, EDIT_POST, DELETE_POST } from "./type";

export const fetchPostsSuccess = payload => {
  return {
      type: FETCH_POSTS,
      payload
  }
}

export const fetchPostSuccess = payload => {
  return {
      type: FETCH_POST,
      payload
  }
}

export const createNewPostSuccess = payload => {
  return {
      type: CREATE_NEW_POST,
      payload
  }
}

export const editPostSuccess = payload => {
  return {
      type: EDIT_POST,
      payload
  }
}

export const deletePostSuccess = payload => {
  return {
      type: DELETE_POST,
      payload
  }
}