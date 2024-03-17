'use client'

import useOrderModal from '@/hooks/useOrderModal'
import { HeroInterface } from '@/sanity/interface'
import { useCallback, useState } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Button from './Button'

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
    flex
    flex-col
    items-center
    justify-evenly
    text-center
    overflow-hidden
    "
    >
      <BackgroundCircles />

      <div className="z-2 py-20 md:py-40 space-y-12 ">
        <h1 className="mb-4 text-3xl lg:text-6xl xl:text-8xl 2xl:text-16xl uppercase">
          {text}
          <Cursor cursorColor="#FFFC32" />
        </h1>
        <h2
          className="
          text-white
          lowercase
          tracking-[5px]
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
          <p>
            we are a development company helping business with <br /> a full cycle projects and
            launching startups
          </p>
        </h2>
        <Button type="button" label="Get estimation" onClick={handleClick} small />
      </div>
    </div>
  )
}

export default Hero
