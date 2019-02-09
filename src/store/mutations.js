import * as types from './mutation-types';

export default {
  [types.REQUEST_MOVIES](state) {
    state.loading = true;
    state.page += 1;
  },
  [types.RECEIVE_MOVIES_SUCCESS](state, { results }) {
    state.movies = [...state.movies, ...results];
    state.loading = false;
  },
  [types.REQUEST_MOVIES_ERROR](state) {
    state.loading = false;
  }
};
