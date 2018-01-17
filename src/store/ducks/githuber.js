import { createActions, createReducer } from 'reduxsauce';

/* Types & Creators */

const { Types, Creators } = createActions({
  githuberRequest: ['user'],
  githuberSuccess: ['data', 'repos'],
  githuberFailure: null,
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
  [Types.GITHUBER_REQUEST]: request,
  [Types.GITHUBER_SUCCESS]: success,
  [Types.GITHUBER_FAILURE]: failure,
});
