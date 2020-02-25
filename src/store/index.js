import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import {logger} from "redux-logger";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    // applyMiddleware(sagaMiddleware)//Production
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger))//Dev Environment
);

sagaMiddleware.run(rootSaga);