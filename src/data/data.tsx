import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Krisna Putra Purnomo",
  initials: "KPP",
  location: "Kota Depok, Jawa Barat",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Hardworking problem solver who's into the emerging world of Machine Learning and Data Science.",
  summary:
    "A Computer Science student specializing in machine learning and software engineering, with a keen focus on AI development and software best practices. I combine strong problem-solving capabilities with system optimization expertise to create innovative solutions at the intersection of AI and software development.",
  avatarUrl: "/me.jpg",
  skills: {
    languages: [
      { name: "TypeScript", logo: "/skills/typescript.svg" },
      { name: "Python", logo: "/skills/python.svg" },
      { name: "Java", logo: "/skills/java.svg" },
      { name: "Rust", logo: "/skills/rust.svg" },
      { name:"Motoko", logo: "/skills/motoko.svg" },
      { name: "HTML", logo: "/skills/html.svg" },
      { name: "CSS", logo: "/skills/css.svg" },
      { name: "JavaScript", logo: "/skills/javascript.svg" },
    ],
    frameworks: [
      { name: "React", logo: "/skills/react.svg" },
      { name: "Next.js", logo: "/skills/nextjs.svg" },
      { name: "Flutter", logo: "/skills/flutter.svg" },
      { name: "Node.js", logo: "/skills/nodejs.svg" },
      { name: "Django", logo: "/skills/django.svg" },
      { name: "TailwindCSS", logo: "/skills/tailwindcss.svg" },
      { name: "Express", logo: "/skills/express.svg" },
      { name: "PyTorch", logo: "/skills/pytorch.svg" },
    ],
    tools: [
      { name: "PostgreSQL", logo: "/skills/postgresql.svg" },
      { name: "Canva", logo: "/skills/canva.svg" },
      { name: "Figma", logo: "/skills/figma.svg" },
      { name: "Git", logo: "/skills/git.svg" },
      { name: "GitHub", logo: "/skills/github.svg" },
      { name: "VS Code", logo: "/skills/vscode.svg" },
      { name: "Neon", logo: "/skills/neon.svg" },
      { name: "Vercel", logo: "/skills/vercel.svg" },
      { name: "MongoDB", logo: "/skills/mongodb.svg" },
    ]
  } as const,
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/KrisnaPutraP",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/krisna-putra-purnomo-9aa377191/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/superdumpfback?s=21",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:krisna.putra@ui.ac.id",
        icon: Icons.email,

        navbar: true,
      },
      Spotify: {
        name: "Spotify",
        url: "https://open.spotify.com/user/superdumpfback?si=2ce428a169e349be",
        icon: Icons.spotify,
        navbar: true,
      }
    },
  },

  experience: [
    {
      company: "Faculty of Computer Science, Universitas Indonesia",
      href: "https://www.linkedin.com/company/faculty-of-computer-science-universitas-indonesia/posts/?feedView=all",
      badges: [],
      location: "Depok, West Java, Indonesia · Hybrid",
      logoUrl: "/ui.jpg",
      roles: [
        {
          title: "Teaching Assistant of Calculus 1",
          start: "July 2024",
          end: "December 2024",
          description:
            "As a Teaching Assistant for Calculus, I supervised weekly quizzes in a class of 64 students and coordinated with two fellow TAs to distribute grading responsibilities. I also evaluated quizzes, group assignments and homeworks for 21 students, and led post-quiz discussions analyzing the newly completed quizzes.",
        },
        {
          title: "Teaching Assistant of Discrete Mathematics 2",
          start: "January 2025",
          end: "June 2025",
          description:
            "As a Teaching Assistant for Discrete Mathematics, I supervised quizzes in a class of around 30 students and coordinated with other TAs to distribute grading responsibilities. I also evaluated quizzes, group assignments and homeworks for 21 students, and led post-quiz discussions analyzing the newly completed quizzes.",
        },
        {
          title: "Teaching Assistant of Data Structures and Algorithms",
          start: "August 2025",
          end: "December 2025",
          description:
            "As a Teaching Assistant for Discrete Mathematics, I supervised quizzes in a class of 64 students and coordinated with two fellow TAs to distribute grading responsibilities. I also evaluated quizzes, group assignments and homeworks for 21 students, and led post-quiz discussions analyzing the newly completed quizzes.",
        },
        
      ],
    },
    {
      company: "COMPFEST",
      href: "https://www.linkedin.com/company/compfest/posts/?feedView=all",
      badges: [],
      location: "Depok, West Java, Indonesia · Hybrid",
      logoUrl: "/compfest.jpg",
      roles: [
        {
          title: "Staff of Media Partner",
          start: "April 2024",
          end: "November 2024",
          description:
            "As a Media Partner Staff for Compfest, I established and maintained relationships with external media partners to ensure a successful event. Through effective communication and strategic collaborations, I maximized brand visibility and audience engagement, managing promotional materials and coordinating coverage to drive widespread awareness and attendance.",
        },
      ],
    },
    {
      company: "Dasar-Dasar Pemrograman 0",
      href: "https://www.linkedin.com/company/ddp-0/posts/?feedView=all",
      badges: [],
      location: "Depok, West Java, Indonesia · Hybrid",
      logoUrl: "/ddp0.jpg",
      roles: [
        {
          title: "Student Mentor",
          start: "July 2024",
          end: "August 2024",
          description:
            "As a student mentor, I taught three freshmen the fundamentals of Python by thoroughly explaining presentation materials and practical exercises alongside one other mentor. Through weekly hands-on exercises, personalized feedback, and guided practice, we helped them build a strong foundation in programming concepts and problem-solving strategies.",
        },
      ],
    },
    {
      company: "Google Developer Student Club Universitas Indonesia",
      href: "https://www.linkedin.com/company/gdsc-ui/posts/?feedView=all",
      badges: [],
      location: "Depok, West Java, Indonesia · Hybrid",
      logoUrl: "/gdsc.jpg",
      roles: [
        {
          title: "Member",
          start: "October 2023",
          end: "July 2024",
          description:
            "I participated in the Google Developer Student Club by attending only webinars and study jam sessions to expand my technical knowledge, although my involvement was relatively limited.",
        },
      ],
    },
    {
      company: "BEM Fakultas Ilmu Komputer Universitas Indonesia",
      href: "https://www.linkedin.com/company/bem-fakultas-ilmu-komputer-universitas-indonesia/",
      badges: [],
      location: "Depok, West Java, Indonesia · Hybrid",
      logoUrl: "/bemfasilkom.jpg",
      roles: [
        {
          title: "Intern Staff at Strategic Research and Action (KASTRAT)",
          start: "September 2023",
          end: "December 2023",
          description:
            "As an intern staff member in the Student Executive Board’s Strategic Research and Action division (Kastrat), I contributed to policy discussions, analyzed student concerns, and assisted in planning strategic campaigns to address key campus issues. This experience allowed me to develop valuable research skills, collaborate with diverse stakeholders, and drive meaningful initiatives for the student community.",
        },
      ],
    },
  ],
  education: [
    {
      school: "University of Indonesia",
      href: "https://cs.ui.ac.id/en/",
      degree: "Bachelor's Degree of Computer Science, Faculty of Computer Science",
      logoUrl: "/ui.png",
      start: "2023",
      end: "now",
    },
    {
      school: "SMA Negeri 1 Kota Tegal",
      href: "https://www.instagram.com/smansaku/",
      degree: "Natural Science and Mathematics",
      logoUrl: "/smansa.png",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Portfolio Website",
      href: "/",
      dates: "January 2025",
      active: true,
      description:
        "Designed and developed a personal portfolio website to showcase my projects, skills, and experiences.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/portfolio.png",
      video:
        "",
    },
    {
      title: "Mujur Reborn",
      href: "https://valentino-vieri-mujurreborn.pbp.cs.ui.ac.id/",
      dates: "October 2024",
      active: true,
      description:
        "This website is created as a mid-semester project for Platform-Based Programming course. In this project, we create a website that can help people to buy ties and ribbons. This application was made by six people, and I am responsible for creating the Keranjang (Cart) module and styling the main page interface of the website.",
      technologies: [
        "Django",
        "Python",
        "TailwindCSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://valentino-vieri-mujurreborn.pbp.cs.ui.ac.id/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Kelompok-E07-PBP/proyek-tengah-semester.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/mujur-reborn.png",
      video: "",
    },
    {
      title: "Mujur Reborn Mobile",
      href: "https://install.appcenter.ms/orgs/kelompoke07pbp/apps/mujur-reborn/distribution_groups/public/releases/6",
      dates: "December 2024",
      active: true,
      description:
        "This mobile application is created as a final project for Platform-Based Programming course. This project is a mobile version of our mid-semester project application with the same name. I am responsible for creating the Keranjang (Cart) module and styling the main page interface of the mobile application.",
      technologies: [
        "Django",
        "Python",
        "Flutter",
        "Dart"
      ],
      links: [
        {
          type: "Download",
          href: "https://install.appcenter.ms/orgs/kelompoke07pbp/apps/mujur-reborn/distribution_groups/public/releases/6",
          icon: <Icons.download className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Kelompok-E07-PBP/proyek-akhir-semester.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/mujur-reborn-mobile.png",
      video: "",
    },
    {
      title: "Sijarta",
      href: "https://proyek-sijarta.vercel.app/",
      dates: "December 2024",
      active: true,
      description:
        "This project is created as a final project for Databases course. In this project of four people, we create a website that can help people to find a household assistant. The application interface is mediocre because we didn't have enough time and the project was focusing more on the implementation of the database using PostgreSQL. For online database deployment, we use Neon.",
      technologies: [
        "Django",
        "Python",
        "TailwindCSS",
        "JavaScript",
        "PostgreSQL",
        "Psycopg2",
        "Neon"
      ],
      links: [
        {
          type: "Website",
          href: "https://proyek-sijarta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/BASDUDES-BasDat-B/Proyek-SIJARTA.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/sijarta.png",
      video:
        "",
    },
    {
      title: "Rizzserve",
      href: "https://www.rizzserve.site/",
      dates: "June 2025",
      active: true,
      description:
        "As part of Advanced Programming course (2024/2025), my group built a scalable microservices-based restaurant ordering platform utilizing Spring Boot (Java) and Rocket (Rust) frameworks for optimal performance and modular architecture. I personally developed the \"Manage Menu\" feature, implementing secure gRPC communication protocols using Protocol Buffers (protobuf) for seamless authentication service integration.",
      technologies: [
        "Kubernetes",
        "Spring Boot",
        "TailwindCSS",
        "JavaScript",
        "PostgreSQL",
        "Next.js",
        "Rust",
        "Amazon Web Services (AWS)",
        "Docker",
        "Grafana"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.rizzserve.site/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/orgs/advprog-a08/repositories",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/rizzserve.png",
      video:
        "",
    },
    {
      title: "BimbelKu",
      href: "https://kelompok-12-bimbelku-frontend.pkpl.cs.ui.ac.id/",
      dates: "May 2025",
      active: true,
      description:
        "As part of Introduction of Software Security course (2024/2025), my group built a microservices-based e-learning platform utilizing Django (Python) and Next.js frameworks. I developed around half of the core features, focusing on security. My work included implementing audit logs, input sanitization, authentication and authorization layers, and secure session management. I also applied OWASP principles and performed security testing to ensure robust protection against vulnerabilities. Unfortunately, the website is currently inaccessible as the campus-provided hosting server has likely been shut down.",
      technologies: [
        "Django",
        "TailwindCSS",
        "JavaScript",
        "PostgreSQL",
        "Next.js",
        "Docker",
        "Python"
      ],
      links: [
        {
          type: "Website",
          href: "https://kelompok-12-bimbelku-frontend.pkpl.cs.ui.ac.id/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Private Repository",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/projects/bimbelku.png",
      video:
        "",
    }
  ],
} as const;
