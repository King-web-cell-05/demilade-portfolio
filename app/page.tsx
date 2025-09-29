import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Social";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-center xl:text-left">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /><span className="text-emerald-300">Dada Kingsley</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-whit/80">
            I excel in crafting efficient and scalable software solutions that drive innovation and enhance user experiences and I am proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8 justify-center xl:justify-start">
                <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-3 px-3 py-3 text-lg"
                style={{ fontSize: "1rem" }}
                >
                <span>Download CV</span>
                <FiDownload className="text-2xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Socials/>
                </div>
            </div>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
