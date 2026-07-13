class SiteHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="hero">
        <div class="hero-overlay"></div>
        <div class="container hero-content">
            <h1>Khoa Điều Dưỡng - Kỹ Thuật Y Học</h1>
            <p>Trở thành đơn vị tiên phong trong đào tạo, nghiên cứu khoa học và chăm sóc sức khỏe cộng đồng.</p>
        </div>
    </header>
    `;
  }
}

customElements.define("site-hero", SiteHero);
