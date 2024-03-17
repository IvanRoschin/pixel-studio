'use client'

import { Technology } from '@/sanity/interface'
import { urlForImage } from '@/sanity/lib/image'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface TechnologyCardProps {
  technology: Technology
  directionLeft?: boolean
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ directionLeft, technology }) => {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -50 : 50,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="
      opacity-40
      cursor:pointer
      hover:opacity-100
      hover:shadow-lg
      transition-opacity
      group
      col-span-1
      p-2
      "
    >
      <div className="flex flex-col items-center h-full space-y-2">
        {/* <p
          className="
        text-xs 
        md:text-lg
        lg:text-xl
        xl:text-2xl
        2xl:text-3xl
        fond-bold 
        text-primaryTextColor 
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-700"
        >{`<${technology?.name}>`}</p> */}

        <Image
          alt={technology?.name}
          src={urlForImage(technology?.image)}
          width={0}
          height={0}
          className="
          w-[73px]
          h-auto
          p-2
          object-cover
          filter
          group-hover:opacity-100
          group-hover:shadow-primaryAccentColor
          group-hover:shadow-lg
          shadow-md
          opacity-60
          cursor-pointer
          transition-opacity
          duration-200
  "
        />
      </div>
    </motion.div>
  )
}

export default TechnologyCard
