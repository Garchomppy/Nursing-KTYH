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
                <div class="content-block" style="max-width: 1000px;">
                    <div  style="margin-bottom: 30px;">
                        <h3 style="color: var(--secondary); font-size: 22px;">I. Chức năng</h3>
                        <p style="text-align: justify; margin-bottom: 12px; font-size: 16px;">Khoa Điều dưỡng và Kỹ thuật Y học là đơn vị chuyên môn của Trường, chịu sự chỉ đạo trực tiếp của Hiệu trưởng, có chức năng:</p>
                        <ul style="text-align: justify; list-style-type: square; margin-left: 20px; font-size: 16px;">
                            <li style="margin-bottom: 8px;">Giúp Hiệu trưởng xây dựng chiến lược đào tạo của Khoa theo định hướng chiến lược chung của Nhà trường.</li>
                            <li style="margin-bottom: 8px;">Quản lý và điều hành các hoạt động chuyên môn của các bộ môn trực thuộc.</li>
                            <li>Chịu trách nhiệm quản lý ngành đào tạo mà Khoa phụ trách.</li>
                        </ul>
                    </div>
                    
                    <div >
                        <h3 style="color: var(--secondary); font-size: 22px;">II. Nhiệm vụ và quyền hạn</h3>
                        <ul style="text-align: justify; list-style-type: decimal; margin-left: 20px; font-size: 16px;">
                            <li style="margin-bottom: 14px;"><strong>Quản lý nhân sự và tổ chức:</strong> Quản lý tất cả các bộ môn thuộc khoa Điều dưỡng và Kỹ thuật Y học và quản lý giảng viên, người lao động khác và người học thuộc khoa theo phân cấp của Hiệu trưởng.</li>
                            <li style="margin-bottom: 14px;"><strong>Hoạt động giáo dục đào tạo:</strong> Lập kế hoạch và tổ chức thực hiện các hoạt động giáo dục đào tạo theo kế hoạch chung của Trường: Xây dựng chương trình đào tạo, biên soạn tài liệu, cải tiến phương pháp giảng dạy và đánh giá kết quả học tập của sinh viên, đảm bảo chuẩn đầu ra đáp ứng nhu cầu thị trường lao động.</li>
                            <li style="margin-bottom: 14px;"><strong>Nghiên cứu khoa học & Hợp tác:</strong> Lập kế hoạch và tổ chức thực hiện các hoạt động nghiên cứu KH&CN, hợp tác quốc tế; hợp tác với các tổ chức KH&CN, cơ sở sản xuất kinh doanh và huy động sự tham gia của doanh nghiệp vào quá trình đào tạo.</li>
                            <li style="margin-bottom: 14px;"><strong>Phát triển thực hành lâm sàng:</strong> Chủ động phối hợp với các bệnh viện, các tổ chức khoa học công nghệ để nghiên cứu và ứng dụng đổi mới vào chăm sóc sức khỏe cộng đồng.</li>
                            <li style="margin-bottom: 14px;"><strong>Phát triển đội ngũ và cơ sở vật chất:</strong> Xây dựng kế hoạch phát triển đội ngũ giảng viên, cơ sở vật chất phục vụ cho đào tạo và nghiên cứu. Tổ chức thực hiện công tác giáo dục chính trị, tư tưởng, đạo đức, lối sống và bồi dưỡng chuyên môn nghiệp vụ.</li>
                            <li style="margin-bottom: 14px;"><strong>Đánh giá cán bộ:</strong> Tổ chức đánh giá cán bộ quản lý, giảng viên, nghiên cứu viên trong khoa và tham gia đánh giá cán bộ quản lý trong Trường.</li>
                            <li style="margin-bottom: 14px;"><strong>Quản lý trang thiết bị:</strong> Phối hợp với Trung tâm Thí nghiệm – Tiền lâm sàng sử dụng và bảo quản cơ sở vật chất, trang thiết bị. Đề xuất mua sắm, sửa chữa máy móc phục vụ đào tạo.</li>
                            <li style="margin-bottom: 14px;"><strong>Mở rộng mạng lưới thực hành:</strong> Phối hợp với Phòng Hành chính – Tổng hợp, Phòng Đào tạo trong việc kết nối quan hệ hợp tác Viện – Trường với các cơ sở thực hành. Phân công nhân sự công tác khám chữa bệnh tại Trung tâm Y khoa.</li>
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
        <section id="lien-he-page" class="section bg-white">
            <div class="container">
                <h2 class="section-title">Liên hệ với chúng tôi</h2>
                <div class="grid-2" style="gap: 40px; margin-top: 30px;">
                    <!-- Thông tin liên hệ -->
                    <div>
                        <h3 style="color: var(--primary-strong); margin-bottom: 20px; font-size: 24px;">Thông tin Khoa</h3>
                        <p style="margin-bottom: 25px; color: var(--on-surface-variant); line-height: 1.6;">
                            Nếu bạn có bất kỳ câu hỏi nào về chương trình đào tạo, tuyển sinh hay hợp tác, đừng ngần ngại liên hệ với Khoa Điều Dưỡng - Kỹ Thuật Y Học. Chúng tôi luôn sẵn sàng hỗ trợ bạn!
                        </p>
                        
                        <div style="display: flex; align-items: flex-start; gap: 15px; margin-bottom: 20px;">
                            <div style="background-color: var(--primary-container); color: var(--primary); width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h4 style="margin-bottom: 5px; color: var(--on-surface);">Địa chỉ</h4>
                                <p style="color: var(--on-surface-variant); line-height: 1.4;">Khu đô thị Đại học Đà Nẵng, P. Hòa Quý, Q. Ngũ Hành Sơn, TP. Đà Nẵng</p>
                            </div>
                        </div>

                        <div style="display: flex; align-items: flex-start; gap: 15px; margin-bottom: 20px;">
                            <div style="background-color: var(--primary-container); color: var(--primary); width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <div>
                                <h4 style="margin-bottom: 5px; color: var(--on-surface);">Điện thoại</h4>
                                <p style="color: var(--on-surface-variant);"><a href="tel:+842363xxxxxx" style="color: inherit; text-decoration: none;">(+84) 0236 3 xxx xxx</a></p>
                            </div>
                        </div>

                        <div style="display: flex; align-items: flex-start; gap: 15px; margin-bottom: 20px;">
                            <div style="background-color: var(--primary-container); color: var(--primary); width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h4 style="margin-bottom: 5px; color: var(--on-surface);">Email</h4>
                                <p style="color: var(--on-surface-variant);"><a href="mailto:khoadieuduong@smp.udn.vn" style="color: inherit; text-decoration: none;">khoadieuduong@smp.udn.vn</a></p>
                            </div>
                        </div>
                    </div>

                    <!-- Form Liên hệ -->
                    <div style="background-color: var(--surface); padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border: 1px solid var(--border);">
                        <h3 style="color: var(--primary-strong); margin-bottom: 20px; font-size: 24px;">Gửi tin nhắn</h3>
                        <form onsubmit="event.preventDefault(); alert('Cảm ơn bạn đã liên hệ! Tin nhắn của bạn đã được gửi đến Khoa.');">
                            <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--on-surface);">Họ và tên</label>
                                <input type="text" placeholder="Nhập họ tên của bạn" style="width: 100%; padding: 12px 15px; border: 1px solid var(--border); border-radius: 6px; font-family: inherit; font-size: 15px; box-sizing: border-box;" required>
                            </div>
                            <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--on-surface);">Email</label>
                                <input type="email" placeholder="Địa chỉ email của bạn" style="width: 100%; padding: 12px 15px; border: 1px solid var(--border); border-radius: 6px; font-family: inherit; font-size: 15px; box-sizing: border-box;" required>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--on-surface);">Nội dung</label>
                                <textarea placeholder="Bạn cần hỗ trợ gì?" rows="4" style="width: 100%; padding: 12px 15px; border: 1px solid var(--border); border-radius: 6px; font-family: inherit; font-size: 15px; resize: vertical; box-sizing: border-box;" required></textarea>
                            </div>
                            <button type="submit" style="background-color: var(--primary); color: white; border: none; padding: 12px 24px; border-radius: 6px; font-size: 16px; font-weight: bold; cursor: pointer; width: 100%; transition: background-color 0.3s; margin-top: 10px;">Gửi tin nhắn</button>
                        </form>
                    </div>
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
window.addEventListener("DOMContentLoaded", renderPage);
