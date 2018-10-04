import * as types from './mutation-types';

export default {
  [types.REQUEST_MOVIES]() {},
  [types.RECEIVE_MOVIES_SUCCESS](state, { data }) {
    state.movies = state.movies.concat(data.results);
    state.maxPage = data.total_pages;

    if (state.page < state.maxPage) {
      state.page++;
    }
  },
  [types.REQUEST_MOVIES_ERROR]() {}
};
