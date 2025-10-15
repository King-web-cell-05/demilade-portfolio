"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";  

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


const projects = [
  {
    num: "01",
    category: "Front-end",
    title: "Login design",
    description:
      "A modern and minimalist login design, focusing on clean typography and a visually appealing layout ",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/public/assets/login-page.jpg",
    live: "https://king-web-cell-05.github.io/login-design/",
    github: "",
  },
  {
    num: "02",
    category: "Front-end",
    title: "Todo App",
    description:
      "A clean, intuitive todo app that helps you stay organised and focused. Create, manage and prioritize your tasks with ease ",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/public/assets/todo-app.jpg",
    live: " https://king-web-cell-05.github.io/todo-app/",
    github: "",
  },
  {
    num: "03",
    category: "Front-end",
    title: "Weather App",
    description:
      "A dynamic weather application that provides real-time weather updates and forecasts,this app utilizes APIs to fetch weather data ",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/public/assets/weather-apc.jpg",
    live: " https://king-web-cell-05.github.io/weather-Apc/",
    github: "",
  },

  {
    num: "04",
    category: "Front-end Framework",
    title: "Quiz App",
    description:
      "An interactive quiz application that test users' knowledge on React, this app provides an engaging way to learn and challenge oneself",
    stack: [
      { name: "React" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/public/assets/quiz-app.png",
    live: "https://quiz-app-rho-ebon.vercel.app",
    github: "",
  },
  {
    num: "05",
    category: "Front-end Framework",
    title: "Weather App",
    description:
      "A comprehensive real estate application that enables users to browse and search for properties and streamline their home search",
    stack: [
      { name: "React" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/public/assets/real-estate-pic.jpg",
    live: " https://realestate-alpha-eight.vercel.app",
    github: "",
  },
  {
    num: "06",
    category: "Front-end Framework",
    title: "Mini Portfolio",
    description:
      "Showcasing my skills and projects in web development, data analysis, and more through my mini portfolio",
    stack: [
      { name: "React" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/public/assets/king-portfolio.jpg",
    live: "https://king-portfolio-nu.vercel.app/",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

const handleSlideChange = (swiper: SwiperType) => {
  const currentIndex = swiper.activeIndex;
  setProject(projects[currentIndex]);
};

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group:hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description  */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-emerald-300">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-emerald-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="bg-white text-black rounded-sm w-26 px-2 py-2">
                          Live Project
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-emerald-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="bg-white text-black rounded-sm w-26 px-2 py-2">
                          Github repository
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
              {projects.map ((project, index) => {
                return <SwiperSlide key={index}>
                  slide
                </SwiperSlide>
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
