import { t } from "../i18n.js";

export function getDepartmentRoutes() {
  return [
    { key: "overview", label: t("nursing.route.overview"), href: "#/bo-mon-dieu-duong" },
    { key: "lecturers", label: t("nursing.route.lecturers"), href: "#/bo-mon-dieu-duong/danh-sach-giang-vien" },
    { key: "teaching", label: t("nursing.route.teaching"), href: "#/bo-mon-dieu-duong/giang-day" },
    { key: "research", label: t("nursing.route.research"), href: "#/bo-mon-dieu-duong/nghien-cuu-khoa-hoc" },
    { key: "community", label: t("nursing.route.community"), href: "#/bo-mon-dieu-duong/phuc-vu-cong-dong" },
  ];
}

export function getDepartmentImages() {
  return {
    overview: {
      hero: {
        src: "./assets/images/BMDD/gv-bo-mon/GV bộ môn và sinh viên tốt nghiệp 2026.jpg",
        alt: t("nursing.img.overview_hero_alt"),
        width: 2560,
        height: 1921,
      },
    },
    lecturers: {
      hero: {
        src: "./assets/images/BMDD/gv-bo-mon/Giảng viên BM 2026.jpg",
        alt: t("nursing.img.lecturers_hero_alt"),
        width: 1567,
        height: 1167,
      },
    },
    facultyGroup: {
      src: "./assets/images/BMDD/gv-bo-mon/Giảng viên BM 2026.jpg",
      alt: t("nursing.img.faculty_group_alt"),
      width: 1567,
      height: 1167,
    },
    departmentActivity: {
      src: "./assets/images/BMDD/cong-tac-giang-day/Thực hành tại lab 2.jpg",
      alt: t("nursing.img.department_activity_alt"),
      width: 1280,
      height: 960,
    },
    teaching: {
      lecture: {
        src: "./assets/images/BMDD/kiểm định.png",
        alt: t("nursing.img.teaching_lecture_alt"),
        width: 1600,
        height: 1067,
      },
      lab: {
        src: "./assets/images/BMDD/cong-tac-giang-day/Thực hành tại lab 2.jpg",
        alt: t("nursing.img.teaching_lab_alt"),
        width: 1280,
        height: 960,
      },
      labGallery: [
        {
          src: "./assets/images/BMDD/cong-tac-giang-day/Thực hành tại lab 3.jpg",
          alt: t("nursing.img.lab_gallery1_alt"),
          width: 1280,
          height: 960,
        },
        {
          src: "./assets/images/BMDD/cong-tac-giang-day/thực hành tại lab.jpg",
          alt: t("nursing.img.lab_gallery2_alt"),
          width: 1280,
          height: 960,
        },
        {
          src: "./assets/images/BMDD/cong-tac-giang-day/Sinh viên Nhật tham gia học tập thực hành.jpg",
          alt: t("nursing.img.lab_gallery3_alt"),
          width: 1280,
          height: 963,
        },
      ],
      clinical: {
        src: "./assets/images/BMDD/HTQT/Sinh viên Nhật tham gia thực tập tại BV.jpg",
        alt: t("nursing.img.clinical_alt"),
        width: 2048,
        height: 1536,
      },
      clinicalGallery: [
        {
          src: "./assets/images/BMDD/HTQT/Sinh viên Nhật tham quan BV ĐN.jpg",
          alt: t("nursing.img.clinical_gallery1_alt"),
          width: 2568,
          height: 1926,
        },
      ],
    },
    research: {
      hero: {
        src: "./assets/images/BMDD/nghien-cuu-khoa-hoc/GV BM tham gia báo cáo Hội nghị.jpg",
        alt: t("nursing.img.research_hero_alt"),
        width: 1280,
        height: 720,
      },
      facultyConference: {
        src: "./assets/images/BMDD/nghien-cuu-khoa-hoc/GV Bộ môn chủ toạ hội nghị khoa học quốc tế BV Đà Nẵng .jpg",
        alt: t("nursing.img.faculty_conference_alt"),
      },
      facultyInternational: {
        src: "./assets/images/BMDD/nghien-cuu-khoa-hoc/GV bộ môn tham gia hội nghị khoa học quốc tế BV phụ sản-nhi.jpg",
        alt: t("nursing.img.faculty_international_alt"),
      },
      facultyRecognition: {
        src: "./assets/images/BMDD/nghien-cuu-khoa-hoc/GV BM tham gia hội nghị khoa học BV Đà Nẵng.jpg",
        alt: t("nursing.img.faculty_recognition_alt"),
      },
      studentPresentation: {
        src: "./assets/images/BMDD/nghien-cuu-khoa-hoc/SV tham gia NCKH.jpg",
        alt: t("nursing.img.student_presentation_alt"),
      },
      studentAward: {
        src: "./assets/images/BMDD/nghien-cuu-khoa-hoc/z8015877971740_ce7c91664a6a512ada558bbd91862534.jpg",
        alt: t("nursing.img.student_award_alt"),
      },
    },
  };
}

export function getDepartmentOverview() {
  const DEPARTMENT_IMAGES = getDepartmentImages();
  return {
    introduction: {
      label: t("nursing.overview.intro_label"),
      title: t("nursing.overview.intro_title"),
      paragraphs: [t("nursing.overview.intro_p1"), t("nursing.overview.intro_p2")],
      imageCaption: t("nursing.overview.intro_image_caption"),
    },
    responsibilities: {
      title: t("nursing.overview.resp_title"),
      description: t("nursing.overview.resp_desc"),
      primary: {
        title: t("nursing.overview.resp_primary_title"),
        description: t("nursing.overview.resp_primary_desc"),
        image: DEPARTMENT_IMAGES.facultyGroup,
      },
      items: [
        {
          title: t("nursing.overview.resp_item1_title"),
          description: t("nursing.overview.resp_item1_desc"),
        },
        {
          title: t("nursing.overview.resp_item2_title"),
          description: t("nursing.overview.resp_item2_desc"),
        },
        {
          title: t("nursing.overview.resp_item3_title"),
          description: t("nursing.overview.resp_item3_desc"),
        },
      ],
    },
    development: {
      title: t("nursing.overview.dev_title"),
      description: t("nursing.overview.dev_desc"),
      items: [
        {
          title: t("nursing.overview.dev_item1_title"),
          description: t("nursing.overview.dev_item1_desc"),
        },
        {
          title: t("nursing.overview.dev_item2_title"),
          description: t("nursing.overview.dev_item2_desc"),
        },
        {
          title: t("nursing.overview.dev_item3_title"),
          description: t("nursing.overview.dev_item3_desc"),
        },
      ],
    },
  };
}

export function getLecturers() {
  return [
    {
      id: "truong-thi-my-phuong",
      order: 1,
      fullName: "ThS. Trương Thị Mỹ Phượng",
      position: t("nursing.lecturer.pos1"),
      specialty: t("dept.updating"),
      email: t("dept.updating"),
      profileUrl: "",
      profileStatus: "pending",
    },
    {
      id: "do-thi-thuy-duy",
      order: 2,
      fullName: "ThS. Đỗ Thị Thùy Duy",
      position: t("nursing.lecturer.pos2"),
      profileUrl: "",
      profileStatus: "pending",
    },
    {
      id: "nguyen-thi-thu-hang",
      order: 3,
      fullName: "ThS. Nguyễn Thị Thu Hằng",
      position: t("nursing.lecturer.pos3"),
      profileUrl: "",
      profileStatus: "pending",
    },
    {
      id: "le-thi-thanh-tuyen",
      order: 4,
      fullName: "TS. Lê Thị Thanh Tuyền",
      position: t("nursing.lecturer.pos4"),
      profileUrl: "",
      profileStatus: "pending",
    },
    {
      id: "nguyen-thi-ha",
      order: 5,
      fullName: "ThS. Nguyễn Thị Hà",
      position: t("nursing.lecturer.pos5"),
      profileUrl: "",
      profileStatus: "pending",
    },
    {
      id: "tran-thi-nguyen-tien",
      order: 6,
      fullName: "ThS. Trần Thị Nguyên Tiến",
      position: t("nursing.lecturer.pos6"),
      profileUrl: "",
      profileStatus: "pending",
    },
    {
      id: "nguyen-binh-thao-nguyen",
      order: 7,
      fullName: "ThS. Nguyễn Bình Thảo Nguyên",
      position: t("nursing.lecturer.pos7"),
      profileUrl: "",
      profileStatus: "pending",
    },
    {
      id: "vo-tran-thanh-thao",
      order: 8,
      fullName: "ThS. Võ Trần Thanh Thảo",
      position: t("nursing.lecturer.pos8"),
      profileUrl: "",
      profileStatus: "pending",
    },
    {
      id: "hoang-thi-hien",
      order: 9,
      fullName: "ThS. Hoàng Thị Hiền",
      position: t("nursing.lecturer.pos9"),
      profileUrl: "",
      profileStatus: "pending",
    },
    {
      id: "nguyen-duc-bao",
      order: 10,
      fullName: "ThS. Nguyễn Đức Bảo",
      position: t("nursing.lecturer.pos10"),
      profileUrl: "",
      profileStatus: "pending",
    },
    {
      id: "nguyen-thi-phuc",
      order: 11,
      fullName: "ThS. Nguyễn Thị Phúc",
      position: t("nursing.lecturer.pos11"),
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
      tabLabel: t("nursing.teaching.area1_tab"),
      label: t("nursing.teaching.area1_label"),
      title: t("nursing.teaching.area1_title"),
      description: t("nursing.teaching.area1_desc"),
      secondaryDescription: t("nursing.teaching.area1_desc2"),
      points: [t("nursing.teaching.area1_point1"), t("nursing.teaching.area1_point2"), t("nursing.teaching.area1_point3")],
      image: DEPARTMENT_IMAGES.teaching.lecture,
      imageCaption: t("nursing.teaching.area1_image_caption"),
      details: [
        {
          title: t("nursing.teaching.area1_detail1_title"),
          description: t("nursing.teaching.area1_detail1_desc"),
        },
        {
          title: t("nursing.teaching.area1_detail2_title"),
          description: t("nursing.teaching.area1_detail2_desc"),
        },
        {
          title: t("nursing.teaching.area1_detail3_title"),
          description: t("nursing.teaching.area1_detail3_desc"),
        },
      ],
      gallery: [],
    },
    {
      id: "skills-lab",
      tabLabel: t("nursing.teaching.area2_tab"),
      label: t("nursing.teaching.area2_label"),
      title: t("nursing.teaching.area2_title"),
      description: t("nursing.teaching.area2_desc"),
      secondaryDescription: t("nursing.teaching.area2_desc2"),
      points: [t("nursing.teaching.area2_point1"), t("nursing.teaching.area2_point2"), t("nursing.teaching.area2_point3")],
      image: DEPARTMENT_IMAGES.teaching.lab,
      imageCaption: t("nursing.teaching.area2_image_caption"),
      details: [
        {
          title: t("nursing.teaching.area2_detail1_title"),
          description: t("nursing.teaching.area2_detail1_desc"),
        },
        {
          title: t("nursing.teaching.area2_detail2_title"),
          description: t("nursing.teaching.area2_detail2_desc"),
        },
        {
          title: t("nursing.teaching.area2_detail3_title"),
          description: t("nursing.teaching.area2_detail3_desc"),
        },
      ],
      gallery: DEPARTMENT_IMAGES.teaching.labGallery,
    },
    {
      id: "clinical-training",
      tabLabel: t("nursing.teaching.area3_tab"),
      label: t("nursing.teaching.area3_label"),
      title: t("nursing.teaching.area3_title"),
      description: t("nursing.teaching.area3_desc"),
      secondaryDescription: t("nursing.teaching.area3_desc2"),
      points: [t("nursing.teaching.area3_point1"), t("nursing.teaching.area3_point2"), t("nursing.teaching.area3_point3")],
      image: DEPARTMENT_IMAGES.teaching.clinical,
      imageCaption: t("nursing.teaching.area3_image_caption"),
      details: [
        {
          title: t("nursing.teaching.area3_detail1_title"),
          description: t("nursing.teaching.area3_detail1_desc"),
        },
        {
          title: t("nursing.teaching.area3_detail2_title"),
          description: t("nursing.teaching.area3_detail2_desc"),
        },
        {
          title: t("nursing.teaching.area3_detail3_title"),
          description: t("nursing.teaching.area3_detail3_desc"),
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
      title: t("nursing.research.group1_title"),
      description: t("nursing.research.group1_desc"),
      categories: [
        t("nursing.research.group1_cat1"),
        t("nursing.research.group1_cat2"),
        t("nursing.research.group1_cat3"),
        t("nursing.research.group1_cat4"),
        t("nursing.research.group1_cat5"),
      ],
    },
    {
      id: "student-research",
      title: t("nursing.research.group2_title"),
      description: t("nursing.research.group2_desc"),
      categories: [t("nursing.research.group2_cat1"), t("nursing.research.group2_cat2")],
    },
  ];
}

export function getResearchPathways() {
  const DEPARTMENT_IMAGES = getDepartmentImages();
  return [
    {
      id: "faculty-scholarship",
      label: t("nursing.research.pathway1_label"),
      title: t("nursing.research.pathway1_title"),
      description: t("nursing.research.pathway1_desc"),
      image: DEPARTMENT_IMAGES.research.facultyConference,
    },
    {
      id: "student-scholarship",
      label: t("nursing.research.pathway2_label"),
      title: t("nursing.research.pathway2_title"),
      description: t("nursing.research.pathway2_desc"),
      image: DEPARTMENT_IMAGES.research.studentPresentation,
    },
  ];
}

export function getResearchActivities() {
  const DEPARTMENT_IMAGES = getDepartmentImages();
  return [
    {
      id: "conference-presentation",
      label: t("nursing.research.activity1_label"),
      title: t("nursing.research.activity1_title"),
      image: DEPARTMENT_IMAGES.research.facultyInternational,
    },
    {
      id: "international-conference",
      label: t("nursing.research.activity2_label"),
      title: t("nursing.research.activity2_title"),
      image: DEPARTMENT_IMAGES.research.facultyRecognition,
    },
    {
      id: "student-poster",
      label: t("nursing.research.activity3_label"),
      title: t("nursing.research.activity3_title"),
      image: DEPARTMENT_IMAGES.research.studentAward,
    },
  ];
}

export function getCommunityAreas() {
  return [
    {
      id: "health-education",
      title: t("nursing.community.area1_title"),
      description: t("nursing.community.area1_desc"),
      focus: t("nursing.community.area1_focus"),
    },
    {
      id: "volunteering",
      title: t("nursing.community.area2_title"),
      description: t("nursing.community.area2_desc"),
      focus: t("nursing.community.area2_focus"),
    },
    {
      id: "skills-training",
      title: t("nursing.community.area3_title"),
      description: t("nursing.community.area3_desc"),
      focus: t("nursing.community.area3_focus"),
    },
    {
      id: "partnership",
      title: t("nursing.community.area4_title"),
      description: t("nursing.community.area4_desc"),
      focus: t("nursing.community.area4_focus"),
    },
  ];
}

export function getCommunityProcess() {
  return [
    {
      title: t("nursing.community.process1_title"),
      description: t("nursing.community.process1_desc"),
    },
    {
      title: t("nursing.community.process2_title"),
      description: t("nursing.community.process2_desc"),
    },
    {
      title: t("nursing.community.process3_title"),
      description: t("nursing.community.process3_desc"),
    },
    {
      title: t("nursing.community.process4_title"),
      description: t("nursing.community.process4_desc"),
    },
  ];
}

export function getCommunityImages() {
  const DEPARTMENT_IMAGES = getDepartmentImages();
  return {
    hero: {
      src: "./assets/images/BMDD/HTQT/SHCĐ với đối tác nước ngoài.jpg",
      alt: t("nursing.img.community_hero_alt"),
      width: 2560,
      height: 1439,
    },
    learning: DEPARTMENT_IMAGES.teaching.lab,
  };
}
