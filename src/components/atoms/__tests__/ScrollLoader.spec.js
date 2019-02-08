import { shallowMount } from '@vue/test-utils';
import ScrollLoader from '@atoms/ScrollLoader.vue';

describe('ScrollLoader.vue', () => {
  let intersect;

  global.IntersectionObserver = function(cb) {
    intersect = cb;
    return {
      observe: () => {},
      disconnect: () => {}
    };
  };

  it('renders correctly', () => {
    expect(shallowMount(ScrollLoader).element).toMatchSnapshot();
  });

  it('should call fetchMovies when ScrollLoader is intersecting', () => {
    const fetchMovies = jest.fn();

    shallowMount(ScrollLoader, {
      methods: { fetchMovies },
    });

    intersect([
      { isIntersecting: true }
    ]);
    expect(fetchMovies).toHaveBeenCalled();
  });
});
