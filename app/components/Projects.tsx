'use client'

import { CasesInterface } from '@/sanity/interface'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

interface ProjectsProps {
  projects: CasesInterface
}
const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
        md:text-left
        md:flex-row
        md:px-10
        mx-auto
        mt-12
      "
    >
      <h3 className="sectionTitle">
        <div className="text-sectionTitleColor">
          {`<${projects?.title}`}
          <span className="text-primaryAccentColor">{`/`}</span>
          <span>{`>`}</span>
        </div>
      </h3>
      <div
        className="
        flex
        flex-row
        relative
        w-full
        overflow-x-scroll
        overflow-y-hidden        
        snap-x
        snap-mandatory
        z-10
        pb-[35px]
      "
      >
        {projects?.projects.map((project, i: number) => (
          <ProjectCard key={project._id} project={project} i={i} />
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
