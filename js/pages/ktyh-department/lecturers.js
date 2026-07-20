import { getLecturers, getDepartmentImages } from "../../data/ktyh-department.js";
import { renderDepartmentPage } from "../../components/department-body.js";
import { t } from "../../i18n.js";

function renderNode(lecturer, defaultIcon = "fa-user") {
  const href = lecturer.profileUrl || "javascript:void(0)";
  const target = lecturer.profileUrl ? 'target="_blank" rel="noopener noreferrer"' : "";
  const title = lecturer.profileUrl ? t("ktyh.lecturers.view_profile_title") : t("ktyh.lecturers.no_profile_title");
  const activeClass = lecturer.profileUrl ? "active-node" : "";

  let icon = defaultIcon;
  if (lecturer.order === 1) icon = "fa-user-tie";
  else if (lecturer.fullName.startsWith("TS")) icon = "fa-user-graduate";
  else if (lecturer.fullName.includes("BS")) icon = "fa-user-md";
  else if (lecturer.position.includes("Giáo vụ")) icon = "fa-user-edit";

  return `
    <a href="${href}" ${target} class="tree-node ${activeClass}" title="${title}">
      <div class="node-avatar-container">
        <i class="fas ${icon}"></i>
      </div>
      <div class="node-info">
        <div class="node-name">${lecturer.fullName}</div>
        <div class="node-role">${lecturer.position}</div>
      </div>
    </a>
  `;
}

export function ktyhLecturers() {
  const LECTURERS = getLecturers();
  const DEPARTMENT_IMAGES = getDepartmentImages();

  const rootLecturer = LECTURERS.find((l) => l.order === 1);
  const branch1Lecturers = LECTURERS.filter((l) => l.order >= 2 && l.order <= 6);
  const branch2Lecturers = LECTURERS.filter((l) => l.order >= 7 && l.order <= 8);

  const branch1Nodes = branch1Lecturers.map((l) => renderNode(l, "fa-user")).join("");
  const branch2Nodes = branch2Lecturers.map((l) => renderNode(l, "fa-user")).join("");

  const content = `
  <section class="department-section department-section--muted lecturer-directory-section" aria-label="${t("ktyh.lecturers.aria_label")}">
    <div class="department-shell">
      <div class="lecturer-tree-container">

        <!-- Root Node -->
        <div class="tree-root">
          ${renderNode(rootLecturer, "fa-user-tie")}
        </div>

        <div class="tree-line-vertical"></div>

        <!-- Sub-branches -->
        <div class="tree-branches-container">
          <!-- Branch 1: Giảng viên chuyên trách -->
          <div class="tree-branch">
            <div class="branch-title">${t("ktyh.lecturers.branch1_title")}</div>
            <div class="tree-line-vertical-small"></div>
            <div class="branch-nodes-grid">
              ${branch1Nodes}
            </div>
          </div>

          <!-- Branch 2: Giảng viên kiêm Giáo vụ -->
          <div class="tree-branch">
            <div class="branch-title">${t("ktyh.lecturers.branch2_title")}</div>
            <div class="tree-line-vertical-small"></div>
            <div class="branch-nodes-grid">
              ${branch2Nodes}
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>`;

  return renderDepartmentPage({
    activeKey: "lecturers",
    hero: {
      title: t("ktyh.lecturers.hero_title"),
      summary: t("ktyh.lecturers.hero_summary"),
      image: DEPARTMENT_IMAGES.lecturers.hero,
      imageCaption: t("ktyh.lecturers.hero_image_caption"),
      context: t("dept.default_context"),
    },
    content,
  });
}
