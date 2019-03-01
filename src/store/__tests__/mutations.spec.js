import mutations from '../mutations';
import * as types from '../mutation-types';

describe('mutations', () => {
  it('increment +1 when REQUEST_POPULAR_LIST was called', () => {
    const state = {
      page: 1,
      movies: [],
      maxPage: null
    };

    mutations[types.REQUEST_POPULAR_LIST](state);

    expect(state.page).toEqual(2);
  });

  it('RECEIVE_POPULAR_LIST_SUCCESS sets state.movies to data', () => {
    const data = {
      results: [{}, {}, {}]
    };

    const state = { movies: [] };

    mutations[types.RECEIVE_POPULAR_LIST_SUCCESS](state, data);

    expect(state.movies).toEqual(data.results);
  });
});
