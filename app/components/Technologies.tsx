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
    xl:flex-row
    max-w-[2000px]
    xl:px-10
    min-h-screen
    justify-center
    xl:space-y-0
    mx-auto
    items-center"
    >
      <h3
        className="      
        absolute
      top-36
      uppercase
      tracking-[20px]
      text-gray-500
      text-2xl
      hover:text-[#F7AB0A]/50"
      >
        Stack techologies
      </h3>
      <h3
        className="
      absolute
      top-[14rem]
      tracking-[3px]
      text-gray-500
      text-sm
      uppercase
      px-10
      "
      >
        Hover over a skill for currency profieciency
      </h3>
      <div className="pt-64 grid grid-cols-4 gap-5">
        {technologies.map((technology) => (
        <TechnologyCard key={technology._id} technology={technology}/>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;
