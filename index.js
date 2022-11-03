document.addEventListener("DOMContentLoaded", function () {
  const scroller = new Scroller("#root");

  document.addEventListener("mousewheel", scroller.listenScroll);
});
