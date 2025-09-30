import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats"
const Home = () => {
  return (
    <section className="h-screen relative flex items-center justify-center xl:items-start xl:justify-between xl:pt-8 overflow-hidden">
      {" "}
      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-between gap-2 sm:gap-12 xl:gap-15 relative">
        {" "}
        {/* Text Section */}{" "}
        <div className="text-center xl:text-left order-2 xl:order-none relative z-10 px-3 sm:px-0">
          {" "}
          <span className="block text-sm sm:text-base">
            Software Developer
          </span>{" "}
          <h1 className="h1 mb-3 sm:mb-5 text-2xl sm:text-4xl">
            {" "}
            Hello I'm {" "}
            <span className="text-emerald-300 xl:whitespace-nowrap">Dada Kingsley</span>{" "}
          </h1>{" "}
          <p className="max-w-[500px] mb-5 sm:mb-9 text-white/80 text-sm sm:text-base mx-auto xl:mx-0">
            {" "}
            I excel in crafting efficient and scalable software solutions that
            drive innovation and enhance user experiences.{" "}
          </p>{" "}
          <div className="flex flex-col xl:flex-row items-center gap-4 sm:gap-8 justify-center xl:justify-start">
            {" "}
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-3 text-base sm:text-lg"
            >
              {" "}
              <span>Download CV</span>{" "}
              <FiDownload className="text-xl sm:text-2xl" />{" "}
            </Button>{" "}
            <div className="mb-4 sm:mb-6 xl:mb-0">
              {" "}
              <Socials
                containerStyles="flex gap-4 sm:gap-6"
                iconstyles="w-8 h-8 sm:w-9 sm:h-9 border border-emerald-300 rounded-full flex justify-center items-center text-emerald-300 text-sm sm:text-base hover:bg-emerald-300 hover:text-black hover:transition-all duration-500"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Photo Section - absolute on mobile */}{" "}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 order-1 xl:static xl:order-none mb-4 sm:mb-8 xl:mb-0 z-0">
          {" "}
          <Photo />{" "}
        </div>{" "}
      </div>{" "}
    <div className="absolute bottom-38 w-full flex flex-col justify-center xl:justify-start px-3 sm:px-0 ">
        <Stats/>
    </div>
    </section>
  );
};
export default Home;
