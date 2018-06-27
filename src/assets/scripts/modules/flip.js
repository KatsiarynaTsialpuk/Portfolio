const auth = document.querySelector("#auth");
const back = document.querySelector("#back");
const vis = document.querySelector(".index__content");

auth.addEventListener("click", toggleClass);
back.addEventListener("click", toggleClass);

function toggleClass(e) {
  e.preventDefault();

  vis.classList.toggle("index__visible");
}
