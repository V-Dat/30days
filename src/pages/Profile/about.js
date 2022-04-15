const about = {
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
    { name: "Logistics Excutive :", value: "Tân Cảng - STC" },
    { name: "International Trade And Shipping Procedures :", value: "Tân Cảng - STC " },
  ],
  work: [
    {
      company: "NPV EXPRESS & LOGISTIC CO., LTD",
      time: "9/2019 - 6/2021",
      task: [
        "Khai báo cáo hóa chất MSDS",
        "Lên tờ khai xuất nhập khẩu",
        "Khai báo hải quan cho hàng hóa xuất nhập khẩu",
        "Tư vấn các thủ tục liên quan đến các mặt hàng",
        "Xác định loại hı̀nh, thủ tục, HS code, chı́nh sách ưu đãi,..",
        "Quản lý & tổng hợp điều chı̉nh Database",
        "Theo dõi & khai báo hóa chất MSDS",
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
        "Hiểu sâu và sử dụng linh hoạt ReactJS.",
        "Hiểu rõ ràng về lập trình hướng đối tượng ứng dụng được desgin patterns",
        "Luôn luôn phát triển khả năng bản thân, tích lũy thêm nhiều kinh nghiệm để hoàn thành tốt các nhiệm vụ được giao và cống hiến tối đa cho công ty. ",
      ],
    },
    {
      key: "Dài Hạn",
      value: [
        "Viết code clean hơn",
        "Trở thành lập Full-stack Developer",
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
      text: "MongoDB",
      value: "Quản lý Database",
      iconClassName: "fas fa-database mongodb",
    },
    {
      text: "Figma",
      value: "Thiết kế UI web",
      iconClassName: "fa-brands fa-figma figma",
    },

    {
      text: "TypeScript",
      value: "Ngôn ngữ lập trình",
      iconClassName: "fa fa-book typescript",
    },

    {
      text: "Design Patterns",
      value: "Design Patterns",
      iconClassName: "fa fa-book design-patterns",
    },

    {
      text: "OOP",
      value: "Hướng đối tượng",
      iconClassName: "fa fa-book oop",
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
};

export default about;
