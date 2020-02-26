import reducer from "../../redux/reducer";
import {
  FETCH_REPOSITORIES_REQUEST,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_FAILED
} from "../../redux/type";

import {repositories} from "../data";

describe('Fetch Github User Repositories', () => {

  it("Should set defualt state", () => {
    const INITIAL = {
      "loading": false, 
      "error": "",
      "repositories": []
    }
  
    const state = reducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(INITIAL);
  });

  it('should set loading to true', () => {

    const action = {
      type: FETCH_REPOSITORIES_REQUEST
    }

    const response = reducer(null, action);

    expect(response).toEqual({ loading: true });
  });

  it('should return an array of user repositories', () => {

    const action = {
      type: FETCH_REPOSITORIES_SUCCESS,
      payload: repositories
    }

    const response = reducer(repositories, action);
    expect(response.repositories).toEqual(repositories);

  });

  it('should set loading to false', () => {

    const action = {
      type: FETCH_REPOSITORIES_FAILED,
      payload: "Not found"
    }

    const response = reducer(null, action);

    expect(response).toEqual({ loading: false, error: "Not found", repositories: [] });
  });
});