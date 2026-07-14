class SiteHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="container" style="padding-top: 10px;">
        <header class="hero" style="border-radius: 8px; overflow: hidden; height: 400px;">
            <div class="hero-overlay" style="border-radius: 12px;"></div>
            <div class="hero-content">
                <h1>Khoa Điều Dưỡng - Kỹ Thuật Y Học</h1>
                <p>Trở thành đơn vị tiên phong trong đào tạo, nghiên cứu khoa học và chăm sóc sức khỏe cộng đồng.</p>
            </div>
        </header>
    </div>
    `;
  }
}

customElements.define("site-hero", SiteHero);
