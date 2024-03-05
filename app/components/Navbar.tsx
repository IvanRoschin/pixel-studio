"use client"

import Link from "next/link"

type Props = {}

const Navbar = (props: Props) => {
    const content = <>
        <div className="lg:hidden block absolute top-160 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
        <Link href="#Home" spy={true} smooth={true}><li className="my-4 py-4 border-b border-slate-800 hover bg-slate-800 hover:rounded">Home</li></Link>
        <Link href="#Home" spy={true} smooth={true}><li className="my-4 py-4 border-b border-slate-800 hover bg-slate-800 hover:rounded">About</li></Link>
        <Link href="#Home" spy={true} smooth={true}><li className="my-4 py-4 border-b border-slate-800 hover bg-slate-800 hover:rounded">Services</li></Link>
        <Link href="#Home" spy={true} smooth={true}><li className="my-4 py-4 border-b border-slate-800 hover bg-slate-800 hover:rounded">Projects</li></Link>
        </ul>
        </div>
    </>
  return (
      <nav>
          <div className="h-10vh flex justify-between z-500 text-white lg:py-5 px-20 py-4">
              <div className="flex items-center flex-1">
                  <span className="text-3xl">Logo</span>
              </div>
              <div className="lg:flex md:flex-1 flex-1 items center justify-end hidden">
                <div className="flex-10">
                  <ul className="flex-gap-8 mr-16 text-[18px]">
        <Link href="#Home"><li className="hover:text-fuchsia-600 transition border-b border-slate-900 hover:border-fuchsia-600 cursor-pointer">Home</li></Link>
        <Link href="#Home"><li className="hover:text-fuchsia-600 transition border-b border-slate-900 hover:border-fuchsia-600 cursor-pointer">About</li></Link>
        <Link href="#Home"><li className="hover:text-fuchsia-600 transition border-b border-slate-900 hover:border-fuchsia-600 cursor-pointer">Services</li></Link>
        <Link href="#Home"><li className="hover:text-fuchsia-600 transition border-b border-slate-900 hover:border-fuchsia-600 cursor-pointer">Projects</li></Link>
                  </ul>
              </div>
              </div>
          </div>
      </nav>
  )
}

export default Navbar
