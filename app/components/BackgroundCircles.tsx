'use client'

import { motion } from 'framer-motion'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['10%', '10%', '25%', '40%', '10%'],
      }}
      transition={{ duration: 2.5 }}
      className="
      relative
      flex
      justify-center
      items-center"
    >
      <div className="opacity-100 border border-textColor rounded-full h-[50px] w-[50px] md:h-[50px] md:w-[50px] xl:h-[100px] xl:w-[100px] mt-[350px] md:mt-[450px] animate-ping absolute" />

      <div className="opacity-15 border border-textColor rounded-full h-[100px] w-[100px] md:h-[100px] md:w-[100px] xl:h-[200px] xl:w-[200px] mt-[350px] md:mt-[450px] absolute" />

      <div className="opacity-15 border border-textColor rounded-full h-[200px] w-[200px] md:h-[300px] md:w-[300px] xl:h-[400px] xl:w-[400px] mt-[350px] md:mt-[450px] absolute" />

      <div className="opacity-15 border border-primaryAccentColor rounded-full h-[300px] w-[300px] md:h-[400px] md:w-[400px] xl:h-[600px] xl:w-[600px] 2xl:h-[800px] 2xl:w-[800px] mt-[350px] md:mt-[450px] absolute animate-pulse" />
    </motion.div>
  )
}

export default BackgroundCircles
