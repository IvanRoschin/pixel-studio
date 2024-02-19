"use client"

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "@/sanity/interface";

interface HeroProps {
  pageInfo: PageInfo;
};

const Hero:React.FC<HeroProps> = ({pageInfo}) => {

  const titleString = pageInfo?.heroWords
  const arrayOfWords = titleString.split(', ').map(word => `<${word}/>`);

  const [text, count] = useTypewriter({
    words: arrayOfWords,
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className="
    h-screen
    flex
    flex-col
    space-y-8
    items-center
    justify-center
    text-center
    overflow-hidden 
    "
    >
      <BackgroundCircles />

      <div className="z-20 pt-20">
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <h2
          className="
        text-small
        uppercase 
        text-gray-500
        py-2
        px-12
        tracking-[10px]"
        >
          {pageInfo.subtitle}
        </h2>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroBtn">About</button>
          </Link>
          <Link href="#team">
            <button className="heroBtn">Our Team</button>
          </Link>
          <Link href="#stack">
            <button className="heroBtn">Stack</button>
          </Link>
          <Link href="#projects">
            <button className="heroBtn">Projects</button>
          </Link>
           <Link href="#price">
            <button className="heroBtn">Price</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
