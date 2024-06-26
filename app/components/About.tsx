'use client'

import { AboutInterface } from '@/sanity/interface'
import { motion } from 'framer-motion'

interface AboutProps {
  about: AboutInterface
}

const About: React.FC<AboutProps> = ({ about }) => {
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
          {`<${about.title}`}
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
        <div
          className="
        pb-8
        md:pb-20
        text-primaryTextColor
        xl:left
        uppercase
        tracking-[3px]
        w-full
        xl:text-2xl
        leading-loose
        "
        >
          We are self motivated JS developers who likes working in
          <span className="font-tacticansBld text-white"> web development</span>. We have about two
          year experience in creating websites.
          <span className="font-tacticansBld text-white">Technologies </span>
          we use: React, NextJS, Tailwind CSS, Redux, Node, Express & MongoDB.
        </div>

        <div
          className="
          grid
          grid-cols-1
          space-y-3
          justify-center
          text-xl
          md:grid-cols-3
          md:text-4xl 
          md:space-y-0
          xl:text-6xl
          "
        >
          {about?.advantages?.map(advantage => {
            return (
              <div key={advantage._id}>
                <span className="text-primaryAccentColor pb-2 space-x-4 xl:leading-loose text-2xl items-center justify-center flex">
                  {advantage?.figure}
                </span>
                <p className="text-sm lg:text-lg xl:text-2xl items-center justify-center flex">
                  {advantage?.title}
                </p>
              </div>
            )
          })}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About
