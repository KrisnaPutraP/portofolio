import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Krisna Putra Purnomo",
  initials: "KPP",
  url: "https://dillion.io",
  location: "Kota Depok, Jawa Barat",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Undergraduate Computer Science Student at University of Indonesia with a strong interest in machine learning, and software development. Always open to hackathons and data competitions.",
  summary:
    "I am a dedicated Computer Science student driven by a passion for machine learning and software engineering. My academic focus revolves around artificial intelligence and software development best practices. With strong problem-solving skills, an eye for system optimization, and an unwavering commitment to continuous learning, I am excited to contribute to the field at the intersection of AI and software development.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "React", logo: "/skills/react.svg" },
    { name: "Next.js", logo: "/skills/nextjs.svg" },
    { name: "TypeScript", logo: "/skills/typescript.svg" },
    { name: "Node.js", logo: "/skills/nodejs.svg" },
    { name: "Python", logo: "/skills/python.svg" },
    { name: "PostgreSQL", logo: "/skills/postgresql.svg" },
    { name: "Flutter", logo: "/skills/flutter.svg" },
    { name: "Java", logo: "/skills/java.svg" },
    { name: "Rust", logo: "/skills/rust.svg" },
  ],
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
      title: "Teaching Assistant of Calculus 1 (CSGE601012)",
      logoUrl: "/ui.jpg",
      start: "July 2024",
      end: "December 2024",
      description:
        "As a Teaching Assistant for Calculus, I supervised weekly quizzes in a class of 64 students and coordinated with two fellow TAs to distribute grading responsibilities. I also evaluated quizzes, group assignments and homeworks for 21 students, and led post-quiz discussions analyzing the newly completed quizzes.",
    },
    {
      company: "COMPFEST",
      badges: [],
      href: "https://www.linkedin.com/company/compfest/posts/?feedView=all",
      location: "Depok, West Java, Indonesia · Hybrid",
      title: "Staff of Media Partner",
      logoUrl: "/compfest.jpg",
      start: "April 2024",
      end: "November 2024",
      description:
        "As a Media Partner Staff for Compfest, I established and maintained relationships with external media partners to ensure a successful event. Through effective communication and strategic collaborations, I maximized brand visibility and audience engagement, managing promotional materials and coordinating coverage to drive widespread awareness and attendance.",
    },
    {
      company: "Dasar-Dasar Pemrograman 0",
      badges: [],
      href: "https://www.linkedin.com/company/ddp-0/posts/?feedView=all",
      location: "Depok, West Java, Indonesia · Hybrid",
      title: "Student Mentor",
      logoUrl: "/ddp0.jpg",
      start: "July 2024",
      end: "August 2024",
      description:
        "As a student mentor, I taught three freshmen the fundamentals of Python by thoroughly explaining presentation materials and practical exercises alongside one other mentor. Through weekly hands-on exercises, personalized feedback, and guided practice, we helped them build a strong foundation in programming concepts and problem-solving strategies.",
    },
    {
      company: "Google Developer Student Club Universitas Indonesia",
      badges: [],
      href: "https://www.linkedin.com/company/gdsc-ui/posts/?feedView=all",
      location: "Depok, West Java, Indonesia · Hybrid",
      title: "Member",
      logoUrl: "/gdsc.jpg",
      start: "October 2023",
      end: "July 2024",
      description:
        "I participated in the Google Developer Student Club by attending only webinars and study jam sessions to expand my technical knowledge, although my involvement was relatively limited.",
    },
    {
      company: "BEM Fakultas Ilmu Komputer Universitas Indonesia",
      badges: [],
      href: "https://www.linkedin.com/company/bem-fakultas-ilmu-komputer-universitas-indonesia/",
      location: "Depok, West Java, Indonesia · Hybrid",
      title: "Intern Staff at Strategic Research and Action (KASTRAT)",
      logoUrl: "/bemfasilkom.jpg",
      start: "September 2023",
      end: "December 2023",
      description:
        "As an intern staff member in the Student Executive Board’s Strategic Research and Action division (Kastrat), I contributed to policy discussions, analyzed student concerns, and assisted in planning strategic campaigns to address key campus issues. This experience allowed me to develop valuable research skills, collaborate with diverse stakeholders, and drive meaningful initiatives for the student community.",
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
      degree: "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
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
  ],
} as const;
