'use client'

import { PageInfo } from '@/sanity/interface'
import { motion } from 'framer-motion'

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
      md:text-left
      md:flex-row
      max-w-7xl
      md:px-10
      justify-evenly
      mx-auto
      font-tacticsans
        "
    >
      <h3 className="sectionTitle">
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
        className="sectionContentWrapper"
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
