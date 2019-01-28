const lazy = {
  bind(el) {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          changeImage(el);
          imageObserver.unobserve(el);
        }
      });
      imageObserver.observe(el);
    }
  }
}

const changeImage = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => image.removeAttribute('data-src');
}

export { lazy, changeImage }
