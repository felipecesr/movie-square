import { shallowMount } from '@vue/test-utils';
import HomeTemplate from '../HomeTemplate.vue';

describe('HomeTemplate.vue', () => {
  it('renders correctly', () => {
    expect(shallowMount(HomeTemplate).element).toMatchSnapshot();
  });
});
