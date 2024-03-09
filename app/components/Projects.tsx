'use client'

import { motion } from 'framer-motion'
import { Project } from '@/sanity/interface'
import ProjectCard from './ProjectCard'

interface ProjectsProps {
  projects: Project[]
}
const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
      relative
      max-w-7xl
      md:px-10
      justify-evenly
      mx-auto
      font-tacticsans"
    >
      <h3
        className="
        absolute
        top-[70px]
        left-[20px]
        md:top-[120px]
        uppercase
        tracking-[3px]
        text-primaryTextColor
        text-2xl
        xl:text-4xl
        "
      >
        <div className="text-sectionTitleColor">
          {`<Case studies`}
          <span className="text-primaryAccentColor">{`/`}</span>
          <span>{`>`}</span>
        </div>
      </h3>
      <div
        className="
        flex
        flex-row
        space-x-5
        mt-[140px]
        md:mt-[180px]
        lg:mt-[200px]
        xl:mt-[225px]
        relative
        w-full
        h-full
        overflow-x-scroll
        overflow-y-hidden
        snap-x
        snap-mandatory
        z-10
        scrollbar-thin
        scrollbar-track-primaryScrollbarTrack
        scrollbar-thumb-primaryScrollbarThumb
        pb-[35px]
        pt-[150px]
        md:pt-[200px]
      "
      >
        {projects.map((project, i: number) => (
          <ProjectCard key={project._id} project={project} i={i} />
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
