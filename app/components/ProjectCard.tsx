'use client'

import { Project } from '@/sanity/interface'
import { urlForImage } from '@/sanity/lib/image'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  project: Project
  i: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, i }) => {
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
        flex-shrink-0
        snap-center
        cursor-pointer
        overflow-hidden
        flex
        flex-col
        md:flex-row
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
        className="md:flex-shrink-0 p-3"
      >
        <Image
          alt={project.title}
          src={urlForImage(project.image)}
          width={325}
          height={300}
          className="
          w-[325px]
          h-[300px]
          md:w-[350px]
          md:h-[278px]
          lg:w-[400px]
          lg:h-[328px]
          xl:w-[600px]
          xl:h-[538px]
          mb-2
            "
        />
      </motion.div>
      <div
        className="
      flex 
      text-left 
      px-6 
      text-xs 
      md:text-base 
      lg:text-xl 
      xl:text-2xl
      flex-col 
      justify-center 
      md:space-y-2
      lg:space-y-4 
      xl:space-y-10 
      "
      >
        <h4 className="text-lg md:text-3xl lg:text-4xl xl:mb-[50px] mb-2">{project.title}</h4>
        <p className="xl:max-w-[440px] xl:mb-2 mb-2">{project?.summary}</p>
        <div className="flex justify-between space-x-5 text-secondaryTextColor mb-2">
          {arrayOfWords}
        </div>
        <Link href={project.linkToBuild} className="text-primaryAccentColor hover:underline">
          Explore more
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectCard
