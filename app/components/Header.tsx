'use client'

import { HeaderInterface } from '@/sanity/interface'

import Logo from './Logo'
import { Navbar } from '.'
import Socials from './Socials'

interface HomeProps {
  header: HeaderInterface
}

const Header: React.FC<HomeProps> = ({ header }) => {
  return (
    <header
      className="
    fixed
    top-0
    flex
	  flex-wrap
    items-center
    justify-between
    z-20
    backdrop-filter
    backdrop-blur
    w-[328px]
    md:w-[736px]
    lg:w-[1408px]
    xl:w-[1888px]
    pt-4
    mx-auto
    "
    >
      <Logo title={header?.siteTitle} />
      <Navbar navbarItems={header?.navbar} />
      <Socials />
    </header>
  )
}

export default Header
