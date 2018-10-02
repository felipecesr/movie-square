import * as types from './mutation-types';

export default {
  [types.REQUEST_MOVIES]() {},
  [types.RECEIVE_MOVIES_SUCCESS](state, { data }) {
    state.movies = state.movies.concat(data);
    state.page++;
  },
  [types.REQUEST_MOVIES_ERROR]() {}
};
