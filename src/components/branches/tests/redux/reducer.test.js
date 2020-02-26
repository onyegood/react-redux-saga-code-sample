import reducer from "../../redux/reducer";
import {
FETCH_BRANCHES_REQUEST,
FETCH_BRANCHES_SUCCESS,
FETCH_BRANCHES_FAILED
} from "../../redux/type";

import {branches} from "../data";

describe('Fetch Github User Repositories', () => {

  it("Should set defualt state", () => {
    const INITIAL = {
      "loading": false, 
      "error": "",
      "branches": []
    }
  
    const state = reducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(INITIAL);
  });

  it('should set loading to true', () => {

    const action = {
      type: FETCH_BRANCHES_REQUEST
    }

    const response = reducer(null, action);

    expect(response).toEqual({ loading: true });
  });

  it('should return an array of user repositories', () => {

    const action = {
      type: FETCH_BRANCHES_SUCCESS,
      payload: branches
    }

    const response = reducer(branches, action);
    expect(response.branches).toEqual(branches);

  });

  it('should set loading to false', () => {

    const action = {
      type: FETCH_BRANCHES_FAILED,
      payload: "Not found"
    }

    const response = reducer(null, action);

    expect(response).toEqual({ loading: false, error: "Not found", branches: [] });
  });
});