'use client'

import { TechnologiesInterface } from '@/sanity/interface'
import { motion } from 'framer-motion'
import TechnologyCard from './TechnologyCard'

interface TechnologiesProps {
  technologies: TechnologiesInterface
}

const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
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
        md:text-left
        md:flex-row
        md:px-10
        mx-auto
        mt-12
      "
    >
      <h3 className="sectionTitle">
        <div className="text-sectionTitleColor">
          {`<${technologies?.title}`}
          <span className="text-primaryAccentColor">{`/`}</span>
          <span>{`>`}</span>
        </div>
      </h3>
      <div
        className="
        space-x-2
        space-y-4
        grid 
        grid-cols-2
        md:grid-cols-4
        place-items-center
        place-content-center
        md:bg-secondaryBackground
        md:-ml-8
        "
      >
        {technologies?.technology.map(stack => (
          <TechnologyCard key={stack._id} technology={stack} />
        ))}
      </div>
    </motion.div>
  )
}

export default Technologies
