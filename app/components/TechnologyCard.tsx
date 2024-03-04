"use client";

import { Technology } from "@/sanity/interface";
import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";

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
      className="
        group
        relative
        flex
        cursor-pointer
        h-20
        w-20
        "
    >
      <Image
        alt={technology?.name}
        src={urlForImage(technology?.image)}
        width={24}
        height={24}
        className="
        p-2
        object-cover
        h-[100%]
        w-[100%]
        filter
        group-hover:opacity-100
        group-hover:shadow-primaryAccentColor
        group-hover:shadow-lg
        shadow-md
        opacity-60
        cursor-pointer
        transition-opacity
        duration-200
        "
      />
      <div
        className="
      absolute
      opacity-0
      group-hover:opacity-100
      transition
      duration-300
      ease-in-out
      rounded-full
      h-20
      w-20
      z-0"
      >
        <div className="flex items-center justify-center h-full mt-[-60px]">
          <p className="text-xl fond-bold text-white opacity-100">{`<${technology?.name}>`}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TechnologyCard;
