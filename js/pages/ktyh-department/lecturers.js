import { LECTURERS, DEPARTMENT_IMAGES } from "../../data/ktyh-department.js";
import { renderDepartmentPage } from "../../components/department-body.js";

const rootLecturer = LECTURERS.find((l) => l.order === 1);
const branch1Lecturers = LECTURERS.filter((l) => l.order >= 2 && l.order <= 6);
const branch2Lecturers = LECTURERS.filter((l) => l.order >= 7 && l.order <= 8);

function renderNode(lecturer, defaultIcon = "fa-user") {
  const href = lecturer.profileUrl || "javascript:void(0)";
  const target = lecturer.profileUrl ? 'target="_blank" rel="noopener noreferrer"' : "";
  const title = lecturer.profileUrl ? "Xem lý lịch khoa học" : "Lý lịch khoa học chưa cập nhật";
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

const branch1Nodes = branch1Lecturers.map((l) => renderNode(l, "fa-user")).join("");
const branch2Nodes = branch2Lecturers.map((l) => renderNode(l, "fa-user")).join("");

const content = `
  <section class="department-section department-section--muted lecturer-directory-section" aria-label="Sơ đồ tổ chức giảng viên Bộ môn Kỹ thuật Y học">
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
            <div class="branch-title">Giảng viên Chuyên trách</div>
            <div class="tree-line-vertical-small"></div>
            <div class="branch-nodes-grid">
              ${branch1Nodes}
            </div>
          </div>
          
          <!-- Branch 2: Giảng viên kiêm Giáo vụ -->
          <div class="tree-branch">
            <div class="branch-title">Giảng viên kiêm Giáo vụ</div>
            <div class="tree-line-vertical-small"></div>
            <div class="branch-nodes-grid">
              ${branch2Nodes}
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>`;

export const ktyhLecturers = renderDepartmentPage({
  activeKey: "lecturers",
  hero: {
    title: "Đội ngũ giảng viên",
    summary: "Sơ đồ tổ chức nhân sự giảng dạy và quản lý chuyên môn tại Bộ môn Kỹ thuật Y học.",
    image: DEPARTMENT_IMAGES.lecturers.hero,
    imageCaption: "Tập thể giảng viên Bộ môn Kỹ thuật Y học năm 2026",
    context: "Khoa Điều dưỡng - Kỹ thuật Y học",
  },
  content,
});
