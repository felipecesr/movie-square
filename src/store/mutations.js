import * as types from './mutation-types';

export default {
  [types.REQUEST_MOVIES](state) {
    state.isLoading = true;
    state.page += 1;
  },
  [types.RECEIVE_MOVIES_SUCCESS](state, { results }) {
    state.movies = { ...state.movies, ...results };
    state.isLoading = false;
  },
  [types.REQUEST_MOVIES_ERROR](state) {
    state.isLoading = false;
  },

  [types.SET_SELECTED_MOVIE](state, id) {
    state.selectedMovieId = id;
  }
};
