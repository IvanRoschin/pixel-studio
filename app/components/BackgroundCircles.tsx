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
        borderRadius: ["10%", "10%", "25%", "40%", "10%"],
      }}
      transition={{ duration: 2.5 }}
      className="
      relative
      flex
      justify-center
      items-center"
    >
      <div className="border border-textColor rounded-full h-[50px] w-[50px] 2xl:h-[100px] 2xl:w-[100px] mt-[250px] 2xl:mt-[450px] animate-ping absolute" />
      <div className="border border-textColor rounded-full h-[100px] w-[100px] 2xl:h-[200px] 2xl:w-[200px] mt-[250px] 2xl:mt-[450px] absolute" />
      <div className="border border-textColor rounded-full h-[200px] w-[200px] 2xl:h-[400px] 2xl:w-[400px] mt-[250px] 2xl:mt-[450px] absolute" />
      <div className="border border-primaryAccentColor rounded-full h-[400px] w-[400px] 2xl:h-[800px] 2xl:w-[800px] opacity-20 mt-[250px] 2xl:mt-[450px] absolute animate-pulse" />
    </motion.div>
  );
};

export default BackgroundCircles;
