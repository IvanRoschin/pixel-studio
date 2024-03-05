"use client"

import { PageInfo } from "@/sanity/interface";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface HomeProps {
  pageInfo: PageInfo;
};

const Header: React.FC<HomeProps> = ({ pageInfo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const content = pageInfo?.navbar.map(item =>
    <Link key={item._id} href={item.link}>
      <button className="heroBtn mr-[50px] text-primaryTextColor">{item.title}</button>
    </Link>)

  return (

    <header
      className="
    sticky
    top-0
    flex
    items-center
    justify-between
    2xl:max-w-[1620px]
    lg:min-h-[150px]
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
        {/*Header Logo*/}

        <Link href="#hero">
        <p className="text-[30px] text-secondaryTextColor uppercase tracking-[3px]">
        <span className="text-primaryAccentColor">{`| `}</span>
        {pageInfo.title}
        <span className="text-primaryAccentColor">{` |`}</span>
        </p>
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
        className="bg-transparent hidden lg:flex"
      >
        { /*Navbar Items*/}
        {content}
      </motion.div>

      { /*Mobile Menu*/}
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
        className="lg:hidden bg-transparent">
          <button onClick={toggleNavbar}>
            {isOpen? <IoMdClose size={32} /> : <IoMdMenu size={32} />}
          </button>
      </motion.div>
      { isOpen && (
        <div className="
        absolute
        block
        top-16
        left-0
        right-0
        transition
        flex
        flex-col
        items-center
        backdrop-filter
        backdrop-blur
        bg-primaryBackground
        pb-4
        ">
            {content}
        </div>
      )}

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
      hidden
      lg:flex
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
