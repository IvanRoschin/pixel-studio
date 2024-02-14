"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Stack } from "@/sanity/interface";

interface StackCardProps {
  stack: Stack;
  directionLeft?: boolean;
};


const StackCard: React.FC<StackCardProps> = ({ directionLeft, stack }) => {
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
        alt={stack.name}
        src={stack.url}
        width={24}
        height={24}
        className="
        rounded-full 
        border 
        border-gray-500 
        object-cover 
        h-24
        w-24
        md:h-28
        md:w-28
        xl:h-32
        xl:w-32
        filter
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
      h-24
      w-24
      md:h-28
      md:w-28
      xl:h-32
      xl:w-32
      rounded-full 
      z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl fond-bold text-black opacity-100">{stack.progress}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default StackCard;
