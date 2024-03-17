'use client'

import { HeaderInterface } from '@/sanity/interface'

import { Navbar } from '.'
import Logo from './Logo'
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
    pt-8
    px-8
    mx-auto
    w-[360px]
    md:w-[768px]
    lg:w-[1440px]
    xl:w-[1920px]
    "
    >
      <Logo title={header?.siteTitle} />
      <Navbar navbarItems={header?.navbar} openIcon={header?.mobileMenuIcon} />
      <Socials />
    </header>
  )
}

export default Header
