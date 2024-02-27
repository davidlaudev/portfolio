import * as icon from "react-icons/si";
import { IoDocumentSharp } from "react-icons/io5";

const profile = {
  role: "Full Stack Developer",
};

const social = [
  {
    icon: icon.SiGithub,
    link: "https://github.com/dark1078",
    name: "GitHub",
  },
  {
    icon: icon.SiLinkedin,
    link: "https://www.linkedin.com/in/david-lau-3780411a7/",
    name: "LinkedIn",
  },
  {
    icon: IoDocumentSharp,
    name: "Resume",
  },
];

const brand = "David Lau";

const work = [
  {
    name: "Geodudes",
    description:
      "Interactive mapping platform using MERN stack, enabling users to upload, view, and edit map data. Features community sharing and robust account management. (Hosted on free render, spinup time when visiting the site)",
    stack: [
      { icon: icon.SiJavascript, name: "Javascript" },
      { icon: icon.SiReact, name: "ReactJS" },
      { icon: icon.SiMongodb, name: "MongoDB" },
      { icon: icon.SiNodedotjs, name: "NodeJS" },
      { icon: icon.SiLeaflet, name: "Leaflet" },
    ],
    linkProject: "https://geodudes-frontend.onrender.com/",
    linkGithub: "https://github.com/sbobojonov/geodudes",
  },
  {
    name: "MyBudget",
    description:
      "Personal finance application built with the MERN stack to track annual spending with interactive tables and expense categorization. Users can use CSV files to upload their transactions, as well as serach for specific transactions.",
    stack: [
      { icon: icon.SiJavascript, name: "Javascript" },
      { icon: icon.SiReact, name: "ReactJS" },
      { icon: icon.SiMongodb, name: "MongoDB" },
      { icon: icon.SiNodedotjs, name: "NodeJS" },
    ],
    linkGithub: "https://github.com/TylerH123/MyBudget",
  },
  {
    name: "StackOverflow",
    description:
      "MERN stack-based Q&A platform with functionality similar to StackOverflow, including user authentication, post searching by tags, and admin controls.",
    stack: [
      { icon: icon.SiJavascript, name: "Javascript" },
      { icon: icon.SiReact, name: "ReactJS" },
      { icon: icon.SiMongodb, name: "MongoDB" },
      { icon: icon.SiNodedotjs, name: "NodeJS" },
    ],
    linkGithub:
      "https://github.com/CSE-316-Software-Development/final-project-team-ian",
  },
  {
    name: "Wolfie Market",
    description:
      "Campus-centric marketplace for Stony Brook University students to buy and sell items, featuring secure in-app transactions and easy item listing.",
    stack: [
      { icon: icon.SiHtml5, name: "HTML" },
      { icon: icon.SiCss3, name: "CSS" },
      { icon: icon.SiJavascript, name: "Javascript" },
    ],
    linkGithub: "https://github.com/Mabedin00/WolfieMarket",
  },
];

const stack = [
  {
    name: "Front End",
    items: [
      { icon: icon.SiHtml5, name: "HTML" },
      { icon: icon.SiCss3, name: "CSS" },
      { icon: icon.SiBootstrap, name: "Bootstrap" },
      { icon: icon.SiJavascript, name: "Javascript" },
      { icon: icon.SiTypescript, name: "Typescript" },
      { icon: icon.SiReact, name: "React" },
    ],
  },
  {
    name: "Back End",
    items: [
      { icon: icon.SiNodedotjs, name: "NodeJS" },
      { icon: icon.SiDeno, name: "Deno" },
      { icon: icon.SiMongodb, name: "MongoDB" },
      { icon: icon.SiFirebase, name: "Firebase" },
    ],
  },
];

const contact = {
  description:
    "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you! (email: dlau747@gmail.com)",
  email: "dlau747@email.com",
};

export { profile, social, work, stack, contact, brand };
