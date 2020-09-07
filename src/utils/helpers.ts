const observeLazyImages = (): void => {
  const selector = '[data-src]';
  const elements = document.querySelectorAll(selector);

  const loadImage = (img: HTMLImageElement): Promise<void> => {
    return new Promise((resolve, reject) => {
      const src = img.dataset.src;
      const image = new Image();

      image.onload = (): void => {
        img.classList.add('-loaded');
        img.src = src;
        resolve();
      };

      image.onerror = (): void => {
        reject();
      };

      image.src = src;
    });
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadImage(entry.target as HTMLImageElement).then(() => {
          observer.unobserve(entry.target);
          if (entries.length === 1) {
            observer.disconnect();
          }
        });
      }
    });
  });

  const observeElement = (element: Element): void => observer.observe(element);

  elements.forEach(observeElement);
};

export { observeLazyImages };
