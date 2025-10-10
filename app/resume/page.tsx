"use client";

import { icons } from "lucide-react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About Me",
  description:
    "I am a passionate software developer with expertise in building dynamic and responsive web applications.",
  info: [
    {
      fieldName: "Full Name",
      fieldValue: "Dada Kingsley",
    },
    {
      fieldName: "Phone",
      fieldValue: "+2349065644691",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Twitter",
      fieldValue: "@codekingz05",
    },
    {
      fieldName: "Email",
      fieldValue: "kingsleydada159@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Yoruba",
    },
  ],
};

// experience data
const experience = {
  icons: "/assets (1)/resume/badge.svg",
  title: " My Experience",
  description:
    "Over the past 3 years, I have worked on various projects ranging from small business websites to complex web applications. My expertise includes front-end and back-end development, UI/UX design, and database management.",
    items:[

        {
        company: "Global-tech",
        position: "Graphic designer",
        duration: "Summer 2023",
      },
      {
        company: "E-commerce site",
        position: "Freelance Web Developer",
        duration: "2025",
      },
        {
        company: "Tech Academy",
        position: "Teaching Assistant",
        duration: "Summer 2025",
      }
    

    ]
};

// education data
const education = {
  icons: "/assets (1)/resume/cap.svg",
  title: " My Education",
  description:
    "Over the past 3 years, I have worked on various projects ranging from small business websites to complex web applications. My expertise includes front-end and back-end development, UI/UX design, and database management.",
    items:[

        {
        institution: "Yaba-tech",
        degree: "HND",
        duration: " 2025",
      },

         {
        institution: "Olac Academy",
        degree: "Certified Web Developer",
        duration: " Early 2025",
      },
   
        {
        institution: "Citadel",
        degree: "Desktop Publishing certificate",
        duration: "2023",
      },
    

    ]
};
// skills data
const skills = {
  title: "My skills",
  description: "I have a diverse set of skills that enable me to tackle various challenges in web development.",
  skillList:[
    {}
  ]
}

const Resume = () => {
  return <div>resume page</div>;
};

export default Resume;
