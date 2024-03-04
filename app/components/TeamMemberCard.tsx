"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// import { SocialIcon } from "react-social-icons";
import { TeamMember }  from "@/sanity/interface";
import { urlForImage } from "@/sanity/lib/image";

interface TeamMemberCardProps {
  teamMember: TeamMember;
};
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ teamMember }) => {
  const stackString = teamMember?.technologies
  const arrayOfWords = stackString?.split(', ').map(word => `${word}`)

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
        viewport={{ once: true }}
        className="
        w-[380px]
        h-[700px]
        flex-shrink-0
        snap-center
        bg-secondaryBackground
        cursor-pointer
        overflow-hidden
        font-tacticsans
        flex
        flex-col
        py-10
        h-screen
        items-center
        justify-between
        rounded-[50px]
      "
      >
        <Image
          alt={teamMember?.name}
          src={urlForImage(teamMember?.photo)}
          width={225}
          height={225}
          className="
            w-[225px]
            h-[225px]
            rounded-full
            object-center
            mb-[45px]
      "
        />
        <div className="px-4 flex flex-col items-center justify-center">
          <h4 className="text-xl text-primaryAccentColor uppercase">{teamMember?.name}</h4>
          <p className="font-bold text-md mt-1 mb-[45px]">{teamMember?.position}</p>
      <ul className="text-secondaryTextColor text-left min-h-[160px] list-disc space-y-4 ml-5 text-sm mb-[45px]">
        {teamMember.points.map((point, i) => (<li key={i}>{point}</li>))}
      </ul>

        </div>
         <div className="flex justify-center space-x-5" >
        {arrayOfWords}
      </div>
      </motion.div>


  );
};

export default TeamMemberCard;
