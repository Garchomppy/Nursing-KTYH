class SiteNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar">
        <div class="container nav-container">
            <ul class="nav-links">
                <li><a href="#/gioi-thieu">Giới thiệu chung</a></li>
                <li><a href="#/chuc-nang">Chức năng - Nhiệm vụ</a></li>
                <li><a href="#/so-do">Cơ cấu tổ chức</a></li>
                <li><a href="#/lanh-dao">Ban lãnh đạo</a></li>
                <li><a href="#/lien-he">Liên hệ</a></li>
            </ul>
        </div>
    </nav>
    `;
  }
}

customElements.define("site-navbar", SiteNavbar);
