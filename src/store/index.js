import { combineReducers } from 'redux';

/* Reducers */
import { reducer as huber } from './ducks/huber';


import configureStore from './configureStore';
import rootSaga from './sagas';

const rootReducer = combineReducers({
  huber,
});

const store = configureStore(rootReducer, rootSaga);

export default store;

