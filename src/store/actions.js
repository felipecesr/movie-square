import * as types from './mutation-types';
import { fetchListData } from '@/services/api';

export const requestMovies = ({ commit }) => commit(types.REQUEST_MOVIES);
export const receiveMoviesSuccess = ({ commit }, data) => commit(types.RECEIVE_MOVIES_SUCCESS, data);
export const receiveMoviesError = ({ commit }, error) => commit(types.REQUEST_MOVIES_ERROR, error);

export const fetchMovies = ({ dispatch, state }) => {
  dispatch('requestMovies');

  if (!state.maxPage || state.page <= state.maxPage) {
    fetchListData(state)
      .then(data => dispatch('receiveMoviesSuccess', { data }))
      .catch(error => dispatch('receiveMoviesError', error));
  }
};
