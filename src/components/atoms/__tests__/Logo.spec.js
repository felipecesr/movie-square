import { shallowMount } from '@vue/test-utils';
import Logo from '../Logo.vue';

describe('Logo.vue', () => {
  it('renders correctly', () => {
    expect(shallowMount(Logo).element).toMatchSnapshot();
  });
});
