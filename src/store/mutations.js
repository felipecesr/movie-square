import * as t from './mutation-types';

export default {
  [t.REQUEST_POPULAR_LIST](state) {
    state.isLoading = true;
    state.page += 1;
  },
  [t.RECEIVE_POPULAR_LIST_SUCCESS](state, { results }) {
    state.movies = { ...state.movies, ...results };
    state.isLoading = false;
  },
  [t.REQUEST_POPULAR_LIST_ERROR](state) {
    state.isLoading = false;
  },

  [t.SET_SELECTED_MOVIE](state, id) {
    state.selectedMovieId = id;
  }
};
