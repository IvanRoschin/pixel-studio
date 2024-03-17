'use client'

import { FooterInterface } from '@/sanity/interface'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { TfiFacebook } from 'react-icons/tfi'
import Logo from './Logo'

interface FooterProps {
  footer: FooterInterface
}

const Footer: React.FC<FooterProps> = ({ footer }) => {
  return (
    <footer
      className="
      py-9  
      px-6
      bg-secondaryBackground  
      "
    >
      <div
        className="
        flex
        flex-col-2
        md:flex-col-4
        justify-between
        items-center
        mx-auto
        min-h-[150px]
        z-20
        md:gap-4
        flex-shrink
        2xl:max-w-[1550px]
        "
      >
        {/*Footer Logo*/}
        <div className="space-y-10 md:w-[50%] xl:w-[35%] space-between">
          <Logo title="Pixel studio" />
          {/*Mobile Contact Information*/}
          <div
            className="      
          text-xs 
          md:text-base 
          lg:text-xl 
          xl:text-2xl 
          space-y-4 
          pb-10 
          text-primaryTextColor"
          >
            <div className="flex items-center space-x-5 justify-left">
              <PhoneIcon className="text-primaryAccentColor h-4 w-4 animate-pulse" />
              <p>{footer?.phoneNumber}</p>
            </div>
            <div className="flex items-center space-x-5 justify-left">
              <EnvelopeIcon className="text-primaryAccentColor h-4 w-4 animate-pulse" />
              <p>{footer?.email}</p>
            </div>
            <div className="flex items-center space-x-5 justify-left">
              <MapPinIcon className="text-primaryAccentColor h-4 w-4 animate-pulse" />
              <p>{footer?.address}</p>
            </div>
          </div>
          {/*Contact Information*/}
          <div className="hidden text-base space-y-4 pb-10 text-primaryTextColor">
            <div className="flex items-center space-x-5 justify-left">
              <PhoneIcon className="text-primaryAccentColor h-7 w-7 animate-pulse" />
              <p>{footer?.phoneNumber}</p>
            </div>
            <div className="flex items-center space-x-5 justify-left">
              <EnvelopeIcon className="text-primaryAccentColor h-7 w-7 animate-pulse" />
              <p>{footer?.email}</p>
            </div>
            <div className="flex items-center space-x-5 justify-left">
              <MapPinIcon className="text-primaryAccentColor h-7 w-7 animate-pulse" />
              <p>{footer?.address}</p>
            </div>
          </div>
        </div>

        {/*Navbar Items*/}
        <div
          className="          
          text-xs 
          md:text-base 
          lg:text-xl 
          xl:text-2xl 
          hidden md:grid grid-cols-3 xl:flex shrink"
        >
          {footer?.navbar.map(item => (
            <div key={item._id} className="grid gap-5 xl:grid-cols-1">
              <Link href={item.link}>
                <button className="heroBtn mr-[50px] text-primaryTextColor">{item.title}</button>
              </Link>
            </div>
          ))}
        </div>

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
          className="flex flex-col md:flex-row items-end flex-1 md:space-x-5"
        >
          <div className="flex items-center justify-center group pb-4 md:pb-0">
            <Link
              href="/#contact"
              className="lg:m-1 flex items-center justify-center p-2 rounded-full border b-wfite focus:outline-none bg-secondaryBackground w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] group-hover:bg-primaryAccentColor group-hover:text-secondaryBackground"
            >
              <TfiFacebook
                size={32}
                style={{ transition: 'fill 1s', height: '32px' }}
                className=" lg:m-1 text-iconColor icon-transition group-hover:text-secondaryBackground"
              />
            </Link>
          </div>

          <div className="flex items-center justify-center group">
            <Link
              href="#/contact"
              className="lg:m-1 flex items-center justify-center p-2 rounded-full border b-wfite focus:outline-none bg-secondaryBackground w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] group-hover:bg-primaryAccentColor group-hover:text-secondaryBackground"
            >
              <FaGithub
                size={32}
                style={{ transition: 'fill 1s' }}
                className="text-iconColor icon-transition group-hover:text-secondaryBackground"
              />
            </Link>
          </div>
        </motion.div>
      </div>

      {/*Copyright*/}
      <p className=" text-sm flex justify-center text-secondaryTextColor">{footer?.copyright}</p>

      <Link href="#hero" className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          {/* <Image
            src={urlForImage(footer.footerBtnUp)}
            alt={footer?.title}
            width={30}
            height={30}
            className="
              hidden
                h-24
                w-24
                fill-[#F7AB0A]
                animate-pulse
                filter
                rounded-full
                border
                p-2
                border-[#F7AB0A]/80"
          /> */}
        </div>
      </Link>
    </footer>
  )
}

export default Footer
