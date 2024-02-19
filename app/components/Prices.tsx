"use client";

import { motion } from "framer-motion";
import PriceCard from "./PriceCard";
import { Price } from "@/sanity/interface";

interface PricesProps {
  price: Price[];
};

const Prices: React.FC<PricesProps> = ({price}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
    h-screen
    flex
    relative
    overflow-hidden
    flex-col
    text-left
    md:flex-row
    max-w-full 
    px-10
    justify-evenly
    mx-auto
    items-center"
    >
      <h3
        className="
      absolute
      top-24
      uppercase
      tracking-[20px]
      text-gray-500
      text-2xl
      hover:text-[#F7AB0A]/50"
      >
        Price plans
      </h3>
      <div
        className="
          mt-40
          md:mt-[450px]
          relative
          w-full
          flex
          overflow-x-scroll 
          overflow-y-hidden
          snap-x
          snap-mandatory
          z-10
          space-x-5
          scrollbar-thin
          scrollbar-track-gray-400/20
          scrollbar-thumb-[#F7AB0A]/80
        "
      >
        {price?.map((pricePlan) => (        
        <PriceCard key={pricePlan._id} pricePlan={pricePlan} />
        ))}

      </div>
            {/* <div
        className="
      w-full
      absolute
      top-[30%]
      bg-[#F7AB0A]/10
      left-0
      h-[500px]
      -skew-y-12"
      /> */}
    </motion.div>
  );
};

export default Prices;
