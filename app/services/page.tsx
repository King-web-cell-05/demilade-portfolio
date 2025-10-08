"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building user-friendly responsive and dynamic websites using modern technologies.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Creating visually appealing and user-friendly interfaces that enhance user experience.",
    href: "",
  },
  {
    num: "03",
    title: "Graphic Design",
    description:
      "Creating visually stunning graphics and designs that effectively communicate brand messages.",
    href: "",
  },
  {
    num: "04",
    title: "SEO Optimization",
    description:
      "Improving website visibility and ranking on search engines through effective SEO strategies.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="">
               <div>
                <div>{service.num}</div>
                <Link href={service.href} className="">
                <BsArrowDownRight/>
                </Link>
               </div>
               {/* title */}
               <h2>{service.title}</h2>
                {/* description */}
                <p>{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
