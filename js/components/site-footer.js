import { t } from "../i18n.js";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    url: "https://www.facebook.com/smp.udn.vn",
    icon: "fab fa-facebook-square",
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@truongyduoc.daihocdanang",
    icon: "fab fa-youtube",
  },
  {
    label: "TikTok",
    url: "https://www.tiktok.com/@www.smp.udn.vn",
    icon: "fab fa-tiktok",
  },
  {
    label: "Google Maps",
    url: "https://maps.app.goo.gl/rG6j5GTABoovEP2y8",
    icon: "fas fa-map-marker-alt",
  },
];

function getFooterLinkGroups() {
  return [
    {
      title: t("Đào Tạo"),
      id: "footer-training-title",
      links: [
        { label: t("Chính quy"), href: "#/chuc-nang" },
        { label: t("Liên thông"), href: "#/chuc-nang" },
        { label: t("Liên tục"), href: "#/chuc-nang" },
        { label: t("Sau đại học"), href: "#/chuc-nang" },
      ],
    },
    {
      title: t("KH - CN"),
      id: "footer-science-title",
      links: [
        { label: t("Người học"), href: "#/gioi-thieu" },
        { label: t("Giảng viên"), href: "#/lanh-dao" },
        { label: t("Cán bộ"), href: "#/so-do" },
      ],
    },
    {
      title: t("Hợp Tác"),
      id: "footer-cooperate-title",
      links: [
        { label: t("Quốc tế"), href: "#/gioi-thieu" },
        { label: t("Doanh nghiệp"), href: "#/gioi-thieu" },
        { label: t("Viện - Trường"), href: "#/gioi-thieu" },
      ],
    },
  ];
}

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.7620154040264!2d108.24544147620983!3d15.973799741983493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421836b6e22e3b%3A0xdd738c5d59cdffd6!2sSchool%20of%20medicine%20and%20pharmacy%20%E2%80%93%20The%20university%20of%20danang!5e0!3m2!1sen!2s!4v1735716119014!5m2!1sen!2s";

function renderSocialLinks() {
  return SOCIAL_LINKS.map(
    ({ label, url, icon }) => `
      <a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${label}">
        <i class="${icon}" aria-hidden="true"></i>
      </a>`,
  ).join("");
}

function renderFooterLinkGroups() {
  return getFooterLinkGroups().map(
    ({ title, id, links }) => `
      <nav class="footer-column" aria-labelledby="${id}">
        <h2 id="${id}">${title}</h2>
        <ul>
          ${links.map(({ label, href }) => `<li><a href="${href}">${label}</a></li>`).join("")}
        </ul>
      </nav>`,
  ).join("");
}

function getFooterTemplate() {
  return `
    <footer class="site-footer">
      <div class="footer-brand-bar">
        <div class="container footer-brand-inner">
          <a class="footer-brand" href="#/home" aria-label="Khoa Điều Dưỡng - Kỹ Thuật Y Học">
            <img src="assets/logo/logoUD-SMPBOTTOM.png" alt="Khoa Điều Dưỡng - Kỹ Thuật Y Học">
          </a>

          <div class="footer-actions">
            <nav class="social-links" aria-label="Mạng xã hội">
              ${renderSocialLinks()}
            </nav>
            <a class="contact-button" href="mailto:khoa.dieuduong.ktyh@smp.udn.vn">${t('footer.contact_btn') || "LIÊN HỆ"}</a>
          </div>
        </div>
      </div>

      <div class="footer-main">
        <div class="container footer-grid">
          <section class="footer-column footer-contact" aria-labelledby="footer-contact-title">
            <h2 id="footer-contact-title">${t('footer.contact_title') || "THÔNG TIN LIÊN HỆ"}</h2>
            <p class="school-name">${t('hero.title') || "KHOA ĐIỀU DƯỠNG - KỸ THUẬT Y HỌC"}</p>
            <p class="footer-school-parent">${t('footer.school') || "Trường Y Dược - Đại học Đà Nẵng"}</p>
            <p>Phòng B.303, Trường Y Dược Đại học Đà Nẵng, P. Hòa Quý, Q. Ngũ Hành Sơn, TP. Đà Nẵng</p>
            <p class="footer-contact-row">
              <i class="fas fa-phone" aria-hidden="true"></i>
              <a href="tel:+842367109357">(+84) 02367109357</a>
            </p>
            <p class="footer-contact-row">
              <i class="fas fa-envelope" aria-hidden="true"></i>
              <a href="mailto:khoa.dieuduong.ktyh@smp.udn.vn">khoa.dieuduong.ktyh@smp.udn.vn</a>
            </p>
          </section>

          ${renderFooterLinkGroups()}

          <section class="footer-column footer-map" aria-labelledby="footer-map-title">
            <h2 id="footer-map-title">${t('footer.map_title') || "Đường Đi Đến UD-SMP"}</h2>
            <div class="map-frame">
              <iframe
                title="Bản đồ Trường Y Dược - Đại học Đà Nẵng"
                src="${MAP_EMBED_URL}"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen
              ></iframe>
            </div>
          </section>
        </div>
      </div>

      <div class="footer-copyright">
        <p>${t('footer.copyright') || "BẢN QUYỀN THUỘC VỀ KHOA ĐIỀU DƯỠNG - KỸ THUẬT Y HỌC | TRƯỜNG Y DƯỢC - ĐẠI HỌC ĐÀ NẴNG"}</p>
      </div>

      <button class="back-to-top" type="button" aria-label="Lên đầu trang" title="Lên đầu trang">
        <i class="fas fa-chevron-up" aria-hidden="true"></i>
      </button>
    </footer>`;
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.render();
    window.addEventListener("languageChanged", () => this.render());
  }
  
  render() {
    this.innerHTML = getFooterTemplate();
    this.backToTopButton = this.querySelector(".back-to-top");

    this.handleScroll = () => {
      this.backToTopButton?.classList.toggle("is-visible", window.scrollY > 300);
    };

    this.handleBackToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    this.backToTopButton?.addEventListener("click", this.handleBackToTop);
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.handleScroll();
  }

  disconnectedCallback() {
    this.backToTopButton?.removeEventListener("click", this.handleBackToTop);
    window.removeEventListener("scroll", this.handleScroll);
  }
}

customElements.define("site-footer", SiteFooter);
