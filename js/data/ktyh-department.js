export const DEPARTMENT_ROUTES = [
  { key: "overview", label: "Bộ môn Kỹ thuật Y học", href: "#/bo-mon-ktyh" },
  {
    key: "lecturers",
    label: "Danh sách giảng viên",
    href: "#/bo-mon-ktyh/danh-sach-giang-vien",
  },
  { key: "teaching", label: "Giảng dạy", href: "#/bo-mon-ktyh/giang-day" },
  {
    key: "research",
    label: "Nghiên cứu khoa học",
    href: "#/bo-mon-ktyh/nghien-cuu-khoa-hoc",
  },
  {
    key: "community",
    label: "Phục vụ cộng đồng",
    href: "#/bo-mon-ktyh/phuc-vu-cong-dong",
  },
];

export const DEPARTMENT_IMAGES = {
  overview: {
    hero: {
      src: "./assets/images/KTYH-Giao vien bo mon/GV bo mon KTYH.jpg",
      alt: "Giảng viên Bộ môn Kỹ thuật Y học tại Trường Y Dược - Đại học Đà Nẵng",
      width: 950,
      height: 633,
    },
  },
  lecturers: {
    hero: {
      src: "./assets/images/KTYH-Giao vien bo mon/GV bm KTYH.jpg",
      alt: "Tập thể giảng viên Bộ môn Kỹ thuật Y học",
      width: 1567,
      height: 1167,
    },
  },
  facultyGroup: {
    src: "./assets/images/KTYH-Giao vien bo mon/GV bm KTYH.jpg",
    alt: "Tập thể giảng viên Bộ môn Kỹ thuật Y học",
    width: 1567,
    height: 1167,
  },
  departmentActivity: {
    src: "./assets/images/KTYH-Giang day/SV TT lấy máu_.jpg",
    alt: "Sinh viên thực hành lấy mẫu bệnh phẩm tại lab",
    width: 1280,
    height: 960,
  },
  teaching: {
    lecture: {
      src: "https://picsum.photos/seed/ktyh-lecture-hall/800/600",
      alt: "Giảng đường hiện đại tại Trường Y Dược - Đại học Đà Nẵng",
      width: 800,
      height: 600,
    },
    lab: {
      src: "./assets/images/KTYH-Giang day/SV TT lấy máu_.jpg",
      alt: "Sinh viên thực hành lấy mẫu bệnh phẩm tại lab",
      width: 1280,
      height: 960,
    },
    labGallery: [
      {
        src: "./assets/images/KTYH-Giang day/SV TT lấy máu_.jpg",
        alt: "Kỹ thuật lấy máu tĩnh mạch tại phòng thí nghiệm",
        width: 1280,
        height: 960,
      },
      {
        src: "./assets/images/KTYH-Giang day/TT GPV tai BV San Nhi .jpg",
        alt: "Thực tập Giải phẫu bệnh tại BV Sản Nhi",
        width: 1280,
        height: 960,
      },
    ],
    clinical: {
      src: "./assets/images/KTYH-Giang day/Lam sang tai BV San Nhi.jpg",
      alt: "Sinh viên thực hành lâm sàng tại khoa xét nghiệm Bệnh viện Sản Nhi",
      width: 1280,
      height: 960,
    },
    clinicalGallery: [
      {
        src: "./assets/images/KTYH-Giang day/TT lam sang.jpg",
        alt: "Thực tập lâm sàng khoa Xét nghiệm",
        width: 1280,
        height: 960,
      },
      {
        src: "./assets/images/KTYH-Giang day/TT lay mau tai BV.jpg",
        alt: "Thực hành lấy mẫu bệnh phẩm tại viện",
        width: 1280,
        height: 960,
      },
      {
        src: "./assets/images/KTYH-Giang day/TT tai BV San Nhi.jpg",
        alt: "Hướng dẫn lâm sàng trực tiếp tại BV Sản - Nhi",
        width: 1280,
        height: 960,
      },
      {
        src: "./assets/images/KTYH-Giang day/Lam sang tai BV San Nhi.jpg",
        alt: "Kiến tập Xét nghiệm Sản - Nhi",
        width: 1280,
        height: 960,
      },
    ],
  },
  research: {
    hero: {
      src: "./assets/images/KTYH-Nghien cuu sinh/Nhom NCKH .jpg",
      alt: "Nhóm nghiên cứu khoa học Bộ môn Kỹ thuật Y học",
      width: 1280,
      height: 960,
    },
    facultyConference: {
      src: "./assets/images/KTYH-Nghien cuu sinh/Nhom NCKH .jpg",
      alt: "Giảng viên và sinh viên nghiên cứu tại phòng lab",
    },
    studentPresentation: {
      src: "./assets/images/KTYH-Nghien cuu sinh/SV NCKH.jpg",
      alt: "Sinh viên thực hiện đề tài nghiên cứu khoa học",
    },
  },
};

export const DEPARTMENT_OVERVIEW = {
  introduction: {
    label: "Giới thiệu chung",
    title: "Đào tạo cử nhân kỹ thuật y học vững tay nghề, sáng y đức",
    paragraphs: [
      "Bộ môn Kỹ thuật Y học (KTYH) là một bộ môn chuyên ngành mũi nhọn thuộc Khoa Điều dưỡng - Kỹ thuật Y học, Trường Y Dược - Đại học Đà Nẵng. Bộ môn đảm nhận sứ mệnh đào tạo Cử nhân Kỹ thuật Xét nghiệm Y học có phẩm chất đạo đức tốt, có kiến thức khoa học cơ bản và y học cơ sở vững chắc, có kỹ năng thực hành nghề nghiệp thành thạo để phục vụ đắc lực cho công tác chẩn đoán, điều trị và chăm sóc sức khỏe nhân dân.",
      "Với phương châm giảng dạy gắn liền với thực tiễn lâm sàng, sinh viên ngành Kỹ thuật Y học không chỉ được rèn luyện chuyên môn mà còn được rèn luyện tác phong làm việc chuẩn mực, tinh thần trách nhiệm cao đối với người bệnh và cộng đồng.",
    ],
    imageCaption: "Tập thể Giảng viên Bộ môn KTYH",
  },
  responsibilities: {
    title: "Chức năng và nhiệm vụ chuyên môn",
    description:
      "Bộ môn triển khai hoạt động đào tạo, nghiên cứu và phục vụ cộng đồng trong lĩnh vực Kỹ thuật Xét nghiệm Y học.",
    primary: {
      title: "Quản lý và phát triển học thuật",
      description:
        "Giúp Khoa Điều dưỡng - Kỹ thuật Y học quản lý toàn diện công tác chuyên môn, học thuật liên quan đến ngành Kỹ thuật Xét nghiệm Y học và xây dựng chuẩn năng lực đầu ra của sinh viên đáp ứng tiêu chuẩn quốc gia.",
      image: DEPARTMENT_IMAGES.facultyGroup,
    },
    items: [
      {
        title: "Giảng dạy và hướng dẫn thực hành",
        description:
          "Tổ chức giảng dạy các học phần lý thuyết; đào tạo, hướng dẫn kỹ năng thực hành tiền lâm sàng tại phòng thực hành (Lab); đồng thời tổ chức và hướng dẫn thực hành, thực tập lâm sàng cho sinh viên tại các cơ sở y tế và bệnh viện thực hành liên kết theo chương trình đào tạo.",
      },
      {
        title: "Nghiên cứu khoa học & cải tiến",
        description:
          "Thực hiện nghiên cứu khoa học, cải tiến các kỹ thuật xét nghiệm phục vụ chẩn đoán bệnh lý và hỗ trợ chăm sóc người bệnh và bảo vệ sức khỏe cộng đồng.",
      },
      {
        title: "Biên soạn tài liệu & phát triển",
        description:
          "Phát triển và biên soạn ngân hàng đề thi, tài liệu học tập, sách giáo trình chuyên ngành Kỹ thuật Xét nghiệm Y học.",
      },
    ],
  },
  development: {
    title: "Định hướng phát triển",
    description:
      "Bộ môn Kỹ thuật Y học hướng tới nâng cao chất lượng đào tạo, đổi mới công nghệ và phát triển nghiên cứu khoa học phục vụ chẩn đoán lâm sàng.",
    items: [
      {
        title: "Hiện đại hóa cơ sở vật chất",
        description:
          "Đầu tư nâng cấp các trang thiết bị phòng thí nghiệm xét nghiệm tiên tiến, cập nhật công nghệ tự động hóa trong giảng dạy thực hành kỹ năng.",
      },
      {
        title: "Mở rộng mạng lưới thực hành lâm sàng",
        description:
          "Tăng cường liên kết Viện - Trường với các bệnh viện lớn trong khu vực nhằm mang đến trải nghiệm học tập lâm sàng phong phú, sát thực tế nhất cho sinh viên.",
      },
      {
        title: "Nâng cao năng lực nghiên cứu ứng dụng",
        description:
          "Đẩy mạnh các đề tài nghiên cứu ứng dụng kỹ thuật xét nghiệm mới vào sàng lọc, chẩn đoán sớm bệnh lý ở người học và cộng đồng.",
      },
    ],
  },
};

export const LECTURERS = [
  {
    id: "nguyen-van-song",
    order: 1,
    fullName: "TS. Nguyễn Văn Song",
    position: "Trưởng Khoa / Trưởng Bộ môn",
    specialty: "Kỹ thuật Xét nghiệm Y học",
    email: "nvsong@smp.udn.vn",
    profileUrl: "",
    profileStatus: "pending",
  },
  {
    id: "nguyen-thi-dieu-lien",
    order: 2,
    fullName: "TS. Nguyễn Thị Diệu Liên",
    position: "Giảng viên chuyên trách",
    profileUrl: "",
    profileStatus: "pending",
  },
  {
    id: "pham-quoc-do",
    order: 3,
    fullName: "ThS. BS. Phạm Quốc Đô",
    position: "Giảng viên chuyên trách",
    profileUrl: "",
    profileStatus: "pending",
  },
  {
    id: "phan-thi-thu-ly",
    order: 4,
    fullName: "ThS. Phan Thị Thu Lý",
    position: "Giảng viên chuyên trách",
    profileUrl: "",
    profileStatus: "pending",
  },
  {
    id: "tran-thi-van",
    order: 5,
    fullName: "ThS. Trần Thị Vân",
    position: "Giảng viên chuyên trách",
    profileUrl: "",
    profileStatus: "pending",
  },
  {
    id: "pham-trinh-truc-phuong",
    order: 6,
    fullName: "ThS. Phạm Trịnh Trúc Phượng",
    position: "Giảng viên chuyên trách",
    profileUrl: "",
    profileStatus: "pending",
  },
  {
    id: "phan-thi-cam-luyen",
    order: 7,
    fullName: "ThS. Phan Thị Cẩm Luyến",
    position: "Giảng viên / Giáo vụ Khoa",
    profileUrl: "",
    profileStatus: "pending",
  },
  {
    id: "nguyen-thi-hoa",
    order: 8,
    fullName: "CN. Nguyễn Thị Hoa",
    position: "Giảng viên / Giáo vụ Bộ môn",
    profileUrl: "",
    profileStatus: "pending",
  },
];

export const TEACHING_AREAS = [
  {
    id: "lecture-hall",
    tabLabel: "Giảng Đường",
    label: "Lý thuyết nền tảng",
    title: "Học lý thuyết tại giảng đường khang trang",
    description:
      "Các phòng học lý thuyết tại Trường Y Dược - Đại học Đà Nẵng được thiết kế chuẩn mực sư phạm, đầy đủ trang thiết bị hỗ trợ tối ưu việc tiếp thu bài giảng:",
    secondaryDescription:
      "Môi trường giảng dạy thân thiện, tích hợp các công nghệ trình chiếu hiện đại giúp sinh viên dễ dàng tiếp thu các kiến thức y sinh học cơ sở và chuyên ngành xét nghiệm.",
    points: [
      "Hệ thống máy chiếu chất lượng cao sắc nét, màn chiếu rộng.",
      "Điều hòa công suất lớn đảm bảo môi trường học tập mát mẻ, dễ chịu.",
      "Bảng viết chất lượng và hệ thống âm thanh, micro không dây hiện đại.",
      "Không gian thiết kế thoáng rộng, cách âm tốt tạo sự tập trung tối đa cho người học.",
    ],
    image: DEPARTMENT_IMAGES.teaching.lecture,
    imageCaption: "Giảng đường học tập lý thuyết khang trang, hiện đại",
    details: [
      {
        title: "Chuẩn bị kiến thức nền tảng",
        description:
          "Học viên được trang bị lý thuyết y học cơ sở, nguyên lý hoạt động của thiết bị xét nghiệm và quy trình kiểm chuẩn phòng xét nghiệm.",
      },
      {
        title: "Ứng dụng công nghệ trực quan",
        description:
          "Các bài giảng tích hợp sơ đồ, lưu đồ xét nghiệm và slide trực quan sinh động giúp tăng cường khả năng tự học của sinh viên.",
      },
      {
        title: "Đánh giá thường xuyên",
        description:
          "Sử dụng các bài test nhanh, câu hỏi tương tác để đảm bảo sinh viên nắm chắc nguyên lý lý thuyết trước khi thực hành tại phòng lab.",
      },
    ],
    gallery: [],
  },
  {
    id: "skills-lab",
    tabLabel: "Phòng Lab Thực Hành",
    label: "Thực hành kỹ năng chuyên sâu",
    title: "Rèn luyện tay nghề tại các phòng lab chuyên ngành đạt chuẩn",
    description:
      "Học đi đôi với hành, sinh viên Bộ môn KTYH thường xuyên thực hành tại Trung tâm Thí nghiệm - Tiền lâm sàng với các phòng lab chuyên ngành Xét nghiệm đạt chuẩn:",
    secondaryDescription:
      "Sinh viên thực hành trực tiếp với các thiết bị xét nghiệm hiện đại dưới sự giám sát và hướng dẫn tận tình của các giảng viên nhiều kinh nghiệm.",
    points: [
      "Lab Hóa sinh - Miễn dịch: Đo quang, ly tâm, phân tích điện giải.",
      "Lab Vi sinh - Ký sinh trùng: Cấy vô khuẩn, soi tươi kính hiển vi, nhận diện vi khuẩn.",
      "Lab Huyết học - Đông máu: Thực hành đếm tế bào, đông máu cơ bản, định nhóm máu.",
      "Lab Giải phẫu bệnh: Quy trình đúc, cắt mô và nhuộm tiêu bản tế bào.",
    ],
    image: DEPARTMENT_IMAGES.teaching.lab,
    imageCaption: "Thực hành lấy mẫu bệnh phẩm tại Lab chuyên ngành KTYH",
    details: [
      {
        title: "Kỹ năng tiền lâm sàng",
        description:
          "Tập trung huấn luyện quy trình thao tác chuẩn (SOP), an toàn sinh học phòng xét nghiệm và xử lý sự cố tràn đổ bệnh phẩm.",
      },
      {
        title: "Thực hành nhóm nhỏ",
        description:
          "Mỗi nhóm thực hành chỉ gồm 4-5 sinh viên dưới sự kèm cặp sát sao của giảng viên để đảm bảo kỹ năng thao tác chuẩn xác nhất.",
      },
      {
        title: "Đánh giá năng lực OSCE",
        description:
          "Hệ thống thi chạy trạm OSCE đánh giá khách quan năng lực thực hành của sinh viên sau mỗi học phần kỹ năng.",
      },
    ],
    gallery: DEPARTMENT_IMAGES.teaching.labGallery,
  },
  {
    id: "clinical-training",
    tabLabel: "Lâm Sàng Bệnh Viện",
    label: "Trải nghiệm lâm sàng thực tế",
    title: "Cọ xát thực tế tại các bệnh viện lớn miền Trung",
    description:
      "Chương trình học của bộ môn đặc biệt chú trọng thực tập lâm sàng tại các cơ sở y tế đầu ngành miền Trung, giúp sinh viên làm quen với áp lực công việc thực tế:",
    secondaryDescription:
      "Quá trình thực tập lâm sàng giúp sinh viên chuyển tải kỹ năng từ phòng lab sang môi trường xét nghiệm bệnh viện thực tế với hàng ngàn mẫu bệnh phẩm mỗi ngày.",
    points: [
      "Bệnh viện Đà Nẵng: Tiếp cận máy móc tự động hóa hoàn toàn ở quy mô lớn.",
      "Bệnh viện C Đà Nẵng: Rèn luyện quy trình chuẩn ISO phòng xét nghiệm.",
      "Bệnh viện Phụ sản - Nhi: Thực tập xét nghiệm huyết học và miễn dịch nhi khoa.",
      "Học tập trực tiếp dưới sự hướng dẫn của các KTV trưởng, y bác sĩ bệnh viện.",
    ],
    image: DEPARTMENT_IMAGES.teaching.clinical,
    imageCaption: "Thực tập lâm sàng tại BV Phụ sản - Nhi Đà Nẵng",
    details: [
      {
        title: "Hòa nhập môi trường bệnh viện",
        description:
          "Sinh viên được trực tiếp tham gia quy trình tiếp nhận mẫu, thực hiện xét nghiệm trên hệ thống máy tự động và trả kết quả dưới sự giám sát.",
      },
      {
        title: "Học hỏi từ chuyên gia lâm sàng",
        description:
          "Hướng dẫn lâm sàng bởi các Trưởng khoa, KTV trưởng và các chuyên viên xét nghiệm giàu kinh nghiệm tại bệnh viện liên kết.",
      },
      {
        title: "Kiểm soát chất lượng xét nghiệm",
        description:
          "Sinh viên làm quen với hoạt động nội kiểm (IQC) và ngoại kiểm (EQAS) để hiểu sâu sắc về độ tin cậy của kết quả xét nghiệm lâm sàng.",
      },
    ],
    gallery: DEPARTMENT_IMAGES.teaching.clinicalGallery,
  },
];

export const RESEARCH_GROUPS = [
  {
    id: "lecturer-research",
    title: "Nghiên cứu của giảng viên",
    description:
      "Danh mục đề tài và công bố khoa học do giảng viên Bộ môn KTYH thực hiện hoặc tham gia.",
    categories: [
      "Đề tài cấp Bộ",
      "Đề tài cấp Đại học Đà Nẵng",
      "Đề tài cấp cơ sở",
      "Bài báo khoa học trong nước",
      "Bài báo khoa học quốc tế",
    ],
  },
  {
    id: "student-research",
    title: "Nghiên cứu của sinh viên",
    description:
      "Danh mục đề tài nghiên cứu khoa học sinh viên chuyên ngành Kỹ thuật Xét nghiệm Y học.",
    categories: ["Đề tài sinh viên năm 2026", "Đề tài sinh viên năm 2025"],
  },
];

export const RESEARCH_PATHWAYS = [
  {
    id: "faculty-scholarship",
    label: "Giảng viên",
    title: "Nghiên cứu ứng dụng và công bố học thuật",
    description:
      "Giảng viên tích cực chủ trì các đề tài nghiên cứu khoa học các cấp, ứng dụng công nghệ kỹ thuật xét nghiệm mới vào chẩn đoán bệnh lý và chia sẻ học thuật tại các hội thảo khoa học.",
    image: DEPARTMENT_IMAGES.teaching.lecture,
  },
  {
    id: "student-scholarship",
    label: "Sinh viên",
    title: "Hình thành tư duy nghiên cứu y học thực chứng",
    description:
      "Sinh viên Kỹ thuật Y học được khuyến khích tham gia nghiên cứu khoa học từ sớm, rèn luyện tư duy phản biện, kỹ năng viết báo cáo và báo cáo tại hội nghị sinh viên.",
    image: DEPARTMENT_IMAGES.research.studentPresentation,
  },
];

export const RESEARCH_ACTIVITIES = [
  {
    id: "research-group-photo",
    label: "Nghiên cứu sinh viên",
    title: "Nhóm sinh viên nghiên cứu khoa học Bộ môn KTYH",
    image: {
      src: "./assets/images/KTYH-Nghien cuu sinh/Nhom NCKH .jpg",
      alt: "Nhóm sinh viên nghiên cứu khoa học KTYH",
    },
  },
  {
    id: "student-presentation",
    label: "Hội nghị khoa học trẻ",
    title: "Sinh viên báo cáo và trình bày đề tài nghiên cứu khoa học",
    image: {
      src: "./assets/images/KTYH-Nghien cuu sinh/SV NCKH.jpg",
      alt: "Sinh viên nghiên cứu khoa học",
    },
  },
];

export const COMMUNITY_AREAS = [
  {
    id: "health-screening",
    title: "Xét nghiệm thiện nguyện",
    description:
      "Đo huyết áp, sàng lọc đường huyết nhanh và tư vấn sức khỏe cơ bản cho bà con vùng sâu, vùng khó khăn.",
    focus:
      "Sàng lọc đường huyết, kiểm tra huyết áp và tư vấn lối sống phòng bệnh.",
  },
  {
    id: "health-education",
    title: "Tư vấn & Tuyên truyền",
    description:
      "Hướng dẫn cộng đồng phòng tránh bệnh truyền nhiễm, cách xem kết quả xét nghiệm định kỳ và chăm sóc bản thân.",
    focus: "Vệ sinh phòng dịch và giải thích các chỉ số xét nghiệm thường gặp.",
  },
  {
    id: "technology-transfer",
    title: "Tập huấn và Chuyển giao",
    description:
      "Hỗ trợ đào tạo kỹ thuật viên cơ bản và tập huấn quy trình lấy mẫu an toàn cho các cơ sở y tế tuyến dưới.",
    focus: "Quy trình lấy mẫu chuẩn xác, bảo quản mẫu bệnh phẩm lâm sàng.",
  },
  {
    id: "bio-safety-awareness",
    title: "Bảo vệ môi trường y tế",
    description:
      "Tuyên truyền an toàn sinh học và nâng cao nhận thức xử lý chất thải y tế trong cộng đồng.",
    focus: "Phòng chống lây nhiễm chéo và phân loại rác thải y tế.",
  },
];

export const COMMUNITY_PROCESS = [
  {
    title: "Lắng nghe nhu cầu",
    description:
      "Phối hợp với địa phương xác định nhu cầu sàng lọc xét nghiệm (đường huyết, ký sinh trùng...).",
  },
  {
    title: "Chuẩn bị chuyên môn",
    description:
      "Chuẩn bị máy đo cầm tay, sinh phẩm xét nghiệm nhanh và các trang thiết bị bảo hộ an toàn sinh học.",
  },
  {
    title: "Thực hiện sàng lọc",
    description:
      "Tổ chức các trạm lấy mẫu và đo đạc nhanh tại chỗ, đảm bảo an toàn sinh học tuyệt đối cho người dân.",
  },
  {
    title: "Tư vấn và phản hồi",
    description:
      "Giải thích ý nghĩa kết quả xét nghiệm trực tiếp cho người dân, hướng dẫn chế độ ăn uống và theo dõi y tế phù hợp.",
  },
];

export const COMMUNITY_IMAGES = {
  hero: {
    src: "./assets/images/KTYH-Nghien cuu sinh/Nhom NCKH .jpg",
    alt: "Hoạt động sinh hoạt chuyên môn KTYH vì sức khỏe cộng đồng",
    width: 1280,
    height: 960,
  },
  learning: {
    src: "./assets/images/KTYH-Giang day/SV TT lấy máu_.jpg",
    alt: "Năng lực thực hành lấy máu được chuẩn bị chu đáo trước khi phục vụ cộng đồng",
    width: 1280,
    height: 960,
  },
};
