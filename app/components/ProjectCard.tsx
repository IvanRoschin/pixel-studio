"use client"

import {motion} from "framer-motion";
import Image from "next/image";
import { Project } from "@/sanity/interface";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
    i: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, i}) => {
  const stackString = project?.technologies
  const arrayOfWords = stackString?.split(', ').map(word => `${word}`)

  return (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="
        max-w-[1920px]
        w-full
        h-screen
        flex-shrink-0
        snap-center
        cursor-pointer
        overflow-hidden
        font-tacticsans
        flex
        flex-row
        py-2
        items-center
        justify-between
        rounded-[50px]
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
                width={600}
                height={628}
            className="
            w-[600px]
            h-[628px]
            "
              />
            </motion.div>
            <div className="flex text-left text-[22px] flex-col justify-center space-y-10 px-0font-tacticsans">
              <h4 className="text-[30px] mb-[50px]">
               {project.title}
          </h4>
            <p className="p-1 max-w-[440px]">
                {project?.summary}
          </p>
          <div className="flex justify-between space-x-5 text-secondaryTextColor" >
        {arrayOfWords}
      </div>
          <Link href={project.linkToBuild} className="text-primaryAccentColor hover:underline">Explore more</Link>

        </div>
      </motion.div>
  )
}

export default ProjectCard
