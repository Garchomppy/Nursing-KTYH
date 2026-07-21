import { getDepartmentImages, getDepartmentOverview } from "../../data/ktyh-department.js";
import { renderDepartmentPage } from "../../components/department-body.js";
import { t } from "../../i18n.js";

export function ktyhOverview() {
  const DEPARTMENT_IMAGES = getDepartmentImages();
  const { introduction, responsibilities, development } = getDepartmentOverview();

  const responsibilityItems = responsibilities.items
    .map(
      ({ title, description, href }) => `
      <article class="department-responsibility">
        <h3>${title}</h3>
        <p>${description}</p>
        ${href ? `<a href="${href}" class="department-text-link">Xem chi tiết &rarr;</a>` : ""}
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
        <img src="${DEPARTMENT_IMAGES.facultyGroup.src}" alt="${DEPARTMENT_IMAGES.facultyGroup.alt}" width="${DEPARTMENT_IMAGES.facultyGroup.width}" height="${DEPARTMENT_IMAGES.facultyGroup.height}" loading="lazy">
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

  return renderDepartmentPage({
    activeKey: "overview",
    hero: {
      title: t("ktyh.overview.hero_title"),
      summary: t("ktyh.overview.hero_summary"),
      image: DEPARTMENT_IMAGES.overview.hero,
      imageCaption: t("ktyh.overview.hero_image_caption"),
      context: t("ktyh.unit_context"),
    },
    content,
  });
}
