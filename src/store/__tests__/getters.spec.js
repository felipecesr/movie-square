import * as getters from '../getters';

describe('getters', () => {
  it('selectedMovie returns a movie with id equal selectedMovieId', () => {
    const movies = {
      1412: { id: 1412, name: 'Arrow' },
      60735: { id: 60735, name: 'The Flash' }
    };

    const state = {
      movies,
      selectedMovieId: 1412
    };

    const result = getters.selectedMovie(state);
    expect(result).toBe(movies[1412]);
  });
});
