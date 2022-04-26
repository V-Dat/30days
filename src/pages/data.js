const data = {
  day: [
    "Day1",
    "Day2",
    "Day3",
    "Day4",
    "Day5,Day6",
    "Day7",
    "Day8",
    "Day9",
    "Day10",
    "Day11",
  ],
  about: {
    name: "ĐOÀN VĂN ĐẠT",
    dayOfBirth: "19/03/1998",
    description: "Tôi tên là Đoàn Văn Đạt - tôi sao sao sao ",
    github: "https://github.com/V-Dat",
    avatar: "./img/about/avatar.png",
    age: 24,
    email: "Vandat.k21@gmail.com",
    phone: "0399 179 067",
    location: "TP HCM",
    education: {
      tdtu_icon: "./img/about/tdtu_icon.jpg",
      school: "TON DUC THANG UNIVERSITY",
      time: "2017 - 2021",
      gpa: "GPA: 2.8/4.0",
      major: "International Business",
    },
    certificates: [
      { name: "Toeic :", value: "615" },
      { name: "Microsoft Office Specialist :", value: "Word" },
      { name: "Microsoft Office Specialist :", value: "Excel" },
    ],
    work: [
      {
        company: "NPV EXPRESS & LOGISTIC CO., LTD",
        time: "9/2019 - 6/2021",
        task: [
          "Quản lý & thiết lập database",
          "Theo dõi & khai báo cáo hóa chất MSDS",
          "Theo dõi trừ lùi, chi tiết hàng hóa xuất nhập khẩu",
          "Lên tờ khai xuất nhập khẩu",
        ],
      },
    ],

    love: "du lịch!",
    skill: [
      {
        text: "HTML",
        value: "HTML DOM , HTML Event, HTTP Methods",
        iconClassName: "fab fa-html5 html",
      },
      {
        text: "CSS",
        value: "Flex Box, Grid System, Reponsive, BEM",
        iconClassName: "fab fa-css3-alt css",
      },
      {
        text: "JavaScript",
        value: "Javascript cơ bản, ES6, ...",
        iconClassName: "fab fa-js-square js",
      },
      {
        text: "ReactJS",
        value: "JSX, Function Components, Hooks",
        iconClassName: "fab fa-react react",
      },
      {
        text: "My SQL",
        value: "CRUD, Query",
        iconClassName: "fas fa-database sql",
      },
      {
        text: "M.Office",
        value: "Sử dụng thành thạo",
        iconClassName: "fab fa-microsoft microsoft",
      },
    ],
    skillDetail: [
      { name: "HTML ", value: ": HTML DOM , HTML Event, HTTP Methods" },
      { name: "CSS ", value: ": Flex Box, Grid System, Reponsive, BEM" },
      { name: "JavaScript ", value: ": Javascript cơ bản, ES6, ..." },
      { name: "ReactJS ", value: ": JSX, Function Components, Hooks" },
      { name: "SQL ", value: ": CRUD, Query" },
      { name: "M.Office ", value: ": Sử dụng thành thạo" },
      {
        name: "Tiếng Anh ",
        value: ": Có khả năng đọc và hiểu tài liệu tiếng Anh",
      },
      {
        name: "Kỹ Năng Mềm ",
        value: ": Có khả năng làm việc nhóm, làm việc dưới áp lực",
      },
    ],
    objective: [
      {
        key: "Ngắn Hạn",
        value: [
          "Tìm kiếm một vị trí trong một môi trường làm việc chuyên nghiệp, năng động và thử thách.",
          "Đóng góp những kiến thức, kinh nghiệm và kỹ năng tốt nhất của tôi cho sự phát triển của công ty.",
          "Luôn luôn phát triển khả năng bản thân, tích lũy thêm nhiều kinh nghiệm để hoàn thành tốt các nhiệm vụ được giao và cống hiến tối đa cho công ty. ",
        ],
      },
      {
        key: "Dài Hạn",
        value: [
          "Gắn bó lâu dài với công ty, trở thành nhân viên nòng cốt, tạo nhiều giá trị cho công ty.",
        ],
      },
    ],

    objectiveSkill: [
      {
        text: "NextJS",
        value: "Framework của React",
        iconClassName: "fa-solid fa-n nextjs",
      },
      {
        text: "React Native",
        value: "Framework của React",
        iconClassName: "fab fa-react react",
      },
      {
        text: "React Redux",
        value: "Library của React",
        iconClassName: "fas fa-check-double redux",
      },
      {
        text: "SCSS, SASS",
        value: "Chương trình tiền xử lý CSS (CSS preprocessor).",
        iconClassName: "fab fa-sass scss",
      },
      {
        text: "MongoDB",
        value: "Quản lý Database",
        iconClassName: "fas fa-database mongodb",
      },
      {
        text: "Figma",
        value: "Thiết kế UI web",
        iconClassName: "fa-brands fa-figma figma",
      },
    ],

    listProject: [
      {
        title: "30 Days Practice",
        link: "null",
        listImage: [
          "./img/about/day1.png",
          "./img/about/day2.png",
          "./img/about/day3.png",
          "./img/about/day4.png",
          "./img/about/day5.png",
          "./img/about/day6.png",
          "./img/about/day7.png",
          "./img/about/day8.png",
        ],
        projectDescription: [
          "Tạo HTML CSS từ design",
          "Responsive cho cả mobile và tablet",
        ],
        technologies: [
          "Style SCSS",
          "State: Redux, Hook",
          "Library ReactJS",
          "React Router V6",
          "Xử lý logics: JS, Hooks",
        ],
      },

      {
        title: "TheBand - HTML/CSS",
        link: "https://v-dat.github.io/w3-theband",
        listImage: [
          "./img/about/theband1.png",
          "./img/about/theband2.png",
          "./img/about/theband3.png",
          "./img/about/theband4.png",
        ],
        projectDescription: [
          "Tạo HTML CSS từ design",
          "Responsive cho cả mobile và tablet",
        ],
        technologies: [
          "Style: CSS",
          "Cấu trúc web: HTML",
          "Xử lý logics: JS (rất ít)",
        ],
      },
    ],
  },
  dayList: [
    {
      day: "Day1",
      name: "product card",
      url: "Day1",
      imageUrl: "./img/listimage/product_card.png",
    },
    {
      day: "Day2",
      name: "profile card",
      url: "Day2",
      imageUrl: "./img/listimage/profile_card.png",
    },
    {
      day: "Day3",
      name: "create modal",
      url: "Day3",
      imageUrl: "./img/listimage/create_modal.png",
    },
    {
      day: "Day4",
      name: "image gallery",
      url: "Day4",
      imageUrl: "./img/listimage/image_gallery.png",
    },
    {
      day: "Day5",
      name: "Login Form",
      url: "Day5",
      imageUrl: "./img/listimage/login.png",
    },
    {
      day: "Day6",
      name: "Date Time",
      url: "Day6",
      imageUrl: "./img/listimage/time.png",
    },
    {
      day: "Day7",
      name: "ToDo App",
      url: "Day7",
      imageUrl: "./img/listimage/todo.png",
    },
    {
      day: "Day8",
      name: "Music Player",
      url: "Day8",
      imageUrl: "./img/listimage/mp3_player.png",
    },
    {
      day: "Day9",
      name: "Image Picker",
      url: "Day9",
      imageUrl: "./img/listimage/mp3_player.png",
    },
  ],
  profile: [
    {
      id: 1,
      name: "Christina",
      avatar: "./img/day2/Christina.png",
      job: "Frontend Developer",
      social: ["facebook", "youtube", "github", "tiktok"],
    },
    {
      id: 2,
      name: "David",
      avatar: "./img/day2/David.png",
      job: "Frontend Developer",
      social: ["facebook", "youtube", "github", "tiktok"],
    },
    {
      id: 3,
      name: "Matheo Mardaye",
      avatar: "./img/day2/Matheo_Mardaye.png",
      job: "Frontend Developer",
      social: ["facebook", "youtube", "github", "tiktok"],
    },
    {
      id: 4,
      name: "Nice",
      avatar: "./img/day2/Nice.png",
      job: "Frontend Developer",
      social: ["facebook", "youtube", "github", "tiktok"],
    },
    {
      id: 5,
      name: "Olivia",
      avatar: "./img/day2/Olivia.png",
      job: "Frontend Developer",
      social: ["facebook", "youtube", "github", "tiktok"],
    },
    {
      id: 6,
      name: "Vladimir",
      avatar: "./img/day2/Vladimir.png",
      job: "Frontend Developer",
      social: ["facebook", "youtube", "github", "tiktok"],
    },
  ],
  musics: [
    {
      name: "Chạy Về Nơi Phía Anh",
      author: "Khắc Việt",
      image: "./music/Chay-Ve-Noi-Phia-Anh.png",
      mp3: "./music/Chay-Ve-Noi-Phia-Anh.mp3",
    },
    {
      name: "Không Trọn Vẹn Nữa",
      author: "Châu Khải Phong",
      image: "./music/Khong-Tron-Ven-Nua.png",
      mp3: "./music/Khong-Tron-Ven-Nua.mp3",
    },
    {
      name: "Người Yêu Tôi Lạnh Lùng Sắt Đá",
      author: "Mr. Siro",
      image: "./music/Nguoi-Yeu-Toi-Lanh-Lung-Sat-Da.png",
      mp3: "./music/Nguoi-Yeu-Toi-Lanh-Lung-Sat-Da.mp3",
    },
    {
      name: "Thay Mọi Cô Gái Để Yêu Anh",
      author: "AMEE",
      image: "./music/Thay-Moi-Co-Gai-Yeu-Anh.png",
      mp3: "./music/Thay-Moi-Co-Gai-Yeu-Anh.mp3",
    },
    {
      name: "Chạy Về Khóc Với Anh",
      author: "ERIK",
      image: "./music/Chay-Ve-Khoc-Voi-Anh.png",
      mp3: "./music/Chay-Ve-Khoc-Voi-Anh.mp3",
    },
    {
      name: "Ái Nộ",
      author: "Masew x Khoi Vu",
      image: "./music/Ai-No.png",
      mp3: "./music/Ai-No.mp3",
    },
    {
      name: "Câu Hẹn Câu Thề",
      author: "Đình Dũng",
      image: "./music/Cau-Hen-Cau-The.png",
      mp3: "./music/Cau-Hen-Cau-The.mp3",
    },
    {
      name: "Câu Hứa Chưa Trọn Vẹn",
      author: "Phát Huy x Hoàng Green",
      image: "./music/Cau-Hua-Chua-Tron-Ven.png",
      mp3: "./music/Cau-Hua-Chua-Tron-Ven.mp3",
    },
    {
      name: "Đế Vương",
      author: "Đình Dũng",
      image: "./music/De-Vuong.png",
      mp3: "./music/De-Vuong.mp3",
    },
    {
      name: "Muộn Rồi Mà Sao Còn",
      author: "Sơn Tùng MTP",
      image: "./music/Muon-Roi-Ma-Sao-Con.png",
      mp3: "./music/Muon-Roi-Ma-Sao-Con.mp3",
    },
    {
      name: "Sài Gòn Đau Lòng Quá",
      author: "Hứa Kim Tuyền",
      image: "./music/Sai-Gon-Dau-Long-Qua.png",
      mp3: "./music/Sai-Gon-Dau-Long-Qua.mp3",
    },
    {
      name: "Thê Lương",
      author: "Phúc Trinh",
      image: "./music/The-Luong.png",
      mp3: "./music/The-Luong.mp3",
    },
  ],
};
export default data;
