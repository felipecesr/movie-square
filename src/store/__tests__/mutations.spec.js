import mutations from '../mutations';
import * as types from '../mutation-types';

describe('mutations', () => {
  it('RECEIVE_MOVIES_SUCCESS sets state.movies to data', () => {
    const data = {
      results: [{ id: 1 }, { id: 2 }]
    };

    const state = { movies: [] };

    mutations[types.RECEIVE_MOVIES_SUCCESS](state, { data });

    expect(state.movies).toEqual(data.results);
  });

  it('increment +1 when RECEIVE_MOVIES_SUCCESS was called', () => {
    const data = {
      page: 1,
      results: [{ id: 1 }, { id: 2 }],
      total_pages: 10
    };

    const state = {
      page: 1,
      movies: [],
      maxPage: null
    };

    mutations[types.RECEIVE_MOVIES_SUCCESS](state, { data });

    expect(state.page).toEqual(2);
  });

  it('RECEIVE_MOVIES_SUCCESS sets state.maxPage to data', () => {
    const data = {
      page: 1,
      results: [{ id: 1 }, { id: 2 }],
      total_pages: 10
    };

    const state = { movies: [] };

    mutations[types.RECEIVE_MOVIES_SUCCESS](state, { data });

    expect(state.maxPage).toEqual(data.total_pages);
  });

  it('do not increment +1 when page > maxPage', () => {
    const state = {
      page: 11,
      movies: [],
      maxPage: 10
    };

    mutations[types.RECEIVE_MOVIES_SUCCESS](state, { data: [] });

    expect(state.page).toEqual(11);
  });
});
