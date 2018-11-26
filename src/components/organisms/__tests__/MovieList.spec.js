import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import MovieList from '../MovieList.vue';
import MovieItem from '../../molecules/MovieItem.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('MovieList.vue', () => {
  it('renders a MovieItem with data for each item in movies', () => {
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

  it('should call fetchMovies when bottom value change for true', () => {
    const movies = [{}, {}, {}];
    const fetchMovies = jest.fn(() => Promise.resolve());
    const store = new Vuex.Store({
      state: {
        movies
      },
      actions: { fetchMovies }
    });

    const wrapper = shallowMount(MovieList, {
      localVue,
      store
    });

    wrapper.setData({ bottom: true });
    wrapper.setData({ bottom: false });

    expect(fetchMovies).toHaveBeenCalledTimes(2);
  });

  it('should call bottomVisible when page scrolled', () => {});
});
