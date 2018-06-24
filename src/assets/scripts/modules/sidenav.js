const hamburger = document.querySelector(".hamburger");
const activeMenu = document.querySelector(".hamburger__menu");

hamburger.addEventListener("click", function(e) {
  e.preventDefault();

  if (activeMenu.classList.contains("hamburger__menu")) {
    activeMenu.classList.toggle("activeMenu");
  }

  if (hamburger.classList.contains("hamburger")) {
    hamburger.classList.toggle("activeMenu");
  }
});
