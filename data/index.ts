export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "A tech enthusiast, always coding towards a better future. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Driven by innovation, powered by code.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Building tomorrow’s tech with today’s passion..",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Tech-savvy and coding my way to new horizons.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Angular Video Call Application",
    des: "Developed a video call application using Angular and PeerJS where users can call anyone.",
    img: "/public/video-call-app.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://angular-video-call-app.vercel.app/",
  },
  {
    id: 2,
    title: "Angular & Node Chat Application",
    des: "Developed a real time chat appliation using Angular , Node and SocketIO .",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI ChatBot with Angular & Gemini",
    des: "Developed a chatbot using Angular and Gemini where users can ask queries and AI will respond to them accordingly.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "BudgetBuddy",
    des: "Developed a budget management app with MEAN Stack to manage my daily expenses.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "A Full Stack Developer with a strong focus on building scalable and efficient web applications. Skilled in Frontend Frameworks like Angular, Vue and have experties in Backend Technologies like Laravel, NodeJS, NestJS. Familiar with working with Linux Environment. Good understanding of API Integragtion, API Development, State Management, Third party service Integration, Packages , Socket Programming, and Version Control System like Git.",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer (Nov 2021 - Aug 2024)",
    desc: "Worked as a Software Engineer at Rubico IT for 2.9 years, honing my expertise in Angular, Laravel, and Node.js while gaining valuable hands-on experience across diverse projects.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer (Sep 2024 - Present)",
    desc: "Currently working as a Software Engineer at Quantic, leveraging technologies like Laravel and Couchbase to build scalable solutions and contributing my skills to drive innovation.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

export const educations = [
  {
    id: 1,
    title: "Diploma in Computer Science & Engineering (2018 - 2021)",
    desc: " Completed with 86.80%. Securing 1st place in College and 3rd place in Uttarakhand.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const technologies = [
  {
    id: 1,
    category: "Frontend",
    skills: [
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        name: "HTML5",
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        name: "CSS3",
      },
      {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        name: "JavaScript",
      },
      {
        id: 4,
        img: "https://angular.io/assets/images/logos/angular/angular.svg",
        name: "Angular",
      },
      {
        id: 5,
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        name: "TailwindCSS",
      },
      {
        id: 6,
        img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
        name: "Vue",
      },
    ],
  },
  {
    id: 2,
    category: "Backend",
    skills: [
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
        name: "Laravel",
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        name: "NodeJS",
      },
      {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
        name: "Express",
      },
      {
        id: 4,
        img: "https://d33wubrfki0l68.cloudfront.net/ff1c1f28e793de2c297fb39c7504d1e42f1265d7/f3f1c/img/logo-small.svg",
        name: "NestJS",
      },
    ],
  },
  {
    id: 3,
    category: "Databases",
    skills: [
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
        name: "SQL",
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
        name: "MySQL",
      },
      {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
        name: "MongoDB",
      },
      {
        id: 4,
        img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Couchbase_logo.png",
        name: "Couchbase",
      },
    ],
  },
  {
    id: 4,
    category: "Tools",
    skills: [
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
        name: "VSCode",
      },
      {
        id: 2,
        img: "https://www.jetbrains.com/company/brand/img/jetbrains/logo_phpstorm.svg",
        name: "PHPStorm",
      },
      {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
        name: "Git & GitHub",
      },
      {
        id: 4,
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png",
        name: "Postman",
      },
      {
        id: 5,
        img: "https://upload.wikimedia.org/wikipedia/commons/1/16/MySQL_Workbench_Logo.png",
        name: "MySQL Workbench",
      },
      {
        id: 6,
        img: "https://avatars.githubusercontent.com/u/62419525?s=200&v=4",
        name: "Beekeeper Studio",
      },
      {
        id: 7,
        img: "https://upload.wikimedia.org/wikipedia/commons/8/80/Dbdesigner_logo.png",
        name: "DB Designer",
      },
    ],
  },
];
