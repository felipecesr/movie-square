import * as t from './mutation-types';
import { getPopularList } from '@/services/api/series';
import { normalize } from '../util/utils';

/**
 * POPULAR LIST
 */
export const requestPopularList = ({ commit }) => commit(t.REQUEST_POPULAR_LIST);
export const receivePopularListSuccess = ({ commit }, data) => commit(t.RECEIVE_POPULAR_LIST_SUCCESS, data);
export const receivePopularListError = ({ commit }, error) => commit(t.REQUEST_POPULAR_LIST_ERROR, error);

export const fetchPopularList = async ({ dispatch, state }) => {
  dispatch('requestPopularList');

  const { page } = state;
  const { data } = await getPopularList(page);
  const obj = {
    page,
    results: normalize(data.results)
  }

  try {
    dispatch('receivePopularListSuccess', obj);
  } catch (error) {
    dispatch('receivePopularListError', error);
  }
};

/**
 * DETAILS
 */
export const fetchMovie = async ({ commit, dispatch, state }, id) => {
  if (state.movies.length === 0) {
    await dispatch('fetchMovies');
  }

  commit(t.SET_SELECTED_MOVIE, id);
};

export const setSelectedMovie = ({ commit }, id) => commit(t.SET_SELECTED_MOVIE, id);
