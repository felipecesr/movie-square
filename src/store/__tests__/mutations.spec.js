import mutations from '../mutations';
import * as types from '../mutation-types';

describe('mutations', () => {
  it('RECEIVE_MOVIES_SUCCESS sets state.movies to data', () => {
    const data = [{ id: 1 }, { id: 2 }];

    const state = [];

    mutations[types.RECEIVE_MOVIES_SUCCESS](state, { data });

    expect(state.movies).toBe(data);
  });
});
