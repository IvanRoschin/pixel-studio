"use client"

import { PageInfo } from "@/sanity/interface";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

interface HeroProps {
  pageInfo: PageInfo;
};

const Hero:React.FC<HeroProps> = ({pageInfo}) => {

  const titleString = pageInfo?.heroWords
  const arrayOfWords = titleString.split(', ').map(word => `<${word}/>`)


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
        <h1 className="font-semibold scroll-px-10 font-tacticsans text-[82px] uppercase">
            {text}
              <Cursor cursorColor='#FFFC32' />
        </h1>
        <h2
          className="
        text-[23px]
        text-primaryTextColor
        lowercase
        py-[35px]
        px-12
        tracking-[5px]"
        >
          <p>we are a development company helping business with <br/> a full cycle projects and launching startups</p>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
