'use client'

import { Social } from '@/sanity/interface'
import { motion } from 'framer-motion'
import ThemeSwitcher from './ThemeSwitcher'
import { TfiFacebook } from 'react-icons/tfi'
import { GoMail } from 'react-icons/go'
import { FaGithub } from 'react-icons/fa'

import Link from 'next/link'

interface SocialIconsProps {
  socials: Social[]
}

const SocialIcons: React.FC<SocialIconsProps> = ({ socials }) => {
  return (
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
        md:grid
        grid-cols-2
        gap-2
        lg:grid-cols-4
        items-between
        justify-between
        text-primaryTextColor
        lg:space-x-2
  "
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

      {/* {socials.map(social => (

      ))} */}
      <ThemeSwitcher />
    </motion.div>
  )
}

export default SocialIcons
