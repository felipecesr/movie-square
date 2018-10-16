import { shallowMount } from '@vue/test-utils';
import HomePage from '../HomePage.vue';

describe('HomePage.vue', () => {
  it('renders correctly', () => {
    expect(shallowMount(HomePage).element).toMatchSnapshot();
  });
});
