export const DEPARTMENT_ROUTES = [
  { key: "overview", label: "Bộ môn Điều dưỡng", href: "#/bo-mon-dieu-duong" },
  { key: "lecturers", label: "Danh sách giảng viên", href: "#/bo-mon-dieu-duong/danh-sach-giang-vien" },
  { key: "teaching", label: "Giảng dạy", href: "#/bo-mon-dieu-duong/giang-day" },
  { key: "research", label: "Nghiên cứu khoa học", href: "#/bo-mon-dieu-duong/nghien-cuu-khoa-hoc" },
  { key: "community", label: "Phục vụ cộng đồng", href: "#/bo-mon-dieu-duong/phuc-vu-cong-dong" },
];

export const DEPARTMENT_IMAGES = {
  overview: {
    hero: {
      src: "./assets/images/BMDD/gv-bo-mon/GV bộ môn và sinh viên tốt nghiệp 2026.jpg",
      alt: "Giảng viên Bộ môn Điều dưỡng cùng sinh viên tốt nghiệp năm 2026",
      width: 2560,
      height: 1921,
    },
  },
  lecturers: {
    hero: {
      src: "./assets/images/BMDD/gv-bo-mon/Giảng viên BM 2026.jpg",
      alt: "Tập thể giảng viên Bộ môn Điều dưỡng năm 2026 tại Trường Y Dược - Đại học Đà Nẵng",
      width: 1567,
      height: 1167,
    },
  },
  facultyGroup: {
    src: "./assets/images/BMDD/gv-bo-mon/Giảng viên BM 2026.jpg",
    alt: "Tập thể giảng viên Bộ môn Điều dưỡng năm 2026",
    width: 1567,
    height: 1167,
  },
  departmentActivity: {
    src: "./assets/images/BMDD/cong-tac-giang-day/Thực hành tại lab 2.jpg",
    alt: "Giảng viên hướng dẫn sinh viên Điều dưỡng thực hành kỹ năng tại phòng lab",
    width: 1280,
    height: 960,
  },
  teaching: {
    lecture: {
      src: "./assets/images/BMDD/kiểm định.png",
      alt: "Lễ trao chứng nhận kiểm định chất lượng chương trình đào tạo ngành Điều dưỡng",
      width: 1600,
      height: 1067,
    },
    lab: {
      src: "./assets/images/BMDD/cong-tac-giang-day/Thực hành tại lab 2.jpg",
      alt: "Giảng viên hướng dẫn sinh viên thực hành kỹ năng điều dưỡng tại phòng lab",
      width: 1280,
      height: 960,
    },
    labGallery: [
      {
        src: "./assets/images/BMDD/cong-tac-giang-day/Thực hành tại lab 3.jpg",
        alt: "Sinh viên thực hành kỹ thuật chăm sóc dưới sự quan sát của giảng viên",
        width: 1280,
        height: 960,
      },
      {
        src: "./assets/images/BMDD/cong-tac-giang-day/thực hành tại lab.jpg",
        alt: "Sinh viên luyện tập quy trình điều dưỡng trên mô hình tại phòng lab",
        width: 1280,
        height: 960,
      },
      {
        src: "./assets/images/BMDD/cong-tac-giang-day/Sinh viên Nhật tham gia học tập thực hành.jpg",
        alt: "Sinh viên quốc tế tham gia buổi học thực hành điều dưỡng",
        width: 1280,
        height: 963,
      },
    ],
    clinical: {
      src: "./assets/images/BMDD/HTQT/Sinh viên Nhật tham gia thực tập tại BV.jpg",
      alt: "Giảng viên và sinh viên trong hoạt động thực tập tại bệnh viện",
      width: 2048,
      height: 1536,
    },
    clinicalGallery: [
      {
        src: "./assets/images/BMDD/HTQT/Sinh viên Nhật tham quan BV ĐN.jpg",
        alt: "Giảng viên và sinh viên trong hoạt động học tập tại Bệnh viện Đà Nẵng",
        width: 2568,
        height: 1926,
      },
    ],
  },
  research: {
    hero: {
      src: "./assets/images/BMDD/nghien-cuu-khoa-hoc/GV BM tham gia báo cáo Hội nghị.jpg",
      alt: "Giảng viên Bộ môn Điều dưỡng trình bày báo cáo tại hội nghị khoa học",
      width: 1280,
      height: 720,
    },
    facultyConference: {
      src: "./assets/images/BMDD/nghien-cuu-khoa-hoc/GV Bộ môn chủ toạ hội nghị khoa học quốc tế BV Đà Nẵng .jpg",
      alt: "Giảng viên Bộ môn Điều dưỡng tham gia chủ tọa hội nghị khoa học quốc tế",
    },
    facultyInternational: {
      src: "./assets/images/BMDD/nghien-cuu-khoa-hoc/GV bộ môn tham gia hội nghị khoa học quốc tế BV phụ sản-nhi.jpg",
      alt: "Giảng viên Bộ môn Điều dưỡng tham gia hội nghị khoa học quốc tế tại Bệnh viện Phụ sản - Nhi Đà Nẵng",
    },
    facultyRecognition: {
      src: "./assets/images/BMDD/nghien-cuu-khoa-hoc/GV BM tham gia hội nghị khoa học BV Đà Nẵng.jpg",
      alt: "Giảng viên Bộ môn Điều dưỡng tại Hội nghị Khoa học Quốc tế Bệnh viện Đà Nẵng",
    },
    studentPresentation: {
      src: "./assets/images/BMDD/nghien-cuu-khoa-hoc/SV tham gia NCKH.jpg",
      alt: "Sinh viên trình bày poster tại Hội nghị Sinh viên nghiên cứu khoa học",
    },
    studentAward: {
      src: "./assets/images/BMDD/nghien-cuu-khoa-hoc/z8015877971740_ce7c91664a6a512ada558bbd91862534.jpg",
      alt: "Sinh viên và giảng viên hướng dẫn bên poster nghiên cứu khoa học",
    },
  },
};

export const DEPARTMENT_OVERVIEW = {
  introduction: {
    label: "Giới thiệu chung",
    title: "Đào tạo điều dưỡng gắn với thực hành và nhu cầu chăm sóc sức khỏe",
    paragraphs: [
      "Bộ môn Điều dưỡng là đơn vị chuyên môn thuộc Khoa Điều dưỡng - Kỹ thuật Y học, tham gia tổ chức giảng dạy các học phần thuộc lĩnh vực điều dưỡng trong chương trình đào tạo của Trường Y Dược - Đại học Đà Nẵng.",
      "Hoạt động chuyên môn của Bộ môn hướng đến giúp người học hình thành năng lực chăm sóc toàn diện, an toàn và hiệu quả; biết giao tiếp, phối hợp với người bệnh, gia đình và nhóm chăm sóc; đồng thời có khả năng tham gia chăm sóc sức khỏe ban đầu và nâng cao sức khỏe cộng đồng.",
    ],
    imageCaption: "Giảng viên hướng dẫn sinh viên thực hành kỹ năng điều dưỡng tại phòng lab",
  },
  responsibilities: {
    title: "Chức năng và nhiệm vụ chuyên môn",
    description:
      "Bộ môn triển khai hoạt động đào tạo, nghiên cứu và phục vụ cộng đồng trong phạm vi được Khoa và Nhà trường phân công.",
    primary: {
      title: "Đào tạo và phát triển chương trình",
      description:
        "Tham gia xây dựng, cập nhật nội dung học phần, học liệu và phương pháp đánh giá theo chuẩn đầu ra của chương trình Điều dưỡng.",
      image: DEPARTMENT_IMAGES.facultyGroup,
    },
    items: [
      {
        title: "Giảng dạy và hướng dẫn thực hành",
        description:
          "Tổ chức giảng dạy lý thuyết, thực hành kỹ năng và hướng dẫn người học vận dụng quy trình điều dưỡng trong các tình huống chăm sóc.",
      },
      {
        title: "Nghiên cứu và cải tiến chất lượng",
        description:
          "Thực hiện và hướng dẫn nghiên cứu, khuyến khích sử dụng bằng chứng khoa học để cải tiến đào tạo và thực hành chăm sóc.",
      },
      {
        title: "Kết nối lâm sàng và cộng đồng",
        description:
          "Phối hợp với cơ sở thực hành, bệnh viện và các đơn vị liên quan trong đào tạo lâm sàng, giáo dục sức khỏe và phục vụ cộng đồng.",
      },
    ],
  },
  development: {
    title: "Định hướng phát triển",
    description:
      "Ưu tiên nâng cao chất lượng đào tạo, tăng cường thực hành dựa trên bằng chứng và mở rộng kết nối chuyên môn phục vụ người học và cộng đồng.",
    items: [
      {
        title: "Nâng cao chất lượng đào tạo",
        description:
          "Cập nhật nội dung, phương pháp dạy học và lượng giá theo năng lực, gắn chuẩn đầu ra với yêu cầu thực hành nghề nghiệp.",
      },
      {
        title: "Thực hành dựa trên bằng chứng",
        description:
          "Phát triển năng lực nghiên cứu của giảng viên và sinh viên, đưa kết quả nghiên cứu phù hợp vào giảng dạy và chăm sóc.",
      },
      {
        title: "Hợp tác và phục vụ cộng đồng",
        description:
          "Tăng cường phối hợp với bệnh viện, cơ sở y tế, trường học và địa phương trong đào tạo, giáo dục sức khỏe và phát triển nghề nghiệp.",
      },
    ],
  },
};

export const LECTURERS = [
  {
    id: "truong-thi-my-phuong",
    order: 1,
    fullName: "ThS. Trương Thị Mỹ Phượng",
    position: "Phó Trưởng Khoa / Trưởng Bộ môn",
    specialty: "Đang cập nhật",
    email: "Đang cập nhật",
    profileUrl: "",
    profileStatus: "pending",
  },
  {
    id: "sample-nguyen-thi-minh-anh",
    order: 2,
    fullName: "ThS. Nguyễn Thị Minh Anh",
    position: "Phó Trưởng Bộ môn",
    profileUrl: "",
    profileStatus: "pending",
    isSample: true,
  },
  {
    id: "sample-le-hoang-phuong",
    order: 3,
    fullName: "ThS. Lê Hoàng Phương",
    position: "Giảng viên chính",
    profileUrl: "",
    profileStatus: "pending",
    isSample: true,
  },
  {
    id: "sample-tran-thi-thu-ha",
    order: 4,
    fullName: "ThS. Trần Thị Thu Hà",
    position: "Giảng viên kiêm nhiệm",
    profileUrl: "",
    profileStatus: "pending",
    isSample: true,
  },
  {
    id: "sample-pham-quoc-bao",
    order: 5,
    fullName: "CN. Phạm Quốc Bảo",
    position: "Giảng viên chính",
    profileUrl: "",
    profileStatus: "pending",
    isSample: true,
  },
  {
    id: "sample-vo-thi-thanh-truc",
    order: 6,
    fullName: "ThS. Võ Thị Thanh Trúc",
    position: "Giảng viên",
    profileUrl: "",
    profileStatus: "pending",
    isSample: true,
  },
  {
    id: "sample-nguyen-hoang-nam",
    order: 7,
    fullName: "CN. Nguyễn Hoàng Nam",
    position: "Giảng viên",
    profileUrl: "",
    profileStatus: "pending",
    isSample: true,
  },
  {
    id: "sample-dang-thi-ngoc-mai",
    order: 8,
    fullName: "ThS. Đặng Thị Ngọc Mai",
    position: "Giảng viên",
    profileUrl: "",
    profileStatus: "pending",
    isSample: true,
  },
];

export const TEACHING_AREAS = [
  {
    id: "lecture-hall",
    tabLabel: "Giảng Đường",
    label: "Lý thuyết nền tảng",
    title: "Giảng dạy tại giảng đường",
    description:
      "Giảng đường là nơi người học xây dựng kiến thức nền tảng, kết nối khoa học cơ bản với chuyên ngành và hình thành cách tiếp cận có hệ thống đối với các tình huống chăm sóc.",
    secondaryDescription:
      "Nội dung học tập được định hướng theo mục tiêu của từng học phần, kết hợp trình bày trọng tâm, trao đổi nhóm, phân tích tình huống và các hoạt động đánh giá trong quá trình.",
    points: ["Kiến thức theo mục tiêu học phần", "Phân tích tình huống chăm sóc", "Phản hồi và đánh giá quá trình"],
    image: DEPARTMENT_IMAGES.teaching.lecture,
    imageCaption: "Trao chứng nhận kiểm định chất lượng chương trình đào tạo ngành Điều dưỡng",
    details: [
      {
        title: "Chuẩn bị kiến thức nền",
        description:
          "Người học tiếp cận khái niệm, nguyên lý và quy trình chuyên môn làm cơ sở cho thực hành kỹ năng và học tập lâm sàng ở các giai đoạn tiếp theo.",
      },
      {
        title: "Học qua tình huống",
        description:
          "Tình huống chăm sóc được sử dụng để khuyến khích người học giải thích dữ kiện, xác định vấn đề và đề xuất hướng xử trí phù hợp với phạm vi học tập.",
      },
      {
        title: "Đánh giá để tiến bộ",
        description:
          "Câu hỏi, thảo luận, bài tập và phản hồi giúp người học nhận diện nội dung cần củng cố trước khi chuyển sang thực hành tại phòng lab.",
      },
    ],
    gallery: [],
  },
  {
    id: "skills-lab",
    tabLabel: "Phòng Lab Thực Hành",
    label: "Thực hành kỹ năng",
    title: "Rèn luyện kỹ năng trong môi trường có hướng dẫn",
    description:
      "Phòng lab tạo điều kiện để người học chuyển kiến thức thành thao tác, luyện tập quy trình điều dưỡng và làm quen với các tình huống chăm sóc trước khi tiếp xúc trực tiếp với người bệnh.",
    secondaryDescription:
      "Hoạt động được tổ chức theo nhóm nhỏ với sự hướng dẫn của giảng viên, chú trọng chuẩn bị, thực hiện đúng trình tự, giao tiếp, an toàn và tự đánh giá sau mỗi lần luyện tập.",
    points: ["Trình diễn và luyện tập theo quy trình", "Thực hành theo nhóm nhỏ", "Phản hồi sau mỗi tình huống"],
    image: DEPARTMENT_IMAGES.teaching.lab,
    imageCaption: "Giảng viên hướng dẫn sinh viên thực hành kỹ năng điều dưỡng tại phòng lab",
    details: [
      {
        title: "Quan sát và phân tích quy trình",
        description:
          "Giảng viên làm rõ mục tiêu, các bước thực hiện, điểm cần lưu ý và yêu cầu an toàn để người học hiểu lý do của từng thao tác.",
      },
      {
        title: "Luyện tập có chủ đích",
        description:
          "Người học thực hành nhiều lần trên mô hình hoặc trong tình huống giả định, phối hợp kỹ thuật với giao tiếp và tổ chức chăm sóc.",
      },
      {
        title: "Phản hồi và củng cố",
        description:
          "Sau hoạt động, người học nhận phản hồi, thảo luận điểm cần cải thiện và tiếp tục luyện tập để tăng sự tự tin trước môi trường lâm sàng.",
      },
    ],
    gallery: DEPARTMENT_IMAGES.teaching.labGallery,
  },
  {
    id: "clinical-training",
    tabLabel: "Lâm Sàng Bệnh Viện",
    label: "Trải nghiệm lâm sàng",
    title: "Học tập trong môi trường chăm sóc thực tế",
    description:
      "Học tập lâm sàng giúp người học vận dụng kiến thức và kỹ năng vào bối cảnh chăm sóc thực tế, đồng thời phát triển tác phong nghề nghiệp, giao tiếp và khả năng phối hợp trong nhóm chăm sóc.",
    secondaryDescription:
      "Hoạt động được thực hiện theo mục tiêu học tập, dưới sự hướng dẫn của giảng viên và cơ sở thực hành, phù hợp với mức độ sẵn sàng và phạm vi năng lực của người học.",
    points: ["Chuẩn bị trước khi đến cơ sở", "Thực hành có hướng dẫn và giám sát", "Tuân thủ an toàn, bảo mật và đạo đức"],
    image: DEPARTMENT_IMAGES.teaching.clinical,
    imageCaption: "Giảng viên và sinh viên trong hoạt động thực tập tại bệnh viện",
    details: [
      {
        title: "Định hướng trước lâm sàng",
        description:
          "Người học được nhắc lại mục tiêu, quy định của cơ sở thực hành, nguyên tắc an toàn, bảo mật thông tin và chuẩn mực giao tiếp nghề nghiệp.",
      },
      {
        title: "Chăm sóc dưới sự giám sát",
        description:
          "Sinh viên quan sát, thu thập thông tin, tham gia các hoạt động chăm sóc phù hợp và trao đổi với người hướng dẫn trong suốt quá trình thực hành.",
      },
      {
        title: "Phản tư sau trải nghiệm",
        description:
          "Thảo luận ca, ghi nhận phản hồi và tự đánh giá giúp người học kết nối trải nghiệm thực tế với kiến thức đã học và xác định mục tiêu cải thiện tiếp theo.",
      },
    ],
    gallery: DEPARTMENT_IMAGES.teaching.clinicalGallery,
  },
];

export const RESEARCH_GROUPS = [
  {
    id: "lecturer-research",
    title: "Nghiên cứu của giảng viên",
    description: "Danh mục đề tài và công bố khoa học do giảng viên Bộ môn thực hiện hoặc tham gia.",
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
    description: "Danh mục đề tài nghiên cứu khoa học sinh viên được nhóm theo năm thực hiện.",
    categories: ["Đề tài sinh viên năm 2026", "Đề tài sinh viên năm 2025"],
  },
];

export const RESEARCH_PATHWAYS = [
  {
    id: "faculty-scholarship",
    label: "Giảng viên",
    title: "Nghiên cứu, công bố và trao đổi học thuật",
    description:
      "Giảng viên tham gia thực hiện đề tài, công bố kết quả và trao đổi chuyên môn tại các hội nghị khoa học trong nước, quốc tế; qua đó kết nối nghiên cứu với đào tạo và thực hành chăm sóc.",
    image: DEPARTMENT_IMAGES.research.facultyConference,
  },
  {
    id: "student-scholarship",
    label: "Sinh viên",
    title: "Hình thành năng lực nghiên cứu từ người học",
    description:
      "Sinh viên được khuyến khích phát triển ý tưởng, thực hiện đề tài dưới sự hướng dẫn của giảng viên và trình bày kết quả bằng báo cáo hoặc poster khoa học.",
    image: DEPARTMENT_IMAGES.research.studentPresentation,
  },
];

export const RESEARCH_ACTIVITIES = [
  {
    id: "conference-presentation",
    label: "Hội nghị khoa học",
    title: "Kết nối chuyên môn tại hội nghị Nhi khoa quốc tế",
    image: DEPARTMENT_IMAGES.research.facultyInternational,
  },
  {
    id: "international-conference",
    label: "Hợp tác học thuật",
    title: "Tham gia hội nghị khoa học quốc tế tại Bệnh viện Đà Nẵng",
    image: DEPARTMENT_IMAGES.research.facultyRecognition,
  },
  {
    id: "student-poster",
    label: "Nghiên cứu sinh viên",
    title: "Trình bày poster và trao đổi kết quả nghiên cứu",
    image: DEPARTMENT_IMAGES.research.studentAward,
  },
];

export const COMMUNITY_AREAS = [
  {
    id: "health-education",
    title: "Giáo dục sức khỏe",
    description: "Xây dựng và chia sẻ nội dung chăm sóc sức khỏe phù hợp với nhu cầu của người học, người bệnh, gia đình và cộng đồng.",
    focus: "Kiến thức tự chăm sóc, phòng ngừa và nâng cao sức khỏe.",
  },
  {
    id: "volunteering",
    title: "Hoạt động tình nguyện",
    description: "Khuyến khích giảng viên và sinh viên vận dụng kiến thức chuyên môn trong các chương trình vì sức khỏe cộng đồng.",
    focus: "Chuyên môn điều dưỡng gắn với tinh thần trách nhiệm xã hội.",
  },
  {
    id: "skills-training",
    title: "Tập huấn kỹ năng",
    description: "Phối hợp tổ chức tập huấn sơ cấp cứu, kỹ năng chăm sóc và truyền thông sức khỏe theo nhu cầu thực tế.",
    focus: "Sơ cấp cứu, chăm sóc cơ bản và truyền thông sức khỏe.",
  },
  {
    id: "partnership",
    title: "Phối hợp cùng đối tác",
    description: "Kết nối bệnh viện, cơ sở y tế, trường học và địa phương trong đào tạo, thực hành và nâng cao sức khỏe.",
    focus: "Chương trình được xây dựng cùng đơn vị tiếp nhận và cộng đồng.",
  },
];

export const COMMUNITY_PROCESS = [
  {
    title: "Lắng nghe nhu cầu",
    description: "Làm rõ nhóm đối tượng, vấn đề sức khỏe và điều kiện triển khai tại đơn vị hoặc địa phương.",
  },
  {
    title: "Cùng xây dựng nội dung",
    description: "Thống nhất mục tiêu, hình thức, vai trò chuyên môn và cách truyền đạt phù hợp với người tham gia.",
  },
  {
    title: "Tổ chức an toàn",
    description: "Chuẩn bị nhân lực, học liệu và phương án thực hiện theo phạm vi chuyên môn được phân công.",
  },
  {
    title: "Ghi nhận và cải tiến",
    description: "Tổng hợp phản hồi, lưu hồ sơ hoạt động và điều chỉnh chương trình cho lần phối hợp tiếp theo.",
  },
];

export const COMMUNITY_IMAGES = {
  hero: {
    src: "./assets/images/BMDD/HTQT/SHCĐ với đối tác nước ngoài.jpg",
    alt: "Giảng viên và sinh viên Bộ môn Điều dưỡng tham gia sinh hoạt chuyên đề trực tuyến với đối tác quốc tế",
    width: 2560,
    height: 1439,
  },
  learning: DEPARTMENT_IMAGES.teaching.lab,
};
