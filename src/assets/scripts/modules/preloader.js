const images = document.images;
const imagesCount = images.length;
let counter = 0;
const elPreloader = document.querySelector(".preloader");
const numPreloader = elPreloader.querySelector(".preloader__num");

for (let i = 0; i < imagesCount; i++) {
  const imgCopy = new Image();
  imgCopy.onload = imgLoad;
  imgCopy.onerror = imgLoad;
  imgCopy.src = images[i].src;
}

function imgLoad() {
  counter++;
  numPreloader.innerHTML = (((100 / imagesCount) * counter) << 0) + "%";

  if (counter >= imagesCount) {
    setTimeout(function() {
      if (!elPreloader.classList.contains("done")) {
        elPreloader.classList.add("done");
      }
    }, 5000);
  }
}
