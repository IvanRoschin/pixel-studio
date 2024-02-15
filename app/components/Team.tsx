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
    h-screen
    flex
    relative
    overflow-hidden
    flex-col
    text-left
    md:flex-row
    max-w-full 
    px-10
    justify-evenly
    mx-auto
    items-center"
    >
      <h3
        className="
      absolute
      top-24
      uppercase
      tracking-[20px]
      text-gray-500
      text-2xl
      hover:text-[#F7AB0A]/50"
      >
        Our Team
      </h3>
      <div
        className="
      w-full 
      flex
      space-x-5
      overflow-x-scroll 
      overlfow-y-hidden
      p-10
      pt-[200px]
      md:pt-[300px]
      snap-x
      snap-mandatory
      scrollbar-thin
      scrollbar-track-gray-400/20
      scrollbar-thumb-[#F7AB0A]/80"
      >
        {team?.map((teamMember) => (        
        <TeamMemberCard key={teamMember._id} teamMember={teamMember} />
))}
      </div>
    </motion.div>
  );
};

export default Team;
