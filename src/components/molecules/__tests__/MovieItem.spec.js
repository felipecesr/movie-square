import { shallowMount } from '@vue/test-utils';
import config from '@/util/config';
import MovieItem from '@/components/molecules/MovieItem.vue';

describe('MovieItem.vue', () => {
  const createWrapper = item =>
    shallowMount(MovieItem, { propsData: { item } });

  it('renders a link to item.id with item.title as title', () => {
    const item = {
      id: '299536',
      title: 'Avengers: Infinity War'
    };

    const wrapper = createWrapper(item);
    const a = wrapper.find('a');

    expect(a.attributes().href).toBe(item.id);
    expect(a.attributes().title).toBe(item.title);
  });

  it('renders a img with item.poster_path as data-src and item.title as alt', () => {
    const item = {
      title: 'Avengers: Infinity War',
      poster_path: '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg'
    };

    const wrapper = createWrapper(item);
    const img = wrapper.find('img');

    expect(img.attributes('data-src')).toBe(
      config.base_url + config.size + item.poster_path
    );
    expect(img.attributes().alt).toBe(item.title);
  });

  it('renders item.name as a title and alt when item have no a title', () => {
    const item = {
      name: 'The Big Bang Theory'
    };

    const wrapper = createWrapper(item);

    expect(wrapper.find('a').attributes().title).toBe(item.name);
    expect(wrapper.find('img').attributes().alt).toBe(item.name);
  });
});
