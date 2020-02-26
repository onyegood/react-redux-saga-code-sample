import {
FETCH_REPOSITORIES_REQUEST,
FETCH_REPOSITORIES_SUCCESS,
FETCH_REPOSITORIES_FAILED
} from "./type";

const INITIAL_STATE = {
  repositories: [],
  loading: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REPOSITORIES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        repositories: action.payload,
      };
    case FETCH_REPOSITORIES_FAILED:
        return {
          ...state,
          loading: false,
          repositories: [],
          error: action.payload
        };
    default:
      return state;
  }
};
