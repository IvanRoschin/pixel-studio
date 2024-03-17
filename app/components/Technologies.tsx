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
      max-w-7xl
      md:px-10
      justify-evenly
      mx-auto
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
        grid 
        grid-cols-3
        md:grid-cols-9
        lg:grid-cols-9
        gap-2
        place-items-center
        place-content-center
        bg-secondaryBackground
        w-full
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
