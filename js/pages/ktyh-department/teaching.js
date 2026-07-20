import "../../components/teaching-tabs.js";
import { getTeachingAreas } from "../../data/ktyh-department.js";
import { renderDepartmentPage } from "../../components/department-body.js";
import { t } from "../../i18n.js";

export function ktyhTeaching() {
  const TEACHING_AREAS = getTeachingAreas();

  const tabButtons = TEACHING_AREAS.map(
    (area, index) => `
    <button
      class="teaching-tabs__tab"
      id="teaching-tab-${area.id}"
      type="button"
      role="tab"
      aria-controls="teaching-panel-${area.id}"
      aria-selected="${index === 0}"
      tabindex="${index === 0 ? "0" : "-1"}"
    >
      ${area.tabLabel}
    </button>`,
  ).join("");

  const tabPanels = TEACHING_AREAS.map(
    (area, index) => {
      const details = area.details
        .map(
          (detail) => `
          <article>
            <h3>${detail.title}</h3>
            <p>${detail.description}</p>
          </article>`,
        )
        .join("");

      const gallery = area.gallery.length
        ? `<section class="teaching-gallery" aria-label="${t("dept.activity_images_label")} ${area.tabLabel}">
          <div class="teaching-gallery__heading">
            <p class="department-kicker">${t("dept.activity_images_label")}</p>
            <h3>${t("dept.learning_space_title")}</h3>
          </div>
          <div class="teaching-gallery__grid">
            ${area.gallery
              .map(
                (image) => `
                  <figure>
                    <img src="${image.src}" alt="${image.alt}" width="${image.width}" height="${image.height}" loading="lazy">
                    <figcaption>${image.alt}</figcaption>
                  </figure>`,
              )
              .join("")}
          </div>
        </section>`
        : "";

      return `
    <article
      class="teaching-tab-panel"
      id="teaching-panel-${area.id}"
      role="tabpanel"
      aria-labelledby="teaching-tab-${area.id}"
      tabindex="0"
      ${index === 0 ? "" : "hidden"}
    >
      <div class="teaching-tab-panel__intro">
        <div class="teaching-tab-panel__content">
          <p class="department-section-label">${area.label}</p>
          <h2>${area.title}</h2>
          <p>${area.description}</p>
          <p>${area.secondaryDescription}</p>
          <ul>${area.points.map((point) => `<li>${point}</li>`).join("")}</ul>
        </div>
        <figure class="teaching-tab-panel__media">
          <img src="${area.image.src}" alt="${area.image.alt}" width="${area.image.width}" height="${area.image.height}" loading="lazy">
          <figcaption>${area.imageCaption}</figcaption>
        </figure>
      </div>
      <section class="teaching-tab-panel__details" aria-label="${t("dept.how_organized")} ${area.tabLabel}">
        ${details}
      </section>
      ${gallery}
    </article>`;
    },
  ).join("");

  const content = `
  <section class="department-section department-section--muted teaching-experience-section" aria-label="${t("dept.teaching_environments")}">
    <div class="department-shell">
      <teaching-tabs class="teaching-tabs">
        <div class="teaching-tabs__list" role="tablist" aria-label="${t("dept.teaching_environments")}">
          ${tabButtons}
        </div>
        <div class="teaching-tabs__panels">${tabPanels}</div>
      </teaching-tabs>
    </div>
  </section>`;

  return renderDepartmentPage({
    activeKey: "teaching",
    hero: {
      title: t("ktyh.teaching.hero_title"),
      summary: t("ktyh.teaching.hero_summary"),
      context: t("ktyh.unit_context"),
    },
    content,
  });
}
