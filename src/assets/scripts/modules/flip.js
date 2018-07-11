const auth = document.querySelector("#auth-btn");
const back = document.querySelector("#back");
const vis = document.querySelector(".index__content");
const btn = document.querySelector(".auth-btn");

auth.addEventListener("click", toggleClass);
back.addEventListener("click", toggleClass);

function toggleClass(e) {
  e.preventDefault();

  vis.classList.toggle("index__visible");
  btn.style.display = "none";
}
