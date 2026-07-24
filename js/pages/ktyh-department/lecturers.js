import {
  getLecturers,
  getDepartmentImages,
} from "../../data/ktyh-department.js";
import { renderDepartmentPage } from "../../components/department-body.js";
import { t } from "../../i18n.js";

function renderProfileAction(lecturer) {
  if (!lecturer.profileUrl) {
    return `<span class="department-status">${t("dept.no_profile")}</span>`;
  }

  return `<a class="department-text-link" href="${lecturer.profileUrl}" target="_blank" rel="noopener noreferrer">${t("dept.view_scientific_profile")}</a>`;
}

export function ktyhLecturers() {
  const LECTURERS = getLecturers();
  const DEPARTMENT_IMAGES = getDepartmentImages();

  const directoryItems = LECTURERS.map(
    (lecturer) => `
    <article class="lecturer-directory-item" role="listitem">
      <p class="lecturer-directory-item__number" aria-label="${t("dept.order_label")} ${lecturer.order}">${String(lecturer.order).padStart(2, "0")}</p>
      <div class="lecturer-directory-item__identity">
        <span class="lecturer-dept-tag lecturer-dept-tag--ktyh">Bộ môn Kỹ thuật Y học</span>
        <div class="lecturer-directory-item__title">
          <h3>${lecturer.fullName}</h3>
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
  <section class="department-section department-section--muted lecturer-directory-section" aria-label="${t("ktyh.lecturers.aria_label")}">
    <div class="department-shell">
      <div class="department-switch-link-bar">
        <span>Đang hiển thị: <strong>Bộ môn Kỹ thuật Y học</strong> (${LECTURERS.length} giảng viên)</span>
        <a href="#/bo-mon-dieu-duong/danh-sach-giang-vien" class="department-switch-link">Xem danh sách Bộ môn Điều dưỡng →</a>
      </div>

      <div class="lecturer-directory" role="list" aria-label="${t("ktyh.lecturers.aria_label")}">
        ${directoryItems}
      </div>
    </div>
  </section>`;

  return renderDepartmentPage({
    activeKey: "lecturers",
    hero: {
      title: t("ktyh.lecturers.hero_title"),
      summary: t("ktyh.lecturers.hero_summary"),
      image: DEPARTMENT_IMAGES.lecturers.hero,
      imageCaption: t("ktyh.lecturers.hero_image_caption"),
      context: t("ktyh.unit_context"),
    },
    content,
  });
}
