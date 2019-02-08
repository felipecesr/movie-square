import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import MovieList from '@organisms/MovieList.vue';
import MovieItem from '@molecules/MovieItem.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('MovieList.vue', () => {
  const movies = [{}, {}, {}];
  const fetchMovies = jest.fn(() => Promise.resolve());
  const store = new Vuex.Store({
    state: {
      movies
    },
    actions: { fetchMovies }
  });

  // clean fetchMovies

  it('should call fetchMovies method when MovieList is mounted', () => {
    const fetchMovies = jest.fn();

    shallowMount(MovieList, {
      methods: { fetchMovies },
      localVue,
      store
    });

    expect(fetchMovies).toHaveBeenCalled();
  });

  it('renders a MovieItem with data for each item in movies', () => {
    const wrapper = shallowMount(MovieList, {
      localVue,
      store
    });
    const MovieItems = wrapper.findAll(MovieItem);

    expect(MovieItems).toHaveLength(movies.length);

    MovieItems.wrappers.forEach((wrapper, index) => {
      expect(wrapper.vm.item).toBe(movies[index]);
    });
  });
});
