import mutations from '../mutations';
import * as types from '../mutation-types';

describe('mutations', () => {
  it('RECEIVE_MOVIES_SUCCESS sets state.movies to data', () => {
    const data = [{ id: 1 }, { id: 2 }];

    const state = { movies: [] };

    mutations[types.RECEIVE_MOVIES_SUCCESS](state, { data });

    expect(state.movies).toEqual(data);
  });

  it('increment +1 when RECEIVE_MOVIES_SUCCESS was called', () => {
    const state = {
      page: 0,
      movies: []
    };

    mutations[types.RECEIVE_MOVIES_SUCCESS](state, { data: [] });

    expect(state.page).toEqual(1);
  });
});
