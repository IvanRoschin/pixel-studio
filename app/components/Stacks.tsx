"use client";

import { motion } from "framer-motion";
import StackCard from "./StackCard";
import { Stack } from "@/sanity/interface";

interface StacksProps {
  stacks: Stack[];
};

const Stacks: React.FC<StacksProps> = ({stacks}) => {
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
      top-[12rem]
      tracking-[3px]
      text-gray-500
      text-sm
      uppercase
      px-10"
      >
        Hover over a skill for currency profieciency
      </h3>
      <div className="grid grid-col-4 gap-5">
        {stacks.map((stack) => (
        <StackCard key={stack._id} stack={stack}/>
        ))}
      </div>
    </motion.div>
  );
};

export default Stacks;
