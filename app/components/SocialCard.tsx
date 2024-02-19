"use client"

import { Social } from "@/sanity/interface";
import { SocialIcon } from "react-social-icons";

interface SocialCardProps {
    social: Social;
};

const SocialCard: React.FC<SocialCardProps> = ({social}) => {
    return (
        <div className="flex flex-row">
        <SocialIcon
          url={social.url}
          fgColor="gray"
          bgColor="transparent"
          className="border border-gray-500 hover:border-[#F7AB0A]/50 rounded-full hover:scale-110"
        />
      </div>
 
  )
}

export default SocialCard