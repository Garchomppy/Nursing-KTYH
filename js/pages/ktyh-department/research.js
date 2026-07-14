import {
  DEPARTMENT_IMAGES,
  RESEARCH_ACTIVITIES,
  RESEARCH_GROUPS,
  RESEARCH_PATHWAYS,
} from "../../data/ktyh-department.js";
import { renderDepartmentPage } from "../../components/department-body.js";

const researchPathways = RESEARCH_PATHWAYS.map(
  (pathway) => `
    <article class="research-pathway">
      <figure>
        <img src="${pathway.image.src}" alt="${pathway.image.alt}" width="1280" height="960" loading="lazy">
      </figure>
      <div class="research-pathway__content">
        <p class="department-section-label">${pathway.label}</p>
        <h3>${pathway.title}</h3>
        <p>${pathway.description}</p>
      </div>
    </article>`,
).join("");

const researchActivities = RESEARCH_ACTIVITIES.map(
  (activity) => `
    <figure class="research-activity">
      <img src="${activity.image.src}" alt="${activity.image.alt}" width="1280" height="960" loading="lazy">
      <figcaption>
        <span>${activity.label}</span>
        <strong>${activity.title}</strong>
      </figcaption>
    </figure>`,
).join("");

const researchGroups = RESEARCH_GROUPS.map(
  (group, groupIndex) => `
    <section class="research-group" aria-labelledby="${group.id}-title">
      <div class="research-group__heading">
        <p class="department-section-label">${groupIndex === 0 ? "Giảng viên" : "Sinh viên"}</p>
        <h3 id="${group.id}-title">${group.title}</h3>
        <p>${group.description}</p>
      </div>
      <div class="research-accordion">
        ${group.categories
          .map(
            (category) => `
              <details>
                <summary><span>${category}</span><small>Đang cập nhật</small></summary>
                <div class="research-empty">
                  <h3>Danh mục đang được cập nhật</h3>
                  <p>Thông tin đề tài, tác giả, năm báo cáo và công bố chính thức đang được bộ môn tổng hợp và thẩm định.</p>
                </div>
              </details>`,
          )
          .join("")}
      </div>
    </section>`,
).join("");

const content = `
  <section class="department-section research-pathways-section" aria-labelledby="research-pathways-title">
    <div class="department-shell">
      <div class="department-section-heading research-section-heading">
        <p class="department-kicker">Nghiên cứu gắn với thực hành</p>
        <h2 id="research-pathways-title">Hai mạch hoạt động nghiên cứu</h2>
        <p>Hoạt động nghiên cứu được phát triển đồng thời ở đội ngũ giảng viên và người học, hướng đến nâng cao chất lượng chẩn đoán xét nghiệm và phát triển chuyên môn.</p>
      </div>
      <div class="research-pathways">${researchPathways}</div>
    </div>
  </section>

  <div class="department-section department-section--research department-section--muted">
    <div class="department-shell">
      <div class="department-section-heading research-section-heading">
        <p class="department-kicker">Công trình và đề tài</p>
        <h2>Danh mục nghiên cứu</h2>
        <p>Các đề tài và công bố được tổ chức theo đối tượng thực hiện và phân cấp nghiên cứu khoa học chuyên ngành.</p>
      </div>
      <div class="research-layout">${researchGroups}</div>
    </div>
  </div>

  <section class="department-section research-activities-section" aria-labelledby="research-activities-title">
    <div class="department-shell">
      <div class="department-section-heading research-section-heading">
        <p class="department-kicker">Hình ảnh hoạt động</p>
        <h2 id="research-activities-title">Dấu ấn học thuật</h2>
        <p>Các hoạt động báo cáo đề tài, nghiên cứu thực địa và sinh hoạt học thuật của giảng viên, sinh viên Bộ môn.</p>
      </div>
      <div class="research-activities">${researchActivities}</div>
    </div>
  </section>`;

export const ktyhResearch = renderDepartmentPage({
  activeKey: "research",
  hero: {
    title: "Nghiên cứu khoa học",
    context: "Học thuật và đổi mới",
    summary: "Thúc đẩy các nghiên cứu cải tiến kỹ thuật xét nghiệm, ứng dụng y học thực chứng trong chẩn đoán lâm sàng và chăm sóc sức khỏe cộng đồng.",
    image: DEPARTMENT_IMAGES.research.hero,
    imageCaption: "Giảng viên và sinh viên thực hiện đề tài nghiên cứu khoa học Bộ môn KTYH",
  },
  content,
});
