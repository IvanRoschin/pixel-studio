'use client'

import { HeroInterface } from '@/sanity/interface'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Button from './Button'

interface HeroProps {
  hero: HeroInterface
}

const Hero: React.FC<HeroProps> = ({ hero }) => {
  const titleString = hero?.typeWords
  const arrayOfWords = titleString.split(', ').map(word => `<${word}/>`)

  const [text, count] = useTypewriter({
    words: arrayOfWords,
    loop: true,
    delaySpeed: 2000,
  })
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

      <div className="z-2 pt-20">
        <h1 className="scroll-px-10 font-tacticsans text-4xl lg:text-6xl xl:text-8xl 2xl:text-16xl uppercase">
          {text}
          <Cursor cursorColor="#FFFC32" />
        </h1>
        <h2
          className="
          text-primaryTextColor
          lowercase
          tracking-[5px]
          backdrop-filter
          backdrop-blur
          md:backdrop-filter-none
          md:backdrop-blur-none
          text-xs
          md:text-md
          lg:text-lg
          py-6
          xl:py-[35px]  
          px-12
          xl:text-4xl
        "
        >
          <p className="md:max-w-[600px] lg:max-w-[750px] xl:max-w-[1100px]">{hero?.subtitle}</p>
        </h2>
        <Button label="Get estimation" main></Button>
      </div>
    </div>
  )
}

export default Hero
