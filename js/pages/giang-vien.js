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

export function giangVien() {
  const nursingLecturers = getNursingLecturers();
  const ktyhLecturers = getKTYHLecturers();

  const renderLecturers = (lecturers) => {
    const directoryItems = lecturers.map(
      (lecturer) => `
      <article class="lecturer-directory-item" role="listitem">
        <p class="lecturer-directory-item__number" aria-label="${t("dept.order_label") || "STT"} ${lecturer.order}">${String(lecturer.order).padStart(2, "0")}</p>
        <div class="lecturer-directory-item__identity">
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
      </article>`
    ).join("");

    return `
      <div class="department-shell" style="padding: 0; background: transparent; box-shadow: none;">
        <div class="lecturer-directory" role="list">
          ${directoryItems}
        </div>
      </div>
    `;
  };

  return `
    <section class="section bg-muted" style="background-color: #f8fafc; padding-top: 40px; padding-bottom: 40px;">
        <div class="container">
            <h2 class="section-title" style="margin-bottom: 30px;">${t("nav.lecturers") || "Danh sách giảng viên"}</h2>
            
            <teaching-tabs class="teaching-tabs">
              <div class="teaching-tabs__list" style="grid-template-columns: repeat(2, 1fr);" role="tablist" aria-label="${t("nav.lecturers") || "Danh sách giảng viên"}">
                <button class="teaching-tabs__tab" id="tab-dieu-duong" role="tab" aria-selected="true" tabindex="0">
                  Điều dưỡng
                </button>
                <button class="teaching-tabs__tab" id="tab-ktyh" role="tab" aria-selected="false" tabindex="-1">
                  Kỹ thuật Y học
                </button>
              </div>
              <div class="teaching-tabs__panels">
                <div class="teaching-tab-panel" role="tabpanel" aria-labelledby="tab-dieu-duong" tabindex="0">
                  ${renderLecturers(nursingLecturers)}
                </div>
                <div class="teaching-tab-panel" role="tabpanel" aria-labelledby="tab-ktyh" tabindex="0" hidden>
                  ${renderLecturers(ktyhLecturers)}
                </div>
              </div>
            </teaching-tabs>

        </div>
    </section>
  `;
}
