import { shallowMount } from '@vue/test-utils';
import PageHome from '../PageHome.vue';

describe('PageHome.vue', () => {
  it('renders correctly', () => {
    expect(shallowMount(PageHome).element).toMatchSnapshot();
  });
});
