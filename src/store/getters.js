export const selectedMovie = state => state.movies.find(movie => movie.id === state.selectedMovieId);
