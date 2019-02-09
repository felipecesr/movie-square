import mutations from '../mutations';
import * as types from '../mutation-types';

describe('mutations', () => {
  it('increment +1 when REQUEST_MOVIES was called', () => {
    const state = {
      page: 1,
      movies: [],
      maxPage: null
    };

    mutations[types.REQUEST_MOVIES](state);

    expect(state.page).toEqual(2);
  });

  it('RECEIVE_MOVIES_SUCCESS sets state.movies to data', () => {
    const data = {
      results: [{ id: 1 }, { id: 2 }]
    };

    const state = { movies: [] };

    mutations[types.RECEIVE_MOVIES_SUCCESS](state, data);

    expect(state.movies).toEqual(data.results);
  });
});
