const isIntersecting = (entry) => {
  return entry.isIntersecting; // true dentro de la pantalla
};

const loadImage = (entry) => {
  const container = entry.target; // <div>
  const image = container.firstChild;
  const url = image.dataset.src;
  // Load image
  image.src = url;
  // Unregister
  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (img) => {
  observer.observe(img);
};
