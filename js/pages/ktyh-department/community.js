import {
  getCommunityAreas,
  getCommunityImages,
  getCommunityProcess,
} from "../../data/ktyh-department.js";
import { renderDepartmentPage } from "../../components/department-body.js";
import { t } from "../../i18n.js";

export function ktyhCommunity() {
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
        <h2 id="community-activities-title">${t("ktyh.community.activities_title")}</h2>
        <p>${t("ktyh.community.activities_desc")}</p>
      </div>
      <div class="community-activity-list">${activityAreas}</div>
    </div>
  </section>

  <section class="department-section community-process-section" aria-labelledby="community-process-title">
    <div class="department-shell community-process-layout">
      <div class="community-process-intro">
        <h2 id="community-process-title">${t("ktyh.community.process_title")}</h2>
        <p>${t("ktyh.community.process_desc")}</p>
      </div>
      <ol class="community-process-list">${processSteps}</ol>
    </div>
  </section>

  <section class="department-section department-section--muted community-learning-section" aria-labelledby="community-learning-title">
    <div class="department-shell community-learning-layout">
      <figure class="community-learning-media">
        <img src="${COMMUNITY_IMAGES.learning.src}" alt="${COMMUNITY_IMAGES.learning.alt}" width="${COMMUNITY_IMAGES.learning.width}" height="${COMMUNITY_IMAGES.learning.height}" loading="lazy">
        <figcaption>${t("ktyh.community.learning_image_caption")}</figcaption>
      </figure>
      <div class="community-learning-content">
        <h2 id="community-learning-title">${t("ktyh.community.learning_title")}</h2>
        <p>${t("ktyh.community.learning_desc")}</p>
        <ul>
          <li>${t("ktyh.community.learning_li1")}</li>
          <li>${t("ktyh.community.learning_li2")}</li>
          <li>${t("ktyh.community.learning_li3")}</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="department-section teaching-gallery" aria-label="${t("ktyh.community.gallery_aria_label", "Hình ảnh hoạt động lớp đào tạo CME")}">
    <div class="department-shell">
      <div class="teaching-gallery__heading">
        <p class="department-kicker">${t("ktyh.community.gallery_kicker", "Hình ảnh khóa học")}</p>
        <h3>${t("ktyh.community.gallery_title", "Không gian giảng dạy lý thuyết và thực hành lớp CME")}</h3>
      </div>
      <div class="teaching-gallery__grid">
        <figure>
          <img src="${COMMUNITY_IMAGES.hero.src}" alt="${COMMUNITY_IMAGES.hero.alt}" width="${COMMUNITY_IMAGES.hero.width}" height="${COMMUNITY_IMAGES.hero.height}" loading="lazy">
          <figcaption>${COMMUNITY_IMAGES.hero.alt}</figcaption>
        </figure>
        <figure>
          <img src="${COMMUNITY_IMAGES.learning.src}" alt="${COMMUNITY_IMAGES.learning.alt}" width="${COMMUNITY_IMAGES.learning.width}" height="${COMMUNITY_IMAGES.learning.height}" loading="lazy">
          <figcaption>${COMMUNITY_IMAGES.learning.alt}</figcaption>
        </figure>
        <figure>
          <img src="${COMMUNITY_IMAGES.certificate.src}" alt="${COMMUNITY_IMAGES.certificate.alt}" width="${COMMUNITY_IMAGES.certificate.width}" height="${COMMUNITY_IMAGES.certificate.height}" loading="lazy">
          <figcaption>${COMMUNITY_IMAGES.certificate.alt}</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="department-section community-records-section" aria-labelledby="community-records-title">
    <div class="department-shell community-records-layout">
      <div>
        <h2 id="community-records-title">${t("ktyh.community.records_title")}</h2>
        <p>${t("ktyh.community.records_desc")}</p>
      </div>
      <aside class="community-records-status" aria-label="${t("ktyh.community.records_status_label")}">
        <p class="department-status" style="background-color: #e6f7ed; color: #1f7a40; border-color: #a3e0be;">${t("ktyh.community.records_status")}</p>
        <h3>${t("ktyh.community.records_status_title")}</h3>
        <p>${t("ktyh.community.records_status_desc")}</p>
      </aside>
    </div>
  </section>

  <section class="department-section department-community-cta" aria-labelledby="community-contact-title">
    <div class="department-shell department-community-cta__inner">
      <div>
        <p class="department-kicker">${t("ktyh.community.cta_kicker")}</p>
        <h2 id="community-contact-title">${t("ktyh.community.cta_title")}</h2>
        <p>${t("ktyh.community.cta_desc")}</p>
      </div>
      <a href="#/lien-he">${t("ktyh.community.cta_link")}</a>
    </div>
  </section>`;

  return renderDepartmentPage({
    activeKey: "community",
    hero: {
      title: t("ktyh.community.hero_title"),
      summary: t("ktyh.community.hero_summary"),
      image: COMMUNITY_IMAGES.hero,
      imageCaption: t("ktyh.community.hero_image_caption"),
      context: t("ktyh.unit_context"),
    },
    content,
  });
}
