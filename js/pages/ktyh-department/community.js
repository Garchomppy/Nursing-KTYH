import {
  COMMUNITY_AREAS,
  COMMUNITY_IMAGES,
  COMMUNITY_PROCESS,
} from "../../data/ktyh-department.js";
import { renderDepartmentPage } from "../../components/department-body.js";

const activityAreas = COMMUNITY_AREAS.map(
  (activity) => `
    <article class="community-activity">
      <h3>${activity.title}</h3>
      <p>${activity.description}</p>
      <p class="community-activity__focus"><strong>Trọng tâm</strong> ${activity.focus}</p>
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
        <h2 id="community-activities-title">Chuyên môn KTYH đóng góp cho sức khỏe xã hội</h2>
        <p>Bộ môn định hướng hoạt động theo nhu cầu sàng lọc sức khỏe thực tiễn của cộng đồng, phối hợp chặt chẽ cùng các bệnh viện và các ban ngành địa phương.</p>
      </div>
      <div class="community-activity-list">${activityAreas}</div>
    </div>
  </section>

  <section class="department-section community-process-section" aria-labelledby="community-process-title">
    <div class="department-shell community-process-layout">
      <div class="community-process-intro">
        <h2 id="community-process-title">Cách thức chúng tôi tổ chức chương trình cộng đồng</h2>
        <p>Mỗi hoạt động chăm sóc sức khỏe cộng đồng đều tuân thủ chặt chẽ các yêu cầu về an toàn sinh học, từ khâu khảo sát nhu cầu, thu thập mẫu xét nghiệm cho đến tư vấn phản hồi.</p>
      </div>
      <ol class="community-process-list">${processSteps}</ol>
    </div>
  </section>

  <section class="department-section department-section--muted community-learning-section" aria-labelledby="community-learning-title">
    <div class="department-shell community-learning-layout">
      <figure class="community-learning-media">
        <img src="${COMMUNITY_IMAGES.learning.src}" alt="${COMMUNITY_IMAGES.learning.alt}" width="${COMMUNITY_IMAGES.learning.width}" height="${COMMUNITY_IMAGES.learning.height}" loading="lazy">
        <figcaption>Sinh viên chuẩn bị năng lực thao tác lấy mẫu và kiểm định chất lượng xét nghiệm kỹ lưỡng trước khi tham gia hoạt động cộng đồng.</figcaption>
      </figure>
      <div class="community-learning-content">
        <h2 id="community-learning-title">Phục vụ cộng đồng nâng cao tay nghề thực tiễn</h2>
        <p>Các chương trình thiện nguyện mang lại trải nghiệm thực tiễn quý giá cho sinh viên Kỹ thuật Y học, rèn luyện kỹ năng lấy mẫu hiện trường, xử lý dữ liệu và giao tiếp chuyên nghiệp.</p>
        <ul>
          <li>Nhận diện vấn đề sức khỏe ưu tiên cần xét nghiệm sàng lọc.</li>
          <li>Thực hành kỹ thuật xét nghiệm trong môi trường lưu động dã ngoại.</li>
          <li>Phát triển đạo đức nghề nghiệp và ý thức trách nhiệm xã hội.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="department-section community-records-section" aria-labelledby="community-records-title">
    <div class="department-shell community-records-layout">
      <div>
        <h2 id="community-records-title">Tính minh bạch trong hoạt động cộng đồng</h2>
        <p>Bộ môn Kỹ thuật Y học chỉ công bố số liệu và hình ảnh khi có hồ sơ báo cáo tổng kết được nghiệm thu chính thức.</p>
      </div>
      <aside class="community-records-status" aria-label="Trạng thái dữ liệu hoạt động cộng đồng KTYH">
        <p class="department-status">Đang bổ sung dữ liệu</p>
        <h3>Đang tổng hợp hồ sơ các đợt khám sàng lọc thiện nguyện</h3>
        <p>Hình ảnh và số liệu chi tiết sẽ được công bố sau khi được thẩm định hoàn tất.</p>
      </aside>
    </div>
  </section>

  <section class="department-section department-community-cta" aria-labelledby="community-contact-title">
    <div class="department-shell department-community-cta__inner">
      <div>
        <p class="department-kicker">Kết nối hợp tác</p>
        <h2 id="community-contact-title">Phối hợp xây dựng chương trình sàng lọc y tế</h2>
        <p>Các cơ sở y tế địa phương, trường học hoặc hội từ thiện có thể liên hệ để phối hợp tổ chức các buổi xét nghiệm nhanh sàng lọc và tuyên truyền y tế cộng đồng.</p>
      </div>
      <a href="#/lien-he">Thông tin liên hệ</a>
    </div>
  </section>`;

export const ktyhCommunity = renderDepartmentPage({
  activeKey: "community",
  hero: {
    title: "Phục vụ cộng đồng",
    summary: "Ứng dụng chuyên môn Kỹ thuật Y học vào các chương trình sàng lọc bệnh tật, chăm sóc sức khỏe ban đầu và nâng cao nhận thức an toàn sinh học trong cộng đồng.",
    image: COMMUNITY_IMAGES.hero,
    imageCaption: "Sinh viên và giảng viên Bộ môn tham gia các hoạt động chuyên môn hỗ trợ xã hội.",
    context: "Khoa Điều dưỡng - Kỹ thuật Y học",
  },
  content,
});
