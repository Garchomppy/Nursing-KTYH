import { t } from "../i18n.js";

export function lanhDao() {
  return `
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
          flex-shrink: 0;
      }
      .nav-tabs a:hover {
          background-color: var(--primary);
          color: white;
      }

      /* ORG CHART STYLES */
      .org-tree {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          overflow-x: auto;
          padding-bottom: 40px;
      }
      .org-node-container {
          display: flex;
          justify-content: center;
          position: relative;
          width: 100%;
      }
      .org-card {
          width: 250px;
          background: transparent;
          margin: 0 10px;
          z-index: 2;
      }
      
      /* Connecting Lines */
      .org-line-v {
          width: 2px;
          height: 30px;
          background-color: var(--primary);
          margin: 0 auto;
      }
      .org-line-fork {
          height: 20px;
          border-top: 2px solid var(--primary);
          border-left: 2px solid var(--primary);
          border-right: 2px solid var(--primary);
          margin: 0 auto;
          position: relative;
      }
      
      /* Level 3 container */
      .level-3-container {
          display: flex;
          justify-content: center;
          width: 100%;
          gap: 20px;
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
          margin-left: auto;
          margin-right: auto;
      }
      .profile-card .avatar:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
      }

      /* Responsive for all phones while keeping the tree structure */
      @media (max-width: 768px) {
          .org-card {
              width: 160px;
              margin: 0 5px;
          }
          .placeholder-avatar {
              width: 70px;
              height: 70px;
          }
          .profile-card h3 {
              font-size: 13px;
          }
          .profile-card .role {
              font-size: 11px;
          }
          .nav-tabs a {
              padding: 6px 10px;
              font-size: 12px;
          }
      }

      @media (max-width: 480px) {
          .org-card {
              width: 130px;
              padding: 10px 5px;
          }
          .placeholder-avatar {
              width: 55px;
              height: 55px;
          }
          .profile-card h3 {
              font-size: 11px;
          }
          .profile-card .role {
              font-size: 9px;
          }
          .level-3-container {
              gap: 10px;
          }
          .org-line-fork {
              height: 15px;
          }
          .org-line-v {
              height: 20px;
          }
      }
      
      /* Dynamic fork width calculation */
      .fork-3 { width: 270px; /* 250px card + 20px gap */ }
      @media (max-width: 768px) { .fork-3 { width: 180px; /* 160px card + 20px gap */ } }
      @media (max-width: 480px) { .fork-3 { width: 140px; /* 130px card + 10px gap */ } }
    </style>

    <section id="lanh-dao" class="section bg-muted">
        <div class="container">
            <h2 class="section-title">${t("leadership.title") || "Ban Lãnh Đạo Khoa"}</h2>
            
            <div class="nav-tabs">
                <a href="#/gioi-thieu">${t("nav.about") || "Giới thiệu chung"}</a>
                <a href="#/chuc-nang">${t("nav.functions") || "Chức năng - Nhiệm vụ"}</a>
                <a href="#/so-do">${t("nav.org") || "Sơ đồ cơ cấu tổ chức"}</a>
            </div>

            <!-- SƠ ĐỒ LÃNH ĐẠO (ORG CHART) -->
            <div class="org-tree">
                
                <!-- TẦNG 1: Trưởng Khoa -->
                <div class="org-node-container">
                    <div class="card profile-card org-card">
                        <div class="avatar placeholder-avatar" style="background-image: url('assets/images/BLD/ts-nguyen-van-song.png')" title="TS Nguyễn Văn Song"></div>
                        <h3>TS Nguyễn Văn Song</h3>
                        <p class="role">Trưởng khoa ĐD - KTYH<br>Trưởng Bộ môn XN và HAYH</p>
                    </div>
                </div>

                <!-- Đường nối Tầng 1 xuống Tầng 2 -->
                <div class="org-line-v"></div>

                <!-- TẦNG 2: Phó Khoa -->
                <div class="org-node-container">
                    <div class="card profile-card org-card">
                        <div class="avatar placeholder-avatar" style="background-image: url('assets/images/BLD/ths-truong-thi-my-phuong.jpg')" title="ThS Trương Thị Mỹ Phượng"></div>
                        <h3>ThS Trương Thị Mỹ Phượng</h3>
                        <p class="role">Phó khoa ĐD - KTYH<br>Trưởng Bộ môn Điều Dưỡng</p>
                    </div>
                </div>

                <!-- Đường nối Tầng 2 xuống Tầng 3 (Rẽ nhánh) -->
                <div class="org-line-v"></div>
                <div class="org-line-fork fork-3"></div>

                <!-- TẦNG 3: Phó Bộ Môn -->
                <div class="level-3-container">
                    <div class="card profile-card org-card" style="margin:0;">
                        <div class="avatar placeholder-avatar" style="background-image: url('assets/images/BLD/ths-do-thi-thuy-duy.jpg')" title="ThS Đỗ Thị Thuý Duy"></div>
                        <h3>ThS Đỗ Thị Thuý Duy</h3>
                        <p class="role">Phó trưởng Bộ môn<br>Điều Dưỡng</p>
                    </div>
                    
                    <div class="card profile-card org-card" style="margin:0;">
                        <div class="avatar placeholder-avatar" style="background-image: url('assets/images/BLD/ths-pham-thi-anh-nguyet.jpg')" title="ThS Phạm Thị Ánh Nguyệt"></div>
                        <h3>ThS Phạm Thị Ánh Nguyệt</h3>
                        <p class="role">Phó trưởng Bộ môn<br>XN và HAYH</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  `;
}
