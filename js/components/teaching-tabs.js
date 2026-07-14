class TeachingTabs extends HTMLElement {
  connectedCallback() {
    this.tabs = [...this.querySelectorAll('[role="tab"]')];
    this.panels = [...this.querySelectorAll('[role="tabpanel"]')];

    this.tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => this.activateTab(index));
      tab.addEventListener("keydown", (event) => this.handleKeydown(event, index));
    });
  }

  activateTab(index, { focus = false } = {}) {
    this.tabs.forEach((tab, tabIndex) => {
      const isActive = tabIndex === index;
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
      this.panels[tabIndex].hidden = !isActive;
    });

    if (focus) {
      this.tabs[index].focus();
    }
  }

  handleKeydown(event, currentIndex) {
    const lastIndex = this.tabs.length - 1;
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    if (event.key === "ArrowLeft") nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = lastIndex;

    if (nextIndex !== currentIndex) {
      event.preventDefault();
      this.activateTab(nextIndex, { focus: true });
    }
  }
}

if (!customElements.get("teaching-tabs")) {
  customElements.define("teaching-tabs", TeachingTabs);
}
