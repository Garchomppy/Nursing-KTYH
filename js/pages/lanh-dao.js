import { t } from "../i18n.js";

export function lanhDao() {
  return `
    <style>
      /* ORG CHART STYLES */
      .org-tree {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          overflow-x: auto;
          padding-bottom: 40px;
          margin-top: 30px;
      }
      .org-node-container {
          display: flex;
          justify-content: center;
          position: relative;
          width: 100%;
      }
      .org-card {
          width: 250px;
          background: #ffffff;
          border-radius: 8px;
          padding: 20px 15px;
          margin: 0 10px;
          z-index: 2;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.05);
          text-align: center;
      }
      .org-card-text-only {
          padding: 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 80px;
      }
      
      /* Connecting Lines */
      .org-line-v {
          width: 1px;
          height: 30px;
          background-color: #dcdcdc;
          margin: 0 auto;
      }
      .org-line-fork {
          height: 20px;
          border-top: 1px solid #dcdcdc;
          border-left: 1px solid #dcdcdc;
          border-right: 1px solid #dcdcdc;
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

      .profile-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-size: cover;
          background-position: center;
          background-color: #f0f0f0;
          margin: 0 auto 15px auto;
          border: 2px solid #fff;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }

      .org-card h3 {
          font-size: 14px;
          color: var(--primary-strong, #1e3a8a);
          margin-bottom: 5px;
          font-weight: 700;
      }
      
      .org-card p.role {
          font-size: 12px;
          color: #666;
          margin: 0;
          line-height: 1.4;
      }

      /* Responsive for all phones while keeping the tree structure */
      @media (max-width: 768px) {
          .org-card {
              width: 160px;
              margin: 0 5px;
              padding: 15px 10px;
          }
          .org-card-text-only {
              padding: 10px;
              min-height: 60px;
          }
          .profile-avatar {
              width: 50px;
              height: 50px;
              margin-bottom: 10px;
          }
          .org-card h3 {
              font-size: 13px;
          }
          .org-card p.role {
              font-size: 11px;
          }
      }

      @media (max-width: 480px) {
          .org-card {
              width: 130px;
              padding: 10px 5px;
          }
          .org-card h3 {
              font-size: 11px;
          }
          .org-card p.role {
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

    <section id="lanh-dao" class="section bg-muted" style="background-color: #f8fafc;">
        <div class="container">
            <h2 class="section-title" style="margin-bottom: 10px;">${t("leadership.title") || "Ban Lãnh Đạo Khoa"}</h2>

            <!-- SƠ ĐỒ LÃNH ĐẠO (ORG CHART) -->
            <div class="org-tree">
                
                <!-- TẦNG 1: Trưởng Khoa -->
                <div class="org-node-container">
                    <div class="org-card">
                        <div class="profile-avatar" style="background-image: url('assets/images/BLD/ts-nguyen-van-song.png')" title="TS. Nguyễn Văn Song"></div>
                        <h3>TS. Nguyễn Văn Song</h3>
                        <p class="role">Trưởng khoa ĐD - KTYH<br>Trưởng Bộ môn XN và HAYH</p>
                    </div>
                </div>

                <!-- Đường nối Tầng 1 xuống Tầng 2 -->
                <div class="org-line-v"></div>

                <!-- TẦNG 2: Phó Khoa -->
                <div class="org-node-container">
                    <div class="org-card org-card-text-only">
                        <h3>ThS. Trương Thị Mỹ Phượng</h3>
                        <p class="role">Phó khoa ĐD - KTYH<br>Trưởng Bộ môn Điều Dưỡng</p>
                    </div>
                </div>

                <!-- Đường nối Tầng 2 xuống Tầng 3 (Rẽ nhánh) -->
                <div class="org-line-v"></div>
                <div class="org-line-fork fork-3"></div>

                <!-- TẦNG 3: Phó Bộ Môn -->
                <div class="level-3-container">
                    <div class="org-card org-card-text-only" style="margin:0;">
                        <h3>ThS. Đỗ Thị Thuý Duy</h3>
                        <p class="role">Phó trưởng Bộ môn Điều Dưỡng</p>
                    </div>
                    
                    <div class="org-card org-card-text-only" style="margin:0;">
                        <h3>ThS. Phạm Thị Ánh Nguyệt</h3>
                        <p class="role">Phó trưởng Bộ môn Bộ môn XN và HAYH</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  `;
}
