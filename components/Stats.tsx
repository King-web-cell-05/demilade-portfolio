"use client";
import CountUp from "react-countup";

const stats = [
  { num: 2, text: "Years of Experience" },
  { num: 15, text: "Projects Completed" },
  { num: 8, text: "Technologies Mastered" },
  { num: 500, text: "Code Commits" },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* Always horizontal */}
        <div className="stats flex flex-row gap-4 sm:gap-10 items-center justify-center xl:justify-start">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-extrabold text-emerald-300">
                <CountUp end={item.num} duration={5} delay={0.5} />
              </h3>
              <p className="mt-1 text-xs sm:text-sm md:text-base xl:text-lg text-gray-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
