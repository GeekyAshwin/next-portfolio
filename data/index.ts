export const navItems = [
  // { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Work Experience", link: "#work-experience" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  // { name: "Testimonials", link: "#testimonials" },
  // { name: "Contact", link: "#contact" },
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
    title: "Chatting Application",
    description: [
      "Developed a chatting application (Laravel + VueJS + Inertia) with one-to-one chat, group chats, video calling, and friend invites.",
      "Integrated Razorpay for purchasing AI Prompt credits and Google Generative AI for chatbot integration (30 free AI Prompt credits per user).",
      "Used PusherJS for in-app notifications, Firebase for real-time notifications, and AWS SES for emails.",
      "Implemented Auth0 for authentication and AWS S3 for media storage.",
      "Real-time video calling via PeerJS with mute, end call, and pause video features.",
      "Deployed on AWS EC2.",
    ],
    technologies: [
      { name: "Laravel", img: "https://laravel.com/img/logomark.min.svg" },
      {
        name: "VueJS",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      },
      {
        name: "TailwindCSS",
        img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "Firebase",
        img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
    className: "md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/projects/chatting-app.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "KitchenHand",
    description: [
      "Built a recipe app (Laravel + VueJS) for kitchen management where restaurant owners create recipes and staff view them with required ingredients.",
      "Integrated Square to fetch products daily via Cron Job and Stripe Webhooks for subscription data.",
      "Implemented multi-step forms for recipes, steps, and ingredients, with draft saving.",
      "Integrated Stripe for payments and added monthly, quarterly, and annual subscription models.",
    ],
    technologies: [
      { name: "Laravel", img: "https://laravel.com/img/logomark.min.svg" },
      {
        name: "VueJS",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      },
      {
        name: "TailwindCSS",
        img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "Sentry",
        img: "https://www.vectorlogo.zone/logos/sentryio/sentryio-icon.svg",
      },
      {
        name: "Stripe",
        img: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
      },
    ],
    className: "md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/projects/kitchenhand.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "Simplify",
    description: [
      "Developed an assessments platform (Laravel + VueJS + Inertia) for parents and kids.",
      "Parents can sign up and purchase subscriptions for their children.",
      "Implemented report automation after assessments and integrated Stripe for payments.",
      "Created custom subscription logic and Laravel commands for dynamic subscription fetching.",
      "Added report download via JSPdf and integrated Brevo for emails.",
      "Used Pinia for state management and PrimeVue for responsive UI.",
    ],
    technologies: [
      { name: "Laravel", img: "https://laravel.com/img/logomark.min.svg" },
      {
        name: "VueJS",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      },
      {
        name: "TailwindCSS",
        img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "Sentry",
        img: "https://www.vectorlogo.zone/logos/sentryio/sentryio-icon.svg",
      },
      {
        name: "Stripe",
        img: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
      },
    ],
    className: "md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/projects/simplify.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: "New Horizon Foundation",
    description: [
      "Built a responsive UI (Angular + Laravel) using Angular Material and NgBootstrap.",
      "Developed complex multi-step forms with validation and dynamic data.",
      "Integrated CKEditor for rich text editing and used RxJS BehaviorSubject for state management.",
      "Developed RESTful APIs in Laravel for authentication, validation, and business logic.",
      "Designed scalable database schemas.",
    ],
    technologies: [
      { name: "Laravel", img: "https://laravel.com/img/logomark.min.svg" },
      {
        name: "Angular",
        img: "https://angular.io/assets/images/logos/angular/angular.svg",
      },
      {
        name: "Bootstrap",
        img: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg",
      },
    ],
    className: "md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/projects/new-horizon.svg",
    spareImg: "",
  },
  {
    id: 5,
    title: "Clipbot AI",
    description: [
      "Integrated Google Gemini Flash model (NextJS + MongoDB + NodeJS) to generate high-quality video scripts from user prompts.",
      "Used ElevenLabs TTS API for realistic, multi-language voiceovers.",
      "Leveraged D-ID API to create talking head videos by combining script audio with user images and prompts.",
      "Implemented asynchronous processing and status tracking for video rendering workflows.",
    ],

    technologies: [
      {
        name: "Next.js",
        img: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
      },
      {
        name: "Tailwind CSS",
        img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "Vercel",
        img: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
      },
    ],
    className: "md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/projects/clipbot-ai.svg",
    spareImg: "",
  },
  {
    id: 6,
    title: "SocialSphere",
    description: [
      "Developed a full-featured social media platform (MERN stack) enabling users to post updates, follow friends, and interact in real time.",
      "Implemented authentication, notifications, and media uploads with AWS S3 integration.",
      "Built scalable RESTful APIs and leveraged WebSockets for instant messaging and live updates.",
      "Designed a responsive, mobile-first UI with Tailwind CSS and Shadcn UI components.",
      "Deployed the application on Vercel with CI/CD pipelines for seamless updates.",
    ],
    technologies: [
      {
        name: "MongoDB",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "React",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Node.js",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
    ],

    className: "md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/projects/socialsphere.svg",
    spareImg: "",
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

export const skills = [
  {
    category: "Languages",
    items: ["PHP", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "Angular 14", "Vue.js"],
  },
  {
    category: "UI Libraries & Frameworks",
    items: ["Bootstrap", "Tailwind", "Angular Material", "PrimeVue", "Vuetify"],
  },
  {
    category: "Backend",
    items: ["Laravel", "Node.js", "NestJS", "NextJS"],
  },
  {
    category: "Tools & AI",
    items: [
      "Git",
      "Postman",
      "Cursor",
      "PHPStorm",
      "Jira",
      "Trello",
      "Asana",
      "Slack",
      "Docker",
      "ChatGPT",
      "Claude Code",
      "Generative AI",
      "Google AI Studio",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Payment Integration",
    items: ["Stripe", "Razorpay", "Breathepay"],
  },
  {
    category: "Others",
    items: ["CI/CD with GitHub Actions", "Project management"],
  },
  {
    category: "Third-Party Services",
    items: [
      "AWS (S3, EC2, SES)",
      "Square",
      "Sentry",
      "Brevo",
      "PusherJS",
      "PeerJS",
      "Socket.io",
      "AuthO",
    ],
  },
];

export const workExperience = [
  {
    id: 3,
    title: "Senior Software Engineer (Jan 2025 - Present)",
    company: "Bliss Technology",
    desc: "Serving as a Senior Software Engineer at Bliss Technology. I architect and implement scalable solutions using technologies such as Laravel, VueJS and NextJS. My role focuses on driving innovation, optimizing system performance, and delivering     high-quality software to meet business objectives.",
    className: "md:col-span-2", // change to md:col-span-2
    roles: [
      {
        title: "Full-Stack Development",
        description:
          "Managed both frontend and backend development, ensuring seamless functionality, performance, and user experience across the entire application.",
      },
      {
        title: "Requirement Gathering",
        description:
          "Directly communicated with clients to understand business needs and translate them into technical requirements and actionable tasks.",
      },
      {
        title: "Deployment",
        description:
          "Took full ownership of deploying applications to production environments, including setting up servers, CI/CD pipelines, and managing hosting platforms.",
      },
    ],
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer (Sep 2024 - Jan 2025)",
    company: "Quantic",
    desc: "Worked as a Software Engineer at Quantic, where I leveraged technologies like Laravel and Couchbase to build scalable solutions and contributed my skills to drive innovation.",
    className: "md:col-span-2", // change to md:col-span-2
    roles: [
      {
        title: "Payment Service Integration",
        description:
          "Successfully integrated Breathepay Payment Service to manage payments securely.",
      },
      {
        title: "CRM System Enhancement",
        description:
          "Enhanced and customized CRM features, including customer data management, lead tracking, and workflow automation to improve business processes.",
      },
      {
        title: "POS Module Implementation",
        description:
          "Developed and maintained POS modules such as inventory management, billing, order processing, and real-time data synchronization.",
      },
      {
        title: "Delivery Service Integration",
        description:
          "Successfully integrated Ecommerce delivery partner service Doordash to manage delivery of products.",
      },
    ],
    thumbnail: "/exp1.svg",
  },
  {
    id: 1,
    title: "Software Engineer (Nov 2021 - Aug 2024)",
    company: "Rubico IT Pvt. Ltd.",
    desc: "Worked as a Software Engineer at Rubico IT for 2.9 years, honing my expertise in Angular, Laravel, and Node.js while gaining valuable hands-on experience across diverse projects.",
    className: "md:col-span-2",
    roles: [
      {
        title: "Developing APIs",
        description:
          "Designed and implemented RESTful APIs using Laravel and Node to support application features and data access.",
      },
      {
        title: "API Integration",
        description:
          "Integrated various APIs using Angular and Vue to extend application functionality and enhance user experience.",
      },
      {
        title: "State Management",
        description:
          "Worked with state management tools like NgRx, Pinia and RXJS to manage state in application.",
      },
      {
        title: "Third-Party Service Integration",
        description:
          "Successfully integrated services such as payment gateways, analytics tools, and authentication providers.",
      },
    ],
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/GeekyAshwin",
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://linkedin.com/in/ashwinrawat",
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
  // {
  //   id: 2,
  //   title: "12th (Intermediate) - PCM (2017 - 2018)",
  //   desc: "Completed with 79.00% from Uttarakhand Board.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp1.svg",
  // },
  // {
  //   id: 3,
  //   title: "10th (High School) (2015 - 2016)",
  //   desc: "Completed with 80.00% from Uttarakhand Board.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp1.svg",
  // },
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
