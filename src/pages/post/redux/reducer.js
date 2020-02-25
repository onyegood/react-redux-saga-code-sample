import {
  FETCH_POSTS,
  FETCH_POST,
  DELETE_POST,
  EDIT_POST,
  CREATE_NEW_POST,
  SEARCH_POST
} from "./type";

const INITIAL_STATE = {
  posts: [],
  post: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_NEW_POST:
      return {
        ...state,
        posts: [...state.posts.concat(action.payload.post)],
      };
    case EDIT_POST:
      return {
        posts: [
          ...state.posts.map(post => {
            if (post._id === action.payload.post._id) {
              return {
                ...post,
                ...action.payload.post,
              };
            } else {
              return post;
            }
          }),
        ],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: [
          ...state.posts.filter(
            post => post._id !== action.payload.post._id
          ),
        ],
      };
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
      };
    case FETCH_POST:
      return {
        ...state,
        post: action.payload.post,
      };
    case SEARCH_POST:
      return {
        ...state,
        posts: action.payload.posts,
      };
    default:
      return state;
  }
};
