import { shallowMount } from '@vue/test-utils';
import PageHeader from '../PageHeader.vue';

describe('PageHeader.vue', () => {
  it('renders correctly', () => {
    expect(shallowMount(PageHeader).element).toMatchSnapshot();
  });
});
