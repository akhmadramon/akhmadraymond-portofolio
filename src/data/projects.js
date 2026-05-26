import { toolIcons } from "./skills";

const webBase = "/Assets/Project Card Picture/Web Development Picture";
const uiBase = "/Assets/Project Card Picture/UIUX Designer Picture";

export const lifecycleSteps = [
  { color: "blue", phase: "PHASE 01", title: "Multiplayer Architecture" },
  { color: "cyan", phase: "PHASE 02", title: "Logic & State Handling" },
  { color: "green", phase: "PHASE 03", title: "AI Opponent Brain" },
  { color: "lime", phase: "PHASE 04", title: "Real-time Syncing" },
  { color: "amber", phase: "PHASE 05", title: "Juicy Animations" },
];

export const projects = [
  {
    id: "personal-portfolio",
    category: "web",
    title: "Personal Portfolio",
    meta: "WEBSITE - 2026 - 2 WEEKS",
    role: "Frontend Developer & UI/UX Designer",
    description:
      "A responsive portfolio interface crafted to present profile, experience, and selected work in a clean visual flow.",
    image: `${webBase}/akhmad-porto/akhmad-porto-displauy.png`,
    imageAlt: "Personal portfolio website preview",
    reverse: false,
    tools: [toolIcons.html, toolIcons.css, toolIcons.javascript, toolIcons.figma],
    detail: {
      summary:
        "A polished portfolio website designed to introduce my profile, experience, skills, and selected work through a clean responsive interface.",
      stats: ["2 WEEKS", "2026"],
      website: "https://akhmadraymond-portofolio.vercel.app",
      cardTitle: "What I Did",
      bullets: [
        "Designed and developed a personal portfolio layout that feels clean, modern, and easy to scan.",
        "Built responsive sections for profile, experience, tech stack, and selected project showcases.",
        "Created reusable project card patterns so new work can be added smoothly in the future.",
      ],
      outcome:
        "Created a stronger digital presence with a portfolio that presents skills, background, and projects in a more professional and memorable way.",
      lifecycle: true,
      breakdowns: [
        {
          section: "SECTION 01",
          title: "Landing Page",
          text: "The main introduction section presenting profile identity, role preview, social links, and a clean first impression.",
          desktop: `${webBase}/akhmad-porto/home-dekstop.png`,
          phone: `${webBase}/akhmad-porto/home-phone.jpg`,
          alt: "Portfolio landing page",
        },
        {
          section: "SECTION 02",
          title: "Short About",
          text: "A compact profile area designed to highlight background, tech stack, and practical experience in a focused layout.",
          desktop: `${webBase}/akhmad-porto/short-about-dekstop.png`,
          phone: `${webBase}/akhmad-porto/short-about-phone.jpg`,
          alt: "Portfolio short about",
        },
      ],
    },
  },
  {
    id: "mondev-website",
    category: "web",
    title: "MonDev Website",
    meta: "WEBSITE - 2026 - 2 WEEKS",
    role: "Frontend Developer & UI/UX Designer",
    description:
      "A dark, modern developer portfolio designed to present services, skills, and project highlights with a confident visual identity.",
    image: `${webBase}/mondev-porto/mondev-display.png`,
    imageAlt: "MonDev website preview",
    reverse: true,
    tools: [toolIcons.html, toolIcons.css, toolIcons.javascript, toolIcons.figma],
    detail: {
      summary:
        "A dark, modern developer portfolio built to present services, skills, and project highlights through a bold responsive interface.",
      stats: ["2 WEEKS", "2026"],
      cardTitle: "What I Did",
      bullets: [
        "Designed a dark portfolio layout with a strong first impression and clear navigation.",
        "Structured responsive sections for introduction, skills, services, and project previews.",
        "Refined spacing, contrast, and visual hierarchy so the interface feels confident and professional.",
      ],
      outcome:
        "Delivered a polished web presence that helps communicate developer credibility, service focus, and project quality across desktop and mobile layouts.",
      breakdownClass: "mondev-breakdown",
      breakdowns: [
        {
          section: "SECTION 01",
          title: "Home Section",
          text: "A strong landing section that introduces the brand, navigation, and primary call-to-action with a premium dark interface.",
          desktop: `${webBase}/mondev-porto/home-dekstop.png`,
          phone: `${webBase}/mondev-porto/home-phone.jpg`,
          alt: "MonDev home",
        },
        {
          section: "SECTION 02",
          title: "Short About",
          text: "A concise profile section that explains capability, language skills, and project availability in a clean information layout.",
          desktop: `${webBase}/mondev-porto/short-about-dekstop.png`,
          phone: `${webBase}/mondev-porto/short-about-phone.jpg`,
          alt: "MonDev short about",
        },
      ],
    },
  },
  {
    id: "edge-panel",
    category: "uiux",
    title: "Edge Panel",
    meta: "UI/UX - 2026 - 1 WEEK",
    role: "UI/UX Designer",
    description:
      "A compact utility interface concept focused on quick measurement tools, clear controls, and a clean mobile-first workflow.",
    image: `${uiBase}/ruller/ruller-display.png`,
    imageAlt: "Edge Panel UI design preview",
    tools: [toolIcons.figma, toolIcons.illustrator],
    detail: {
      summary:
        "A utility-focused mobile interface concept for quick measurement tools, clean controls, and fast access to everyday functions.",
      stats: ["1 WEEK", "2026"],
      phonePreview: true,
      cardTitle: "What I Designed",
      bullets: [
        "Created a mobile-first flow for switching between compass, tally counter, flashlight, ruler, and surface level tools.",
        "Designed clean cards, clear labels, and readable tool states for quick everyday use.",
        "Kept the interface minimal so each utility feels direct, familiar, and easy to operate.",
      ],
      outcome:
        "Produced a practical UI concept that turns multiple small utilities into one simple, accessible, and visually consistent mobile experience.",
      galleryTitle: "Mobile Interface Screens",
      gallery: [
        { title: "Compass", image: `${uiBase}/ruller/compass-1.jpg`, alt: "Compass screen" },
        { title: "Tally Count", image: `${uiBase}/ruller/tallycount-2.jpg`, alt: "Tally count screen" },
        { title: "Flashlight", image: `${uiBase}/ruller/flashlight-3.jpg`, alt: "Flashlight screen" },
        { title: "Surface Level", image: `${uiBase}/ruller/surface-level-4.jpg`, alt: "Surface level screen" },
        { title: "Ruler", image: `${uiBase}/ruller/ruller-5.jpg`, alt: "Ruler screen" },
      ],
    },
  },
  {
    id: "calculator",
    category: "uiux",
    title: "Calculator",
    meta: "UI/UX - 2026 - 1 WEEK",
    role: "UI/UX Designer",
    description:
      "A simple calculator app concept designed around fast input, readable results, and a soft visual system for everyday use.",
    image: `${uiBase}/calculator/calculator-display.png`,
    imageAlt: "Calculator UI design preview",
    reverse: true,
    tools: [toolIcons.figma, toolIcons.illustrator],
    detail: {
      summary:
        "A soft mobile calculator interface designed for fast input, readable results, and a friendly daily-use visual experience.",
      stats: ["1 WEEK", "2026"],
      phonePreview: true,
      cardTitle: "What I Designed",
      bullets: [
        "Designed a calculator layout with clear hierarchy between inputs, operators, and results.",
        "Created a calm color system that keeps the interface friendly without reducing readability.",
        "Explored multiple mobile screens to make common calculation flows feel simple and focused.",
      ],
      outcome:
        "Created a clean utility app concept that balances usability and visual personality for everyday calculation tasks.",
      galleryTitle: "Mobile Interface Screens",
      gallery: [
        { title: "Main Calculator", image: `${uiBase}/calculator/callculator-1.jpg`, alt: "Calculator home screen" },
        { title: "Result State", image: `${uiBase}/calculator/callculator-2.jpg`, alt: "Calculator result screen" },
        { title: "Input Flow", image: `${uiBase}/calculator/callculator-3.jpg`, alt: "Calculator interaction screen" },
      ],
    },
  },
];
