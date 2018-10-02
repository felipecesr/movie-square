import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import MovieList from '../MovieList.vue';
import MovieItem from '../../molecules/MovieItem.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('MovieList.vue', () => {
  it('renders an MovieItem with data for each item in movies', () => {
    const movies = [{}, {}, {}];

    const store = new Vuex.Store({
      state: {
        movies
      },
      actions: {
        fetchMovies: jest.fn(() => Promise.resolve())
      }
    });

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
