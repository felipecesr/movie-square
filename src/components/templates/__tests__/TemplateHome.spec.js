import { shallowMount } from '@vue/test-utils';
import TemplateHome from '../TemplateHome.vue';

describe('TemplateHome.vue', () => {
  it('renders correctly', () => {
    expect(shallowMount(TemplateHome).element).toMatchSnapshot();
  });
});
