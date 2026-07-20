import { gioiThieu } from "./pages/gioi-thieu.js";
import { chucNang } from "./pages/chuc-nang.js";
import { soDo } from "./pages/so-do.js";
import { lanhDao } from "./pages/lanh-dao.js";
import { lienHe } from "./pages/lien-he.js";
import { initBackToTop } from "./components/back-to-top.js";
import { t } from "./i18n.js";
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

import { hoSo } from "./pages/ho-so.js";

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
  "bo-mon-ktxn-hayh": ktyhOverview,
  "bo-mon-ktxn-hayh/gioi-thieu": ktyhOverview,
  "bo-mon-ktxn-hayh/danh-sach-giang-vien": ktyhLecturers,
  "bo-mon-ktxn-hayh/giang-vien": ktyhLecturers,
  "bo-mon-ktxn-hayh/giang-day": ktyhTeaching,
  "bo-mon-ktxn-hayh/nghien-cuu-khoa-hoc": ktyhResearch,
  "bo-mon-ktxn-hayh/phuc-vu-cong-dong": ktyhCommunity,
};

const departmentPageTitles = {
  "bo-mon-dieu-duong": "dept.dieuduong.title.overview",
  "bo-mon-dieu-duong/gioi-thieu": "dept.dieuduong.title.overview",
  "bo-mon-dieu-duong/danh-sach-giang-vien": "dept.dieuduong.title.lecturers",
  "bo-mon-dieu-duong/giang-vien": "dept.dieuduong.title.lecturers",
  "bo-mon-dieu-duong/giang-day": "dept.dieuduong.title.teaching",
  "bo-mon-dieu-duong/nghien-cuu-khoa-hoc": "dept.dieuduong.title.research",
  "bo-mon-dieu-duong/phuc-vu-cong-dong": "dept.dieuduong.title.community",
  "bo-mon-ktxn-hayh": "dept.ktxnhayh.title.overview",
  "bo-mon-ktxn-hayh/gioi-thieu": "dept.ktxnhayh.title.overview",
  "bo-mon-ktxn-hayh/danh-sach-giang-vien": "dept.ktxnhayh.title.lecturers",
  "bo-mon-ktxn-hayh/giang-vien": "dept.ktxnhayh.title.lecturers",
  "bo-mon-ktxn-hayh/giang-day": "dept.ktxnhayh.title.teaching",
  "bo-mon-ktxn-hayh/nghien-cuu-khoa-hoc": "dept.ktxnhayh.title.research",
  "bo-mon-ktxn-hayh/phuc-vu-cong-dong": "dept.ktxnhayh.title.community",
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
    hash === "bo-mon-ktxn-hayh" || hash.startsWith("bo-mon-ktxn-hayh/");
  document.body.classList.toggle("is-department-page", isDepartmentPage);

  // Xử lý route động cho Hồ Sơ Cá Nhân (Tạm thời ẩn theo yêu cầu)
  /*
  if (hash.startsWith("ho-so/")) {
    const profileId = hash.split("/")[1];
    appDiv.innerHTML = hoSo(profileId);
    document.title = "Lý lịch khoa học | Trường Y Dược - Đại học Đà Nẵng";
    return;
  }
  */

  // Kiểm tra xem route có tồn tại không, nếu có thì render nội dung, nếu không thì hiển thị lỗi
  if (pages[hash]) {
    appDiv.innerHTML = pages[hash]();
    document.title = departmentPageTitles[hash]
      ? `${t(departmentPageTitles[hash])} | ${t("footer.school")}`
      : t("hero.title");
  } else {
    appDiv.innerHTML =
      '<section class="section bg-white"><div class="container"><h2 class="section-title">404 - Không tìm thấy trang</h2></div></section>';
  }
}

// Lắng nghe sự kiện thay đổi hash (khi user click vào link có dạng #/...)
window.addEventListener("hashchange", renderPage);

// Render lại nội dung trang khi người dùng đổi ngôn ngữ
window.addEventListener("languageChanged", renderPage);

// Chạy lần đầu khi load trang
window.addEventListener("DOMContentLoaded", () => {
  renderPage();
  initBackToTop();
});
