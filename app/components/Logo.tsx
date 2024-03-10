'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface LogoProps {
  title: string
}

const Logo: React.FC<LogoProps> = ({ title }) => {
  return (
    <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="
                flex
                flex-row
                items-center
                space-x-2
                after:absolute
                after:inset-x-0
                after:w-full
                after:h-12
                after:shadow-hr
                after:z-[-1]
            "
    >
      <Link href="#hero">
        <p className="text-text-lg md:text-xl lg:text-3xl 2xl:text-4xl text-secondaryTextColor uppercase tracking-[3px]">
          <span className="text-primaryAccentColor animate-pulse">{`| `}</span>
          {title}
          <span className="text-primaryAccentColor animate-pulse">{` |`}</span>
        </p>
      </Link>
    </motion.div>
  )
}

export default Logo
