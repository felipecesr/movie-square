import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import Logo from '../Logo.vue';

describe('Logo.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Logo, {
      stubs: { RouterLink: RouterLinkStub }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
