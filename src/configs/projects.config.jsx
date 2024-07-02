// frontEnd icons
import html from "../assets/icons/html-5.svg";
import css from "../assets/icons/css-3.svg";
import js from "../assets/icons/javascript.svg";
import reactJs from "../assets/icons/react.svg";
import redux from "../assets/icons/redux.svg";
import tailwind from "../assets/icons/tailwindcss-icon.svg";
import bootstrap from "../assets/icons/bootstrap.svg";

// backEnd icons
import nodeJs from "../assets/icons/nodejs-icon.svg";
import express from "../assets/icons/express-icon.svg";
import mongoDB from "../assets/icons/mongo.svg";

// general icons
import iconGithub from "../assets/images/iconGithub.png";
import iconWeb from "../assets/images/iconWeb.png";

// projects images
import connectifyChat from "../assets/projects/connectifyChat.png";
import movieWorld from "../assets/projects/movieWorld.png";
import todoList from "../assets/projects/todoList.jpg";
import recursoDigitales from "../assets/projects/recursoDigitales.png";

export const projectsArray = [
  {
    name: "Connectify Chat",
    image: connectifyChat,
    description:
      "I developed a global chat application that allows users to choose a username and custom avatar. Users can join a global chat and send messages in real time via web sockets, enjoying a modern and responsive user interface that ensures an optimal experience on any device.",
    stacks: [
      {
        name: "HTML",
        icon: html,
      },
      {
        name: "CSS",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: js,
      },
      {
        name: "React",
        icon: reactJs,
      },
      {
        name: "Redux",
        icon: redux,
      },
      {
        name: "Tailwind",
        icon: tailwind,
      },
      {
        name: "Node JS",
        icon: nodeJs,
      },
      {
        name: "Expres JS",
        icon: express,
      },
      {
        name: "Mongo DB",
        icon: mongoDB,
      },
    ],
    share: [
      {
        platform: "VISIT WEBSITE",
        icon: iconWeb,
        link: "https://connectify-chat-samirfdez.vercel.app/",
      },
      {
        platform: "SOURCE CODE",
        icon: iconGithub,
        link: "https://github.com/SamirFdez/Connectify-Chat",
      },
    ],
  },
  {
    name: "Movie World",
    image: movieWorld,
    description:
      "App that allows you to search for movies, see their reviews, among other things. The App allows you to list movies as favorites so you don't lose any information about them. The purpose of this App was for me to show my skills in using APIs.",
    stacks: [
      {
        name: "HTML",
        icon: html,
      },
      {
        name: "CSS",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: js,
      },
      {
        name: "React",
        icon: reactJs,
      },
      {
        name: "Tailwind",
        icon: tailwind,
      },
    ],
    share: [
      {
        platform: "VISIT WEBSITE",
        icon: iconWeb,
        link: "https://movieworld-samirfdez.vercel.app/",
      },
      {
        platform: "SOURCE CODE",
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
        name: "HTML",
        icon: html,
      },
      {
        name: "CSS",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: js,
      },
      {
        name: "React",
        icon: reactJs,
      },
      {
        name: "Bootstrap",
        icon: bootstrap,
      },
    ],
    share: [
      {
        platform: "VISIT WEBSITE",
        icon: iconWeb,
        link: "https://todolist-samirfdez.vercel.app",
      },
      {
        platform: "SOURCE CODE",
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
        name: "HTML",
        icon: html,
      },
      {
        name: "CSS",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: js,
      },
      {
        name: "Bootstrap",
        icon: bootstrap,
      },
    ],
    share: [
      {
        platform: "VISIT WEBSITE",
        icon: iconWeb,
        link: "https://recursosdigitalesrde.org/",
      },
      {
        platform: "SOURCE CODE",
        icon: iconGithub,
        link: "https://github.com/SamirFdez/Programas-Interactivos-Recursos-Digitales",
      },
    ],
  },
];
