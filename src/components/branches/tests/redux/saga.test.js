import { recordSaga } from '../../../../store/SagaTestConfig';
import * as api from "../../../apis/branch";
import {
  fetchBranchesFailed,
  fetchBranchesSuccess,
  fetchBranchesRequest
} from "../../redux/action";

import {
  fetchBranchesSaga
} from "../../redux/saga";

describe('Branch Saga', () => {
  api.branches = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch user branches successfully', async () => {
    const responseData = [{
      "payload": {
        "login": "onyegood",
        "name": "master"
      }
    }]

    api.branches.mockImplementation(() => responseData);

    const dispatched = await recordSaga(
      fetchBranchesSaga,
      responseData
    );
    expect(api.branches.mock.calls.length).toBe(1);
    expect(dispatched).toContainEqual(fetchBranchesSuccess(responseData));
  });

  it('should return an error', async () => {
    const responseData = {
      error: 'Something went wrong!'
    }

    api.branches.mockImplementation(() => responseData);

    const dispatched = await recordSaga(
      fetchBranchesSaga,
      responseData
    );
    expect(api.branches.mock.calls.length).toBe(1);
    expect(dispatched).not.toContainEqual(fetchBranchesFailed(responseData.error));
  });

  it('should return an error', async () => {
    const responseData = [{
      "payload": {
        "login": "onyegood",
        "name": "master"
      }
    }]

    api.branches.mockImplementation(() => responseData);

    const dispatched = await recordSaga(
      fetchBranchesSaga,
      responseData
    );
    expect(api.branches.mock.calls.length).toBe(1);
    expect(dispatched).not.toContainEqual(fetchBranchesRequest(responseData));
  });
});