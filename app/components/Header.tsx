"use client"

import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Link from "next/link";
import { PageInfo, Social }  from "@/sanity/interface";
import { urlForImage } from "@/sanity/lib/image";

interface HomeProps {
  pageInfo: PageInfo;
  socials: Social[];
};

const Header: React.FC<HomeProps> =  ({ pageInfo, socials}) => {

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
      space-x-2"
      >
        <Link href="/#hero">
          <Image
            src={urlForImage(pageInfo?.logo)}
            alt="pixel-studio"
            width={200}
            height={200}
            className="cursor-pointer object-cover"
          />
        </Link>

        {/*Social Icons*/}
        {/* {socials.map((social) => (
          <SocialIcon
          key={social._id}
          url={social.url}
          fgColor="gray"
          bgColor="transparent"
          className="border border-gray-500 hover:border-[#F7AB0A]/50 rounded-full hover:scale-110"
        />
       ) )} */}

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
