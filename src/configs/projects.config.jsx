import html from "../assets/icons/html-5.svg";
import css from "../assets/icons/css-3.svg";
import js from "../assets/icons/javascript.svg";
import reactJs from "../assets/icons/react.svg";
import tailwind from "../assets/icons/tailwindcss-icon.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import iconGithub from "../assets/images/iconGithub.png";
import iconWeb from "../assets/images/iconWeb.png";
import movieWorld from "../assets/projects/movieWorld.png";
import todoList from "../assets/projects/todoList.jpg";
import recursoDigitales from "../assets/projects/recursoDigitales.png";

export const projectsArray = [
  {
    name: "Movie World",
    image: movieWorld,
    description:
      "App that allows you to search for movies, see their reviews, among other things. The App allows you to list movies as favorites so you don't lose any information about them. The purpose of this App was for me to show my skills in using APIs.",
    stacks: [
      {
        name: "React",
        icon: reactJs,
      },
      {
        name: "JavaScript",
        icon: js,
      },
      {
        name: "HTML",
        icon: html,
      },
      {
        name: "CSS",
        icon: css,
      },
      {
        name: "Tailwind",
        icon: tailwind,
      },
    ],
    share: [
      {
        platform: "web",
        icon: iconWeb,
        link: "https://movieworld-samirfdez.vercel.app/",
      },
      {
        platform: "gitHub",
        icon: iconGithub,
        link: "https://github.com/SamirFdez/movieWorld",
      },
    ],
  },
  {
    name: "To do List",
    image: todoList,
    description:
      "App that allows you to organize and manage your tasks efficiently. Record your pending tasks, mark completed tasks and maintain full control of your daily activities.",
    stacks: [
      {
        name: "React",
        icon: reactJs,
      },
      {
        name: "JavaScript",
        icon: js,
      },
      {
        name: "HTML",
        icon: html,
      },
      {
        name: "CSS",
        icon: css,
      },
      {
        name: "Bootstrap",
        icon: bootstrap,
      },
    ],
    share: [
      {
        platform: "web",
        icon: iconWeb,
        link: "https://todolist-samirfdez.vercel.app",
      },
      {
        platform: "gitHub",
        icon: iconGithub,
        link: "https://github.com/SamirFdez/todoList",
      },
    ],
  },
  {
    name: "Digital Resources",
    image: recursoDigitales,
    description:
      "In this project i participated in creating digital resources to support curricular development, basically it was to transform exercises from textbooks into resources in a dynamic way.",
    stacks: [
      {
        name: "JavaScript",
        icon: js,
      },
      {
        name: "HTML",
        icon: html,
      },
      {
        name: "CSS",
        icon: css,
      },
      {
        name: "Bootstrap",
        icon: bootstrap,
      },
    ],
    share: [
      {
        platform: "web",
        icon: iconWeb,
        link: "https://recursosdigitalesrde.org/",
      },
      {
        platform: "gitHub",
        icon: iconGithub,
        link: "https://github.com/SamirFdez/Programas-Interactivos-Recursos-Digitales",
      },
    ],
  },
];
