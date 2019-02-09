import { shallowMount } from '@vue/test-utils';
import ScrollLoader from '@atoms/ScrollLoader.vue';

describe('ScrollLoader.vue', () => {
  let intersect, wrapper, fetchMovies;

  global.IntersectionObserver = function(cb) {
    intersect = cb;
    return {
      observe: () => {},
      disconnect: () => {}
    };
  };

  const createIntersectObject = number => [{
    isIntersecting: true,
    boundingClientRect: { x: number }
  }];

  beforeEach(() => {
    fetchMovies = jest.fn();

    wrapper = shallowMount(ScrollLoader, {
      methods: { fetchMovies },
    });
  });

  it('renders correctly', () => {
    expect(shallowMount(ScrollLoader).element).toMatchSnapshot();
  });

  it('should not call fetchMovies when component is intercepted and list is empty', () => {
    intersect(createIntersectObject(20));
    expect(fetchMovies).not.toHaveBeenCalled();
  });

  it('should call fetchMovies when component is intercepted and list is filled', () => {
    wrapper.vm.prevX = 2875;
    intersect(createIntersectObject(275));
    expect(fetchMovies).toHaveBeenCalled();
  });

  it('prevX should be equal boundingClientRect.x after the component is intercepted', () => {
    const prevX = 320;
    intersect(createIntersectObject(prevX));
    expect(wrapper.vm.prevX).toEqual(prevX);
  });
});
