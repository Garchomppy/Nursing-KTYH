const pages = {
  home: `
        <!-- Giới thiệu ngắn -->
        <section class="section bg-white">
            <div class="container" style="text-align: center;">
                <h2 class="section-title">Chào mừng đến với khoa Điều Dưỡng - KTYH</h2>
                <p>Vui lòng chọn các mục trên menu để xem chi tiết.</p>
            </div>
        </section>
    `,
  "gioi-thieu": `
        <!-- Giới thiệu chung -->
        <section id="gioi-thieu" class="section bg-white">
            <div class="container">
                <h2 class="section-title">Giới thiệu chung</h2>
                <div class="content-block">
                    <p>Khoa Điều dưỡng – Kỹ thuật Y học thuộc Trường Y Dược - Đại học Đà Nẵng được hình thành và phát triển nhằm đáp ứng nhu cầu cấp thiết về nguồn nhân lực y tế chất lượng cao cho khu vực miền Trung - Tây Nguyên và cả nước.</p>
                   
                    <div style="text-align: center; margin-bottom: 40px;">
                        <img src="./assets/images/2.%20GV%20khoa%202026-2.jpg" alt="Tập thể giảng viên Khoa Điều dưỡng - KTYH" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    </div>
                    
                    <p>Trải qua quá trình phát triển, Khoa đã khẳng định được vị thế là một trong những đơn vị đào tạo trọng điểm. Khoa luôn tiên phong trong việc đổi mới chương trình đào tạo Cử nhân Điều dưỡng, Cử nhân Kỹ thuật Xét nghiệm Y học và các chuyên ngành kỹ thuật y học khác theo chuẩn năng lực, đáp ứng yêu cầu hội nhập quốc tế.</p>
                    <p>Đặc biệt, Khoa có mối liên hệ chặt chẽ với các tổ chức y tế và mạng lưới các bệnh viện lớn trên địa bàn như Bệnh viện Đà Nẵng, Bệnh viện C Đà Nẵng, Bệnh viện Phụ sản - Nhi Đà Nẵng. Việc đẩy mạnh mô hình gắn kết Viện – Trường với hàng chục cơ sở thực hành chất lượng giúp sinh viên có môi trường rèn luyện lâm sàng chuyên sâu, sát với thực tế nhất.</p>
                    <p>Từ khi thành lập đến nay, Khoa Điều dưỡng - Kỹ thuật Y học luôn hoàn thành xuất sắc nhiệm vụ giảng dạy và nghiên cứu khoa học. Tập thể giảng viên và sinh viên của Khoa đã liên tục đạt nhiều thành tích đáng tự hào, nhận được các bằng khen, giấy khen của Giám đốc Đại học Đà Nẵng, UBND Thành phố Đà Nẵng và Bộ Giáo dục & Đào tạo.</p>
                </div>
            </div>
        </section>
    `,
  "chuc-nang": `
        <!-- Chức năng - Nhiệm vụ -->
        <section id="chuc-nang" class="section bg-muted">
            <div class="container">
                <h2 class="section-title">Chức năng - Nhiệm vụ</h2>
                <div class="grid-2">
                    <div class="card">
                        <h3>Chức năng</h3>
                        <ul>
                            <li>Tổ chức và quản lý quá trình đào tạo các ngành Điều dưỡng và Kỹ thuật y học ở bậc Đại học và Sau Đại học.</li>
                            <li>Nghiên cứu khoa học trong lĩnh vực y khoa, điều dưỡng và kỹ thuật y học.</li>
                            <li>Phối hợp với các bệnh viện thực hành để đảm bảo chất lượng đào tạo lâm sàng.</li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3>Nhiệm vụ</h3>
                        <ul>
                            <li>Xây dựng chương trình, kế hoạch giảng dạy, học tập và chủ trì tổ chức quá trình đào tạo một hoặc một số ngành.</li>
                            <li>Quản lý giảng viên, người lao động và người học thuộc Khoa.</li>
                            <li>Quản lý chất lượng, nội dung, phương pháp đào tạo và nghiên cứu khoa học.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `,
  "so-do": `
        <!-- Sơ đồ cơ cấu tổ chức -->
        <style>
        .custom-tree {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: var(--font-primary);
            padding: 40px 20px;
            overflow-x: auto;
        }
        .custom-node {
            border: 2px solid var(--primary);
            padding: 10px 15px;
            border-radius: 4px;
            background: white;
            font-weight: 500;
            text-align: center;
            position: relative;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            z-index: 2;
        }
        .custom-node.main {
            font-weight: bold;
        }
        .tree-row {
            display: flex;
            justify-content: center;
            position: relative;
            gap: 40px;
        }
        .line-down {
            width: 2px;
            height: 30px;
            background-color: var(--primary);
            margin: 0 auto;
            z-index: 1;
        }
        .horizontal-line {
            position: absolute;
            top: 0;
            height: 2px;
            background-color: var(--primary);
            z-index: 1;
        }
        /* Bracket list */
        .bracket-list {
            border-left: 2px solid var(--primary);
            padding-left: 15px;
            position: relative;
            margin-top: 10px;
        }
        .bracket-item {
            position: relative;
            margin-bottom: 15px;
        }
        .bracket-item::before {
            content: '';
            position: absolute;
            left: -17px;
            top: 50%;
            width: 15px;
            height: 2px;
            background-color: var(--primary);
        }
        .bracket-label {
            font-weight: bold;
            margin-bottom: 10px;
            color: var(--primary);
        }
        </style>

        <section id="so-do" class="section bg-white">
            <div class="container">
                <h2 class="section-title">Sơ đồ cơ cấu tổ chức</h2>
                <div class="custom-tree">
                    
                    <!-- Branches level -->
                    <div style="position: relative; width: 100%; max-width: 800px;">
                        <div class="tree-row" style="gap: 40px; justify-content: space-between;">
                            
                            <!-- Col 1 -->
                            <div style="display: flex; flex-direction: column; align-items: center; width: 200px;">
                                <div class="custom-node">Liên đoàn khoa</div>
                            </div>
                            
                            <!-- Col 2 -->
                            <div style="display: flex; flex-direction: column; align-items: center; width: 220px;">
                                <div class="custom-node main" style="width: 100%;">Bộ môn điều dưỡng</div>
                                <div class="line-down"></div>
                                <div class="custom-node" style="width: 100%;">Danh sách GV</div>
                                
                                <div style="margin-top: 15px; width: 100%;">
                                    <details class="custom-node" style="cursor: pointer; text-align: left; padding: 10px; box-sizing: border-box;">
                                        <summary style="font-weight: bold; outline: none; color: var(--primary); user-select: none;">Nhiệm vụ chính</summary>
                                        <div style="margin-top: 15px; display: flex; flex-direction: column; gap: 10px;">
                                            <div class="custom-node" style="font-weight: normal; font-size: 14px; padding: 6px;">Giảng dạy</div>
                                            <div class="custom-node" style="font-weight: normal; font-size: 14px; padding: 6px;">Nghiên cứu KH</div>
                                            <div class="custom-node" style="font-weight: normal; font-size: 14px; padding: 6px;">Phục vụ cộng đồng</div>
                                        </div>
                                    </details>
                                </div>
                            </div>
                            
                            <!-- Col 3 -->
                            <div style="display: flex; flex-direction: column; align-items: center; width: 220px;">
                                <div class="custom-node main" style="width: 100%;">Bộ môn KTYH</div>
                                <div class="line-down"></div>
                                <div class="custom-node" style="width: 100%;">Danh sách GV</div>
                                
                                <div style="margin-top: 15px; width: 100%;">
                                    <details class="custom-node" style="cursor: pointer; text-align: left; padding: 10px; box-sizing: border-box;">
                                        <summary style="font-weight: bold; outline: none; color: var(--primary); user-select: none;">Nhiệm vụ chính</summary>
                                        <div style="margin-top: 15px; display: flex; flex-direction: column; gap: 10px;">
                                            <div class="custom-node" style="font-weight: normal; font-size: 14px; padding: 6px;">Giảng dạy</div>
                                            <div class="custom-node" style="font-weight: normal; font-size: 14px; padding: 6px;">Nghiên cứu KH</div>
                                            <div class="custom-node" style="font-weight: normal; font-size: 14px; padding: 6px;">Phục vụ cộng đồng</div>
                                        </div>
                                    </details>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
  "lanh-dao": `
        <!-- Ban lãnh đạo -->
        <section id="lanh-dao" class="section bg-muted">
            <div class="container">
                <h2 class="section-title">Ban lãnh đạo</h2>
                <div class="grid-3">
                    <!-- Leader 1 -->
                    <div class="card profile-card">
                        <div class="avatar placeholder-avatar"></div>
                        <h3>TS. BS. Nguyễn Văn A</h3>
                        <p class="role">Trưởng Khoa</p>
                        <a href="#" class="btn-link">Xem hồ sơ &rarr;</a>
                    </div>
                    <!-- Leader 2 -->
                    <div class="card profile-card">
                        <div class="avatar placeholder-avatar"></div>
                        <h3>ThS. Điều Dưỡng Trần Thị B</h3>
                        <p class="role">Phó Trưởng Khoa</p>
                        <a href="#" class="btn-link">Xem hồ sơ &rarr;</a>
                    </div>
                    <!-- Leader 3 -->
                    <div class="card profile-card">
                        <div class="avatar placeholder-avatar"></div>
                        <h3>ThS. KTYH Lê Văn C</h3>
                        <p class="role">Phó Trưởng Khoa</p>
                        <a href="#" class="btn-link">Xem hồ sơ &rarr;</a>
                    </div>
                </div>
            </div>
        </section>
    `,
  "lien-he": `
        <!-- Liên hệ -->
        <section id="lien-he" class="section bg-white">
            <div class="container">
                <h2 class="section-title">Liên hệ Khoa</h2>
                <div class="content-block" style="text-align: center;">
                    <p><strong>Địa chỉ:</strong> Khu đô thị Đại học Đà Nẵng, P. Hòa Quý, Q. Ngũ Hành Sơn, TP. Đà Nẵng</p>
                    <p><strong>Điện thoại:</strong> 0236 3 xxx xxx</p>
                    <p><strong>Email:</strong> khoadieuduong@smp.udn.vn</p>
                </div>
            </div>
        </section>
    `,
};

function renderPage() {
  // Lấy hash hiện tại (vd: #/gioi-thieu -> gioi-thieu)
  let hash = window.location.hash.replace("#/", "");
  if (!hash || hash === "") {
    hash = "home"; // Mặc định là trang chủ
  }

  const appDiv = document.getElementById("app");

  // Kiểm tra xem route có tồn tại không, nếu có thì render nội dung, nếu không thì hiển thị lỗi
  if (pages[hash]) {
    appDiv.innerHTML = pages[hash];
  } else {
    appDiv.innerHTML =
      '<section class="section bg-white"><div class="container"><h2 class="section-title">404 - Không tìm thấy trang</h2></div></section>';
  }
}

// Lắng nghe sự kiện thay đổi hash (khi user click vào link có dạng #/...)
window.addEventListener("hashchange", renderPage);

// Chạy lần đầu khi load trang
window.addEventListener('DOMContentLoaded', renderPage);

const backToTopButton = document.querySelector('.back-to-top');

if (backToTopButton) {
    const updateBackToTopVisibility = () => {
        backToTopButton.classList.toggle('is-visible', window.scrollY > 300);
    };

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
    updateBackToTopVisibility();
}
