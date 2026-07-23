import { t } from "../i18n.js";

class SiteNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
    window.addEventListener("languageChanged", () => this.render());
  }

  render() {
    this.innerHTML = `
    <nav class="navbar">
        <div class="nav-overlay">
            <div class="nav-close"><i class="fa-solid fa-xmark"></i></div>
        </div>
        <div class="container nav-container">
            <ul class="nav-links">
                <li><a href="#/gioi-thieu">${t('nav.about')}</a></li>
                <li><a href="#/chuc-nang">${t('nav.functions')}</a></li>
                <li><a href="#/so-do">${t('nav.org')}</a></li>
                <li><a href="#/lanh-dao">${t('nav.leadership')}</a></li>
                <li><a href="#/giang-vien">${t('nav.lecturers')}</a></li>
                <li><a href="#/lien-he">${t('nav.contact')}</a></li>
            </ul>
        </div>
    </nav>
    `;
  }
}

customElements.define("site-navbar", SiteNavbar);
