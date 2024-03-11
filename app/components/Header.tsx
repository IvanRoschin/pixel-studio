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
    sticky
    top-0
    flex
	  flex-wrap
    items-center
    justify-between
    mx-auto
    z-20
    p-4
    md:p-5
    backdrop-filter
    backdrop-blur
    "
    >
      <Logo title={header?.siteTitle} />
      <Navbar navbarItems={header?.navbar} />
      <Socials />
    </header>
  )
}

export default Header
