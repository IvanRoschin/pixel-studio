"use client"

import useOrderModal from "@/hooks/useOrderModal";
import { Price } from "@/sanity/interface";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import Button from "./Button";


interface PriceCardProps {
    pricePlan: Price;
};

const PriceCard: React.FC<PriceCardProps> = ({ pricePlan }) => {
  const orderModal = useOrderModal();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const handleClick = () => {
    orderModal.onOpen();
    toggleOpen();
  }

  return (
    <article
      className="
      rounded-lg
      items-center
      space-y-5
      bg-[#292929]
      hover:opacity-100
      shadow-md
      hover:shadow-[#F7AB0A]/50
      hover:shadow-lg
      opacity-40
      cursor-pointer
      transition-opacity
      duration-200
      p-5
      pt-0
      "
    >

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
              flex
              flex-col
              rounded-lg
              items-center
              space-y-5
              flex-shrink-0
              snap-center
              cursor-pointer
              duration-200
              overflow-hidden
              text-left
              md:flex-row
              px-5
              justify-evenly
              h-screen
              w-screen
              md:flex-cols-3
              z-0"
      >
        <div className="px-0 md:px-2">
          <h4 className="text-4xl font-bold uppercase text-[#F7AB0A]/50">{pricePlan?.title}</h4>
          <div className="flex items-start justify-center my-2">
            <p className="font-bold text-3xl mt-5">$ {pricePlan?.price}</p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col xl:flex-row">
             <ul className="list-disc space-y-4 ml-5 text-lg px-10 mb-10">
        {pricePlan.points.map((point, i) => (<li key={i}>{ point}</li>))}
        </ul>
        <Button type="button" label="Order" onClick={handleClick} />
        </div>
      </motion.div>


    </article>
  )
}

export default PriceCard
