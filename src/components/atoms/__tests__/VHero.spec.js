import { shallowMount } from '@vue/test-utils';
import VHero from '@/components/atoms/VHero.vue';

describe('VHero.vue', () => {
  const props = {
    alt: '299536',
    src: 'Avengers: Infinity War'
  };

  const wrapper = shallowMount(VHero, { propsData: props });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('img atrrs should be equal props', () => {
    expect(wrapper.props().src).toBe(props.src);
    expect(wrapper.props().alt).toBe(props.alt);
  });
});
