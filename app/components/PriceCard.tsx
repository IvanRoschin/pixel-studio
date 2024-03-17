'use client'

import useOrderModal from '@/hooks/useOrderModal'
import { Price } from '@/sanity/interface'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import Button from './Button'

interface PriceCardProps {
  pricePlan: Price
}

const PriceCard: React.FC<PriceCardProps> = ({ pricePlan }) => {
  const orderModal = useOrderModal()
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setIsOpen(value => !value)
  }, [])
  const handleClick = () => {
    orderModal.onOpen()
    toggleOpen()
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 1.5 }}
      className="
          w-[310px]  
          md:w-[310px]
          lg:w-[440px]
          xl:w-[560px]
          mx-4
          border
          b-white
          bg-secondaryBackground
          flex-shrink-0
          snap-center
          cursor-pointer
          overflow-hidden
          flex
          flex-col
          p-10
          pb-0
          justify-between
          items-start
          rounded-xl
          opacity-40
          shadow-md
          hover:opacity-100
          hover:shadow-primaryAccentColor
          hover:shadow-lg
          hover:bg-transparent
          transition-opacity
          group
        "
    >
      <h4 className="text-lg md:text-2xl lg:text-4xl xl:mb-[50px] mb-4">{pricePlan?.title}</h4>
      <div
        className="text-left text-secondaryTextColor group-hover:text-white
         text-xs 
         md:text-base 
         lg:text-xl 
         xl:text-2xl
         xl:px-10
         "
      >
        <ul className="list-disc">
          {pricePlan.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <p className="text-xl xl:text-4xl text-primaryAccentColor mt-5">
          from $ {pricePlan?.price}
        </p>
        <div className="flex flex-col items-center justify-center my-2">
          <Button type="button" label="Order" onClick={handleClick} small />
        </div>
      </div>
    </motion.div>
  )
}

export default PriceCard
