'use client'

import { ServiсesInterface } from '@/sanity/interface'
import { motion } from 'framer-motion'

import Accordion from './Accordion'

interface ServiesInterface {
  services: ServiсesInterface
}

const Services: React.FC<ServiesInterface> = ({ services }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
        h-screen
        md:text-left
        md:flex-row
        max-w-7xl
        md:px-10
        mx-auto
        mt-12
        "
    >
      <h3 className="sectionTitle">
        <div className="text-sectionTitleColor">
          {`<${services?.title}`}
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
        {services?.services.map(service => (
          <div
            key={service?._id}
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
              title={service?.title}
              text={service?.text}
              closeIcon={services?.closeIcon}
              openIcon={services?.openIcon}
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
