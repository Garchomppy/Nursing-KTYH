import { gioiThieu } from "./pages/gioi-thieu.js";
import { chucNang } from "./pages/chuc-nang.js";
import { soDo } from "./pages/so-do.js";
import { lanhDao } from "./pages/lanh-dao.js";
import { lienHe } from "./pages/lien-he.js";
import { initBackToTop } from "./components/back-to-top.js";
import { nursingOverview } from "./pages/nursing-department/overview.js";
import { nursingLecturers } from "./pages/nursing-department/lecturers.js";
import { nursingTeaching } from "./pages/nursing-department/teaching.js";
import { nursingResearch } from "./pages/nursing-department/research.js";
import { nursingCommunity } from "./pages/nursing-department/community.js";
import { ktyhOverview } from "./pages/ktyh-department/overview.js";
import { ktyhLecturers } from "./pages/ktyh-department/lecturers.js";
import { ktyhTeaching } from "./pages/ktyh-department/teaching.js";
import { ktyhResearch } from "./pages/ktyh-department/research.js";
import { ktyhCommunity } from "./pages/ktyh-department/community.js";

const pages = {
  "gioi-thieu": gioiThieu,
  "chuc-nang": chucNang,
  "so-do": soDo,
  "lanh-dao": lanhDao,
  "lien-he": lienHe,
  "bo-mon-dieu-duong": nursingOverview,
  "bo-mon-dieu-duong/gioi-thieu": nursingOverview,
  "bo-mon-dieu-duong/danh-sach-giang-vien": nursingLecturers,
  "bo-mon-dieu-duong/giang-vien": nursingLecturers,
  "bo-mon-dieu-duong/giang-day": nursingTeaching,
  "bo-mon-dieu-duong/nghien-cuu-khoa-hoc": nursingResearch,
  "bo-mon-dieu-duong/phuc-vu-cong-dong": nursingCommunity,
  "bo-mon-ktyh": ktyhOverview,
  "bo-mon-ktyh/gioi-thieu": ktyhOverview,
  "bo-mon-ktyh/danh-sach-giang-vien": ktyhLecturers,
  "bo-mon-ktyh/giang-vien": ktyhLecturers,
  "bo-mon-ktyh/giang-day": ktyhTeaching,
  "bo-mon-ktyh/nghien-cuu-khoa-hoc": ktyhResearch,
  "bo-mon-ktyh/phuc-vu-cong-dong": ktyhCommunity,
};

const departmentPageTitles = {
  "bo-mon-dieu-duong": "Giới thiệu Bộ môn Điều dưỡng",
  "bo-mon-dieu-duong/gioi-thieu": "Giới thiệu Bộ môn Điều dưỡng",
  "bo-mon-dieu-duong/danh-sach-giang-vien":
    "Danh sách giảng viên Bộ môn Điều dưỡng",
  "bo-mon-dieu-duong/giang-vien": "Giảng viên Bộ môn Điều dưỡng",
  "bo-mon-dieu-duong/giang-day": "Hoạt động giảng dạy Bộ môn Điều dưỡng",
  "bo-mon-dieu-duong/nghien-cuu-khoa-hoc":
    "Nghiên cứu khoa học Bộ môn Điều dưỡng",
  "bo-mon-dieu-duong/phuc-vu-cong-dong": "Phục vụ cộng đồng Bộ môn Điều dưỡng",
  "bo-mon-ktyh": "Giới thiệu Bộ môn Kỹ thuật Y học",
  "bo-mon-ktyh/gioi-thieu": "Giới thiệu Bộ môn Kỹ thuật Y học",
  "bo-mon-ktyh/danh-sach-giang-vien": "Danh sách giảng viên Bộ môn Kỹ thuật Y học",
  "bo-mon-ktyh/giang-vien": "Giảng viên Bộ môn Kỹ thuật Y học",
  "bo-mon-ktyh/giang-day": "Hoạt động giảng dạy Bộ môn Kỹ thuật Y học",
  "bo-mon-ktyh/nghien-cuu-khoa-hoc": "Nghiên cứu khoa học Bộ môn Kỹ thuật Y học",
  "bo-mon-ktyh/phuc-vu-cong-dong": "Phục vụ cộng đồng Bộ môn Kỹ thuật Y học",
};

function renderPage() {
  // Lấy hash hiện tại (vd: #/gioi-thieu -> gioi-thieu)
  let hash = window.location.hash.replace("#/", "");
  if (!hash || hash === "") {
    hash = "gioi-thieu"; // Mặc định là trang giới thiệu
  }

  const appDiv = document.getElementById("app");
  const isDepartmentPage =
    hash === "bo-mon-dieu-duong" || hash.startsWith("bo-mon-dieu-duong/") ||
    hash === "bo-mon-ktyh" || hash.startsWith("bo-mon-ktyh/");
  document.body.classList.toggle("is-department-page", isDepartmentPage);

  // Kiểm tra xem route có tồn tại không, nếu có thì render nội dung, nếu không thì hiển thị lỗi
  if (pages[hash]) {
    appDiv.innerHTML = pages[hash];
    document.title = departmentPageTitles[hash]
      ? `${departmentPageTitles[hash]} | Trường Y Dược - Đại học Đà Nẵng`
      : "Khoa Điều Dưỡng - Kỹ Thuật Y Học";
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
