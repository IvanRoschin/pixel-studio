"use client"

import {motion} from "framer-motion";
import Image from "next/image";
import { Project } from "@/sanity/interface";
import { urlForImage } from "@/sanity/lib/image";
import TechnologyCard from "./TechnologyCard";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
    projects:Project[];
    i: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, projects, i}) => {
  return (
      <article>
          <motion.div
            key={project._id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
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
              md:max-w-full
              max-w-[480px]
              px-5
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
                alt={project.title}
                src={urlForImage(project.image)}
                width={470}
                height={360}
            className="
            w-[470px] 
            h-[360px] 
            md:w-[320px] 
            md:h-[240px] 
            xl:w-[740px] 
            xl:h-auto
            "
              />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>
               <Link href={project.linkToBuild} className="text-[#F7AB0A]/50 hover:underline"><br/>Link: {project.title}</Link>
          </h4>
          <span className="flex items-center justify-center px-5">
            <p className="text-lx/2 p-1 max-w-[440px] text-center md:text-left md:text-2xl">
                {project?.summary}
          </p>
            </span>   
                  <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Technologies:
                      </span>
                      </h4>
                      <div className="flex items-center justify-center space-x-10">
                      {project.technologies.map(technology => (
                          <TechnologyCard key={technology?._id} technology={technology} />
                      ))}
                    </div>
            </div>
      </motion.div>
      </article>
  )
}

export default ProjectCard