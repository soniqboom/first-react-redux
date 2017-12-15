import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import logger from 'redux-logger';

export default function configureStore(initalState) {
    return createStore(
        rootReducer,
        initalState,
        applyMiddleware(thunk, logger)
    );
}
