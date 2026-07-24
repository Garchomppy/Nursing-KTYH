import { getDepartmentImages, getLecturers } from "../../data/nursing-department.js";
import { renderDepartmentPage } from "../../components/department-body.js";
import { t } from "../../i18n.js";

function renderProfileAction(lecturer) {
  if (!lecturer.profileUrl) {
    return `<span class="department-status">${t("dept.no_profile")}</span>`;
  }

  return `<a class="department-text-link" href="${lecturer.profileUrl}" target="_blank" rel="noopener noreferrer">${t("dept.view_scientific_profile")}</a>`;
}

export function nursingLecturers() {
  const DEPARTMENT_IMAGES = getDepartmentImages();
  const LECTURERS = getLecturers();

  const directoryItems = LECTURERS.map(
    (lecturer) => `
    <article class="lecturer-directory-item" role="listitem">
      <p class="lecturer-directory-item__number" aria-label="${t("dept.order_label")} ${lecturer.order}">${String(lecturer.order).padStart(2, "0")}</p>
      <div class="lecturer-directory-item__identity">
        <span class="lecturer-dept-tag lecturer-dept-tag--dd">Bộ môn Điều dưỡng</span>
        <div class="lecturer-directory-item__title">
          <h3>${lecturer.fullName}</h3>
          ${lecturer.isSample ? `<span class="lecturer-sample-badge">${t("dept.sample_data_badge")}</span>` : ""}
        </div>
        <p>${lecturer.position}</p>
      </div>
      <div class="lecturer-directory-item__profile">
        <p>${t("dept.scientific_profile")}</p>
        ${renderProfileAction(lecturer)}
      </div>
    </article>`,
  ).join("");

  const content = `
  <section class="department-section department-section--muted lecturer-directory-section" aria-label="${t("nursing.route.overview")} - ${t("nursing.route.lecturers")}">
    <div class="department-shell">
      <div class="department-switch-link-bar">
        <span>Đang hiển thị: <strong>Bộ môn Điều dưỡng</strong> (${LECTURERS.length} giảng viên)</span>
        <a href="#/bo-mon-ktxn-hayh/danh-sach-giang-vien" class="department-switch-link">Xem danh sách Bộ môn KTYH →</a>
      </div>

      <div class="lecturer-directory" role="list" aria-label="${t("nursing.route.overview")} - ${t("nursing.route.lecturers")}">
        ${directoryItems}
      </div>
    </div>
  </section>`;

  return renderDepartmentPage({
    activeKey: "lecturers",
    hero: {
      title: t("nursing.lecturers.hero_title"),
      summary: t("nursing.lecturers.hero_summary"),
      image: DEPARTMENT_IMAGES.lecturers.hero,
      imageCaption: t("nursing.lecturers.hero_image_caption"),
    },
    content,
  });
}


