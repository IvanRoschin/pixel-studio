'use client'

import { TeamInterface } from '@/sanity/interface'
import { motion } from 'framer-motion'
import { A11y, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

import TmCard from './TmCard'

interface TeamProps {
  team: TeamInterface
}

const Team: React.FC<TeamProps> = ({ team }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
        md:text-left
        md:flex-row
        md:px-10
        mx-auto
        mt-12
        "
    >
      <h3 className="sectionTitle">
        <div className="text-sectionTitleColor">
          {`<${team.title}`}
          <span className="text-primaryAccentColor">{`/`}</span>
          <span>{`>`}</span>
        </div>
      </h3>
      <div className="">
        <Swiper
          modules={[Navigation, A11y]}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1440: { slidesPerView: 3, spaceBetween: 30 },
            1920: { slidesPerView: 5, spaceBetween: 10 },
          }}
          spaceBetween={30}
          loop={true}
          navigation
        >
          {team?.teamMembers.map(teamMember => (
            <SwiperSlide key={teamMember._id}>
              <TmCard teamMember={teamMember} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  )
}

export default Team
