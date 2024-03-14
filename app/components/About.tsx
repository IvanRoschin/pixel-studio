'use client'

import { AboutInterface } from '@/sanity/interface'
import { PortableText } from '@portabletext/react'
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
        max-w-7xl
        md:px-10
        justify-evenly
        mx-auto
        font-tacticsans
        mt-12
        "
    >
      <h3 className="sectionTitle">
        <div className="text-sectionTitleColor">
          {`<About`}
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
        pb-10
        md:pb-20
        text-primaryTextColor
        xl:left
        uppercase
        tracking-[3px]
        w-full
        xl:text-2xl
        xl:leading-loose
        "
        >
          <PortableText value={about?.content} />
          {/* We are self motivated JS developers who likes working in
          <span className="font-tacticansBld text-white"> web development</span>. We have about two
          year experience in creating websites.
          <span className="font-tacticansBld text-white">Technologies </span>
          we use: React, NextJS, Tailwind CSS, Redux, Node, Express & MongoDB. */}
        </div>

        <div
          className="
          flex 
          justify-between 
          font-tacticsans 
          text-2xl 
          md:text-4xl 
          xl:text-6xl
          "
        >
          {about?.advantages?.map(advantage => {
            return (
              <div key={advantage._id}>
                <span className="text-primaryAccentColor pb-2 space-x-4 xl:leading-loose">
                  {advantage?.figure}
                </span>
                <p className="text-sm lg:text-lg xl:text-2xl">{advantage?.title}</p>
              </div>
            )
          })}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About
