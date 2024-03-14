'use client'

import { TeamMember } from '@/sanity/interface'
import { motion } from 'framer-motion'
import { A11y, Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

import TmCard from './TmCard'

interface TeamProps {
  team: TeamMember[]
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
      max-w-7xl
      md:px-10
      justify-evenly
      mx-auto
      font-tacticsans
        "
    >
      <h3 className="sectionTitle">
        <div className="text-sectionTitleColor">
          {`<Team`}
          <span className="text-primaryAccentColor">{`/`}</span>
          <span>{`>`}</span>
        </div>
      </h3>
      <div
        className="

      "
      >
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          scrollbar={{ draggable: true }}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1440: { slidesPerView: 3, spaceBetween: 30 },
          }}
          spaceBetween={30}
          loop={true}
          navigation
        >
          {team?.map(teamMember => (
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
