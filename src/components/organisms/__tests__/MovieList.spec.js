import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import MovieList from '@organisms/MovieList.vue';
import MovieItem from '@molecules/MovieItem.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('MovieList.vue', () => {
  const fetchPopularList = jest.fn(() => Promise.resolve());

  function createStore(overrides) {
    const defaultConfig = {
      state: {
        movies: {}
      },
      actions: { fetchPopularList }
    };
    return new Vuex.Store(
      Object.assign(defaultConfig, overrides)
    );
  }

  // clean fetchPopularList

  it('should call fetchPopularList method when MovieList is mounted', () => {
    const fetchPopularList = jest.fn();

    const store = createStore({
      state: {
        movies: {}
      }
    });
    shallowMount(MovieList, {
      methods: { fetchPopularList },
      localVue,
      store
    });

    expect(fetchPopularList).toHaveBeenCalled();
  });

  it('should not call fetchPopularList when movies is not empty', () => {
    const fetchPopularList = jest.fn();

    const store = createStore({
      state: {
        movies: {
          '1': {},
          '2': {},
          '3': {}
        }
      }
    });

    shallowMount(MovieList, {
      methods: { fetchPopularList },
      localVue,
      store
    });

    expect(fetchPopularList).not.toHaveBeenCalled();
  });

  it('renders a MovieItem with data for each item in movies', () => {
    const movies = {
      0: {},
      1: {},
      2: {}
    };

    const store = createStore({
      state: { movies }
    });

    const wrapper = shallowMount(MovieList, {
      localVue,
      store
    });
    const MovieItems = wrapper.findAll(MovieItem);

    expect(MovieItems).toHaveLength(Object.keys(movies).length);

    MovieItems.wrappers.forEach((wrapper, index) => {
      expect(wrapper.vm.item).toBe(movies[index]);
    });
  });
});
