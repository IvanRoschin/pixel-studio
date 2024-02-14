"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
    h-screen
    flex
    relative
    overflow-hidden
    flex-col
    text-left
    md:flex-row
    max-w-full 
    px-10
    justify-evenly
    mx-auto
    items-center"
    >
      <h3
        className="
      absolute
      top-24
      uppercase
      tracking-[20px]
      text-gray-500
      text-2xl
      hover:text-[#F7AB0A]/50"
      >
        Projects
      </h3>
      <div
        className="
      relative
      w-full 
      flex
      overflow-x-scroll 
      overflow-y-hidden
      snap-x
      snap-mandatory
      z-20
      space-x-5
       scrollbar-thin
    scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            key={project}
            className="
      flex
      flex-col
      rounded-lg
      items-center
      space-y-5
      flex-shrink-0
      snap-center
      cursor-pointer
      duration-200
      overflow-hidden
      text-left
      md:flex-row
      max-w-full
      px-10
      justify-evenly
      h-screen
      w-screen
      z-0
    "
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <Image
                alt=""
                src="/images/team/freelance.webp"
                width={600}
                height={300}
              />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>
                UPS Clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Project Summuary
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div
        className="
      w-full
      absolute
      top-[30%]
      bg-[#F7AB0A]/10
      left-0
      h-[500px]
      -skew-y-12"
      />
    </motion.div>
  );
};

export default Projects;
