"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
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
          top-24
          uppercase
          tracking-[20px]
          text-gray-500
          text-2xl
          hover:text-[#F7AB0A]/50
     "
      >
        About
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
        <Image
          src={urlForImage(pageInfo.aboutImage)}
          alt="AboutImage"
          width={200}
          height={300}
          className="
             -mb-20
            md:mb-0
            flex-shrink-0
            rounded-full
            md:rounded-lg
            md:w-56
            md:h-76
            xl:w-[700px]
            xl-h-[900px]"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a
          <span className="underline decoration-[#F7AB0A]/50"> little</span>{" "}
          background
        </h4>
        <p className="text-base">
         {pageInfo.aboutText}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
