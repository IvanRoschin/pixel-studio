"use client"

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PageInfo }  from "@/sanity/interface";
import { urlForImage } from "@/sanity/lib/image";
import SocialCard from "./SocialCard";

interface HomeProps {
  pageInfo: PageInfo;
};

const Header: React.FC<HomeProps> =  ({ pageInfo }) => {

  return (
    <header
      className="
    sticky
    top-0
    flex
    items-center
    justify-between
    max-w-7xl
    mx-auto
    z-20
    p-5
    pb-0
    backdrop-filter 
    backdrop-blur
    dark:bg-primary dark:text-white
    "
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="
      flex
      flex-row
      items-center
      space-x-2
      after:absolute 
      after:inset-x-0 
      after:w-full 
      after:h-12 
      after:shadow-hr 
      after:z-[-1]
      "
      >
        <Link href="/#hero">
          <Image
            src={urlForImage(pageInfo?.headerLogo)}
            alt={pageInfo.title}
            width={200}
            height={200}
            className="cursor-pointer object-cover"
          />
        </Link>

        {/*Social Icons*/}
        {pageInfo?.socials?.map((social) =>   
        <SocialIcon
          key={social._key}
          url={social.url}
          fgColor="gray"
          bgColor="transparent"
          className="border border-gray-500 hover:border-[#F7AB0A]/50 rounded-full hover:scale-110 cursor-pointer"
            />
               
        )}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="
      flex
      flex-row
      items-center
      text-gray-300
      space-x-2
      "
      >
        <SocialIcon
          href="/#contact"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          className="border border-gray-500 hover:border-[#F7AB0A]/50 rounded-full hover:scale-110"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400 hover:border-[#F7AB0A]/50">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
