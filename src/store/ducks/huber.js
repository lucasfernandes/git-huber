import { createActions, createReducer } from 'reduxsauce';

/* Types & Creators */

const { Types, Creators } = createActions({
  huberRequest: ['user'],
  huberSuccess: ['data', 'repos'],
  huberFailure: null,
});

export { Types };
export default Creators;

/* Initial State */
const INITIAL_STATE = {
  data: null,
  repos: [],
  loading: false,
  error: false,
};

/* Reducers */

export const request = state => ({
  ...state,
  loading: true,
});

export const success = (state, action) => ({
  ...state,
  data: action.data,
  repos: action.repos,
  loading: false,
  error: false,
});

export const failure = () => ({
  data: null,
  repos: [],
  loading: false,
  error: true,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.HUBER_REQUEST]: request,
  [Types.HUBER_SUCCESS]: success,
  [Types.HUBER_FAILURE]: failure,
});
