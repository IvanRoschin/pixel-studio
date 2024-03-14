'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
// import { SocialIcon } from "react-social-icons";
import { TeamMember } from '@/sanity/interface'
import { urlForImage } from '@/sanity/lib/image'

interface TeamMemberCardProps {
  teamMember: TeamMember
}
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
        w-[320px]  
        md:w-[330px]
        lg:w-[380px]
        xl:w-[380px]
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
        items-center
        justify-between
        rounded-lg
      "
    >
      <Image
        alt={teamMember?.name}
        src={urlForImage(teamMember?.photo)}
        width={180}
        height={180}
        className="
            w-[180px]
            h-[180px]
            md:w-[200px]
            md:h-[200px]
            lg:w-[180px]
            lg:h-[180px]
            xl:w-[225px]
            xl:h-[225px]
            rounded-full
            object-center
            md:mb-[45px]
      "
      />
      <div className="px-4 flex flex-col items-center justify-center">
        <h4 className="text-xl text-primaryAccentColor uppercase">{teamMember?.name}</h4>
        <p className="font-bold text-md mt-1 mb-[45px]">{teamMember?.position}</p>
        <ul className="text-secondaryTextColor text-left min-h-[120px] list-disc space-y-4 ml-5 text-sm mb-[20px]">
          {teamMember.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center space-x-5">{arrayOfWords}</div>
    </motion.div>
  )
}

export default TeamMemberCard
