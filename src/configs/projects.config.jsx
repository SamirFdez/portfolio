import html from "../assets/icons/html-5.svg";
import css from "../assets/icons/css-3.svg";
import js from "../assets/icons/javascript.svg";
import reactJs from "../assets/icons/react.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import iconGithub from "../assets/images/iconGithub.png";
import iconWeb from "../assets/images/iconWeb.png";
import todoList from "../assets/projects/todoList.jpg";
import recursoDigitales from "../assets/projects/recursoDigitales.png"

export const projectsArray = [
  // {
  //   name: "Todo List",
  //   image: todoList,
  //   description:
  //     "App that allows you to organize and manage your tasks efficiently. Record your pending tasks, mark completed tasks and maintain full control of your daily activities.",
  //   stacks: [
  //     {
  //       name: "React",
  //       icon: reactJs,
  //     },
  //     {
  //       name: "JS",
  //       icon: js,
  //     },
  //     {
  //       name: "HTML",
  //       icon: html,
  //     },
  //     {
  //       name: "CSS",
  //       icon: css,
  //     },
  //     {
  //       name: "Bootstrap",
  //       icon: bootstrap,
  //     },
  //   ],
  //   share: [
  //     {
  //       platform: "web",
  //       icon: iconWeb,
  //       link: "https://todolist-samirfdez.vercel.app",
  //     },
  //     {
  //       platform: "gitHub",
  //       icon: iconGithub,
  //       link: "https://github.com/SamirFdez/todoList",
  //     },
  //   ],
  // },
  {
    name: "Todo List",
    image: todoList,
    description:
      "App that allows you to organize and manage your tasks efficiently. Record your pending tasks, mark completed tasks and maintain full control of your daily activities.",
    stacks: [
      {
        name: "react",
        icon: reactJs,
      },
      {
        name: "js",
        icon: js,
      },
      {
        name: "html",
        icon: html,
      },
      {
        name: "css",
        icon: css,
      },
      {
        name: "bootstrap",
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
    name: "Recursos Digitales",
    image: recursoDigitales,
    description:
      "In this project i participated in creating digital resources to support curricular development, basically it was to transform exercises from textbooks into resources in a dynamic way.",
    stacks: [
      {
        name: "html",
        icon: html,
      },
      {
        name: "css",
        icon: css,
      },
      {
        name: "bootstrap",
        icon: bootstrap,
      },
      {
        name: "js",
        icon: js,
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
