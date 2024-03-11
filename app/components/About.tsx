'use client'

import { motion } from 'framer-motion'
import { AboutInterface } from '@/sanity/interface'
import { PortableText } from '@portabletext/react'

interface AboutProps {
  about: AboutInterface
}

const About: React.FC<AboutProps> = ({ about }) => {
  // const content = about?.content[0]?.children[0]?.text

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
        className="
        w-full 
        text-left
        text-sm
        lg:text-lg
        xl:text-2xl
        px-6
        pt-[50px]
        md:pt-[200px]
        2xl:pt-[300px]
        md:px-[0]
        md:w-[690px]
        xl:w-[920px]
        xl:pb-[75px]
        2xl:w-[1444px]
        2xl:pb-[75px]
        "
      >
        <p
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
        </p>

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
                <p className="text-base lg:text-lg xl:text-2xl">{advantage?.title}</p>
              </div>
            )
          })}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About
