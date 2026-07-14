import { profiles } from "../data/profiles.js";

export function hoSo(id) {
  const profile = profiles[id];
  
  if (!profile) {
    return `<section class="section bg-muted"><div class="container"><h2 class="section-title">Không tìm thấy hồ sơ giảng viên</h2></div></section>`;
  }

  return `
    <style>
      .profile-container {
        display: flex;
        flex-direction: row;
        gap: var(--spacing-lg);
        margin-top: var(--spacing-sm);
      }
      
      .profile-sidebar {
        width: 320px;
        flex-shrink: 0;
      }
      
      .profile-avatar-card {
        background-color: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        padding: var(--spacing-md);
        text-align: center;
        margin-bottom: var(--spacing-md);
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      }
      
      .profile-avatar-card img {
        width: 180px;
        height: 240px;
        object-fit: cover;
        border-radius: var(--radius-sm);
        border: 3px solid var(--surface-muted);
        margin-bottom: var(--spacing-sm);
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      
      .profile-name {
        font-size: 22px;
        font-weight: bold;
        color: var(--primary);
        margin-bottom: 8px;
        text-transform: uppercase;
      }
      
      .profile-menu {
        background-color: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        overflow: hidden;
        list-style: none;
        padding: 0;
        margin: 0;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      }
      
      .profile-menu li:not(:last-child) {
        border-bottom: 1px solid var(--border);
      }
      
      .profile-menu li a {
        display: flex;
        align-items: center;
        padding: 14px 20px;
        color: var(--neutral);
        text-decoration: none;
        font-weight: bold;
        transition: all 0.3s ease;
      }
      
      .profile-menu li a:hover, .profile-menu li a.active {
        background-color: var(--primary);
        color: var(--surface);
        padding-left: 25px; /* Slight indentation */
      }
      
      .profile-menu li a::before {
        content: "\\f105"; /* FontAwesome angle-right */
        font-family: "Font Awesome 6 Free";
        font-weight: 900;
        margin-right: 12px;
        color: inherit;
      }
      
      .profile-content {
        flex-grow: 1;
        background-color: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        padding: var(--spacing-lg);
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      }
      
      .profile-header {
        border-bottom: 2px solid var(--primary);
        margin-bottom: var(--spacing-lg);
        padding-bottom: 15px;
      }
      
      .profile-header h2 {
        font-size: 28px;
        color: var(--primary);
        margin: 0;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      
      .profile-table {
        width: 100%;
        border-collapse: collapse;
      }
      
      .profile-table td {
        padding: 14px 15px;
        border-bottom: 1px dashed var(--border);
        vertical-align: top;
      }
      
      .profile-table tr:last-child td {
        border-bottom: none;
      }
      
      .profile-table tr td:first-child {
        width: 35%;
        font-weight: 700;
        color: var(--primary);
      }
      
      .profile-table tr td:last-child {
        color: var(--neutral);
        word-break: break-word;
      }
      
      /* Mobile responsiveness */
      @media (max-width: 992px) {
        .profile-container {
          flex-direction: column;
        }
        .profile-sidebar {
          width: 100%;
        }
        .profile-table tr td:first-child {
          width: 40%;
        }
        .profile-avatar-card {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
      
      @media (max-width: 576px) {
        .profile-avatar-card img {
          width: 140px;
          height: 186px; /* Keeping the 3:4 aspect ratio approx */
        }
        .profile-name {
          font-size: 18px;
        }
        .profile-content {
          padding: var(--spacing-md);
        }
        .profile-header h2 {
          font-size: 22px;
        }
        .profile-table tr {
          display: flex;
          flex-direction: column;
          padding: 10px 0;
          border-bottom: 1px dashed var(--border);
        }
        .profile-table tr td {
          border-bottom: none;
          padding: 4px 10px;
        }
        .profile-table tr td:first-child {
          width: 100%;
          color: var(--secondary);
          padding-bottom: 0;
        }
        .profile-menu li a {
          padding: 12px 15px;
        }
      }
    </style>
    
    <section class="section bg-muted">
      <div class="container">
        <a href="#/lanh-dao" class="btn-link" style="display: inline-flex; align-items: center; gap: 8px; margin-bottom: 20px; font-size: 16px;">
          <i class="fa-solid fa-arrow-left"></i> Quay lại Ban Lãnh Đạo Khoa
        </a>
        
        <div class="profile-container">
          <!-- Cột trái (Sidebar) -->
          <aside class="profile-sidebar">
            <div class="profile-avatar-card">
              <img src="${profile.avatar}" alt="${profile.name}">
              <div class="profile-name">${profile.name}</div>
              <div class="role" style="margin-bottom: 0; color: var(--secondary); font-weight: bold;">${profile.role}</div>
            </div>
            
            <ul class="profile-menu">
              <li><a href="javascript:void(0)" class="active">Thông tin chung</a></li>
              <li><a href="javascript:void(0)">English</a></li>
              <li><a href="javascript:void(0)">Đề tài NC khoa học</a></li>
              <li><a href="javascript:void(0)">Bài báo, báo cáo khoa học</a></li>
              <li><a href="javascript:void(0)">Hướng dẫn Sau đại học</a></li>
              <li><a href="javascript:void(0)">Sách và giáo trình</a></li>
              <li><a href="javascript:void(0)">Các học phần giảng dạy</a></li>
              <li><a href="javascript:void(0)">Giải thưởng khoa học</a></li>
              <li><a href="javascript:void(0)">Khen thưởng</a></li>
            </ul>
          </aside>
          
          <!-- Cột phải (Main Content) -->
          <main class="profile-content">
            <div class="profile-header">
              <h2>Lý lịch khoa học</h2>
            </div>
            
            <table class="profile-table">
              <tbody>
                <tr>
                  <td>Họ và tên:</td>
                  <td>${profile.name}</td>
                </tr>
                <tr>
                  <td>Giới tính:</td>
                  <td>${profile.gender}</td>
                </tr>
                <tr>
                  <td>Năm sinh:</td>
                  <td>${profile.birthDate}</td>
                </tr>
                <tr>
                  <td>Nơi sinh:</td>
                  <td>${profile.birthPlace}</td>
                </tr>
                <tr>
                  <td>Quê quán:</td>
                  <td>${profile.hometown}</td>
                </tr>
                <tr>
                  <td>Tốt nghiệp ĐH chuyên ngành:</td>
                  <td>${profile.graduatedFrom}</td>
                </tr>
                <tr>
                  <td>Đơn vị công tác:</td>
                  <td>${profile.department}</td>
                </tr>
                <tr>
                  <td>Học vị:</td>
                  <td>${profile.degree} - Năm: ${profile.degreeYear}</td>
                </tr>
                <tr>
                  <td>Dạy CN:</td>
                  <td>${profile.teaching}</td>
                </tr>
                <tr>
                  <td>Lĩnh vực NC:</td>
                  <td>${profile.researchField}</td>
                </tr>
                <tr>
                  <td>Ngoại ngữ:</td>
                  <td>${profile.languages}</td>
                </tr>
                <tr>
                  <td>Địa chỉ liên hệ:</td>
                  <td>${profile.address}</td>
                </tr>
                <tr>
                  <td>Điện thoại:</td>
                  <td>${profile.phone}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td><a href="mailto:${profile.email}">${profile.email}</a></td>
                </tr>
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </section>
  `;
}
