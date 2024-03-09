'use client'

import { motion } from 'framer-motion'
import TechnologyCard from './TechnologyCard'
import { Technology } from '@/sanity/interface'

interface TechnologiesProps {
  technologies: Technology[]
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
      h-screen
      2xl:h-full
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
          {`<Technologies`}
          <span className="text-primaryAccentColor">{`/`}</span>
          <span>{`>`}</span>
        </div>
      </h3>
      <div
        className="
        space-x-4
        grid 
        grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        gap-4
        pt-[150px]
        md:pt-[200px]
        place-items-center
        place-content-center
        "
      >
        {technologies?.map(technology => (
          <TechnologyCard key={technology._id} technology={technology} />
        ))}
      </div>
    </motion.div>
  )
}

export default Technologies
