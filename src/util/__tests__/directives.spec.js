import { changeImage } from '../directives';

describe('changeImage', () => {
  let image;
  const fileName = 'poster.jpg';

  beforeEach(() => {
    image = document.createElement('img');
    image.setAttribute('data-src', fileName);
  });

  it('should check if image has data-src attr', () => {
    expect(image.getAttribute('data-src')).not.toBeNull();
  });

  it('should get data-src attr value and set in src attr when changeImage is called', () => {
    changeImage(image);
    expect(image.getAttribute('src')).toBe(fileName);
  });

  it('should image data-src attr is null after call changeImage', () => {
    changeImage(image);
    image.onload();
    expect(image.getAttribute('data-src')).toBeNull();
  });
});
