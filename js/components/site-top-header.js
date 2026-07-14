import { t, getLang, setLang, getDays } from "../i18n.js";

class SiteTopHeader extends HTMLElement {
  connectedCallback() {
    this.render();
    window.addEventListener("languageChanged", () => this.render());
  }

  render() {
    const lang = getLang();
    this.innerHTML = `
    <header class="main-top-header" style="margin-top:20px;">
      <div class="top-meta-bar">
        <div class="container top-meta-container" >
          <div class="top-meta-left">
            <span class="meta-item" id="current-date-display"><i class="fa-solid fa-clock"></i> ${t('top.today')} ...</span>
          </div>
          <div class="top-meta-center">
             <a href="#">${t('top.party')}</a>
          </div>
          <div class="top-meta-right">
             <select id="lang-selector" style="border:none; background:transparent; font-size:13px; cursor:pointer; outline:none; color:inherit;">
                <option value="vi" ${lang==='vi'?'selected':''}>🇻🇳 Tiếng Việt</option>
                <option value="en" ${lang==='en'?'selected':''}>🇬🇧 English</option>
                <option value="la" ${lang==='la'?'selected':''}>🇱🇦 ພາສາລາວ</option>
             </select>
             <a href="#" class="meta-item"><i class="fa-solid fa-user"></i> ${t('top.user')}</a>
          </div>
        </div>
      </div>
      
      <div class="middle-links-bar" >
        <div class="container middle-links-container" style="margin-bottom:20px;">
          <div class="middle-left">
            <span class="meta-item"><i class="fa-solid fa-phone"></i> (+84) 0236 7 109 357</span>
            <span class="meta-item"><i class="fa-solid fa-envelope"></i> smp@ac.udn.vn</span>
          </div>
          <div class="middle-center">
            <ul class="quick-links">
              <li><a href="#">${t('top.func_rooms')}</a></li>
              <li><a href="#">${t('top.faculty')}</a></li>
              <li><a href="#">${t('top.department')}</a></li>
              <li><a href="#">${t('top.center')}</a></li>
            </ul>
          </div>
          <div class="middle-right">
             <a href="#" class="meta-item"><i class="fa-solid fa-images"></i> ${t('top.resources')}</a>
             <a href="#" class="meta-item"><i class="fa-solid fa-file-lines"></i> ${t('top.docs')}</a>
             <a href="#" class="meta-item"><i class="fa-solid fa-calendar-days"></i> ${t('top.schedule')}</a>
          </div>
        </div>
      </div>

      <div class="logo-bar">
        <div class="container logo-container">
          <a href="#/gioi-thieu" class="logo">
            <img src="./assets/images/logoUD-SMPTOP.png" alt="Logo" class="image">
          </a>
          <div class="social-search-area">
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
            <a href="#"><i class="fa-brands fa-tiktok"></i></a>
            <a href="#"><i class="fa-solid fa-location-dot"></i></a>
            <div class="search-icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
    `;
    this.updateDate();
    
    // Add event listener for language selector
    const selector = this.querySelector('#lang-selector');
    if (selector) {
      selector.addEventListener('change', (e) => {
        setLang(e.target.value);
      });
    }
  }

  updateDate() {
    const dateDisplay = this.querySelector("#current-date-display");
    if (dateDisplay) {
      const days = getDays();
      const now = new Date();
      const dayName = days[now.getDay()];
      const date = now.getDate();
      const month = now.getMonth() + 1;
      const year = now.getFullYear();

      dateDisplay.innerHTML = `<i class="fa-solid fa-clock"></i> ${t('top.today')} ${dayName}, ${date}/${month}/${year}`;
    }
  }
}
customElements.define("site-top-header", SiteTopHeader);
