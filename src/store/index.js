import { combineReducers } from 'redux';

/* Reducers */
import { reducer as hubers } from './ducks/hubers';
import { reducer as githuber } from './ducks/githuber';


import configureStore from './configureStore';
import rootSaga from './sagas';

const rootReducer = combineReducers({
  hubers,
  githuber,
});

const store = configureStore(rootReducer, rootSaga);

export default store;

