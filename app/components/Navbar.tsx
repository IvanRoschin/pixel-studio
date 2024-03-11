'use client'

import { NavbarItem } from '@/sanity/interface'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TfiFacebook } from 'react-icons/tfi'
import { GoMail } from 'react-icons/go'
import { FaGithub } from 'react-icons/fa'

interface Navbar {
  navbarItems: NavbarItem[]
}
const Navbar: React.FC<Navbar> = ({ navbarItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const links = navbarItems?.map(item => (
    <Link key={item._id} href={item.link}>
      <button
        className="
      2xl:px-6
      xl:py-2
      text-md
      py-2
      md:py-0
      md:text-lg
      md:px-3
      lg:text-xl
      xl:text-2xl
      tracking-widest
      font-tacticsans
      transition-all
      text-primaryTextColor
      hover:text-primaryAccentColor
      "
      >
        {item.title}
      </button>
    </Link>
  ))

  return (
    <>
      <nav className="w-25% md:w-20% flex justify-end">
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
          className="hidden md:grid grid-cols-3 xl:grid-cols-6 gap-1 items-center justify-between"
        >
          {links}
        </motion.div>
        {/*Mobile Menu*/}
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
          className="md:hidden"
        >
          <button onClick={toggleNavbar}>
            {isMenuOpen ? (
              <IoMdClose size={32} fill="#FFFC32" />
            ) : (
              <IoMdMenu size={32} fill="#FFFC32" />
            )}
          </button>
        </motion.div>
      </nav>
      {isMenuOpen && (
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
          className="md:hidden basis-full"
        >
          <div className="flex flex-col items-center basis-full justify-center pb-2">{links}</div>
          {/*Social Icons*/}

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
        items-center
        justify-center
        text-primaryTextColor
        space-x-4"
          >
            {/*Social Icons*/}

            <div className="flex items-center justify-center group">
              <Link
                href="/#contact"
                className="flex items-center justify-center p-2 rounded-full focus:outline-none bg-secondaryBackground w-[32px] h-[32px] lg:w-[50px] lg:h-[50px] group-hover:bg-primaryAccentColor group-hover:text-secondaryBackground"
              >
                <GoMail
                  size={32}
                  style={{ transition: 'fill 1s' }}
                  className="lg:m-1 text-iconColor transition-all duration-500 group-hover:text-secondaryBackground"
                />
              </Link>
            </div>

            <div className="flex items-center justify-center group">
              <Link
                href="/#contact"
                className="lg:m-1 flex items-center justify-center p-2 rounded-full focus:outline-none bg-secondaryBackground w-[32px] h-[32px] lg:w-[50px] lg:h-[50px] group-hover:bg-primaryAccentColor group-hover:text-secondaryBackground"
              >
                <TfiFacebook
                  size={32}
                  style={{ transition: 'fill 1s' }}
                  className="lg:m-1 text-iconColor icon-transition group-hover:text-secondaryBackground"
                />
              </Link>
            </div>

            <div className="flex items-center justify-center group">
              <Link
                href="#/contact"
                className="lg:m-1 flex items-center justify-center p-2 rounded-full focus:outline-none bg-secondaryBackground w-[32px] h-[32px] lg:w-[50px] lg:h-[50px] group-hover:bg-primaryAccentColor group-hover:text-secondaryBackground"
              >
                <FaGithub
                  size={32}
                  style={{ transition: 'fill 1s' }}
                  className="text-iconColor icon-transition group-hover:text-secondaryBackground"
                />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default Navbar
