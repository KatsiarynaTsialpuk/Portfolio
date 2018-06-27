const blur = (function blur() {
  const wrapper = document.querySelector(".reviews__form-container");
  const form = document.querySelector(".modal-form__bg");

  return {
    set: function() {
      const posLeft = -wrapper.offsetLeft;
      const posTop = -wrapper.offsetTop;
      const blurCss = form.style;

      blurCss.backgroundPosition = `${posLeft}px ${posTop}px`;
    }
  };
})();

blur.set();

window.onresize = function() {
  blur.set();
};
