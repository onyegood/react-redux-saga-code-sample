import { 
  FETCH_REPOSITORIES_REQUEST, 
  FETCH_REPOSITORIES_SUCCESS, 
  FETCH_REPOSITORIES_FAILED 
} from "./type";

export const fetchRepositoriesRequest = payload => {
  return {
      type: FETCH_REPOSITORIES_REQUEST,
      payload
  }
}
export const fetchRepositoriesSuccess = payload => {
  return {
      type: FETCH_REPOSITORIES_SUCCESS,
      payload
  }
}
export const fetchRepositoriesFailed = payload => {
  return {
      type: FETCH_REPOSITORIES_FAILED,
      payload
  }
}