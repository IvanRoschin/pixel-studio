import Link from "next/link"
import Image from "next/image"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "@/sanity/interface";
import { SocialIcon } from "react-social-icons";
import { urlForImage } from "@/sanity/lib/image";

interface FooterProps  {
  pageInfo: PageInfo;
}

const Footer: React.FC<FooterProps> = ({pageInfo}) => {
  return (
    <>           
       <div className="flex items-center justify-center">            
      <div className="border-t border-[#F7AB0A]/70 w-[60%] pb-10"/>
      </div>
      <footer className="p-10 pt-0">
        <div className="
              grid
              grid-cols-1
              place-items-center
              gap-3
              pb-10
              md:grid-cols-2
              md:place-items-start
              xl:grid-cols-4
              xl:gap-8
              "> 
        <Link href="#hero">
            <Image
              src={urlForImage(pageInfo.footerLogo)}
              alt="pixel-studio"
              width={250}
              height={50}
              className="w-60 h-15 pb-10"
              />
          </Link>
          <div className="flex flex-col space-y-4 pb-10">
            <p className="text-[#F7AB0A] uppercase tracking-widest text-xl">menu</p>
            <div className="grid grid-cols-2 gap-5 xl:grid-cols-1">
           <Link href="#about">
            <button className="footerBtn">About</button>
          </Link>
          <Link href="#team">
            <button className="footerBtn">Our Team</button>
          </Link>
          <Link href="#stack">
            <button className="footerBtn">Stack</button>
          </Link>
          <Link href="#projects">
            <button className="footerBtn">Projects</button>
          </Link>
       </div>
      </div>
        <div className="space-y-4 pb-10">
          <p className="text-[#F7AB0A] uppercase tracking-widest text-xl">Conatct information</p>
          <div className="flex items-center space-x-5 justify-left">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">{pageInfo?.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-left">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">{pageInfo?.email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-left">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-xl">{pageInfo?.address}</p>
          </div>
          </div>
        
        {/*Social Icons*/}
        <div className="md:space-x-5">
        <p className="text-[#F7AB0A] uppercase tracking-widest text-xl pb-10">Socials</p>
        {pageInfo?.socials.map(social => (
          <SocialIcon
          key={social._id}
          url={social.url}
          fgColor="gray"
          bgColor="transparent"
          className="border border-gray-500 hover:border-[#F7AB0A]/50 rounded-full hover:scale-110 cursor-pointer"
            />      
       ) )}
            </div>
      </div>

      <p className="flex justify-center">{pageInfo.copyright}</p>

          <Link href="#hero" className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src={urlForImage(pageInfo.footerBtnUp)}
              alt={pageInfo.title}
              width={30}
              height={30}
              className="
              hidden
                h-24 
                w-24
                fill-[#F7AB0A]
                animate-pulse
                filter 
                rounded-full 
                border
                p-2 
                border-[#F7AB0A]/80"
            />
          </div>
      </Link>
      </footer>
  </>
  )
}

export default Footer