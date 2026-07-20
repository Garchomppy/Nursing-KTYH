import { t } from "../i18n.js";

function renderHero({
  title,
  summary,
  context = t("dept.default_context"),
  image = null,
  imageCaption = "",
}) {
  const media = image
    ? `<figure class="department-hero__media">
        <img src="${image.src}" alt="${image.alt}" width="${image.width || 1920}" height="${image.height || 2560}" fetchpriority="high">
        ${imageCaption ? `<figcaption>${imageCaption}</figcaption>` : ""}
      </figure>`
    : "";

  return `
    <header class="department-hero ${image ? "department-hero--media" : ""}">
      <div class="department-shell department-hero__grid">
        <div class="department-hero__content">
          <p class="department-hero__context">${context}</p>
          <h1>${title}</h1>
          <p class="department-hero__summary">${summary}</p>
        </div>
        ${media}
      </div>
    </header>`;
}

export function renderImageOrPlaceholder(image, note) {
  if (!image) {
    return `
      <div class="department-image-placeholder" role="img" aria-label="${note}">
        <span>${t("dept.image_updating")}</span>
        <small>${note}</small>
      </div>`;
  }

  return `<img class="department-section-image" src="${image.src}" alt="${image.alt}" width="1920" height="2560" loading="lazy">`;
}

export function renderDepartmentPage({ activeKey, hero, content }) {
  return `
    <div class="department-page" data-department-page="${activeKey}">
      ${renderHero(hero)}
      ${content}
    </div>`;
}
