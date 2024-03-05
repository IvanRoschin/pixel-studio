"use client"

import { motion } from "framer-motion";
import { PageInfo, AccordionItem } from "@/sanity/interface";

import Accordion from "./Accordion";

interface WhatWeDoProps {
  pageInfo: PageInfo;
};

const WhatWeDo: React.FC<WhatWeDoProps> = ({pageInfo}) => {

  const accordion = pageInfo.accordion;

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
          {`<What we do`}
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
        className="w-full"
      >
        {accordion.map((item) =>
          <div key={item?._id}>
        <Accordion
            title={item?.title}
            text={item?.text}
            closeIcon={pageInfo?.closeIcon}
            openIcon={pageInfo?.openIcon}
            />
            </div>
        )
        }
      </motion.div>

    </motion.div>  )
}

export default WhatWeDo
