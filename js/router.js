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
  "ktyh-gioi-thieu": `
        <!-- Giới thiệu Bộ môn KTYH -->
        <section id="ktyh-gioi-thieu" class="section bg-white animate-fade-in">
            <div class="container">
                <h2 class="section-title">Bộ môn Kỹ thuật Y học</h2>
                
                <div class="dept-header" style="text-align: center; margin-bottom: 30px;">
                    <p class="dept-subtitle" style="font-weight: 500; font-size: 16px; color: var(--secondary); margin-top: -15px;">Khoa Điều dưỡng - Kỹ thuật Y học | Trường Y Dược - Đại học Đà Nẵng</p>
                </div>

                <div class="grid-2 align-center" style="margin-top: 40px; gap: 40px;">
                    <div class="intro-text">
                        <h3 class="subsection-title" style="font-size: 22px; color: var(--primary); margin-bottom: 15px; border-left: 4px solid var(--secondary); padding-left: 12px;">Giới thiệu chung</h3>
                        <p style="text-align: justify; margin-bottom: 15px; font-size: 16px;">Bộ môn Kỹ thuật Y học (KTYH) là một bộ môn chuyên ngành mũi nhọn thuộc Khoa Điều dưỡng - Kỹ thuật Y học, Trường Y Dược - Đại học Đà Nẵng. Bộ môn đảm nhận sứ mệnh đào tạo Cử nhân Kỹ thuật Xét nghiệm Y học có phẩm chất đạo đức tốt, có kiến thức khoa học cơ bản và y học cơ sở vững chắc, có kỹ năng thực hành nghề nghiệp thành thạo để phục vụ đắc lực cho công tác chẩn đoán, điều trị và chăm sóc sức khỏe nhân dân.</p>
                        <p style="text-align: justify; margin-bottom: 15px; font-size: 16px;">Với phương châm giảng dạy gắn liền với thực tiễn lâm sàng, sinh viên ngành Kỹ thuật Y học không chỉ được rèn luyện chuyên môn mà còn được rèn luyện tác phong làm việc chuẩn mực, tinh thần trách nhiệm cao đối với người bệnh và cộng đồng.</p>
                    </div>
                    <div class="intro-image-container" style="display: flex; justify-content: center; align-items: center;">
                        <div class="premium-image-card" style="width: 100%; max-width: 500px; padding: 10px; background: white; border-radius: var(--radius-md); border: 1px solid var(--border); box-shadow: 0 4px 15px rgba(0,0,0,0.04);">
                            <img src="./assets/images/KTYH-Giao vien bo mon/GV bm KTYH.jpg" alt="Tập thể Giảng viên Bộ môn KTYH" style="width: 100%; height: auto; display: block; border-radius: var(--radius-sm); border: 1px solid var(--border);">
                            <div class="caption" style="margin-top: 12px; font-weight: bold; font-size: 14px; color: var(--primary); text-align: center;">Tập thể Giảng viên Bộ môn KTYH</div>
                        </div>
                    </div>
                </div>

                <!-- Chức năng - Nhiệm vụ -->
                <div style="margin-top: 60px;">
                    <h3 class="subsection-title" style="font-size: 22px; color: var(--primary); text-align: center; margin-bottom: 30px;">Chức năng & Nhiệm vụ</h3>
                    <div class="grid-2" style="gap: 30px;">
                        <div class="info-card" style="background-color: var(--surface); padding: 25px; border-radius: var(--radius-md); border: 1px solid var(--border); box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
                            <div class="icon-header" style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
                                <div style="background-color: rgba(3,19,94,0.07); color: var(--primary); width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px;">
                                    <i class="fas fa-microscope"></i>
                                </div>
                                <h4 style="font-size: 18px; color: var(--primary); margin: 0;">Chức năng</h4>
                            </div>
                            <ul style="list-style-type: none; padding-left: 0;">
                                <li style="position: relative; padding-left: 20px; margin-bottom: 10px; text-align: justify; font-size: 15px;">
                                    <span style="position: absolute; left: 0; color: var(--secondary); font-weight: bold;">&bull;</span>
                                    Giúp Khoa Điều dưỡng - Kỹ thuật Y học quản lý toàn diện công tác chuyên môn, học thuật liên quan đến ngành Kỹ thuật Xét nghiệm Y học.
                                </li>
                                <li style="position: relative; padding-left: 20px; margin-bottom: 10px; text-align: justify; font-size: 15px;">
                                    <span style="position: absolute; left: 0; color: var(--secondary); font-weight: bold;">&bull;</span>
                                    Quản lý đội ngũ giảng viên, nghiên cứu viên của bộ môn trong việc thực hiện nhiệm vụ giảng dạy và nghiên cứu khoa học.
                                </li>
                                <li style="position: relative; padding-left: 20px; text-align: justify; font-size: 15px;">
                                    <span style="position: absolute; left: 0; color: var(--secondary); font-weight: bold;">&bull;</span>
                                    Tổ chức thực hiện xây dựng, phát triển chuẩn năng lực đầu ra của sinh viên chuyên ngành đáp ứng chuẩn quốc gia.
                                </li>
                            </ul>
                        </div>
                        
                        <div class="info-card" style="background-color: var(--surface); padding: 25px; border-radius: var(--radius-md); border: 1px solid var(--border); box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
                            <div class="icon-header" style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
                                <div style="background-color: rgba(3,19,94,0.07); color: var(--primary); width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px;">
                                    <i class="fas fa-tasks"></i>
                                </div>
                                <h4 style="font-size: 18px; color: var(--primary); margin: 0;">Nhiệm vụ chính</h4>
                            </div>
                            <ul style="list-style-type: none; padding-left: 0;">
                                <li style="position: relative; padding-left: 20px; margin-bottom: 10px; text-align: justify; font-size: 15px;">
                                    <span style="position: absolute; left: 0; color: var(--secondary); font-weight: bold;">&bull;</span>
                                    Tổ chức đào tạo lý thuyết, kỹ năng thực hành tiền lâm sàng tại lab và hướng dẫn thực tập tại bệnh viện liên kết cho sinh viên.
                                </li>
                                <li style="position: relative; padding-left: 20px; margin-bottom: 10px; text-align: justify; font-size: 15px;">
                                    <span style="position: absolute; left: 0; color: var(--secondary); font-weight: bold;">&bull;</span>
                                    Nghiên cứu khoa học, cải tiến kỹ thuật xét nghiệm phục vụ chẩn đoán bệnh lý và chăm sóc sức khỏe.
                                </li>
                                <li style="position: relative; padding-left: 20px; text-align: justify; font-size: 15px;">
                                    <span style="position: absolute; left: 0; color: var(--secondary); font-weight: bold;">&bull;</span>
                                    Phát triển và biên soạn ngân hàng đề thi, tài liệu học tập, sách giáo trình chuyên ngành Kỹ thuật Y học.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Đội ngũ Giảng viên -->
                <div style="margin-top: 60px;">
                    <h3 class="subsection-title" style="font-size: 22px; color: var(--primary); text-align: center; margin-bottom: 25px; border-bottom: 2px solid var(--secondary); display: inline-block; padding-bottom: 8px; margin-left: 50%; transform: translateX(-50%);">Đội ngũ Giảng viên Bộ môn</h3>
                    <div class="lecturer-tree-container">
                        <!-- Root Node -->
                        <div class="tree-root">
                            <a href="#" class="tree-node active-node">
                                <div class="node-avatar-container">
                                    <i class="fas fa-user-tie"></i>
                                </div>
                                <div class="node-info">
                                    <div class="node-name">TS. Nguyễn Văn Song</div>
                                    <div class="node-role">Trưởng Khoa / Trưởng Bộ môn</div>
                                </div>
                            </a>
                        </div>
                        
                        <div class="tree-line-vertical"></div>
                        
                        <!-- Sub-branches -->
                        <div class="tree-branches-container">
                            <!-- Branch 1: Giảng viên chuyên trách -->
                            <div class="tree-branch">
                                <div class="branch-title">Giảng viên Chuyên trách</div>
                                <div class="tree-line-vertical-small"></div>
                                <div class="branch-nodes-grid">
                                    <a href="#" class="tree-node">
                                        <div class="node-avatar-container"><i class="fas fa-user-graduate"></i></div>
                                        <div class="node-info">
                                            <div class="node-name">TS. Nguyễn Thị Diệu Liên</div>
                                            <div class="node-role">Giảng viên</div>
                                        </div>
                                    </a>
                                    <a href="#" class="tree-node">
                                        <div class="node-avatar-container"><i class="fas fa-user-md"></i></div>
                                        <div class="node-info">
                                            <div class="node-name">ThS. BS. Phạm Quốc Đô</div>
                                            <div class="node-role">Giảng viên</div>
                                        </div>
                                    </a>
                                    <a href="#" class="tree-node">
                                        <div class="node-avatar-container"><i class="fas fa-user"></i></div>
                                        <div class="node-info">
                                            <div class="node-name">ThS. Phan Thị Thu Lý</div>
                                            <div class="node-role">Giảng viên</div>
                                        </div>
                                    </a>
                                    <a href="#" class="tree-node">
                                        <div class="node-avatar-container"><i class="fas fa-user"></i></div>
                                        <div class="node-info">
                                            <div class="node-name">ThS. Trần Thị Vân</div>
                                            <div class="node-role">Giảng viên</div>
                                        </div>
                                    </a>
                                    <a href="#" class="tree-node">
                                        <div class="node-avatar-container"><i class="fas fa-user"></i></div>
                                        <div class="node-info">
                                            <div class="node-name">ThS. Phạm Trịnh Trúc Phượng</div>
                                            <div class="node-role">Giảng viên</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            
                            <!-- Branch 2: Giảng viên kiêm Giáo vụ -->
                            <div class="tree-branch">
                                <div class="branch-title">Giảng viên kiêm Giáo vụ</div>
                                <div class="tree-line-vertical-small"></div>
                                <div class="branch-nodes-grid">
                                    <a href="#" class="tree-node">
                                        <div class="node-avatar-container"><i class="fas fa-user-edit"></i></div>
                                        <div class="node-info">
                                            <div class="node-name">ThS. Phan Thị Cẩm Luyến</div>
                                            <div class="node-role">Giảng viên / Giáo vụ Khoa</div>
                                        </div>
                                    </a>
                                    <a href="#" class="tree-node">
                                        <div class="node-avatar-container"><i class="fas fa-user-edit"></i></div>
                                        <div class="node-info">
                                            <div class="node-name">CN. Nguyễn Thị Hoa</div>
                                            <div class="node-role">Giảng viên / Giáo vụ Bộ môn</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Hoạt động Nghiên cứu Khoa học -->
                <div style="margin-top: 60px;">
                    <h3 class="subsection-title" style="font-size: 22px; color: var(--primary); text-align: center; margin-bottom: 25px; border-bottom: 2px solid var(--secondary); display: inline-block; padding-bottom: 8px; margin-left: 50%; transform: translateX(-50%);">Nghiên cứu Khoa học & Hợp tác</h3>
                    <p style="text-align: center; max-width: 800px; margin: 0 auto 30px; color: var(--neutral); font-size: 15px;">
                        Bộ môn Kỹ thuật Y học tích cực đẩy mạnh phong trào nghiên cứu khoa học trong giảng viên và sinh viên, đạt nhiều thành tích cao trong các cuộc thi sáng tạo khoa học công nghệ các cấp.
                    </p>
                    <div class="image-gallery" style="max-width: 800px; margin: 20px auto 0;">
                        <div class="gallery-item">
                            <img src="./assets/images/KTYH-Nghien cuu sinh/Nhom NCKH .jpg" alt="Nhóm Nghiên cứu khoa học KTYH">
                            <div class="gallery-caption">Nhóm sinh viên nghiên cứu khoa học Bộ môn</div>
                        </div>
                        <div class="gallery-item">
                            <img src="./assets/images/KTYH-Nghien cuu sinh/SV NCKH.jpg" alt="Sinh viên nghiên cứu khoa học">
                            <div class="gallery-caption">Sinh viên thực hiện đề tài nghiên cứu khoa học</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
  "ktyh-giang-day": `
        <!-- Hoạt động Giảng dạy & Cơ sở vật chất -->
        <section id="ktyh-giang-day" class="section bg-muted animate-fade-in">
            <div class="container">
                <h2 class="section-title">Hoạt động Giảng dạy & Cơ sở vật chất</h2>
                <p class="section-desc" style="text-align: center; max-width: 800px; margin: -20px auto 40px; color: var(--neutral); font-size: 16px;">
                    Bộ môn Kỹ thuật Y học không ngừng đầu tư đồng bộ về chương trình giảng dạy lý thuyết, thực hành chuyên sâu tại lab hiện đại và thực tập lâm sàng sát thực tế tại các bệnh viện lớn.
                </p>
                
                <!-- Tabs Container -->
                <div class="tabs-wrapper" style="max-width: 1000px; margin: 0 auto;">
                    <div class="tab-buttons-container" style="display: flex; justify-content: center; gap: 10px; border-bottom: 1px solid var(--border); padding-bottom: 15px; flex-wrap: wrap;">
                        <button class="tab-btn active" onclick="switchKtyhTab('giang-duong', this)">
                            <i class="fas fa-university" style="margin-right: 8px;"></i> Giảng Đường
                        </button>
                        <button class="tab-btn" onclick="switchKtyhTab('phong-lab', this)">
                            <i class="fas fa-flask" style="margin-right: 8px;"></i> Phòng Lab Thực Hành
                        </button>
                        <button class="tab-btn" onclick="switchKtyhTab('lam-sang', this)">
                            <i class="fas fa-hospital-alt" style="margin-right: 8px;"></i> Lâm Sàng Bệnh Viện
                        </button>
                    </div>

                    <!-- Tab Panes -->
                    <div class="tab-contents-container" style="margin-top: 30px; background: white; padding: 30px; border-radius: var(--radius-md); border: 1px solid var(--border); box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
                        
                        <!-- Giảng đường -->
                        <div id="tab-giang-duong" class="tab-pane active">
                            <div class="grid-2 align-center" style="gap: 40px;">
                                <div class="tab-text">
                                    <h3 style="color: var(--primary); font-size: 22px; margin-bottom: 15px;">Giảng đường học lý thuyết</h3>
                                    <p style="text-align: justify; margin-bottom: 15px; font-size: 15px; color: var(--neutral);">Các phòng học lý thuyết tại Trường Y Dược - Đại học Đà Nẵng được thiết kế chuẩn mực sư phạm, đầy đủ trang thiết bị hỗ trợ tối ưu việc tiếp thu bài giảng:</p>
                                    <ul style="padding-left: 20px; font-size: 15px; color: var(--neutral); line-height: 1.8;">
                                        <li>Hệ thống máy chiếu chất lượng cao sắc nét, màn chiếu rộng.</li>
                                        <li>Điều hòa công suất lớn đảm bảo môi trường học tập mát mẻ, dễ chịu.</li>
                                        <li>Bảng viết chất lượng và hệ thống âm thanh, micro không dây hiện đại.</li>
                                        <li>Không gian thiết kế thoáng rộng, cách âm tốt tạo sự tập trung tối đa cho người học.</li>
                                    </ul>
                                </div>
                                <div class="tab-image" style="display: flex; justify-content: center;">
                                    <div class="svg-placeholder-illustration" style="width: 100%; max-width: 400px; text-align: center; background: var(--surface-muted); padding: 20px; border-radius: 8px;">
                                        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-height: 200px;">
                                            <rect width="100%" height="100%" fill="#fff" rx="6"/>
                                            <path d="M20 100 h160 M40 100 v-40 h120 v40" stroke="var(--primary)" stroke-width="2" fill="none"/>
                                            <rect x="60" y="70" width="80" height="20" rx="2" fill="var(--surface-muted)"/>
                                            <circle cx="100" cy="40" r="10" fill="var(--secondary)"/>
                                        </svg>
                                        <div class="caption" style="margin-top: 10px; font-weight: bold; font-size: 13px; color: var(--primary);">Giảng đường khang trang, hiện đại</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Phòng Lab -->
                        <div id="tab-phong-lab" class="tab-pane">
                            <div class="grid-2 align-center" style="gap: 40px;">
                                <div class="tab-text">
                                    <h3 style="color: var(--primary); font-size: 22px; margin-bottom: 15px;">Phòng thí nghiệm thực hành chuyên sâu</h3>
                                    <p style="text-align: justify; margin-bottom: 15px; font-size: 15px; color: var(--neutral);">Học đi đôi với hành, sinh viên Bộ môn KTYH thường xuyên thực hành tại Trung tâm Thí nghiệm - Tiền lâm sàng với các phòng lab chuyên ngành Xét nghiệm đạt chuẩn:</p>
                                    <ul style="padding-left: 20px; font-size: 15px; color: var(--neutral); line-height: 1.8;">
                                        <li><strong>Lab Hóa sinh - Miễn dịch:</strong> Đo quang, ly tâm, phân tích điện giải.</li>
                                        <li><strong>Lab Vi sinh - Ký sinh trùng:</strong> Cấy vô khuẩn, soi tươi kính hiển vi, nhận diện vi khuẩn.</li>
                                        <li><strong>Lab Huyết học - Đông máu:</strong> Thực hành đếm tế bào, đông máu cơ bản, định nhóm máu.</li>
                                        <li><strong>Lab Giải phẫu bệnh:</strong> Quy trình đúc, cắt mô và nhuộm tiêu bản tế bào.</li>
                                    </ul>
                                </div>
                                <div class="tab-image" style="display: flex; justify-content: center;">
                                    <div class="gallery-item" style="width: 100%; max-width: 400px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border);">
                                        <img src="./assets/images/KTYH-Giang day/SV TT lấy máu_.jpg" alt="Sinh viên thực tập lấy máu" style="width: 100%; height: auto; display: block;">
                                        <div class="gallery-caption">Thực hành lấy mẫu bệnh phẩm tại Lab</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div style="margin-top: 35px; border-top: 1px solid var(--border); padding-top: 25px;">
                                <h4 style="color: var(--primary); margin-bottom: 15px; font-size: 16px; font-weight: 700;"><i class="fas fa-images" style="color: var(--secondary); margin-right: 6px;"></i> Hình ảnh hoạt động thực hành Phòng Lab</h4>
                                <div class="image-gallery" style="max-width: 800px; margin: 20px auto 0;">
                                    <div class="gallery-item">
                                        <img src="./assets/images/KTYH-Giang day/SV TT lấy máu_.jpg" alt="Sinh viên thực hành lấy máu">
                                        <div class="gallery-caption">Kỹ thuật lấy máu tĩnh mạch</div>
                                    </div>
                                    <div class="gallery-item">
                                        <img src="./assets/images/KTYH-Giang day/TT GPV tai BV San Nhi .jpg" alt="Thực tập Giải phẫu bệnh tại BV Sản Nhi">
                                        <div class="gallery-caption">Thực tập Giải phẫu bệnh - BV Sản Nhi</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Lâm sàng -->
                        <div id="tab-lam-sang" class="tab-pane">
                            <div class="grid-2 align-center" style="gap: 40px;">
                                <div class="tab-text">
                                    <h3 style="color: var(--primary); font-size: 22px; margin-bottom: 15px;">Thực tập lâm sàng tại Bệnh viện lớn</h3>
                                    <p style="text-align: justify; margin-bottom: 15px; font-size: 15px; color: var(--neutral);">Chương trình học của bộ môn đặc biệt chú trọng thực tập lâm sàng tại các cơ sở y tế đầu ngành miền Trung, giúp sinh viên làm quen với áp lực công việc thực tế:</p>
                                    <ul style="padding-left: 20px; font-size: 15px; color: var(--neutral); line-height: 1.8;">
                                        <li><strong>Bệnh viện Đà Nẵng:</strong> Tiếp cận máy móc tự động hóa hoàn toàn ở quy mô lớn.</li>
                                        <li><strong>Bệnh viện C Đà Nẵng:</strong> Rèn luyện quy trình chuẩn ISO phòng xét nghiệm.</li>
                                        <li><strong>Bệnh viện Phụ sản - Nhi:</strong> Thực tập xét nghiệm huyết học và miễn dịch nhi khoa.</li>
                                        <li>Học tập trực tiếp dưới sự hướng dẫn của các KTV trưởng, y bác sĩ bệnh viện.</li>
                                    </ul>
                                </div>
                                <div class="tab-image" style="display: flex; justify-content: center;">
                                    <div class="gallery-item" style="width: 100%; max-width: 400px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border);">
                                        <img src="./assets/images/KTYH-Giang day/Lam sang tai BV San Nhi.jpg" alt="Thực hành lâm sàng tại BV Sản Nhi" style="width: 100%; height: auto; display: block;">
                                        <div class="gallery-caption">Thực tập lâm sàng tại BV Sản - Nhi</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div style="margin-top: 35px; border-top: 1px solid var(--border); padding-top: 25px;">
                                <h4 style="color: var(--primary); margin-bottom: 15px; font-size: 16px; font-weight: 700;"><i class="fas fa-images" style="color: var(--secondary); margin-right: 6px;"></i> Hình ảnh thực hành tại Bệnh viện Thực hành</h4>
                                <div class="image-gallery">
                                    <div class="gallery-item">
                                        <img src="./assets/images/KTYH-Giang day/TT lam sang.jpg" alt="Sinh viên thực hành lâm sàng">
                                        <div class="gallery-caption">Thực tập lâm sàng khoa Xét nghiệm</div>
                                    </div>
                                    <div class="gallery-item">
                                        <img src="./assets/images/KTYH-Giang day/TT lay mau tai BV.jpg" alt="Lấy mẫu bệnh phẩm tại bệnh viện">
                                        <div class="gallery-caption">Thực hành lấy mẫu bệnh phẩm tại viện</div>
                                    </div>
                                    <div class="gallery-item">
                                        <img src="./assets/images/KTYH-Giang day/TT tai BV San Nhi.jpg" alt="Hướng dẫn lâm sàng tại BV Sản Nhi">
                                        <div class="gallery-caption">Hướng dẫn trực tiếp tại BV Sản - Nhi</div>
                                    </div>
                                    <div class="gallery-item">
                                        <img src="./assets/images/KTYH-Giang day/Lam sang tai BV San Nhi.jpg" alt="Sinh viên thực hành lâm sàng Sản Nhi">
                                        <div class="gallery-caption">Kiến tập Xét nghiệm Sản - Nhi</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    `,
  "ktyh-cong-dong": `
        <!-- Hoạt động Phục vụ cộng đồng -->
        <section id="ktyh-cong-dong" class="section bg-white animate-fade-in">
            <div class="container">
                <h2 class="section-title">Hoạt động Phục vụ cộng đồng</h2>
                
                <div class="coming-soon-container" style="text-align: center; max-width: 800px; margin: 40px auto; padding: 60px 30px; border: 2px dashed var(--border); border-radius: var(--radius-md); background-color: var(--surface-muted);">
                    <div style="font-size: 55px; color: var(--secondary); margin-bottom: 25px;">
                        <i class="fas fa-hand-holding-heart"></i>
                    </div>
                    <h3 style="color: var(--primary); font-size: 24px; margin-bottom: 15px; font-weight: 700;">Chung Tay Vì Sức Khỏe Cộng Đồng</h3>
                    <p style="color: var(--neutral); line-height: 1.8; margin-bottom: 35px; font-size: 16px; text-align: justify; max-width: 700px; margin-left: auto; margin-right: auto;">
                        Bên cạnh đào tạo chuyên môn và nghiên cứu khoa học, Bộ môn Kỹ thuật Y học luôn coi trọng sứ mệnh cống hiến cho xã hội. Bộ môn tích cực triển khai các chương trình khám thiện nguyện, xét nghiệm sàng lọc cộng đồng, chia sẻ tri thức phòng ngừa dịch bệnh cho nhân dân miền Trung - Tây Nguyên.
                    </p>
                    
                    <div class="grid-3" style="text-align: left; gap: 20px; margin-top: 20px;">
                        <div class="mini-card" style="background: white; padding: 20px; border-radius: var(--radius-sm); border: 1px solid var(--border); box-shadow: 0 2px 5px rgba(0,0,0,0.01);">
                            <h5 style="color: var(--primary); font-size: 16px; margin-bottom: 8px; font-weight: 700;"><i class="fas fa-check-circle" style="color: var(--secondary); margin-right: 6px;"></i> Xét nghiệm thiện nguyện</h5>
                            <p style="font-size: 14px; color: var(--neutral); line-height: 1.5; margin: 0;">Đo huyết áp, đường huyết, tư vấn sức khỏe cơ bản cho bà con vùng sâu, vùng khó khăn.</p>
                        </div>
                        <div class="mini-card" style="background: white; padding: 20px; border-radius: var(--radius-sm); border: 1px solid var(--border); box-shadow: 0 2px 5px rgba(0,0,0,0.01);">
                            <h5 style="color: var(--primary); font-size: 16px; margin-bottom: 8px; font-weight: 700;"><i class="fas fa-check-circle" style="color: var(--secondary); margin-right: 6px;"></i> Tư vấn & Tuyên truyền</h5>
                            <p style="font-size: 14px; color: var(--neutral); line-height: 1.5; margin: 0;">Hướng dẫn cộng đồng phòng tránh bệnh truyền nhiễm, cách xem kết quả xét nghiệm định kỳ.</p>
                        </div>
                        <div class="mini-card" style="background: white; padding: 20px; border-radius: var(--radius-sm); border: 1px solid var(--border); box-shadow: 0 2px 5px rgba(0,0,0,0.01);">
                            <h5 style="color: var(--primary); font-size: 16px; margin-bottom: 8px; font-weight: 700;"><i class="fas fa-check-circle" style="color: var(--secondary); margin-right: 6px;"></i> Hợp tác chuyển giao</h5>
                            <p style="font-size: 14px; color: var(--neutral); line-height: 1.5; margin: 0;">Hỗ trợ chuyển giao công nghệ, đào tạo kỹ thuật viên cơ bản cho các cơ sở y tế tuyến dưới.</p>
                        </div>
                    </div>
                    
                    <p style="margin-top: 40px; font-size: 14px; color: var(--on-surface-muted); font-style: italic; margin-bottom: 0;">
                        Hình ảnh và thông tin chi tiết về các hoạt động phục vụ cộng đồng của Bộ môn đang được cập nhật thêm...
                    </p>
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

  // Close mobile navigation drawer if any page render occurs
  if (typeof closeMobileMenu === 'function') {
    closeMobileMenu();
  }
}

// Global function for tab switching in KTYH Hoạt động Giảng dạy
window.switchKtyhTab = function(tabId, btn) {
  // Ẩn tất cả các tab-pane
  const panes = document.querySelectorAll('.tab-pane');
  panes.forEach(pane => pane.classList.remove('active'));
  
  // Bỏ class active ở tất cả các button
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(button => button.classList.remove('active'));
  
  // Hiển thị tab được chọn
  const targetPane = document.getElementById('tab-' + tabId);
  if (targetPane) {
    targetPane.classList.add('active');
  }
  
  // Thêm class active vào button được click
  if (btn) {
    btn.classList.add('active');
  }
};

// Global menu helper variables/functions
let closeMobileMenu = function() {};

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const backdrop = document.getElementById('menu-backdrop');
  const dropdownToggle = document.getElementById('dropdown-toggle');
  const dropdown = document.getElementById('ktyh-dropdown');

  closeMobileMenu = function() {
    if (navLinks) navLinks.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    if (toggleBtn) {
      toggleBtn.classList.remove('active');
      const icon = toggleBtn.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    }
    if (dropdown) dropdown.classList.remove('open');
  };

  if (toggleBtn && navLinks && backdrop) {
    // Toggle mobile menu drawer
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      backdrop.classList.toggle('active');
      toggleBtn.classList.toggle('active');
      
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('active')) {
          icon.className = 'fas fa-times';
        } else {
          icon.className = 'fas fa-bars';
        }
      }
    });

    // Close mobile menu when backdrop is clicked
    backdrop.addEventListener('click', closeMobileMenu);

    // Close mobile menu when a nav link is clicked (excluding dropdown toggle)
    const links = navLinks.querySelectorAll('a:not(.dropdown-toggle)');
    links.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  if (dropdownToggle && dropdown) {
    // Toggle dropdown on mobile click
    dropdownToggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation(); // Ngăn sự kiện nổi bọt gây đóng menu
        dropdown.classList.toggle('open');
      }
    });
  }
}

// Lắng nghe sự kiện thay đổi hash (khi user click vào link có dạng #/...)
window.addEventListener("hashchange", renderPage);

// Chạy lần đầu khi load trang
window.addEventListener("DOMContentLoaded", () => {
  renderPage();
  initMobileMenu();
});

const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {
  const updateBackToTopVisibility = () => {
    backToTopButton.classList.toggle("is-visible", window.scrollY > 300);
  };

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", updateBackToTopVisibility, {
    passive: true,
  });
  updateBackToTopVisibility();
}
