import * as getters from '../getters';

describe('getters', () => {
  it('selectedMovie returns a movie with id equal selectedMovieId', () => {
    const movie1 = { id: 1412, name: 'Arrow' };
    const movie2 = { id: 60735, name: 'The Flash' };

    const state = {
      movies: [movie1, movie2],
      selectedMovieId: movie1.id
    };

    const result = getters.selectedMovie(state);
    expect(result).toBe(movie1);
  });
});
