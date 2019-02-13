import * as types from './mutation-types';
import { getAll } from '@/services/movieService';

/**
 * MOVIE
 */
export const requestMovies = ({ commit }) => commit(types.REQUEST_MOVIES);
export const receiveMoviesSuccess = ({ commit }, data) =>
  commit(types.RECEIVE_MOVIES_SUCCESS, data);
export const receiveMoviesError = ({ commit }, error) =>
  commit(types.REQUEST_MOVIES_ERROR, error);

export const fetchMovies = async ({ dispatch, state }) => {
  dispatch('requestMovies');

  const { page } = state;
  const data = await getAll(page);

  try {
    dispatch('receiveMoviesSuccess', data);
  } catch (error) {
    dispatch('receiveMoviesError', error);
  }
};

export const fetchMovie = async ({ commit, dispatch, state }, id) => {
  if (state.movies.length === 0) {
    await dispatch('fetchMovies');
  }

  commit(types.SET_SELECTED_MOVIE, id);
};

export const setSelectedMovie = ({ commit }, id) =>
  commit(types.SET_SELECTED_MOVIE, id);
