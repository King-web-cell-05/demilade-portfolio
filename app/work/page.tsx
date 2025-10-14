"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { title } from "process";

const projects = [
       {
    num: "01",
    category: "Front-end",
    title: "Login design",
    description:
      "A modern and minimalist login design, focusing on clean typography and a visually appealing layout ",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/login-page.jpg",
    live: "https://king-web-cell-05.github.io/login-design/",
    github: ""
  },
     {
    num: "02",
    category: "Front-end",
    title: "Todo App",
    description:
      "A clean, intuitive todo app that helps you stay organised and focused. Create, manage and prioritize your tasks with ease ",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/todo-app.jpg",
    live: " https://king-web-cell-05.github.io/todo-app/",
    github: ""
  },
  {
    num: "03",
    category: "Front-end",
    title: "Weather App",
    description:
      "A dynamic weather application that provides real-time weather updates and forecasts,this app utilizes APIs to fetch weather data ",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/weather-apc.jpg",
    live: " https://king-web-cell-05.github.io/weather-Apc/",
    github: ""
  },
 
      {
    num: "04",
    category: "Front-end Framework",
    title: "Quiz App",
    description:
      "An interactive quiz application that test users' knowledge on React, this app provides an engaging way to learn and challenge oneself",
    stack: [{ name: "React" }, { name: "Tailwind.css" }, { name: "Javascript" }],
    image: "/assets/quiz-app.png",
    live: " quiz-app-rho-ebon.vercel.app",
    github: ""
  },
    {
    num: "05",
    category: "Front-end Framework",
    title: "Weather App",
    description:
      "A comprehensive real estate application that enables users to browse and search for properties and streamline their home search",
    stack: [{ name: "React" }, { name: "Tailwind.css" }, { name: "Javascript" }],
    image: "/assets/real-estate-pic.jpg",
    live: " realestate-alpha-eight.vercel.app",
    github: ""
  },
      {
    num: "06",
    category: "Front-end Framework",
    title: "Mini Portfolio",
    description:
      "Showcasing my skills and projects in web development, data analysis, and more through my mini portfolio",
    stack: [{ name: "React" }, { name: "Tailwind.css" }, { name: "Javascript" }],
    image: "/assets/king-portfolio.jpg",
    live: "king-portfolio-nu.vercel.app/",
    github: ""
  },
];

const Work = () => {
  return <div>work page</div>;
};

export default Work;
