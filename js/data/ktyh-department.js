import { t } from "../i18n.js";

export function getDepartmentRoutes() {
  return [
    {
      key: "overview",
      label: t("ktyh.route.overview"),
      href: "#/bo-mon-ktxn-hayh",
    },
    {
      key: "lecturers",
      label: t("ktyh.route.lecturers"),
      href: "#/bo-mon-ktxn-hayh/danh-sach-giang-vien",
    },
    {
      key: "teaching",
      label: t("ktyh.route.teaching"),
      href: "#/bo-mon-ktxn-hayh/giang-day",
    },
    {
      key: "research",
      label: t("ktyh.route.research"),
      href: "#/bo-mon-ktxn-hayh/nghien-cuu-khoa-hoc",
    },
    {
      key: "community",
      label: t("ktyh.route.community"),
      href: "#/bo-mon-ktxn-hayh/phuc-vu-cong-dong",
    },
  ];
}

export function getDepartmentImages() {
  return {
    overview: {
      hero: {
        src: "./assets/images/KTYH-Giao vien bo mon/GV bo mon KTYH.jpg",
        alt: t("ktyh.img.overview_hero_alt"),
        width: 950,
        height: 633,
      },
    },
    lecturers: {
      hero: {
        src: "./assets/images/KTYH-Giao vien bo mon/GV bm KTYH.jpg",
        alt: t("ktyh.img.lecturers_hero_alt"),
        width: 1567,
        height: 1167,
      },
    },
    facultyGroup: {
      src: "./assets/images/KTYH-Giao vien bo mon/GV bm KTYH.jpg",
      alt: t("ktyh.img.faculty_group_alt"),
      width: 1567,
      height: 1167,
    },
    departmentActivity: {
      src: "./assets/images/KTYH-Giang day/SV TT lấy máu_.jpg",
      alt: t("ktyh.img.department_activity_alt"),
      width: 1280,
      height: 960,
    },
    teaching: {
      lecture: {
        src: "./assets/images/4. Khác ( CME, Hợp tác, hội nghị...)/Lớp CME _Ứng dụng SHPT trong chẩn đoán_/XN-CME Ung dung SHPT.jpg",
        alt: t("ktyh.img.teaching_lecture_alt"),
        width: 1280,
        height: 960,
      },
      lab: {
        src: "./assets/images/KTYH-Giang day/SV TT lấy máu_.jpg",
        alt: t("ktyh.img.teaching_lab_alt"),
        width: 1280,
        height: 960,
      },
      labGallery: [
        {
          src: "./assets/images/KTYH-Giang day/SV TT lấy máu_.jpg",
          alt: t("ktyh.img.lab_gallery1_alt"),
          width: 1280,
          height: 960,
        },
        {
          src: "./assets/images/KTYH-Giang day/TT GPV tai BV San Nhi .jpg",
          alt: t("ktyh.img.lab_gallery2_alt"),
          width: 1280,
          height: 960,
        },
      ],
      clinical: {
        src: "./assets/images/KTYH-Giang day/Lam sang tai BV San Nhi.jpg",
        alt: t("ktyh.img.clinical_alt"),
        width: 1280,
        height: 960,
      },
      clinicalGallery: [
        {
          src: "./assets/images/KTYH-Giang day/TT lam sang.jpg",
          alt: t("ktyh.img.clinical_gallery1_alt"),
          width: 1280,
          height: 960,
        },
        {
          src: "./assets/images/KTYH-Giang day/TT lay mau tai BV.jpg",
          alt: t("ktyh.img.clinical_gallery2_alt"),
          width: 1280,
          height: 960,
        },
        {
          src: "./assets/images/KTYH-Giang day/TT tai BV San Nhi.jpg",
          alt: t("ktyh.img.clinical_gallery3_alt"),
          width: 1280,
          height: 960,
        },
        {
          src: "./assets/images/KTYH-Giang day/Lam sang tai BV San Nhi.jpg",
          alt: t("ktyh.img.clinical_gallery4_alt"),
          width: 1280,
          height: 960,
        },
      ],
    },
    research: {
      hero: {
        src: "./assets/images/KTYH-Nghien cuu sinh/Nhom NCKH .jpg",
        alt: t("ktyh.img.research_hero_alt"),
        width: 1280,
        height: 960,
      },
      facultyConference: {
        src: "./assets/images/KTYH-Nghien cuu sinh/Nhom NCKH .jpg",
        alt: t("ktyh.img.faculty_conference_alt"),
      },
      studentPresentation: {
        src: "./assets/images/KTYH-Nghien cuu sinh/SV NCKH.jpg",
        alt: t("ktyh.img.student_presentation_alt"),
      },
    },
  };
}

export function getDepartmentOverview() {
  const DEPARTMENT_IMAGES = getDepartmentImages();
  return {
    introduction: {
      label: t("ktyh.overview.intro_label"),
      title: t("ktyh.overview.intro_title"),
      paragraphs: [t("ktyh.overview.intro_p1"), t("ktyh.overview.intro_p2")],
      imageCaption: t("ktyh.overview.intro_image_caption"),
    },
    responsibilities: {
      title: t("ktyh.overview.resp_title"),
      description: t("ktyh.overview.resp_desc"),
      primary: {
        title: t("ktyh.overview.resp_primary_title"),
        description: t("ktyh.overview.resp_primary_desc"),
        image: DEPARTMENT_IMAGES.facultyGroup,
      },
      items: [
        {
          title: t("ktyh.overview.resp_item1_title"),
          description: t("ktyh.overview.resp_item1_desc"),
        },
        {
          title: t("ktyh.overview.resp_item2_title"),
          description: t("ktyh.overview.resp_item2_desc"),
        },
        {
          title: t("ktyh.overview.resp_item3_title"),
          description: t("ktyh.overview.resp_item3_desc"),
          href: "#/bo-mon-ktxn-hayh/phuc-vu-cong-dong",
        },
      ],
    },
    development: {
      title: t("ktyh.overview.dev_title"),
      description: t("ktyh.overview.dev_desc"),
      items: [
        {
          title: t("ktyh.overview.dev_item1_title"),
          description: t("ktyh.overview.dev_item1_desc"),
        },
        {
          title: t("ktyh.overview.dev_item2_title"),
          description: t("ktyh.overview.dev_item2_desc"),
        },
        {
          title: t("ktyh.overview.dev_item3_title"),
          description: t("ktyh.overview.dev_item3_desc"),
        },
      ],
    },
  };
}

export function getLecturers() {
  return [
    {
      id: "nguyen-van-song",
      order: 1,
      fullName: "TS. Nguyễn Văn Song",
      position: t("ktyh.lecturer.position_head"),
      specialty: t("ktyh.lecturer.specialty1"),
      email: "nvsong@smp.udn.vn",
      profileUrl: "",
      profileStatus: "pending",
    },
    {
      id: "pham-thi-anh-nguyet",
      order: 2,
      fullName: "ThS. Phạm Thị Ánh Nguyệt",
      position: t("ktyh.lecturer.position_deputy"),
      profileUrl: "",
      profileStatus: "pending",
    },
    {
      id: "phan-thi-thu-ly",
      order: 3,
      fullName: "ThS. Phan Thị Thu Lý",
      position: t("ktyh.lecturer.position_lecturer"),
      profileUrl: "https://scv.udn.vn/thuly",
      profileStatus: "available",
    },
    {
      id: "nguyen-thi-dieu-lien",
      order: 4,
      fullName: "TS. Nguyễn Thị Diệu Liên",
      position: t("ktyh.lecturer.position_lecturer"),
      profileUrl: "",
      profileStatus: "pending",
    },
    {
      id: "pham-quoc-do",
      order: 5,
      fullName: "ThS. BS. Phạm Quốc Đô",
      position: t("ktyh.lecturer.position_lecturer"),
      profileUrl: "https://scv.udn.vn/pqdo",
      profileStatus: "available",
    },
    {
      id: "tran-thi-van",
      order: 6,
      fullName: "ThS. Trần Thị Vân",
      position: t("ktyh.lecturer.position_lecturer"),
      profileUrl: "",
      profileStatus: "pending",
    },
    {
      id: "phan-thi-cam-luyen",
      order: 7,
      fullName: "ThS. Phan Thị Cẩm Luyến",
      position: t("ktyh.lecturer.position_faculty_affairs"),
      profileUrl: "https://scv.udn.vn/ptcluyen",
      profileStatus: "available",
    },
    {
      id: "pham-trinh-truc-phuong",
      order: 8,
      fullName: "ThS. Phạm Trịnh Trúc Phượng",
      position: t("ktyh.lecturer.position_lecturer"),
      profileUrl: "https://scv.udn.vn/pttphuong",
      profileStatus: "available",
    },
    {
      id: "nguyen-thi-hoa",
      order: 9,
      fullName: "CN. Nguyễn Thị Hoa",
      position: t("ktyh.lecturer.position_department_affairs"),
      profileUrl: "",
      profileStatus: "pending",
    },
  ];
}

export function getTeachingAreas() {
  const DEPARTMENT_IMAGES = getDepartmentImages();
  return [
    {
      id: "lecture-hall",
      tabLabel: t("ktyh.teaching.area1_tab"),
      label: t("ktyh.teaching.area1_label"),
      title: t("ktyh.teaching.area1_title"),
      description: t("ktyh.teaching.area1_desc"),
      secondaryDescription: t("ktyh.teaching.area1_desc2"),
      points: [],
      image: DEPARTMENT_IMAGES.teaching.lecture,
      imageCaption: t("ktyh.teaching.area1_image_caption"),
      details: [
        {
          title: t("ktyh.teaching.area1_detail1_title"),
          description: t("ktyh.teaching.area1_detail1_desc"),
        },
        {
          title: t("ktyh.teaching.area1_detail2_title"),
          description: t("ktyh.teaching.area1_detail2_desc"),
        },
        {
          title: t("ktyh.teaching.area1_detail3_title"),
          description: t("ktyh.teaching.area1_detail3_desc"),
        },
      ],
      gallery: [],
    },
    {
      id: "skills-lab",
      tabLabel: t("ktyh.teaching.area2_tab"),
      label: t("ktyh.teaching.area2_label"),
      title: t("ktyh.teaching.area2_title"),
      description: t("ktyh.teaching.area2_desc"),
      secondaryDescription: t("ktyh.teaching.area2_desc2"),
      points: [
        t("ktyh.teaching.area2_point1"),
        t("ktyh.teaching.area2_point2"),
        t("ktyh.teaching.area2_point3"),
        t("ktyh.teaching.area2_point4"),
      ],
      image: DEPARTMENT_IMAGES.teaching.lab,
      imageCaption: t("ktyh.teaching.area2_image_caption"),
      details: [
        {
          title: t("ktyh.teaching.area2_detail1_title"),
          description: t("ktyh.teaching.area2_detail1_desc"),
        },
        {
          title: t("ktyh.teaching.area2_detail2_title"),
          description: t("ktyh.teaching.area2_detail2_desc"),
        },
        {
          title: t("ktyh.teaching.area2_detail3_title"),
          description: t("ktyh.teaching.area2_detail3_desc"),
        },
      ],
      gallery: DEPARTMENT_IMAGES.teaching.labGallery,
    },
    {
      id: "clinical-training",
      tabLabel: t("ktyh.teaching.area3_tab"),
      label: t("ktyh.teaching.area3_label"),
      title: t("ktyh.teaching.area3_title"),
      description: t("ktyh.teaching.area3_desc"),
      secondaryDescription: t("ktyh.teaching.area3_desc2"),
      points: [
        t("ktyh.teaching.area3_point1"),
        t("ktyh.teaching.area3_point2"),
        t("ktyh.teaching.area3_point3"),
        t("ktyh.teaching.area3_point4"),
      ],
      image: DEPARTMENT_IMAGES.teaching.clinical,
      imageCaption: t("ktyh.teaching.area3_image_caption"),
      details: [
        {
          title: t("ktyh.teaching.area3_detail1_title"),
          description: t("ktyh.teaching.area3_detail1_desc"),
        },
        {
          title: t("ktyh.teaching.area3_detail2_title"),
          description: t("ktyh.teaching.area3_detail2_desc"),
        },
        {
          title: t("ktyh.teaching.area3_detail3_title"),
          description: t("ktyh.teaching.area3_detail3_desc"),
        },
      ],
      gallery: DEPARTMENT_IMAGES.teaching.clinicalGallery,
    },
  ];
}

export function getResearchGroups() {
  return [
    {
      id: "lecturer-research",
      title: t("ktyh.research.group1_title"),
      description: t("ktyh.research.group1_desc"),
      categories: [
        { title: t("ktyh.research.group1_cat1"), items: [] },
        { title: t("ktyh.research.group1_cat2"), items: [] },
        {
          title: t("ktyh.research.group1_cat3"),
          items: [
            {
              title:
                "Thực trạng nhiễm Helicobacter pylori trên người có triệu chứng viêm loét dạ dày, tá tràng và sự phân bố genotype",
              authors: "Nguyễn Văn Song",
              period: "2025-2026",
            },
          ],
        },
        {
          title: t("ktyh.research.group1_cat4"),
          items: [
            {
              title:
                "Frequency Of Helicobacter Pylori Infection And Associated Factors Among Patients With Peptic Ulcer Disease At Hospital 199, Da Nang, Viet Nam.",
              authors: "Nguyễn Văn Song",
              period: "2026",
              url: "https://doi.org/10.31130/ud-jst.2026.24(5A).193E",
            },
            {
              title:
                "Saccharomyces cerevisiae’s culture conditions for heterologous expression: A detailed investigation using reporter gene eGFP and Escherichia coli’s heat-labile toxin B subunit.",
              authors: "Nguyễn Văn Song",
              period: "2026",
              url: "https://doi.org/10.26459/hueunijns.v135i1B.8195",
            },
          ],
        },
        { title: t("ktyh.research.group1_cat5"), items: [] },
      ],
    },
    {
      id: "student-research",
      title: t("ktyh.research.group2_title"),
      description: t("ktyh.research.group2_desc"),
      categories: [
        {
          title: t("ktyh.research.group2_cat1"),
          items: [
            {
              title:
                "Khảo sát trị số triglyceride-glucose (TyG) trong đánh giá tình trạng kiểm soát đường huyết ở bệnh nhân đái tháo đường típ 2.",
              authors: "Bùi Đức Độ",
              period: "2026-2027",
              note: t("dept.research.ongoing_note"),
            },
            {
              title:
                "Sàng lọc kháng thể bất thường ở người bệnh thalassemia tại Bệnh viện Đà Nẵng.",
              authors: "Lương Thị Hòa",
              period: "2026-2027",
              note: t("dept.research.ongoing_note"),
            },
            {
              title:
                "Mối liên quan giữa đa dạng thực phẩm tối thiểu và thiếu máu ở thai phụ 3 tháng cuối.",
              authors: "Nguyễn Hà Như Ý",
              period: "2026-2027",
              note: t("dept.research.ongoing_note"),
            },
            {
              title:
                "Khảo sát tỷ lệ nhiễm Helicobacter pylori ở sinh viên bằng kỹ thuật PCR trên mảng bám vôi răng và một số yếu tố liên quan.",
              authors: "Bùi Hoàng Nhân",
              period: "2026-2027",
              note: t("dept.research.ongoing_note"),
            },
          ],
        },
        {
          title: t("ktyh.research.group2_cat2"),
          items: [
            {
              title:
                "Nghiên cứu tỷ lệ nhiễm Helicobacter pylori trên người bệnh có triệu chứng viêm loét dạ dày, tá tràng và các yếu tố liên quan.",
              authors: "Nguyễn Thanh Phong",
              period: "2025-2026",
            },
            {
              title:
                "Khảo sát kiến thức, thái độ, thực hành phòng chống bệnh viêm gan vi rút B của sinh viên Trường Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn năm 2025 và một số yếu tố liên quan.",
              authors: "Ngô Thị Minh Thời",
              period: "2025-2026",
            },
          ],
        },
      ],
    },
  ];
}

export function getResearchPathways() {
  const DEPARTMENT_IMAGES = getDepartmentImages();
  return [
    {
      id: "faculty-scholarship",
      label: t("ktyh.research.pathway1_label"),
      title: t("ktyh.research.pathway1_title"),
      description: t("ktyh.research.pathway1_desc"),
      image: DEPARTMENT_IMAGES.teaching.lecture,
    },
    {
      id: "student-scholarship",
      label: t("ktyh.research.pathway2_label"),
      title: t("ktyh.research.pathway2_title"),
      description: t("ktyh.research.pathway2_desc"),
      image: DEPARTMENT_IMAGES.research.studentPresentation,
    },
  ];
}

export function getResearchActivities() {
  return [
    {
      id: "research-group-photo",
      label: t("ktyh.research.activity1_label"),
      title: t("ktyh.research.activity1_title"),
      image: {
        src: "./assets/images/KTYH-Nghien cuu sinh/Nhom NCKH .jpg",
        alt: t("ktyh.img.research_group_photo_alt"),
      },
    },
    {
      id: "student-presentation",
      label: t("ktyh.research.activity2_label"),
      title: t("ktyh.research.activity2_title"),
      image: {
        src: "./assets/images/KTYH-Nghien cuu sinh/SV NCKH.jpg",
        alt: t("ktyh.img.student_research_alt"),
      },
    },
  ];
}

export function getCommunityAreas() {
  return [
    {
      id: "health-screening",
      title: t("ktyh.community.area1_title"),
      description: t("ktyh.community.area1_desc"),
      focus: t("ktyh.community.area1_focus"),
    },
    {
      id: "health-education",
      title: t("ktyh.community.area2_title"),
      description: t("ktyh.community.area2_desc"),
      focus: t("ktyh.community.area2_focus"),
    },
    {
      id: "technology-transfer",
      title: t("ktyh.community.area3_title"),
      description: t("ktyh.community.area3_desc"),
      focus: t("ktyh.community.area3_focus"),
    },
    {
      id: "bio-safety-awareness",
      title: t("ktyh.community.area4_title"),
      description: t("ktyh.community.area4_desc"),
      focus: t("ktyh.community.area4_focus"),
    },
  ];
}

export function getCommunityProcess() {
  return [
    {
      title: t("ktyh.community.process1_title"),
      description: t("ktyh.community.process1_desc"),
    },
    {
      title: t("ktyh.community.process2_title"),
      description: t("ktyh.community.process2_desc"),
    },
    {
      title: t("ktyh.community.process3_title"),
      description: t("ktyh.community.process3_desc"),
    },
    {
      title: t("ktyh.community.process4_title"),
      description: t("ktyh.community.process4_desc"),
    },
  ];
}

export function getCommunityImages() {
  return {
    hero: {
      src: "./assets/images/4. Khác ( CME, Hợp tác, hội nghị...)/Lớp CME _Ứng dụng SHPT trong chẩn đoán_/XN - CME Ung dung SHPT.jpg",
      width: 1280,
      height: 960,
    },
    learning: {
      src: "./assets/images/4. Khác ( CME, Hợp tác, hội nghị...)/Lớp CME _Ứng dụng SHPT trong chẩn đoán_/XN-CME Ung dung SHPT 1.jpg",
      width: 1280,
      height: 960,
    },
    certificate: {
      src: "./assets/images/4. Khác ( CME, Hợp tác, hội nghị...)/Lớp CME _Ứng dụng SHPT trong chẩn đoán_/XN-CME Ung dung SHPT.jpg",
      width: 1280,
      height: 960,
    },
  };
}
