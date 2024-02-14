"use client";

import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="
      relative 
      flex 
      justify-center 
      items-center"
    >
      <div className="border border-[#333333] rounded-full h-[200px] w-[200px] mt-[300px] animate-ping absolute" />
      <div className="border border-[#333333] rounded-full h-[300px] w-[300px] mt-[300px] absolute" />
      <div className="border border-[#333333] rounded-full h-[500px] w-[500px] mt-[300px] absolute" />
      <div className="border border-[#F7AB0A] rounded-full h-[710px] w-[710px] opacity-20 mt-[300px] absolute animate-pulse" />
    </motion.div>
  );
};

export default BackgroundCircles;
