export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Work",
    href: "#work",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "The CocktailDB",
    desc: "CocktailDB is a web app that lets users search for popular cocktails and view detailed recipes. Simply click on a cocktail to access its ingredients, instructions, and more.",
    subdesc:
      "Built as a dynamic web app with React, Tailwind CSS, and TypeScript, powered by the CocktailDB API for cocktail data, designed for smooth interactions and scalability.",
    href: "https://drinksinfo.netlify.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/old-fashioned.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/js.png",
      },
      {
        id: 2,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
    ],
  },
  {
    title: "GithubUser - Search",
    desc: "A web app that displays static user information and allows dynamic search functionality to find GitHub users. It presents various charts and data, including User Info, Followers, Languages, Popular Repos, Stars, and Forks.",
    subdesc:
      "Built with JavaScript, React, Fusion Charts, and the GitHub API for fetching and displaying user data. Styled using CSS Grids for responsive layouts.",
    href: "https://search-github-user1.netlify.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/user-avatar.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "TypeScript",
        path: "/assets/js.png",
      },
      {
        id: 2,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 4,
        name: "Fusion-Charts",
        path: "assets/pie-chart.png",
      },
      {
        id: 5,
        name: "Github API",
        path: "assets/github-logo.png",
      },
    ],
  },
  {
    title: "Photographer - Portfolio",
    desc: "A photographer portfolio web app that showcases the photographer's work, including galleries of past projects, expertise, and services. It provides a visually appealing and user-friendly platform to explore the photographer's style and portfolio.",
    subdesc:
      "Built with JavaScript and React for dynamic functionality, styled using Tailwind CSS for responsive and modern designs, and enhanced with Framer Motion for smooth animations and transitions.",
    href: "https://bpriyanshu74.github.io/PortfolioWebsite/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/camera.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/js.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Hitachi Digital Services",
    pos: "FullStack Engineer",
    duration: "2022 - Present",
    title: [
      {
        id: 1,
        profile: "FullStack Developer",
        content:
          "Developed front-end modules for a legal time and data management system, enabling time tracking, documentation management, and invoicing. Integrated MySQL and AWS services to enhance scalability and performance. Utilized React, Redux, Tailwind CSS, and DevOps tools, with thorough testing using Jest, Enzyme, and Postman.",
      },
      {
        id: 2,
        profile: "Security Analyst",
        content:
          "AWS Cloud Security, with tools like GuardDuty and CloudTrail, forms the foundation of my approach to threat detection and compliance. I also leverage email security tools like Abnormal Security and Code42 to mitigate spear-phishing risks and prevent data exfiltration, ensuring robust protection for high-value executives and sensitive data.",
      },
    ],
    icon: "/assets/meeting.svg",
    animation: "salute",
  },
];
