import {
  fetchRepositoriesRequest,
  fetchRepositoriesSuccess,
  fetchRepositoriesFailed
} from "../../redux/action";

import {
  FETCH_REPOSITORIES_REQUEST,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_FAILED
} from "../../redux/type";
import { repositories } from "../data";

  describe('Testing Github Users Fetch Repositories Actions', () => {
    it('should initiate request', () => {
      const wrapper = fetchRepositoriesRequest(repositories[0].owner.login);
      expect(wrapper).toEqual({
        type: FETCH_REPOSITORIES_REQUEST,
        payload: repositories[0].owner.login
      })
    });
    it('should call userLoginSuccess method and log valid user in', () => {
      const wrapper = fetchRepositoriesSuccess(repositories);
      expect(wrapper).toEqual({
        type: FETCH_REPOSITORIES_SUCCESS,
        payload: repositories
      })
    });

    it('should userLoginFailed mathod and return error message', () => {
      const wrapper = fetchRepositoriesFailed({error: "User not found"});
      expect(wrapper).toEqual({
        type: FETCH_REPOSITORIES_FAILED,
        payload: {error: "User not found"}
      });
    });
  });