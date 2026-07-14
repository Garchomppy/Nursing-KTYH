import { DEPARTMENT_IMAGES, DEPARTMENT_OVERVIEW } from "../../data/ktyh-department.js";
import { renderDepartmentPage } from "../../components/department-body.js";

const { introduction, responsibilities, development } = DEPARTMENT_OVERVIEW;

const responsibilityItems = responsibilities.items
  .map(
    ({ title, description }) => `
      <article class="department-responsibility">
        <h3>${title}</h3>
        <p>${description}</p>
      </article>`,
  )
  .join("");

const developmentItems = development.items
  .map(
    ({ title, description }) => `
      <article>
        <h3>${title}</h3>
        <p>${description}</p>
      </article>`,
  )
  .join("");

const content = `
  <section class="department-section department-section--intro" aria-labelledby="department-overview-title">
    <div class="department-shell department-intro-grid">
      <div class="department-prose">
        <p class="department-kicker">${introduction.label}</p>
        <h2 id="department-overview-title">${introduction.title}</h2>
        ${introduction.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
      <figure class="department-feature-image">
        <img src="${DEPARTMENT_IMAGES.departmentActivity.src}" alt="${DEPARTMENT_IMAGES.departmentActivity.alt}" width="${DEPARTMENT_IMAGES.departmentActivity.width}" height="${DEPARTMENT_IMAGES.departmentActivity.height}" loading="lazy">
        <figcaption>${introduction.imageCaption}</figcaption>
      </figure>
    </div>
  </section>

  <section class="department-section department-section--muted" aria-labelledby="department-functions-title">
    <div class="department-shell">
      <div class="department-section-heading">
        <h2 id="department-functions-title">${responsibilities.title}</h2>
        <p>${responsibilities.description}</p>
      </div>
      <div class="department-responsibility-grid">
        <article class="department-responsibility department-responsibility--primary">
          <figure class="department-responsibility__media">
            <img src="${responsibilities.primary.image.src}" alt="${responsibilities.primary.image.alt}" width="${responsibilities.primary.image.width || 1280}" height="${responsibilities.primary.image.height || 960}" loading="lazy">
          </figure>
          <div class="department-responsibility__content">
            <h3>${responsibilities.primary.title}</h3>
            <p>${responsibilities.primary.description}</p>
          </div>
        </article>
        <div class="department-responsibility-list">
          ${responsibilityItems}
        </div>
      </div>
    </div>
  </section>

  <section class="department-section department-direction" aria-labelledby="department-direction-title">
    <div class="department-shell department-direction__layout">
      <div class="department-section-heading">
        <h2 id="department-direction-title">${development.title}</h2>
        <p>${development.description}</p>
      </div>
      <div class="department-direction-grid">
        ${developmentItems}
      </div>
    </div>
  </section>
  `;

export const ktyhOverview = renderDepartmentPage({
  activeKey: "overview",
  hero: {
    title: "Bộ môn Kỹ thuật Y học",
    summary: "Đào tạo gắn với thực tiễn lâm sàng, nghiên cứu cải tiến và cống hiến vì sức khỏe cộng đồng.",
    image: DEPARTMENT_IMAGES.overview.hero,
    imageCaption: "Giảng viên Bộ môn Kỹ thuật Y học cùng đồng nghiệp năm 2026",
    context: "Khoa Điều dưỡng - Kỹ thuật Y học",
  },
  content,
});
