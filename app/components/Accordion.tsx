import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { useState } from "react";
import { Accordion } from "@/sanity/interface";


const Accordion: React.FC<Accordion> = ({ title, text, closeIcon, openIcon}) => {
  const [accordionOpen, setAccordionOpen] = useState(false)

    return (
    <div className="text-2xl text-secondaryTextColor left font-tacticsans font-light tracking-[3px] border-b w-full">
      <div  className="w-[920px] m-auto">
          <button onClick={() => { setAccordionOpen(!accordionOpen) }} className="flex items-center justify-between w-full py-[35px]">
            <span className="uppercase">{title}</span>
            { accordionOpen ?
            <Image
            alt={title}
            src={urlForImage(openIcon)}
            width={74}
            height={74}
            className="cursor-pointer w-[74px] h-[74px]"/>
            : <Image
            alt={title}
            src={urlForImage(closeIcon)}
            width={74}
            height={74}
            className="cursor-pointer w-[74px] h-[74px]"/>
            }
          </button>
          <div className={`
          grid
          overflow-hidden
          transitiona-all
          duration-300
          ease-in-out
          text-sm
          text-primaryTextColor
          ${accordionOpen
            ? `grid-rows-[1fr] opacity-100`
            : `grid-rows-[0fr] opacity-0`}

          `}>
            <div className="overflow-hidden py-2">{text}</div>
          </div>

        </div>
    </div>)
}

export default Accordion
