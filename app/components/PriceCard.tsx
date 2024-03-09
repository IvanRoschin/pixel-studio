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
          border
          b-white
          bg-secondaryBackground
          w-[580px]
          flex-shrink-0
          snap-center
          cursor-pointer
          overflow-hidden
          font-tacticsans
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
      <h4 className="text-[30px]">{pricePlan?.title}</h4>
      <div className="text-left text-secondaryTextColor group-hover:text-white">
        <ul className="list-disc text-sm px-10 ">
          {pricePlan.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <p className="text-[22px] text-primaryAccentColor mt-5">from $ {pricePlan?.price}</p>
        <div className="flex flex-col items-center justify-center my-2">
          <Button type="button" label="Order" onClick={handleClick} />
        </div>
      </div>
    </motion.div>
  )
}

export default PriceCard
