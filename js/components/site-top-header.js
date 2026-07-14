class SiteTopHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="main-top-header" style="margin-top:20px;">
      <div class="top-meta-bar">
        <div class="container top-meta-container" >
          <div class="top-meta-left">
            <span class="meta-item" id="current-date-display"><i class="fa-solid fa-clock"></i> Hôm nay là ...</span>
          </div>
          <div class="top-meta-center">
             <a href="#">ĐẢNG - ĐOÀN THỂ</a>
          </div>
          <div class="top-meta-right">
             <a href="#" class="meta-item">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" style="width:16px; border:1px solid #ccc;" alt="VN"> 
                 Tiếng Việt <i class="fa-solid fa-chevron-down" style="font-size:10px;"></i>
             </a>
             <a href="#" class="meta-item"><i class="fa-solid fa-user"></i> my UD-SMP</a>
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
              <li><a href="#">PHÒNG CHỨC NĂNG</a></li>
              <li><a href="#">KHOA</a></li>
              <li><a href="#">BỘ MÔN</a></li>
              <li><a href="#">TRUNG TÂM</a></li>
            </ul>
          </div>
          <div class="middle-right">
             <a href="#" class="meta-item"><i class="fa-solid fa-images"></i> Tài nguyên</a>
             <a href="#" class="meta-item"><i class="fa-solid fa-file-lines"></i> Văn bản - Biểu mẫu</a>
             <a href="#" class="meta-item"><i class="fa-solid fa-calendar-days"></i> Lịch tuần</a>
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
  }

  updateDate() {
    const dateDisplay = this.querySelector("#current-date-display");
    if (dateDisplay) {
      const days = [
        "Chủ Nhật",
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Năm",
        "Thứ Sáu",
        "Thứ Bảy",
      ];
      const now = new Date();
      const dayName = days[now.getDay()];
      const date = now.getDate();
      const month = now.getMonth() + 1;
      const year = now.getFullYear();

      dateDisplay.innerHTML = `<i class="fa-solid fa-clock"></i> Hôm nay là ${dayName}, ${date}/${month}/${year}`;
    }
  }
}
customElements.define("site-top-header", SiteTopHeader);
