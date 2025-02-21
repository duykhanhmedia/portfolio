import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  coding,
  premium,
  ads,
  seeding,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "Về Duy Khánh",
  work: "Kinh nghiệm làm việc",
  works: "services",
  contact: "contact",
};
// export default SectionWrapper(About, navigationPaths.about);

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "Về Duy Khánh",
  },
  {
    id: navigationPaths.work,
    title: "Kinh nghiệm",
  },
  {
    id: navigationPaths.contact,
    title: "Liên hệ",
  },
  {
    id: navigationPaths.works,
    title: "Dịch vụ",
  },
];

const services = [
  {
    title: "Lập trình & Phát triển phần mềm",
    description: "5 năm kinh nghiệm trong phát triển phần mềm, tối ưu hệ thống và quản lý dự án công nghệ tại môi trường doanh nghiệp quốc tế. Thành thạo các ngôn ngữ lập trình và công nghệ mới, giúp xây dựng các giải pháp phần mềm linh hoạt, hiệu quả, đáp ứng nhu cầu kinh doanh và vận hành của khách hàng.",
    icon: coding,
  },
  {
    title: "Dịch vụ tài khoản Premium & Hỗ trợ công cụ làm việc, học tập",
    description: "Chuyên cung cấp các tài khoản Netflix, Spotify, YouTube Premium, Canva Pro, Capcut Pro và nhiều dịch vụ khác, giúp khách hàng trải nghiệm trọn vẹn tiện ích công nghệ.",
    icon: premium,
  },
  {
    title: "Digital Marketing & Chạy quảng cáo Facebook",
    description: "Giúp doanh nghiệp gia tăng tương tác, tiếp cận khách hàng tiềm năng và tối ưu hóa hiệu quả kinh doanh thông qua các chiến lược quảng cáo sáng tạo và chuyên nghiệp.",
    icon: ads,
  },
  {
    title: "Dịch vụ tăng tương tác mạng xã hội",
    description: "Cung cấp các giải pháp tăng like, follow và hỗ trợ livestream, giúp khách hàng xây dựng thương hiệu mạnh mẽ trên nền tảng số.",
    icon: seeding,
  }
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Java (.NET)",
    icon: java,
  },
  {
    name: "Coding",
    icon: coding,
  },
  {
    name: "Premium Accounts",
    icon: premium,
  },
  {
    name: "Ads Facebook, Tiktok,...",
    icon: ads,
  },
  {
    name: "Dịch vụ tăng tương tác mạng xã hội",
    icon: seeding,
  },

  {
    name: "My SQL",
    icon: mysql,
  },
  {
    name: "Backend",
    icon: backend,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Git",
    icon: git,
  },
];
const experiences = [
  {
    icon: coding,
    iconBg: "#E6DEDD",
    title: "Phát triển phần mềm, Kiểm thử & Quản lý đội nhóm",
    company_name: "Endava",
    date: "Tháng 5/2019 - Hiện tại",
    points: [
      "Bảo trì và nâng cao hệ thống cốt lõi, đảm bảo hoạt động mượt mà và hiệu suất cao.",
      "Hợp tác với các bộ phận liên quan để giải quyết các vấn đề kỹ thuật và làm rõ yêu cầu dự án.",
      "Chia sẻ kiến thức và kinh nghiệm với đội ngũ, góp phần cải thiện quy trình làm việc.",
      "Áp dụng các thực tiễn tốt nhất để tối ưu hóa quy trình và nâng cao năng suất.",
      "Phát triển và thực hiện các kịch bản kiểm thử thủ công nhằm đảm bảo chất lượng phần mềm, bao gồm kiểm thử nhanh và kiểm thử khói.",
      "Tái cấu trúc các kịch bản kiểm thử tự động để nâng cao năng suất, giảm thời gian thực hiện và đơn giản hóa quản lý.",
      "Tích hợp kiểm thử tự động nhằm đảm bảo bao phủ toàn diện các chức năng của hệ thống.",
      "Quản lý và hỗ trợ đội nhóm nhằm phát triển năng lực, đánh giá hiệu suất, cải thiện quy trình làm việc và đào tạo các thành viên mới."
    ],
  },
  {
    title: "Dịch vụ Tài khoản Premium & Hỗ trợ Công cụ Làm việc, Học tập",
    icon: premium,
    iconBg: "#E6DEDD",
    company_name: "Duy Khánh Media",
    date: "Tháng 2/2022 - Hiện tại",
    points: [
      "Cung cấp các tài khoản Premium cho các nền tảng như Netflix, Spotify, YouTube Premium, Canva Pro, Capcut Pro.",
      "Hỗ trợ khách hàng triển khai và sử dụng hiệu quả các công cụ làm việc và học tập.",
      "Tư vấn giải pháp nhằm tối ưu hóa trải nghiệm người dùng qua các dịch vụ số.",
      "Phối hợp với các đối tác để cập nhật và nâng cấp dịch vụ theo xu hướng mới.",
    ],
  },
  {
    title: "Digital Marketing & Chạy Quảng cáo Facebook",
    icon: ads,
    iconBg: "#E6DEDD",
    company_name: "Duy Khánh Media",
    date: "Tháng 1/2019 - Hiện tại",
    points: [
      "Triển khai các chiến lược digital marketing sáng tạo để tăng tương tác và chuyển đổi.",
      "Chạy quảng cáo Facebook hiệu quả, giúp doanh nghiệp tiếp cận khách hàng tiềm năng.",
      "Phân tích dữ liệu chiến dịch để tối ưu hóa chi phí và hiệu quả quảng cáo.",
      "Hỗ trợ khách hàng xây dựng thương hiệu và cải thiện nhận diện trên nền tảng số.",
    ],
  },
  {
    title: "Dịch vụ Tăng Tương tác Mạng Xã hội",
    icon: seeding,
    iconBg: "#E6DEDD",
    date: "Tháng 8/2019 - Hiện tại",
    points: [
      "Cung cấp giải pháp tăng like, follow và tương tác trên các nền tảng mạng xã hội.",
      "Hỗ trợ khách hàng xây dựng thương hiệu mạnh mẽ thông qua các hoạt động tương tác trực tuyến.",
      "Tư vấn chiến lược nội dung và triển khai các hoạt động tương tác nhằm tăng cường sự hiện diện số.",
      "Theo dõi và phân tích số liệu để liên tục cải thiện hiệu quả chiến dịch.",
    ],
  },
];

const projects = [
  {
    name: "Lập trình & Phát triển phần mềm",
    description:
      "5 năm kinh nghiệm trong phát triển phần mềm, tối ưu hóa hệ thống và quản lý dự án công nghệ tại môi trường doanh nghiệp quốc tế. Thành thạo các ngôn ngữ lập trình và công nghệ mới, giúp xây dựng các giải pháp phần mềm linh hoạt, hiệu quả, đáp ứng nhu cầu kinh doanh và vận hành của khách hàng.",
    hosted_link: "https://www.facebook.com/duykhanhit15/",
    image: coding,
    tags: [
      {
        name: "Lập trình",
        color: "blue-text-gradient",
      },
      {
        name: "Tối ưu hệ thống",
        color: "green-text-gradient",
      },
      {
        name: "Quản lý dự án",
        color: "pink-text-gradient",
      },
    ],
  },  
  {
    name: "Tài khoản Premium & Hỗ trợ Công cụ Làm việc, Học tập",
    description:
      "Cung cấp các tài khoản premium cho Netflix, Spotify, YouTube Premium, Canva Pro, Capcut Pro, giúp khách hàng trải nghiệm trọn vẹn tiện ích công nghệ.",
    hosted_link: "https://duykhanhmedia.github.io/accounts/",
    image: premium,
    tags: [
      {
        name: "Premium",
        color: "blue-text-gradient",
      },
      {
        name: "Hỗ trợ",
        color: "green-text-gradient",
      },
      {
        name: "Công cụ",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "Digital Marketing & Chạy quảng cáo Facebook",
    description:
      "Triển khai các chiến lược quảng cáo Facebook sáng tạo, giúp doanh nghiệp gia tăng tương tác và tiếp cận khách hàng tiềm năng.",
    hosted_link: "https://www.facebook.com/duykhanhit15/",
    image: ads,
    tags: [
      {
        name: "Digital Marketing",
        color: "blue-text-gradient",
      },
      {
        name: "Facebook Ads",
        color: "green-text-gradient",
      },
      {
        name: "Chiến lược",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "Dịch vụ Tăng Tương tác Mạng Xã hội",
    description:
      "Cung cấp giải pháp tăng like, follow và hỗ trợ livestream, giúp khách hàng xây dựng thương hiệu mạnh mẽ trên nền tảng số.",
    hosted_link: "https://www.facebook.com/duykhanhit15/",
    image: seeding,
    tags: [
      {
        name: "Social Media",
        color: "blue-text-gradient",
      },
      {
        name: "Engagement",
        color: "green-text-gradient",
      },
      {
        name: "Growth",
        color: "pink-text-gradient",
      },
    ],
  },
];

const personalInfo = {
  name: "Duy Khánh",
  fullName: "Nguyễn Duy Khánh",
  email: "raiKhanh619@gmail.com",
  role: "Technology & Digital Marketing Expert",
  about: `Nguyễn Duy Khánh – Chuyên gia Công Nghệ & Digital Marketing. Trong hành trình phát triển lĩnh vực công nghệ số và digital marketing, không thể không nhắc đến những tên tuổi tiêu biểu như Nguyễn Duy Khánh, người đã góp phần thay đổi cách thức vận hành và tối ưu hóa quy trình làm việc cho doanh nghiệp. Với hơn 5 năm kinh nghiệm làm việc tại các công ty công nghệ đa quốc gia, Khánh không chỉ là chuyên gia lập trình mà còn là chuyên gia digital marketing và giải pháp công nghệ vững mạnh. Anh hoạt động tích cực trong phát triển phần mềm, triển khai chiến lược digital marketing và tối ưu hóa công nghệ kinh doanh, giúp các doanh nghiệp xây dựng nền tảng số vững chắc và thích ứng nhanh với sự thay đổi của thị trường hiện đại. Sở hữu khả năng giao tiếp tốt và kinh nghiệm làm việc quốc tế, Khánh tận dụng lợi thế này để kết nối đối tác và cập nhật những xu hướng công nghệ tiên tiến nhất, qua đó mang đến các giải pháp đột phá cho khách hàng. Các lĩnh vực mà Khánh thành thạo bao gồm phát triển phần mềm, cung cấp dịch vụ tài khoản Premium hỗ trợ công cụ làm việc hiệu quả, triển khai chiến lược digital marketing và quảng cáo Facebook sáng tạo cũng như tăng cường tương tác mạng xã hội nhằm xây dựng thương hiệu mạnh mẽ trên nền tảng số. Với phong cách làm việc sáng tạo, đổi mới và hiệu quả, Khánh không ngừng theo đuổi việc áp dụng công nghệ tiên tiến để mang lại những giải pháp tối ưu nhất cho khách hàng. Hãy liên hệ và khám phá những tư vấn chuyên sâu với Nguyễn Duy Khánh để cùng nhau phát triển bền vững!`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1a6HCR1lWnjlL4K9vbHwbgXV5tXIhXwOa/view?fbclid=IwY2xjawIkRz5leHRuA2FlbQIxMAABHQdC4YtkSoEoQ8wIlWNKO7yP3A4hPtYKENrnw-ZATPbh8mEF4JUCiNebCg_aem_nu46_HfcdLQW-S5820G5Ng",
  socialProfiles: {
    linkedin: {
      title: "Facebook",
      link: "https://www.facebook.com/duykhanhit15/",
      icon: ads,
    },
    github: {
      title: "Zalo",
      link: "https://zalo.me/0345202500",
      icon: coding,
    },
    premium: {
      title: "Premium Accounts",
      link: "https://duykhanhmedia.github.io/accounts/",
      icon: coding,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
