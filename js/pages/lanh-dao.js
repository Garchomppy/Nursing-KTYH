export const lanhDao = `
        <style>
            .nav-tabs {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 15px;
                margin-bottom: var(--spacing-xl);
            }
            .nav-tabs a {
                padding: 8px 16px;
                background-color: var(--surface);
                border: 1px solid var(--primary);
                border-radius: 4px;
                color: var(--primary);
                font-weight: bold;
                transition: all 0.2s;
                flex-shrink: 0; /* Prevent shrinking */
            }
            .nav-tabs a:hover {
                background-color: var(--primary);
                color: white;
            }
            
            .leadership-trio {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 40px; /* Natural spacing between rows */
                padding-bottom: var(--spacing-xl);
            }
            
            .leader-chief {
                width: 100%;
                display: flex;
                justify-content: center;
            }
            .leader-chief .card {
                width: 100%;
                max-width: 400px;
                background: transparent;
            }
            
            .leader-vice-container {
                display: flex;
                justify-content: center;
                gap: 50px;
                width: 100%;
                max-width: 900px;
            }
            .leader-vice-container .card {
                width: calc(50% - 25px);
                max-width: 350px;
                background: transparent;
            }
            
            /* Hover effects */
            .profile-card {
                transition: transform 0.3s ease;
            }
            .profile-card:hover {
                transform: translateY(-5px);
            }
            .profile-card .avatar {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                display: block; 
            }
            .profile-card .avatar:hover {
                transform: scale(1.05);
                box-shadow: 0 10px 20px rgba(0,0,0,0.15);
            }
            
            @media (max-width: 768px) {
                .nav-tabs {
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    padding: 0;
                    gap: 5px;
                    width: 100%;
                }
                .nav-tabs a {
                    padding: 8px 4px;
                    font-size: 11px;
                    flex: 1;
                    text-align: center;
                    white-space: nowrap;
                }
                .leadership-trio {
                    gap: 20px;
                }
                .leader-vice-container {
                    flex-direction: row; /* KEEP SIDE BY SIDE ON MOBILE */
                    gap: 15px;
                }
                .leader-vice-container .card {
                    width: calc(50% - 7.5px);
                }
                .placeholder-avatar {
                    width: 90px;
                    height: 90px;
                    border-width: 2px;
                }
                .profile-card h3 {
                    font-size: 14px;
                }
                .profile-card .role {
                    font-size: 11px;
                }
                .btn-link {
                    font-size: 12px;
                }
            }
        </style>
        <!-- Ban lãnh đạo -->
        <section id="lanh-dao" class="section bg-muted">
            <div class="container">
                <h2 class="section-title">Ban Lãnh Đạo Khoa</h2>
                
                <div class="nav-tabs">
                    <a href="#/gioi-thieu">Giới thiệu chung</a>
                    <a href="#/chuc-nang">Chức năng - Nhiệm vụ</a>
                    <a href="#/so-do">Sơ đồ tổ chức</a>
                </div>

                <div class="leadership-trio">
                    <div class="leader-chief">
                        <!-- Trưởng Khoa -->
                        <div class="card profile-card">
                            <div class="avatar placeholder-avatar" style="background-image: url('assets/images/ts-nguyen-van-song.jpg')" title="TS. Nguyễn Văn Song"></div>
                            <h3>TS. Nguyễn Văn Song</h3>
                            <p class="role">Trưởng Khoa<br>Trưởng Bộ môn Xét nghiệm - HAYH</p>
                            <!-- <a href="#/ho-so/nvsong" class="btn-link">Xem hồ sơ &rarr;</a> -->
                        </div>
                    </div>

                    <div class="leader-vice-container">
                        <!-- Phó Trưởng Khoa 1 -->
                        <div class="card profile-card">
                            <div class="avatar placeholder-avatar" style="background-image: url('assets/images/ths-truong-thi-my-phuong.jpg')" title="ThS. Trương Thị Mỹ Phượng"></div>
                            <h3>ThS. Trương Thị Mỹ Phượng</h3>
                            <p class="role">Phó Trưởng Khoa<br>Trưởng Bộ môn Điều Dưỡng</p>
                            <!-- <a href="#/ho-so/ttmphuong" class="btn-link">Xem hồ sơ &rarr;</a> -->
                        </div>
                        <!-- Phó Trưởng Khoa 2 -->
                        <div class="card profile-card">
                            <div class="avatar placeholder-avatar" style="background-image: url('assets/images/ths-bs-pham-quoc-do.jpg')" title="ThS. BS. Phạm Quốc Đô"></div>
                            <h3>Phó trưởng khoa 2</h3>
                            <p class="role">Phó Trưởng Khoa</p>
                            <!-- <a href="#/ho-so/pqdo" class="btn-link">Xem hồ sơ &rarr;</a> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
`;
