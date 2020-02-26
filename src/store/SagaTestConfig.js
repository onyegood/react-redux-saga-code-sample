import { runSaga } from 'redux-saga';
import "babel-polyfill"
export async function recordSaga(saga, responseData) {
  const dispatched = [];

  await runSaga(
    {
      dispatch: (action) => dispatched.push(action)
    },
    saga,
    responseData,
  ).done;
  return dispatched;
}