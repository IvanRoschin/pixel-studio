import { TeamMemberInterface } from '@/sanity/interface'
import { urlForImage } from '@/sanity/lib/image'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface TeamMemberCardProps {
  teamMember: TeamMemberInterface
}
const TmCard: React.FC<TeamMemberCardProps> = ({ teamMember }) => {
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
      className="flex items-center justify-center"
    >
      <div
        className="
        w-[290px]
        h-[560px]
        md:w-[280px]  
        md:h-[570px]
        rounded-[25px]
        bg-secondaryBackground
      "
      >
        <div
          className="    
          flex
          flex-col
          items-center
          px-[14px] 
          py-[10px]
          gap-y-[5px]
          relative
          mb-4
          "
        >
          <span className="overlay"></span>
          <div
            className="    
            relative 
            h-[150px]
            w-[150px]
            rounded-[50%]
          bg-white
            p-1"
          >
            <Image
              alt={teamMember?.name}
              src={urlForImage(teamMember?.photo)}
              width={150}
              height={150}
              className="      
              h-full
              w-full
              object-cover
              rounded-[50%]
              border-[4px]
              border-solid
              border-primaryTextColor"
            />
          </div>
        </div>
        <div
          className="    
          flex
          flex-col
          items-center
          justify-between
          px-[14px] 
          h-[360px]
    "
        >
          <h2
            className="    
            text-primaryTextColor
            text-lg
            font-bold
            mx-auto
            uppercase
            mb-2"
          >
            {teamMember?.name}
          </h2>
          <p
            className="  
            text-primaryAccentColor
            text-sm
            font-normal
            mb-4"
          >
            {teamMember?.position}
          </p>
          <ul className="text-secondaryTextColor text-left min-h-[120px] list-disc space-y-4 ml-5 text-sm mb-4 ">
            {teamMember.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <div className="flex text-sm justify-center space-x-5">{arrayOfWords}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default TmCard
