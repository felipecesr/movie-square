import config from '../config';
import { imageHost } from '../filters';

describe('imageHost', () => {
  it('add domain to an image path', () => {
    const file_path = '/image.jpg';

    expect(imageHost(file_path)).toBe(
      config.base_url + config.size + file_path
    );
  });
});
