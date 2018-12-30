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

  it('should call scroll method when MovieList is mounted', () => {
    const scroll = jest.fn();

    shallowMount(MovieList, {
      methods: { scroll },
      localVue,
      store
    });

    expect(scroll).toHaveBeenCalled();
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

  it('should call callback function when numbers combination are true', () => {
    const wrapper = shallowMount(MovieList, {
      localVue,
      store
    });

    const cb = jest.fn();

    wrapper.vm.bottomOfWindow([1, 2, 3], cb);
    wrapper.vm.bottomOfWindow([4, 5, 6], cb);

    expect(cb).toHaveBeenCalledTimes(1);
  });
});
