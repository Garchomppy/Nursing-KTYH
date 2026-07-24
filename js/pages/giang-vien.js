import { t } from "../i18n.js";
import { getLecturers as getNursingLecturers } from "../data/nursing-department.js";
import { getLecturers as getKTYHLecturers } from "../data/ktyh-department.js";
import "../components/teaching-tabs.js";

function renderProfileAction(lecturer) {
  if (!lecturer.profileUrl) {
    return `<span class="department-status">${t("dept.no_profile") || "Chưa có hồ sơ"}</span>`;
  }
  return `<a class="department-text-link" href="${lecturer.profileUrl}" target="_blank" rel="noopener noreferrer">${t("dept.view_scientific_profile") || "Xem hồ sơ khoa học"}</a>`;
}

function renderLecturerItems(lecturers, deptName, deptClass) {
  return lecturers
    .map(
      (lecturer) => `
    <article class="lecturer-directory-item" role="listitem">
      <p class="lecturer-directory-item__number" aria-label="${t("dept.order_label") || "STT"} ${lecturer.order}">${String(lecturer.order).padStart(2, "0")}</p>
      <div class="lecturer-directory-item__identity">
        <span class="lecturer-dept-tag ${deptClass}">${deptName}</span>
        <div class="lecturer-directory-item__title">
          <h3>${lecturer.fullName}</h3>
          ${lecturer.isSample ? `<span class="lecturer-sample-badge">${t("dept.sample_data_badge") || "Dữ liệu mẫu"}</span>` : ""}
        </div>
        <p>${lecturer.position}</p>
      </div>
      <div class="lecturer-directory-item__profile">
        <p>${t("dept.scientific_profile") || "Hồ sơ khoa học"}</p>
        ${renderProfileAction(lecturer)}
      </div>
    </article>`,
    )
    .join("");
}

export function giangVien() {
  const nursingLecturers = getNursingLecturers();
  const ktyhLecturers = getKTYHLecturers();

  return `
  <section class="department-section department-section--muted teaching-experience-section" style="padding-top: 40px;" aria-label="${t("nav.lecturers") || "Danh sách giảng viên"}">
    <div class="department-shell">
      <div class="department-section-heading" style="margin: 0 auto 36px auto; text-align: center;">
        <h2 style="font-size: clamp(24px, 3vw, 32px); color: var(--department-navy, #03135e); margin-bottom: 10px; text-align: center;">${t("nav.lecturers") || "Danh sách giảng viên"}</h2>
        <p style="color: var(--department-muted, #5b6476); font-size: 15px; margin: 0 auto; text-align: center;">
          Danh sách giảng viên của khoa được phân chia ở 2 Bộ môn chính: <strong>Điều dưỡng</strong> và <strong>Kỹ thuật Y học</strong>
        </p>
      </div>

      <teaching-tabs class="teaching-tabs">
        <div class="teaching-tabs__list teaching-tabs__list--2cols" role="tablist" aria-label="${t("nav.lecturers") || "Danh sách giảng viên"}">
          <button
            class="teaching-tabs__tab"
            id="lecturer-tab-dd"
            type="button"
            role="tab"
            aria-controls="lecturer-panel-dd"
            aria-selected="true"
            tabindex="0"
          >
            Bộ môn Điều dưỡng (${nursingLecturers.length})
          </button>
          <button
            class="teaching-tabs__tab"
            id="lecturer-tab-ktyh"
            type="button"
            role="tab"
            aria-controls="lecturer-panel-ktyh"
            aria-selected="false"
            tabindex="-1"
          >
            Bộ môn KTXN-HAYH (${ktyhLecturers.length})
          </button>
        </div>
        <div class="teaching-tabs__panels">
          <article
            class="teaching-tab-panel teaching-tab-panel--lecturers"
            id="lecturer-panel-dd"
            role="tabpanel"
            aria-labelledby="lecturer-tab-dd"
            tabindex="0"
          >
            <div class="lecturer-directory" role="list">
              ${renderLecturerItems(nursingLecturers, "Bộ môn Điều dưỡng", "lecturer-dept-tag--dd")}
            </div>
          </article>
          <article
            class="teaching-tab-panel teaching-tab-panel--lecturers"
            id="lecturer-panel-ktyh"
            role="tabpanel"
            aria-labelledby="lecturer-tab-ktyh"
            tabindex="0"
            hidden
          >
            <div class="lecturer-directory" role="list">
              ${renderLecturerItems(ktyhLecturers, "Bộ môn KTXN-HAYH", "lecturer-dept-tag--ktyh")}
            </div>
          </article>
        </div>
      </teaching-tabs>
    </div>
  </section>`;
}
