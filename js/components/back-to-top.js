export function initBackToTop() {
  const backToTopButton = document.querySelector(".back-to-top");

  if (backToTopButton) {
    const updateBackToTopVisibility = () => {
      backToTopButton.classList.toggle("is-visible", window.scrollY > 300);
    };

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", updateBackToTopVisibility, {
      passive: true,
    });
    updateBackToTopVisibility();
  }
}
