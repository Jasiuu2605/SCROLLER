class Scroller {
  constructor(rootSelector) {
    const rootElement = document.querySelector(rootSelector);
    this.sections = [...document.querySelectorAll("section")];
    const sectionsArr = [...this.sections];
    const currentSectionIndex = sectionsArr.findIndex(this.isScrolledIntoView);

    this.currentSectionIndex = Math.max(currentSectionIndex, 0);

    this.isThrotled = false;

    
  }

  isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = Math.floor(rect.bottom);

    const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    return isVisible;
  }

  listenScroll = (event) => {
    if (this.isThrotled) {
      return;
    }
    this.isThrotled = true;

    setTimeout(() => {
      this.isThrotled = false;
    }, 1000);

    const direction = event.wheelDelta < 0 ? 1 : -1;

    this.scroll(direction);
  };

  scroll = (direction) => {
    if (direction === 1) {
      const isLastSection =
        this.currentSectionIndex === this.sections.length - 1;
      if (isLastSection) {
        return;
      }
    } else if (direction === -1) {
      const firstSection = this.currentSectionIndex === 0;
      if (firstSection) {
        return;
      }
    }
    this.currentSectionIndex = this.currentSectionIndex + direction;

    this.scrollToCurrentSection();
  };

  scrollToCurrentSection = () => {
    this.sections[this.currentSectionIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
}
