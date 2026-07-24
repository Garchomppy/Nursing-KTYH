import {
  getLecturers as getKTYHLecturers,
  getDepartmentImages,
} from "../../data/ktyh-department.js";
import { getLecturers as getNursingLecturers } from "../../data/nursing-department.js";
import { renderDepartmentPage } from "../../components/department-body.js";
import "../../components/teaching-tabs.js";
import { t } from "../../i18n.js";

function renderProfileAction(lecturer) {
  if (!lecturer.profileUrl) {
    return `<span class="department-status">${t("dept.no_profile")}</span>`;
  }

  return `<a class="department-text-link" href="${lecturer.profileUrl}" target="_blank" rel="noopener noreferrer">${t("dept.view_scientific_profile")}</a>`;
}

function renderLecturerItems(lecturers, deptName, deptClass) {
  return lecturers
    .map(
      (lecturer) => `
    <article class="lecturer-directory-item" role="listitem">
      <p class="lecturer-directory-item__number" aria-label="${t("dept.order_label")} ${lecturer.order}">${String(lecturer.order).padStart(2, "0")}</p>
      <div class="lecturer-directory-item__identity">
        <span class="lecturer-dept-tag ${deptClass}">${deptName}</span>
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
    )
    .join("");
}

export function ktyhLecturers() {
  const ktyhLecturers = getKTYHLecturers();
  const nursingLecturers = getNursingLecturers();
  const DEPARTMENT_IMAGES = getDepartmentImages();

  const content = `
  <section class="department-section department-section--muted teaching-experience-section" aria-label="${t("ktyh.lecturers.aria_label")}">
    <div class="department-shell">
      <teaching-tabs class="teaching-tabs">
        <div class="teaching-tabs__list teaching-tabs__list--2cols" role="tablist" aria-label="${t("ktyh.lecturers.aria_label")}">
          <button
            class="teaching-tabs__tab"
            id="ktyh-tab-ktyh"
            type="button"
            role="tab"
            aria-controls="ktyh-panel-ktyh"
            aria-selected="true"
            tabindex="0"
          >
            Bộ môn KTXN-HAYH (${ktyhLecturers.length})
          </button>
          <button
            class="teaching-tabs__tab"
            id="ktyh-tab-dd"
            type="button"
            role="tab"
            aria-controls="ktyh-panel-dd"
            aria-selected="false"
            tabindex="-1"
          >
            Bộ môn Điều dưỡng (${nursingLecturers.length})
          </button>
        </div>
        <div class="teaching-tabs__panels">
          <article
            class="teaching-tab-panel teaching-tab-panel--lecturers"
            id="ktyh-panel-ktyh"
            role="tabpanel"
            aria-labelledby="ktyh-tab-ktyh"
            tabindex="0"
          >
            <div class="lecturer-directory" role="list">
              ${renderLecturerItems(ktyhLecturers, "Bộ môn KTXN-HAYH", "lecturer-dept-tag--ktyh")}
            </div>
          </article>
          <article
            class="teaching-tab-panel teaching-tab-panel--lecturers"
            id="ktyh-panel-dd"
            role="tabpanel"
            aria-labelledby="ktyh-tab-dd"
            tabindex="0"
            hidden
          >
            <div class="lecturer-directory" role="list">
              ${renderLecturerItems(nursingLecturers, "Bộ môn Điều dưỡng", "lecturer-dept-tag--dd")}
            </div>
          </article>
        </div>
      </teaching-tabs>
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

