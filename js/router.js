const pages = {
    'home': `
        <!-- Giới thiệu ngắn -->
        <section class="section bg-white">
            <div class="container" style="text-align: center;">
                <h2 class="section-title">Chào mừng đến với khoa Điều Dưỡng - KTYH</h2>
                <p>Vui lòng chọn các mục trên menu để xem chi tiết.</p>
            </div>
        </section>
    `,
    'gioi-thieu': `
        <!-- Giới thiệu chung -->
        <section id="gioi-thieu" class="section bg-white">
            <div class="container">
                <h2 class="section-title">Giới thiệu chung</h2>
                <div class="content-block">
                    <p>Khoa Điều Dưỡng - Kỹ Thuật Y Học là một trong những khoa trọng điểm với lịch sử hình thành và phát triển gắn liền với sự lớn mạnh của trường. Khoa chuyên đào tạo nguồn nhân lực y tế chất lượng cao, có đạo đức nghề nghiệp và kỹ năng thực hành xuất sắc, đáp ứng nhu cầu chăm sóc sức khỏe ngày càng cao của xã hội.</p>
                    <p>Với đội ngũ giảng viên giàu kinh nghiệm và hệ thống phòng thực hành mô phỏng hiện đại, sinh viên được trang bị đầy đủ kiến thức lý thuyết lẫn thực tiễn lâm sàng.</p>
                </div>
            </div>
        </section>
    `,
    'chuc-nang': `
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
    'so-do': `
        <!-- Sơ đồ tổ chức -->
        <section id="so-do" class="section bg-white">
            <div class="container">
                <h2 class="section-title">Sơ đồ tổ chức</h2>
                <div class="org-chart">
                    <div class="org-box primary-box">Trưởng Khoa</div>
                    <div class="org-line"></div>
                    <div class="org-branch">
                        <div class="org-box">Phó Trưởng Khoa (Đào tạo)</div>
                        <div class="org-box">Phó Trưởng Khoa (Nghiên cứu)</div>
                    </div>
                    <div class="org-line-horizontal"></div>
                    <div class="org-branch-multi">
                        <div class="org-box small">Bộ môn Điều Dưỡng Cơ Bản</div>
                        <div class="org-box small">Bộ môn Điều Dưỡng Chuyên Khoa</div>
                        <div class="org-box small">Bộ môn Kỹ Thuật Xét Nghiệm</div>
                        <div class="org-box small">Bộ môn Kỹ Thuật Hình Ảnh</div>
                    </div>
                </div>
            </div>
        </section>
    `,
    'lanh-dao': `
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
    'lien-he': `
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
    `
};

function renderPage() {
    // Lấy hash hiện tại (vd: #/gioi-thieu -> gioi-thieu)
    let hash = window.location.hash.replace('#/', '');
    if (!hash || hash === '') {
        hash = 'home'; // Mặc định là trang chủ
    }

    const appDiv = document.getElementById('app');
    
    // Kiểm tra xem route có tồn tại không, nếu có thì render nội dung, nếu không thì hiển thị lỗi
    if (pages[hash]) {
        appDiv.innerHTML = pages[hash];
    } else {
        appDiv.innerHTML = '<section class="section bg-white"><div class="container"><h2 class="section-title">404 - Không tìm thấy trang</h2></div></section>';
    }
}

// Lắng nghe sự kiện thay đổi hash (khi user click vào link có dạng #/...)
window.addEventListener('hashchange', renderPage);

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
