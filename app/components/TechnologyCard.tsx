"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Technology } from "@/sanity/interface";
import { urlForImage } from "@/sanity/lib/image";

interface TechnologyCardProps {
  technology: Technology;
  directionLeft?: boolean;
};

const TechnologyCard: React.FC<TechnologyCardProps> = ({ directionLeft, technology }) => {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="group relative flex cursor-pointer"
    >
      <Image
        alt={technology?.name}
        src={urlForImage(technology?.image)}
        width={54}
        height={48}
        className="
        border 
        border-gray-500 
        group:bg-gray-500/2
        object-cover 
        h-24
        w-24
        md:h-28
        md:w-28
        xl:h-32
        xl:w-32
        filter
        rounded-full
        group-hover:grayscale 
        transition 
        duration-300 
        ease-in-out"
      />
      <div
        className="
      absolute 
      opacity-0
      group-hover:opacity-80
      group-hover:bg-white
      transition
      duration-300
      ease-in-out
      rounded-full
      h-24
      w-24
      md:h-28
      md:w-28
      xl:h-32
      xl:w-32
      z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl fond-bold text-black opacity-100">{technology.progress}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TechnologyCard;
