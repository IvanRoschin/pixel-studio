'use client'

import { PageInfo } from '@/sanity/interface'

import Logo from './Logo'
import { Navbar } from '.'
import SocialIcons from './SocialIcons'

interface HomeProps {
  pageInfo: PageInfo
}

const Header: React.FC<HomeProps> = ({ pageInfo }) => {
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
      <Logo title={pageInfo?.title} />
      <Navbar pageInfo={pageInfo} />
      <SocialIcons socials={pageInfo.socials} />
    </header>
  )
}

export default Header
