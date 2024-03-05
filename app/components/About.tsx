"use client";

import { motion } from "framer-motion";
import { PageInfo } from "@/sanity/interface";

interface AboutProps {
  pageInfo: PageInfo;
};

const About:React.FC<AboutProps> = ({pageInfo}) => {

  return (
   <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
        h-screen
        flex
        flex-col
        relative
        text-center
        md:text-left
        md:flex-row
        max-w-7xl
        px-10
        justify-evenly
        mx-auto
        items-center"
    >
      <h3
        className="
          absolute
          top-[160px]
          left-0
          uppercase
          tracking-[3px]
          text-primaryTextColor
          text-2xl
          font-tacticsans
     "
      >
        <div className="text-sectionTitleColor">
          {`<About`}
          <span className="text-primaryAccentColor">{ `/`}
        </span>
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
      >
        <p className="
        text-2xl
        text-primaryTextColor
        left
        uppercase
        font-tacticsans
        font-light
        tracking-[3px]
        w-[920px]
        pb-[75px]
">
We are self motivated JS developers who likes working in
<span className="font-tacticansBld text-white"> web development</span>.
 We have about two year experience in creating websites.
 <span className="font-tacticansBld text-white">Technologies</span>
 we use: React, NextJS, Tailwind CSS, Redux, Node, Express & MongoDB.</p>

        <div className="grid grid-cols-3 font-tacticsans">
          <div>
            <span className="text-5xl text-primaryAccentColor pb-2">2+</span>
            <p>years of expirence</p>
          </div>
          <div>
            <span className="text-5xl text-primaryAccentColor pb-2">10+</span>
            <p>applied technologies</p>
          </div>
          <div>
              <span className="text-5xl text-primaryAccentColor pb-2">20+</span>
            <p>happy clients</p>
          </div>
</div>
      </motion.div>

    </motion.div>
  );
};

export default About;
