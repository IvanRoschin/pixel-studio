import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface AccordionProps {
  title: string
  text: string
  closeIcon?: any
  openIcon?: any
  index: number
}

const Accordion: React.FC<AccordionProps> = ({ title, text, closeIcon, openIcon, index }) => {
  const [accordionOpen, setAccordionOpen] = useState(false)

  useEffect(() => {
    const screenWidth = window.innerWidth
    if (screenWidth > 768) {
      setAccordionOpen(true)
    } else {
      setAccordionOpen(index === 1)
    }
  }, [index])

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen)
  }

  return (
    <div className="text-secondaryTextColor tracking-[3px] border-b w-full xl:pt-8">
      <div className="m-auto">
        <button
          onClick={toggleAccordion}
          className="flex items-center text-left justify-between w-full px-4"
        >
          <span className="uppercase text-base lg:text-xl xl:text-2xl">{title}</span>
          {accordionOpen ? (
            <Image
              alt={title}
              src={urlForImage(openIcon)}
              width={74}
              height={74}
              className="cursor-pointer w-[32px] h-[32px] xl:w-[50px] xl:h-[50px]"
            />
          ) : (
            <Image
              alt={title}
              src={urlForImage(closeIcon)}
              width={74}
              height={74}
              className="cursor-pointer w-[32px] h-[32px] xl:w-[50px] xl:h-[50px]"
            />
          )}
        </button>
        <div
          className={`
          grid
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          text-sm
          text-primaryTextColor
          ${accordionOpen ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`}
          `}
        >
          <div className="overflow-hidden py-2 px-4 text-[10px] xl:text-xl xl:py-8">{text}</div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
