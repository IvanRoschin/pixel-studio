"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { TeamMember }  from "@/sanity/interface";
import { urlForImage } from "@/sanity/lib/image";
import formatDate from ".././helpers/formatDate"

interface TeamMemberCardProps {
  teamMember: TeamMember;
};
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ teamMember }) => {

  const formattedDate = formatDate({ teamMember });
  
  return (
    <article
      className="
      flex
      flex-col
      rounded-lg
      items-center
      space-y-5
      flex-shrink-0
      md:w-[600px]
      xl:w-[900px]
      snap-center
      bg-[#292929]
      hover:opacity-100
      opacity-40
      cursor-pointer
      transition-opacity
      duration-200
      overflow-hidden
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
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center p-10"
      >
        <Image
          alt={teamMember?.name}
          src={urlForImage(teamMember?.photo)}
          width={128}
          height={128}
          className="
            w-32
            h-32
            rounded-full
            xl:w-[200px]
            xl:h-[200px]
            object-center
      "
        />
        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">{teamMember?.name}</h4>
          <p className="font-bold text-2xl mt-1">{teamMember?.position}</p>
          <div className="flex space-x-2 my-2">
            <>
          {teamMember.socials.map(social => 
              <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            className="border border-gray-500 hover:border-[#F7AB0A]/50 rounded-full hover:scale-110"
            />
          
          )}
            </>
          </div>
        </div>
      </motion.div>
      <div className="grid grid-cols-5 gap-3 md:grid-cols-7" >
        {teamMember.technologies.map(stack => (
          <div 
          key={stack._id}
          className="group relative flex cursor-pointer ">
          <Image
            alt={stack.name}
            src={stack.url}
              className="
                rounded-full 
                border 
                border-gray-500 
                object-cover 
                h-12
                w-12
                filter
                group-hover:grayscale 
                transition 
                duration-300 
                ease-in-out
              "
            width={40}
            height={40}
            />
  <div
        className="
      absolute 
      opacity-0
      group-hover:opacity-80
      group-hover:bg-white
      transition
      duration-300
      ease-in-out
      h-12
      w-12
      rounded-full 
      z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-lg fond-bold text-black opacity-100">{stack.progress}</p>
        </div>
      </div>
    </div>
        ))}     
      </div>
      <p className="uppercase py-5 text-gray-300">Joined team {formattedDate.month}, {formattedDate.year}</p>
      <ul className="list-disc space-y-4 ml-5 text-lg pb-20">
        {teamMember.points.map((point, i) => (<li key={i}>{ point}</li>))}
      </ul>
    </article>
  );
};

export default TeamMemberCard;
