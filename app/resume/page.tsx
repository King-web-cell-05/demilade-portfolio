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
  icons: "/assets/resume/badge.svg",
  title: " My Experience",
  description:
    "Over the past 3 years, I have worked on various projects ranging from small business websites to complex web applications. My expertise includes front-end and back-end development, UI/UX design, and database management.",
  items: [
    {
      company: "Global-tech",
      position: "Graphic designer",
      duration: "2023 - 2024",
    },
     {
      company: "Freelance",
      position: "Full Stack developer",
      duration: "2025 - present",
    },
    {
      company: "E-commerce site",
      position: "Front-end-Developer",
      duration: "2025",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "Summer 2025",
    },
  ],
};

// education data
const education = {
  icons: "/assets/resume/cap.svg",
  title: " My Education",
  description:
    "Digital problem-solver with skills in software development,UI/UX, graphic design, delivering end-to-end solutions.",
  items: [
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
  ],
};
// skills data
const skills = {
  title: "My skills",
  description:
    "I have a diverse set of skills that enable me to tackle various challenges in web development.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },

    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },

    {
      icon: <FaJs />,
      name: "JavaScript",
    },

    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
<Tabs
  defaultValue="experience"
  className="flex flex-col xl:flex-row items-start justify-start gap-4 md:gap-2 "
>

   <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
  <TabsTrigger
    value="experience"
    className="data-[state=active]:bg-emerald-300 data-[state=active]:text-black rounded-lg py-3 px-25 transition-all text-center w-[95%] mx-auto text-base sm:text-lg lg:text-[14px] xl:text-[13px]  "
  >
    Experience
  </TabsTrigger>

  <TabsTrigger
    value="education"
    className="data-[state=active]:bg-emerald-300 data-[state=active]:text-black rounded-lg py-3 px-25 transition-all text-center w-[95%] mx-auto text-base sm:text-lg lg:text-[14px] xl:text-[13px]  "
  >
    Education
  </TabsTrigger>

  <TabsTrigger
    value="skills"
    className="data-[state=active]:bg-emerald-300 data-[state=active]:text-black rounded-lg py-3 px-25 transition-all text-center w-[95%] mx-auto text-base sm:text-lg lg:text-[14px] xl:text-[13px]  "
  >
    Skills
  </TabsTrigger>

  <TabsTrigger
    value="about"
    className="data-[state=active]:bg-emerald-300 data-[state=active]:text-black rounded-lg py-3 px-25 transition-all text-center w-[95%] mx-auto text-base sm:text-lg lg:text-[14px] xl:text-[13px]  "
  >
    About Me
  </TabsTrigger>
</TabsList>


  
<div className="relative w-full xl:min-w-[800px] min-h-[400px] -mt-25 min-[400px]:top-45 min-[340px]:top-45 min-[768px]:top-60 min-[1280px]:top-1">
  {/* experience */}
  <TabsContent
    value="experience"
    className="absolute inset-0 data-[state=inactive]:hidden"
  >
    <div className="flex flex-col gap-[20px] text-center xl:text-left mt-16 sm:mt-0 px-4 lg:ml-15 lg:mb-8">
      <h3 className="text-xl sm:text-2xl lg:text-[20px] xl:text-[18px] font-bold">
        {experience.title}
      </h3>
      <p className="text-white/60 mx-auto xl:mx-0 max-w-[90%] sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] leading-relaxed text-base sm:text-lg lg:text-[15px] xl:text-[14px] break-words">
        {experience.description}
      </p>
      <ScrollArea className="h-[400px]">  
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {experience.items.map((item, index)=> {
            return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
              <span>{item.duration}</span>
              <h3>{item.position}</h3>
              <div>
                {/* dot */}
                <span></span>
                <p>{item.company}</p>
              </div>
            </li>
          })}
        </ul>
      </ScrollArea>
    </div>
  </TabsContent>

  {/* education */}
  <TabsContent
    value="education"
    className="absolute inset-0 data-[state=inactive]:hidden"
  >
    <div className="flex flex-col gap-[20px] text-center xl:text-left mt-16 sm:mt-0 px-4 lg:ml-15 lg:mb-8">
      <h3 className="text-xl font-bold mb-4">My Education</h3>
      <p className="text-white/60 leading-relaxed max-w-[700px]">
        {education.description}
      </p>
    </div>
  </TabsContent>

  {/* skills */}
  <TabsContent
    value="skills"
    className="absolute inset-0 data-[state=inactive]:hidden"
  >
    <div className="flex flex-col gap-[20px] text-center xl:text-left mt-16 sm:mt-0 px-4 lg:ml-15 lg:mb-8">
      <h3 className="text-xl font-bold mb-4">My Skills</h3>
      <p className="text-white/60 leading-relaxed max-w-[700px]">
        {skills.description}
      </p>
    </div>
  </TabsContent>

  {/* about */}
  <TabsContent
    value="about"
    className="absolute inset-0 data-[state=inactive]:hidden"
  >
    <div className="flex flex-col gap-[20px] text-center xl:text-left mt-16 sm:mt-0 px-4 lg:ml-15 lg:mb-8">
      <h3 className="text-xl font-bold mb-4">About Me</h3>
      <p className="text-white/60 leading-relaxed max-w-[700px]">
        {about.description}
      </p>
    </div>
  </TabsContent>
</div>

</Tabs>

    </motion.div>
  );
};

export default Resume;
