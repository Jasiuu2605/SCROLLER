document.addEventListener("DOMContentLoaded", function () {
  const scroller = new Scroller("#root");

  document.addEventListener("wheel", (event) => scroller.listenScroll(event));

  document.addEventListener("swipeUp", () => {
    scroller.scroll(1);
  });
  document.addEventListener("swipeDown", () => {
    scroller.scroll(-1);
  });
  document.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
      case 40:
        return scroller.scroll(1);
      case 38:
        return scroller.scroll(-1);

      default:
        return;
    }
  });
});
