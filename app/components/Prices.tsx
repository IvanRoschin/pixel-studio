'use client'

import { PricesInterface } from '@/sanity/interface'
import { motion } from 'framer-motion'
import PriceCard from './PriceCard'

interface PricesProps {
  prices: PricesInterface
}

const Prices: React.FC<PricesProps> = ({ prices }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
      relative
      max-w-7xl
      md:px-10
      justify-evenly
      mx-auto
      "
    >
      <h3
        className="
        absolute
        top-[70px]
        left-[20px]
        md:top-[120px]
        uppercase
        tracking-[3px]
        text-primaryTextColor
        text-2xl
        xl:text-4xl
        "
      >
        <div className="text-sectionTitleColor">
          {`<${prices?.title}`}
          <span className="text-primaryAccentColor">{`/`}</span>
          <span>{`>`}</span>
        </div>
      </h3>
      <div
        className="
          flex
          flex-row
          relative
          w-full
          h-full
          overflow-x-scroll
          overflow-y-hidden
          snap-x
          snap-mandatory
          z-10
          scroll-smooth
          pb-[35px]
          pt-[150px]
          md:pt-[200px]
        "
      >
        {prices?.price.map(pricePlan => <PriceCard key={pricePlan._id} pricePlan={pricePlan} />)}
      </div>
    </motion.div>
  )
}

export default Prices
