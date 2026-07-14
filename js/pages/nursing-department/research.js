import {
  DEPARTMENT_IMAGES,
  RESEARCH_ACTIVITIES,
  RESEARCH_GROUPS,
  RESEARCH_PATHWAYS,
} from "../../data/nursing-department.js";
import { renderDepartmentPage } from "../../components/department-body.js";

const researchPathways = RESEARCH_PATHWAYS.map(
  (pathway) => `
    <article class="research-pathway">
      <figure>
        <img src="${pathway.image.src}" alt="${pathway.image.alt}" width="2560" height="1707" loading="lazy">
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
      <img src="${activity.image.src}" alt="${activity.image.alt}" width="1280" height="720" loading="lazy">
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
                  <p>Thông tin tiêu đề, tác giả, năm công bố và đường dẫn tài liệu sẽ được bổ sung từ hồ sơ chính thức.</p>
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
        <p>Hoạt động nghiên cứu được phát triển đồng thời ở đội ngũ giảng viên và người học, hướng đến chia sẻ tri thức và nâng cao chất lượng chăm sóc.</p>
      </div>
      <div class="research-pathways">${researchPathways}</div>
    </div>
  </section>

  <div class="department-section department-section--research department-section--muted">
    <div class="department-shell">
      <div class="department-section-heading research-section-heading">
        <p class="department-kicker">Công trình và đề tài</p>
        <h2>Danh mục nghiên cứu</h2>
        <p>Các đề tài và công bố được tổ chức theo đối tượng thực hiện và loại hình học thuật để thuận tiện tra cứu, cập nhật.</p>
      </div>
      <div class="research-layout">${researchGroups}</div>
    </div>
  </div>

  <section class="department-section research-activities-section" aria-labelledby="research-activities-title">
    <div class="department-shell">
      <div class="department-section-heading research-section-heading">
        <p class="department-kicker">Hình ảnh hoạt động</p>
        <h2 id="research-activities-title">Dấu ấn học thuật</h2>
        <p>Một số hoạt động báo cáo, hội nghị và trình bày kết quả nghiên cứu của giảng viên, sinh viên Bộ môn.</p>
      </div>
      <div class="research-activities">${researchActivities}</div>
    </div>
  </section>`;

export const nursingResearch = renderDepartmentPage({
  activeKey: "research",
  hero: {
    title: "Nghiên cứu khoa học",
    context: "Học thuật và đổi mới",
    summary: "Phát triển thực hành dựa trên bằng chứng thông qua hoạt động nghiên cứu, chia sẻ kết quả chuyên môn và sự tham gia của giảng viên, sinh viên Bộ môn Điều dưỡng.",
    image: DEPARTMENT_IMAGES.research.hero,
    imageCaption: "Giảng viên Bộ môn trình bày báo cáo tại hội nghị khoa học",
  },
  content,
});
