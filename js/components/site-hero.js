import { t } from "../i18n.js";

class SiteHero extends HTMLElement {
  connectedCallback() {
    this.render();
    window.addEventListener("languageChanged", () => this.render());
  }

  render() {
    this.innerHTML = `
    <div class="container" style="padding-top: 10px;">
        <header class="hero" style="border-radius: 8px; overflow: hidden; height: 400px;">
            <div class="hero-overlay" style="border-radius: 12px;"></div>
            <div class="hero-content">
                <h1>${t('hero.title')}</h1>
                <p>${t('hero.desc')}</p>
            </div>
        </header>
    </div>
    `;
  }
}

customElements.define("site-hero", SiteHero);
