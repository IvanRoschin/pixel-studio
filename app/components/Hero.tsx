'use client'

import { HeroInterface } from '@/sanity/interface'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Button from './Button'
import useOrderModal from '@/hooks/useOrderModal'
import { useCallback, useState } from 'react'

interface HeroProps {
  hero: HeroInterface
}

const Hero: React.FC<HeroProps> = ({ hero }) => {
  const orderModal = useOrderModal()
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setIsOpen(value => !value)
  }, [])
  const handleClick = () => {
    orderModal.onOpen()
    toggleOpen()
  }
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

      <div className="z-2 pt-20 space-y-10 lg:space-y-12">
        <h1 className="mb-4 font-tacticsans text-3xl lg:text-6xl xl:text-8xl 2xl:text-16xl uppercase">
          {text}
          <Cursor cursorColor="#FFFC32" />
        </h1>
        <h2
          className="
          text-primaryTextColor
          lowercase
          tracking-[5px]
          backdrop-filter
          backdrop-blur-[2px]
          text-xs
          md:text-m
          lg:text-lg
          py-[2px]
          xl:py-[35px]  
          px-12
          xl:text-4xl
          mb-4 
        "
        >
          <p className="md:max-w-[600px] lg:max-w-[750px] xl:max-w-[1100px]">{hero?.subtitle}</p>
        </h2>
        <Button type="button" label="Get estimation" onClick={handleClick} small />
      </div>
    </div>
  )
}

export default Hero
