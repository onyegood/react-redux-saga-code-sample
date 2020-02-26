import { 
  FETCH_BRANCHES_REQUEST,
  FETCH_BRANCHES_SUCCESS,
  FETCH_BRANCHES_FAILED 
} from "./type";

export const fetchBranchesRequest = payload => {
  return {
      type: FETCH_BRANCHES_REQUEST,
      payload
  }
}
export const fetchBranchesSuccess = payload => {
  return {
      type: FETCH_BRANCHES_SUCCESS,
      payload
  }
}
export const fetchBranchesFailed = payload => {
  return {
      type: FETCH_BRANCHES_FAILED,
      payload
  }
}