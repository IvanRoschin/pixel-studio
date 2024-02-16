"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/sanity/interface";
import { urlForImage } from "@/sanity/lib/image";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  projects: Project[];
};
const Projects: React.FC<ProjectsProps> = ({projects}) => {

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
        {projects.map((project, i: number) => (
          <ProjectCard key={project._id} project={project} projects={projects} i={i} />
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
