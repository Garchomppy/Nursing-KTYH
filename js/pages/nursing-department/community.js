import {
  getCommunityAreas,
  getCommunityImages,
  getCommunityProcess,
} from "../../data/nursing-department.js";
import { renderDepartmentPage } from "../../components/department-body.js";
import { t } from "../../i18n.js";

export function nursingCommunity() {
  const COMMUNITY_AREAS = getCommunityAreas();
  const COMMUNITY_PROCESS = getCommunityProcess();
  const COMMUNITY_IMAGES = getCommunityImages();

  const activityAreas = COMMUNITY_AREAS.map(
    (activity) => `
    <article class="community-activity">
      <h3>${activity.title}</h3>
      <p>${activity.description}</p>
      <p class="community-activity__focus"><strong>${t("dept.highlight_label")}</strong> ${activity.focus}</p>
    </article>`,
  ).join("");

  const processSteps = COMMUNITY_PROCESS.map(
    (step) => `
    <li>
      <h3>${step.title}</h3>
      <p>${step.description}</p>
    </li>`,
  ).join("");

  const content = `
  <section class="department-section department-section--muted community-activities-section" aria-labelledby="community-activities-title">
    <div class="department-shell">
      <div class="department-section-heading community-section-heading">
        <h2 id="community-activities-title">${t("nursing.community.activities_title")}</h2>
        <p>${t("nursing.community.activities_desc")}</p>
      </div>
      <div class="community-activity-list">${activityAreas}</div>
    </div>
  </section>

  <section class="department-section community-process-section" aria-labelledby="community-process-title">
    <div class="department-shell community-process-layout">
      <div class="community-process-intro">
        <h2 id="community-process-title">${t("nursing.community.process_title")}</h2>
        <p>${t("nursing.community.process_desc")}</p>
      </div>
      <ol class="community-process-list">${processSteps}</ol>
    </div>
  </section>

  <section class="department-section department-section--muted community-learning-section" aria-labelledby="community-learning-title">
    <div class="department-shell community-learning-layout">
      <figure class="community-learning-media">
        <img src="${COMMUNITY_IMAGES.learning.src}" alt="${COMMUNITY_IMAGES.learning.alt}" width="${COMMUNITY_IMAGES.learning.width}" height="${COMMUNITY_IMAGES.learning.height}" loading="lazy">
        <figcaption>${t("nursing.community.learning_image_caption")}</figcaption>
      </figure>
      <div class="community-learning-content">
        <h2 id="community-learning-title">${t("nursing.community.learning_title")}</h2>
        <p>${t("nursing.community.learning_desc")}</p>
        <ul>
          <li>${t("nursing.community.learning_li1")}</li>
          <li>${t("nursing.community.learning_li2")}</li>
          <li>${t("nursing.community.learning_li3")}</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="department-section community-records-section" aria-labelledby="community-records-title">
    <div class="department-shell community-records-layout">
      <div>
        <h2 id="community-records-title">${t("nursing.community.records_title")}</h2>
        <p>${t("nursing.community.records_desc")}</p>
      </div>
      <aside class="community-records-status" aria-label="${t("nursing.community.records_status_label")}">
        <p class="department-status">${t("nursing.community.records_status")}</p>
        <h3>${t("nursing.community.records_status_title")}</h3>
        <p>${t("nursing.community.records_status_desc")}</p>
      </aside>
    </div>
  </section>

  <section class="department-section department-community-cta" aria-labelledby="community-contact-title">
    <div class="department-shell department-community-cta__inner">
      <div>
        <p class="department-kicker">${t("nursing.community.cta_kicker")}</p>
        <h2 id="community-contact-title">${t("nursing.community.cta_title")}</h2>
        <p>${t("nursing.community.cta_desc")}</p>
      </div>
      <a href="#/lien-he">${t("nursing.community.cta_link")}</a>
    </div>
  </section>`;

  return renderDepartmentPage({
    activeKey: "community",
    hero: {
      title: t("nursing.community.hero_title"),
      summary: t("nursing.community.hero_summary"),
      image: COMMUNITY_IMAGES.hero,
      imageCaption: t("nursing.community.hero_image_caption"),
    },
    content,
  });
}
