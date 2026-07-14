import {
  COMMUNITY_AREAS,
  COMMUNITY_IMAGES,
  COMMUNITY_PROCESS,
} from "../../data/nursing-department.js";
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
        <h2 id="community-activities-title">Chuyên môn được chuyển thành giá trị thực tế</h2>
        <p>Bộ môn định hướng hoạt động theo nhu cầu sức khỏe cụ thể, trong phạm vi chuyên môn điều dưỡng và trách nhiệm được Nhà trường phân công.</p>
      </div>
      <div class="community-activity-list">${activityAreas}</div>
    </div>
  </section>

  <section class="department-section community-process-section" aria-labelledby="community-process-title">
    <div class="department-shell community-process-layout">
      <div class="community-process-intro">
        <h2 id="community-process-title">Một chương trình bắt đầu từ nhu cầu thực tế</h2>
        <p>Phối hợp cộng đồng không chỉ là mang một nội dung có sẵn đi triển khai. Mỗi chương trình cần được chuẩn bị cùng đơn vị tiếp nhận và có phản hồi sau hoạt động.</p>
      </div>
      <ol class="community-process-list">${processSteps}</ol>
    </div>
  </section>

  <section class="department-section department-section--muted community-learning-section" aria-labelledby="community-learning-title">
    <div class="department-shell community-learning-layout">
      <figure class="community-learning-media">
        <img src="${COMMUNITY_IMAGES.learning.src}" alt="${COMMUNITY_IMAGES.learning.alt}" width="${COMMUNITY_IMAGES.learning.width}" height="${COMMUNITY_IMAGES.learning.height}" loading="lazy">
        <figcaption>Năng lực thực hành được chuẩn bị trước khi người học tham gia môi trường lâm sàng và cộng đồng.</figcaption>
      </figure>
      <div class="community-learning-content">
        <h2 id="community-learning-title">Phục vụ cũng là một cách học</h2>
        <p>Hoạt động cộng đồng giúp sinh viên đặt kiến thức điều dưỡng vào bối cảnh đời sống, nơi kỹ năng giao tiếp và sự tôn trọng quan trọng như kỹ thuật chuyên môn.</p>
        <ul>
          <li>Nhận diện nhu cầu sức khỏe trong bối cảnh cụ thể.</li>
          <li>Truyền đạt thông tin rõ ràng, phù hợp với người tiếp nhận.</li>
          <li>Phối hợp trách nhiệm với giảng viên và đơn vị liên quan.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="department-section community-records-section" aria-labelledby="community-records-title">
    <div class="department-shell community-records-layout">
      <div>
        <h2 id="community-records-title">Hoạt động được công bố khi có hồ sơ xác minh</h2>
        <p>Trang không hiển thị số liệu ước đoán. Mỗi chương trình sẽ được bổ sung cùng thời gian, đơn vị phối hợp, hình ảnh và kết quả đã được xác nhận.</p>
      </div>
      <aside class="community-records-status" aria-label="Trạng thái dữ liệu hoạt động cộng đồng">
        <p class="department-status">Đang bổ sung dữ liệu</p>
        <h3>Hồ sơ chương trình chưa được bàn giao đầy đủ</h3>
        <p>Nội dung sẽ được cập nhật sau khi Bộ môn hoàn tất rà soát và phê duyệt thông tin.</p>
      </aside>
    </div>
  </section>

  <section class="department-section department-community-cta" aria-labelledby="community-contact-title">
    <div class="department-shell department-community-cta__inner">
      <div>
        <p class="department-kicker">Kết nối hợp tác</p>
        <h2 id="community-contact-title">Cùng xây dựng chương trình phù hợp</h2>
        <p>Bệnh viện, cơ sở y tế, trường học và địa phương có thể liên hệ đầu mối chung của Khoa để trao đổi nhu cầu giáo dục sức khỏe, tập huấn kỹ năng hoặc phối hợp chuyên môn.</p>
      </div>
      <a href="#/lien-he">Thông tin liên hệ</a>
    </div>
  </section>`;

export const nursingCommunity = renderDepartmentPage({
  activeKey: "community",
  hero: {
    title: "Phục vụ cộng đồng",
    summary: "Kết nối chuyên môn điều dưỡng với nhu cầu giáo dục, chăm sóc và nâng cao sức khỏe trong cộng đồng.",
    image: COMMUNITY_IMAGES.hero,
    imageCaption: "Sinh hoạt chuyên đề với đối tác, một hình thức mở rộng trao đổi chuyên môn ngoài lớp học.",
  },
  content,
});
