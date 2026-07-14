import { DEPARTMENT_IMAGES, LECTURERS } from "../../data/nursing-department.js";
import { renderDepartmentPage } from "../../components/department-body.js";

function renderProfileAction(lecturer) {
  if (!lecturer.profileUrl) {
    return '<span class="department-status">Chưa cập nhật</span>';
  }

  return `<a class="department-text-link" href="${lecturer.profileUrl}" target="_blank" rel="noopener noreferrer">Xem lý lịch khoa học</a>`;
}

const directoryItems = LECTURERS.map(
  (lecturer) => `
    <article class="lecturer-directory-item" role="listitem">
      <p class="lecturer-directory-item__number" aria-label="Số thứ tự ${lecturer.order}">${String(lecturer.order).padStart(2, "0")}</p>
      <div class="lecturer-directory-item__identity">
        <div class="lecturer-directory-item__title">
          <h3>${lecturer.fullName}</h3>
          ${lecturer.isSample ? '<span class="lecturer-sample-badge">Dữ liệu mẫu</span>' : ""}
        </div>
        <p>${lecturer.position}</p>
      </div>
      <div class="lecturer-directory-item__profile">
        <p>Lý lịch khoa học</p>
        ${renderProfileAction(lecturer)}
      </div>
    </article>`,
).join("");

const content = `
  <section class="department-section department-section--muted lecturer-directory-section" aria-label="Danh sách giảng viên Bộ môn Điều dưỡng">
    <div class="department-shell">
      <div class="lecturer-directory" role="list" aria-label="Danh sách giảng viên Bộ môn Điều dưỡng">
        ${directoryItems}
      </div>
    </div>
  </section>`;

export const nursingLecturers = renderDepartmentPage({
  activeKey: "lecturers",
  hero: {
    title: "Đội ngũ giảng viên",
    summary: "Đội ngũ phụ trách đào tạo, nghiên cứu khoa học và hướng dẫn thực hành tại Bộ môn Điều dưỡng.",
    image: DEPARTMENT_IMAGES.lecturers.hero,
    imageCaption: "Tập thể giảng viên Bộ môn Điều dưỡng năm 2026",
  },
  content,
});
