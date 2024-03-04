"use client"

import { PageInfo } from "@/sanity/interface";
import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import ThemeSwitcher from "./ThemeSwitcher";

interface HomeProps {
  pageInfo: PageInfo;
};

const Header: React.FC<HomeProps> = ({ pageInfo }) => {
  return (
    <header
      className="
    sticky
    top-0
    flex
    items-center
    justify-between
    max-w-[1620px]
    min-h-[150px]
    mx-auto
    z-20
    p-5
    pb-0
    backdrop-filter
    backdrop-blur
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
            width={ 257} height={100}
            className="cursor-pointer object-cover w-[257px]"
          />
        </Link>
      </motion.div>
      <motion.div
          initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="bg-transparent"
        >
        {pageInfo?.navbar.map(item =>
          <Link key={item._id} href={item.link}>
            <button className="heroBtn mr-[50px] text-primaryTextColor">{item.title}</button>
          </Link>)}
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
      text-primaryTextColor
      space-x-2
      "
      >
        {/*Social Icons*/}
          <div className="relative group">
            <div className="bg-secondaryBackground rounded-full h-[50px] w-[50px] absolute"/>
              <SocialIcon
          href="/#contact"
          network="email"
          bgColor="transparent"
          fgColor="secondaryBackground"
          className="
          fill-iconColor
          rounded-full
          mr-4
          icon-transition
          hover:text-secondaryBackground
          hover:bg-primaryAccentColor
          hover:fill-secondaryBackground
          "
            />
          </div>

        {pageInfo?.socials.map((social) =>
          <div className="relative group" key={social._id}>
            <div className="bg-secondaryBackground rounded-full h-[50px] w-[50px] absolute"/>
          <SocialIcon
          url={social.url}
          bgColor="transparent"
          fgColor="secondaryBackground"
          className="
          fill-iconColor
          rounded-full
          mr-4
          icon-transition
          hover:text-secondaryBackground
          hover:bg-primaryAccentColor
          hover:fill-secondaryBackground
          "
            />
          </div>
        )}
        <ThemeSwitcher/>
      </motion.div>
    </header>
  );
};

export default Header;
