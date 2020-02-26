import { recordSaga } from '../../../../store/SagaTestConfig';
import * as api from "../../../apis/repository";
import {
  fetchRepositoriesSuccess,
  fetchRepositoriesFailed,
  fetchRepositoriesRequest
} from "../../redux/action";

import {
  fetchRepositoriesSaga
} from "../../redux/saga";

describe('Repository Saga', () => {
  api.repositories = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch user repositories successfully', async () => {
    const responseData = [{
      "payload": {"login": "onyegood"}
    }]

    api.repositories.mockImplementation(() => responseData);

    const dispatched = await recordSaga(
      fetchRepositoriesSaga,
      responseData
    );
    expect(api.repositories.mock.calls.length).toBe(1);
    expect(dispatched).toContainEqual(fetchRepositoriesSuccess(responseData));
  });

  it('should return an error', async () => {
    const responseData = {
      error: 'Something went wrong!'
    }

    api.repositories.mockImplementation(() => responseData);

    const dispatched = await recordSaga(
      fetchRepositoriesSaga,
      responseData
    );
    expect(api.repositories.mock.calls.length).toBe(1);
    expect(dispatched).not.toContainEqual(fetchRepositoriesFailed(responseData.error));
  });

  it('should return an error', async () => {
    const responseData = [{
      "payload": {"login": "onyegood"}
    }]

    api.repositories.mockImplementation(() => responseData);

    const dispatched = await recordSaga(
      fetchRepositoriesSaga,
      responseData
    );
    expect(api.repositories.mock.calls.length).toBe(1);
    expect(dispatched).not.toContainEqual(fetchRepositoriesRequest(responseData));
  });
});