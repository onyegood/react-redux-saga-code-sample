import {
  FETCH_BRANCHES_REQUEST,
  FETCH_BRANCHES_SUCCESS,
  FETCH_BRANCHES_FAILED,
} from './type';

const INITIAL_STATE = {
  branches: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BRANCHES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_BRANCHES_SUCCESS:
      return {
        ...state,
        branches: action.payload,
        loading: false
      };
    case FETCH_BRANCHES_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
