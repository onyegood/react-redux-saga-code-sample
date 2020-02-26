import {
  fetchBranchesRequest,
  fetchBranchesSuccess,
  fetchBranchesFailed
} from "../../redux/action";

import {
  FETCH_BRANCHES_REQUEST,
  FETCH_BRANCHES_SUCCESS,
  FETCH_BRANCHES_FAILED
} from "../../redux/type";
import { repositories } from "../../../repositories/tests/data";

  describe('Testing Github Users Fetch Repositories Actions', () => {
    it('should initiate request', () => {
      const wrapper = fetchBranchesRequest(repositories[0].owner.login);
      expect(wrapper).toEqual({
        type: FETCH_BRANCHES_REQUEST,
        payload: repositories[0].owner.login
      })
    });
    it('should call userLoginSuccess method and log valid user in', () => {
      const wrapper = fetchBranchesSuccess(repositories);
      expect(wrapper).toEqual({
        type: FETCH_BRANCHES_SUCCESS,
        payload: repositories
      })
    });

    it('should userLoginFailed mathod and return error message', () => {
      const wrapper = fetchBranchesFailed({error: "User not found"});
      expect(wrapper).toEqual({
        type: FETCH_BRANCHES_FAILED,
        payload: {error: "User not found"}
      });
    });
  });