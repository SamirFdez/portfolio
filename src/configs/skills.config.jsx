import html from "../assets/icons/html-5.svg";
import css from "../assets/icons/css-3.svg";
import sass from "../assets/icons/sass.svg";
import js from "../assets/icons/javascript.svg";
import reactJs from "../assets/icons/react.svg";
import vite from "../assets/icons/vite.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import tailwind from "../assets/icons/tailwindcss-icon.svg";

import nodeJs from "../assets/icons/nodejs-icon.svg";
import express from "../assets/icons/express.svg";
import sqlServer from "../assets/icons/sql-server.svg";
import mongoDB from "../assets/icons/mongo.svg";
import postgreSQL from "../assets/icons/postgresql.svg";
import postman from "../assets/icons/postman.svg";

import vsCode from "../assets/icons/visual-studio-code.svg";
import github from "../assets/icons/github-icon.svg";
import git from "../assets/icons/git-icon.svg";

export const stacks = [
  {
    description: "Front-end",
    technologys: [
      {
        name: "HTML",
        icon: html,
      },
      {
        name: "CSS",
        icon: css,
      },
      {
        name: "Sass",
        icon: sass,
      },
      {
        name: "Bootstrap",
        icon: bootstrap,
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },
      {
        name: "JavaScript",
        icon: js,
      },
      {
        name: "React JS",
        icon: reactJs,
      },
    ],
  },
  {
    description: "Back-end",
    technologys: [
      {
        name: "Node JS",
        icon: nodeJs,
      },
      {
        name: "",
        icon: express,
      },
      {
        name: "SQL Server",
        icon: sqlServer,
      },
      {
        name: "MongoDB",
        icon: mongoDB,
      },
      {
        name: "PostgreSQL",
        icon: postgreSQL,
      },

      {
        name: "Postman",
        icon: postman,
      },
    ],
  },
  {
    description: "Tools",
    technologys: [
      {
        name: "VS Code",
        icon: vsCode,
      },
      {
        name: "Github",
        icon: github,
      },
      {
        name: "Git",
        icon: git,
      },
      {
        name: "Vite",
        icon: vite,
      },
    ],
  },
];
