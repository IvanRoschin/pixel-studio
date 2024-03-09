'use client'

import { motion } from 'framer-motion'
import { PageInfo, AccordionItem } from '@/sanity/interface'

import Accordion from './Accordion'

interface WhatWeDoProps {
  pageInfo: PageInfo
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({ pageInfo }) => {
  const accordion = pageInfo.accordion

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
      h-screen
      2xl:h-full
      flex
      flex-col
      relative
      md:text-left
      md:flex-row
      max-w-7xl
      md:px-10
      justify-evenly
      mx-auto
      font-tacticsans
        "
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
          {`<What we do`}
          <span className="text-primaryAccentColor">{`/`}</span>
          <span>{`>`}</span>
        </div>
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="        
        w-full 
        relative
        text-left
        pt-[150px]
        md:pt-[200px]
        "
      >
        {accordion.map(item => (
          <div
            key={item?._id}
            className="
        text-sm
        pb-10
        text-primaryTextColor
        xl:left
        uppercase
        tracking-[3px]
        w-full
        "
          >
            <Accordion
              title={item?.title}
              text={item?.text}
              closeIcon={pageInfo?.closeIcon}
              openIcon={pageInfo?.openIcon}
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default WhatWeDo
