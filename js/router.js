import { home } from './pages/home.js';
import { gioiThieu } from './pages/gioi-thieu.js';
import { chucNang } from './pages/chuc-nang.js';
import { soDo } from './pages/so-do.js';
import { lanhDao } from './pages/lanh-dao.js';
import { lienHe } from './pages/lien-he.js';
import { initBackToTop } from './components/back-to-top.js';

const pages = {
  home: home,
  "gioi-thieu": gioiThieu,
  "chuc-nang": chucNang,
  "so-do": soDo,
  "lanh-dao": lanhDao,
  "lien-he": lienHe
};

function renderPage() {
  // Lấy hash hiện tại (vd: #/gioi-thieu -> gioi-thieu)
  let hash = window.location.hash.replace("#/", "");
  if (!hash || hash === "") {
    hash = "home"; // Mặc định là trang chủ
  }

  const appDiv = document.getElementById("app");

  // Kiểm tra xem route có tồn tại không, nếu có thì render nội dung, nếu không thì hiển thị lỗi
  if (pages[hash]) {
    appDiv.innerHTML = pages[hash];
  } else {
    appDiv.innerHTML =
      '<section class="section bg-white"><div class="container"><h2 class="section-title">404 - Không tìm thấy trang</h2></div></section>';
  }
}

// Lắng nghe sự kiện thay đổi hash (khi user click vào link có dạng #/...)
window.addEventListener("hashchange", renderPage);

// Chạy lần đầu khi load trang
window.addEventListener("DOMContentLoaded", () => {
  renderPage();
  initBackToTop();
});
