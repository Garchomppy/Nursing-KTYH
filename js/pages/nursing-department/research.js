import {
  getDepartmentImages,
  getResearchActivities,
  getResearchGroups,
  getResearchPathways,
} from "../../data/nursing-department.js";
import { renderDepartmentPage } from "../../components/department-body.js";
import { t } from "../../i18n.js";

export function nursingResearch() {
  const DEPARTMENT_IMAGES = getDepartmentImages();
  const RESEARCH_PATHWAYS = getResearchPathways();
  const RESEARCH_ACTIVITIES = getResearchActivities();
  const RESEARCH_GROUPS = getResearchGroups();

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
    (group) => `
    <section class="research-group" aria-labelledby="${group.id}-title">
      <div class="research-group__heading">
        <p class="department-section-label">${group.title}</p>
        <h3 id="${group.id}-title">${group.title}</h3>
        <p>${group.description}</p>
      </div>
      <div class="research-accordion">
        ${group.categories
          .map(
            (category) => `
              <details>
                <summary><span>${category}</span><small>${t("dept.updating")}</small></summary>
                <div class="research-empty">
                  <h3>${t("dept.category_updating_title")}</h3>
                  <p>${t("dept.category_updating_desc")}</p>
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
        <p class="department-kicker">${t("nursing.research.pathways_kicker")}</p>
        <h2 id="research-pathways-title">${t("nursing.research.pathways_title")}</h2>
        <p>${t("nursing.research.pathways_desc")}</p>
      </div>
      <div class="research-pathways">${researchPathways}</div>
    </div>
  </section>

  <div class="department-section department-section--research department-section--muted">
    <div class="department-shell">
      <div class="department-section-heading research-section-heading">
        <p class="department-kicker">${t("nursing.research.groups_kicker")}</p>
        <h2>${t("nursing.research.groups_title")}</h2>
        <p>${t("nursing.research.groups_desc")}</p>
      </div>
      <div class="research-layout">${researchGroups}</div>
    </div>
  </div>

  <section class="department-section research-activities-section" aria-labelledby="research-activities-title">
    <div class="department-shell">
      <div class="department-section-heading research-section-heading">
        <p class="department-kicker">${t("nursing.research.activities_kicker")}</p>
        <h2 id="research-activities-title">${t("nursing.research.activities_title")}</h2>
        <p>${t("nursing.research.activities_desc")}</p>
      </div>
      <div class="research-activities">${researchActivities}</div>
    </div>
  </section>`;

  return renderDepartmentPage({
    activeKey: "research",
    hero: {
      title: t("nursing.research.hero_title"),
      context: t("nursing.research.hero_context"),
      summary: t("nursing.research.hero_summary"),
      image: DEPARTMENT_IMAGES.research.hero,
      imageCaption: t("nursing.research.hero_image_caption"),
    },
    content,
  });
}
