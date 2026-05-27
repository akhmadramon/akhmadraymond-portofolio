const iconBase = "https://cdn.simpleicons.org";
const icon = (slug, color) => `${iconBase}/${slug}/${color}`;
const skillIcon = (slug) => `https://skillicons.dev/icons?i=${slug}`;

export const techRows = [
  [
    { name: "HTML", className: "html", icon: icon("html5", "E34F26") },
    { name: "CSS", className: "css", icon: icon("css", "663399") },
    { name: "React", className: "react", icon: icon("react", "61DAFB") },
    { name: "Next.js", className: "next", icon: icon("nextdotjs", "000000") },
    { name: "JavaScript", className: "js", icon: icon("javascript", "000000") },
    { name: "TypeScript", className: "ts", icon: icon("typescript", "FFFFFF") },
  ],
  [
    { name: "Node.js", className: "node", icon: icon("nodedotjs", "5FA04E") },
    { name: "Tailwind CSS", className: "tailwind", icon: icon("tailwindcss", "06B6D4") },
    { name: "PostgreSQL", className: "postgres", icon: icon("postgresql", "4169E1") },
    { name: "Figma", className: "figma", icon: icon("figma", "F24E1E") },
    { name: "Illustrator", className: "ai", icon: skillIcon("ai") },
    { name: "Photoshop", className: "ps", icon: skillIcon("ps") },
  ],
];

export const focusAreas = [
  { name: "React JS", className: "react", icon: icon("react", "61DAFB") },
  { name: "Next JS", className: "next", icon: icon("nextdotjs", "000000") },
  { name: "Flutter", className: "flutter", icon: icon("flutter", "02569B") },
  { name: "JavaScript", className: "js", icon: icon("javascript", "F7DF1E") },
  { name: "TypeScript", className: "ts", icon: icon("typescript", "3178C6") },
  { name: "Tailwind CSS", className: "tailwind", icon: icon("tailwindcss", "06B6D4") },
];

export const stackBreakdown = [
  { name: "React JS", className: "react", value: 88 },
  { name: "Next JS", className: "next", value: 76 },
  { name: "Flutter", className: "flutter", value: 62 },
  { name: "JavaScript", className: "js", value: 84 },
  { name: "TypeScript", className: "ts", value: 68 },
  { name: "Tailwind CSS", className: "tailwind", value: 92 },
];

export const toolIcons = {
  html: { name: "HTML", icon: icon("html5", "E34F26") },
  css: { name: "CSS", icon: icon("css", "663399") },
  javascript: { name: "JavaScript", icon: icon("javascript", "F7DF1E") },
  react: { name: "React", icon: icon("react", "61DAFB") },
  vite: { name: "Vite", icon: icon("vite", "646CFF") },
  figma: { name: "Figma", icon: icon("figma", "F24E1E") },
  illustrator: { name: "Adobe Illustrator", icon: skillIcon("ai") },
};
