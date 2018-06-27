const hamburger = document.querySelector(".hamburger");
const activeMenu = document.querySelector(".hamburger__menu");
const bodyDoc = document.querySelector(".body");
console.log(bodyDoc);

hamburger.addEventListener("click", function(e) {
  e.preventDefault();

  if (activeMenu.classList.contains("hamburger__menu")) {
    activeMenu.classList.toggle("activeMenu");
  }

  if (activeMenu.classList.contains("activeMenu")) {
    bodyDoc.style.overflow = "hidden";
  }

  if (hamburger.classList.contains("hamburger")) {
    hamburger.classList.toggle("activeMenu");
  }
});
