const article = document.querySelectorAll(".blog__article");
const content = document.querySelector(".blog__content");
const itemMenu = document.querySelectorAll(".blog__item");
const wrapMenu = document.querySelector(".blog__nav");
const menu = document.querySelector(".blog__list");
const btn = document.querySelector("#btn");

const TABLET = 768;
let positionArticle = [];
let offsetHeight = 0;
let isAnimation = false;

const _setPositionArticle = function(elements) {
  let position = [];
  Array.from(elements).forEach((item, i) => {
    position[i] = {};
    position[i].item = item;
    position[i].top =
      item.getBoundingClientRect().top - offsetHeight + window.pageYOffset;
    position[i].bottom =
      item.getBoundingClientRect().bottom + window.pageYOffset;
  });
  return position;
};

const _scrollPageFixMenu = function(e) {
  if (window.innerWidth > TABLET) {
    let scroll = window.pageYOffset;
    if (content.getBoundingClientRect().top > 0) {
      wrapMenu.classList.remove("fixed");
    } else {
      wrapMenu.classList.add("fixed");
    }
  }
};

const _clickMenu = function(e) {
  if (!isAnimation) {
    isAnimation = true;
    let element = e.target;
    let currentIndex;
    let currentArticle;
    window.removeEventListener("scroll", _scrollPage);
    removeActiveClass();
    Array.from(itemMenu).forEach((item, index) => {
      if (item === element) {
        currentIndex = index;
      }
    });
    currentArticle = article[currentIndex];
    let toScroll = currentArticle.getBoundingClientRect().top;

    if (detectIE()) {
      window.scrollBy(0, toScroll);
    } else {
      window.scrollBy({ top: toScroll, behavior: "smooth" });
    }

    element.classList.add("active");

    setTimeout(() => {
      isAnimation = false;
      window.addEventListener("scroll", _scrollPage);
    }, 1000);
  }
};

const _scrollPage = function(e) {
  const isVision = function(element, current) {
    let scroll = window.pageYOffset;

    return (
      scroll >= element.top &&
      scroll < element.bottom &&
      !current.classList.contains("active")
    );
  };

  positionArticle.forEach((el, i) => {
    let currentEl = itemMenu[i];
    if (isVision(el, currentEl)) {
      removeActiveClass();
      currentEl.classList.add("active");
    }
  });
};

window.addEventListener("load", init);

function init(e) {
  positionArticle = _setPositionArticle(article);
  window.addEventListener("resize", function() {
    positionArticle = _setPositionArticle(article);
    if (window.innerWidth <= TABLET && wrapMenu.classList.contains("fixed")) {
      wrapMenu.classList.remove("fixed");
    }
  });
  window.addEventListener("scroll", _scrollPageFixMenu);
  console.log(_scrollPageFixMenu);
  menu.addEventListener("click", _clickMenu);
  window.addEventListener("scroll", _scrollPage);
  btn.addEventListener("click", function(e) {
    const el = document.querySelector(".sidebar");
    el.classList.toggle("swap");
  });
}

function removeActiveClass() {
  Array.from(itemMenu)
    .filter(item => {
      return item.classList.contains("active");
    })
    .forEach(item => {
      item.classList.remove("active");
    });
}

function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf("MSIE ");
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }

  var trident = ua.indexOf("Trident/");
  if (trident > 0) {
    var rv = ua.indexOf("rv:");
    return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
  }

  var edge = ua.indexOf("Edge/");
  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
  }

  return false;
}
