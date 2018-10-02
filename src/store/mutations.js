import * as types from './mutation-types';

export default {
  [types.REQUEST_MOVIES]() {},
  [types.RECEIVE_MOVIES_SUCCESS](state, { data }) {
    state.movies = data;
  },
  [types.REQUEST_MOVIES_ERROR]() {}
};
