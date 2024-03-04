"use client";

import { motion } from "framer-motion";
import TeamMemberCard from "./TeamMemberCard";
import { TeamMember } from "@/sanity/interface";

interface TeamProps {
  team: TeamMember[];
};

const Team: React.FC<TeamProps> = ({team}) => {
  return (
 <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
        flex
        flex-col
        relative
        text-center
        max-w-7xl
        px-10
        justify-evenly
        mx-auto
        items-center
        "
    >
      <h3
        className="
          absolute
          top-[160px]
          left-0
          uppercase
          tracking-[3px]
          text-primaryTextColor
          text-2xl
          font-tacticsans
     "
      >
        <div className="text-sectionTitleColor">
          {`<Team`}
          <span className="text-primaryAccentColor">{ `/`}
        </span>
        <span>{`>`}</span>
        </div>
      </h3>
      <div
        className="
          flex
          flex-row
          space-x-5
          mt-[240px]
          relative
          w-full
          h-full
          overflow-x-scroll
          overflow-y-hidden
          snap-x
          snap-mandatory
          z-10
          scrollbar-thin
          scrollbar-track-scrollbarTrack
          scrollbar-thumb-scrollbarThumb
          pb-[35px]
      "
      >
        {team?.map((teamMember) => (
        <TeamMemberCard key={teamMember._id} teamMember={teamMember} />
))}
      </div>
    </motion.div>
  );
};

export default Team;
