"use client";

import { motion } from "framer-motion";
import TechnologyCard from "./TechnologyCard";
import { Technology } from "@/sanity/interface";

interface TechnologiesProps {
  technologies: Technology[];
};

const Technologies: React.FC<TechnologiesProps> = ({technologies}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="
        h-screen
        flex
        flex-col
        relative
        text-center
        md:text-left
        md:flex-row
        max-w-7xl
        px-10
        justify-evenly
        mx-auto
        items-center"
    >
      <h3
        className="
          absolute
          top-[160px]
          left-0
          uppercase
          tracking-[3px]
          text-primaryTextColor
          text-2xl
          font-tacticsans
     "
      >
        <div className="text-sectionTitleColor">
          {`<Technogies`}
          <span className="text-primaryAccentColor">{ `/`}
        </span>
        <span>{`>`}</span>
        </div>
      </h3>
      <div className="flex space-x-20">
        {technologies?.map((technology) => (
        <TechnologyCard key={technology._id} technology={technology}/>
        ))}
        </div>
    </motion.div>
  );
};

export default Technologies;
