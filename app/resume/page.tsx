"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About Me",
  description:
    "I am a passionate software developer with expertise in building dynamic and responsive web applications.",
  info: [
    { fieldName: "Full Name", fieldValue: "Dada Kingsley" },
    { fieldName: "Phone", fieldValue: "+2349065644691" },
    { fieldName: "Experience", fieldValue: "3+ Years" },
    { fieldName: "Twitter", fieldValue: "@codekingz05" },
    { fieldName: "Nationality", fieldValue: "Nigerian" },
    { fieldName: "Email", fieldValue: "kingsleydada159@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Yoruba" },
  ],
};

// experience data
const experience = {
  title: "My Experience",
  description:
    "Over the past 3 years, I have worked on various projects ranging from small business websites to complex web applications. My expertise includes front-end and back-end development, UI/UX design, and database management.",
  items: [
    { company: "Global-tech", position: "Graphic Designer", duration: "2023 - 2024" },
    { company: "Freelance", position: "Full Stack Developer", duration: "2025 - Present" },
    { company: "E-commerce Site", position: "Front-End Developer", duration: "2025" },
    { company: "Tech Academy", position: "Teaching Assistant", duration: "Summer 2025" },
  ],
};

// education data
const education = {
  title: "My Education",
  description:
    "Digital problem-solver with skills in software development, UI/UX, and graphic design, delivering end-to-end solutions.",
  items: [
    { institution: "Yaba-tech", degree: "OND", duration: "2025" },
    { institution: "Olac Academy", degree: "Certified Web Developer", duration: "Early 2025" },
    { institution: "Citadel", degree: "Desktop Publishing Certificate", duration: "2023" },
    { institution: "New Ocean", degree: "WAEC", duration: "2024" },
  ],
};

// skills data
const skills = {
  description:
    "I have a diverse set of skills that enable me to tackle various challenges in web development.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaFigma />, name: "Figma" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col items-center justify-center py-16 sm:py-20"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="text-center mb-45"
      >
        <h3 className="text-sm uppercase tracking-[6px] text-emerald-300 mb-3">
          My Journey
        </h3>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
          My <span className="text-emerald-300">Resume</span>
        </h1>
        <p className="max-w-2xl mx-auto text-white/70 text-sm sm:text-base leading-relaxed">
          A blend of passion, skill, and hands-on experience. Explore my
          professional background, education, and the technologies that define
          my craft.
        </p>
      </motion.div>

      {/* Resume Tabs */}
      <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row items-start justify-between gap-6 md:gap-10 lg:gap-8 w-full"
      >
        {/* Tabs List */}
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger
            value="experience"
            className="data-[state=active]:bg-emerald-300 data-[state=active]:text-black rounded-lg py-3 px-25 transition-all text-center w-[95%] mx-auto text-base sm:text-lg"
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="data-[state=active]:bg-emerald-300 data-[state=active]:text-black rounded-lg py-3 px-25 transition-all text-center w-[95%] mx-auto text-base sm:text-lg"
          >
            Education
          </TabsTrigger>
          <TabsTrigger
            value="skills"
            className="data-[state=active]:bg-emerald-300 data-[state=active]:text-black rounded-lg py-3 px-25 transition-all text-center w-[95%] mx-auto text-base sm:text-lg"
          >
            Skills
          </TabsTrigger>
          <TabsTrigger
            value="about"
            className="data-[state=active]:bg-emerald-300 data-[state=active]:text-black rounded-lg py-3 px-25 transition-all text-center w-[95%] mx-auto text-base sm:text-lg"
          >
            About Me
          </TabsTrigger>
        </TabsList>

        {/* Tabs Content */}
        <div className="relative w-full xl:min-w-[800px] min-h-[400px] mt-8 xl:mt-0">
          {/* Experience */}
          <TabsContent
            value="experience"
            className="absolute inset-0 data-[state=inactive]:hidden  max-[700px]:top-50 max-[1260px]:top-50"
          >
            <div className="flex flex-col gap-[20px] text-center xl:text-left px-4">
              <h3 className="text-xl sm:text-2xl font-bold">
                {experience.title}
              </h3>
              <p className="text-white/60 leading-relaxed max-w-[700px] mx-auto xl:mx-0">
                {experience.description}
              </p>
              <ScrollArea className="h-[400px] mt-4">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-emerald-300">{item.duration}</span>
                      <h3 className="text-xl">{item.position}</h3>
                      <p className="text-white/60">{item.company}</p>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* Education */}
          <TabsContent
            value="education"
            className="absolute inset-0 data-[state=inactive]:hidden  max-[700px]:top-50 max-[1260px]:top-50"
          >
            <div className="flex flex-col gap-[20px] text-center xl:text-left px-4">
              <h3 className="text-xl sm:text-2xl font-bold">
                {education.title}
              </h3>
              <p className="text-white/60 leading-relaxed max-w-[700px] mx-auto xl:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[400px] mt-4">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-emerald-300">{item.duration}</span>
                      <h3 className="text-xl">{item.degree}</h3>
                      <p className="text-white/60">{item.institution}</p>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* Skills */}
          <TabsContent
            value="skills"
            className="absolute inset-0 data-[state=inactive]:hidden  max-[700px]:top-50 max-[1260px]:top-50"
          >
            <div className="flex flex-col gap-[20px] text-center xl:text-left px-4">
              <h3 className="text-xl font-bold mb-4">My Skills</h3>
              <p className="text-white/60 leading-relaxed max-w-[700px] mb-5">
                {skills.description}
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 xl:gap-[45px]">
                {skills.skillList.map((skill, index) => (
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] bg-[#232329] 
                          rounded-xl flex items-center justify-center 
                          group hover:bg-[#2b2b31] transition-all duration-300 mx-auto"
                        >
                          <div className="text-5xl text-white group-hover:text-emerald-300 transition-all duration-300">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white text-black font-medium px-3 py-1 rounded-md shadow-md">
                          <p className="capitalize text-sm">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          {/* About */}
<TabsContent
  value="about"
  className="relative max-[700px]:mt-30 data-[state=inactive]:hidden block"
>
  <div className="flex flex-col gap-[20px] text-center xl:text-left px-4">
    <h3 className="text-2xl font-bold">{about.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
      {about.description}
    </p>
    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
      {about.info.map((item, index) => (
        <li
          key={index}
          className="flex items-center justify-center xl:justify-start gap-4"
        >
          <span className="text-white/60">{item.fieldName}</span>
          <span className="text-xl">{item.fieldValue}</span>
        </li>
      ))}
    </ul>
  </div>
</TabsContent>



        </div>
      </Tabs>
    </motion.div>
  );
};

export default Resume;
