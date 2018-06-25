const parallaxContainer = document.querySelector(".parallax");
const parallaxLayers = Array.from(parallaxContainer.children);
const moveLayers = e => {
  const initialX = window.innerWidth / 2 - e.pageX;
  const initialY = window.innerHeight / 2 - e.pageY;

  parallaxLayers.forEach((layer, i) => {
    const divider = i / 100;
    const positionX = initialX * divider;
    const positionY = initialY * divider;
    const bottomPosition = (window.innerHeight / 2) * divider;
    const rightPosition = (window.innerWidth / 2) * divider;
    const leftPosition = (window.innerWidth / 2) * divider;
    const img = layer.firstElementChild;

    img.style.bottom = `-${bottomPosition}px`;
    img.style.right = `-${rightPosition}px`;
    // img.style.left = `-${rightPosition}px`;
    layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
  });
};

window.addEventListener("mousemove", moveLayers);
