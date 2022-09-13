import { motion } from 'framer-motion'

export const LoadingSpinner = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 1.5
      return {
        pathLength: 1.1,
        opacity: 1,
        transition: {
          pathLength: {
            delay,
            type: 'spring',
            duration: 1.3,
            bounce: 0,
            repeat: Infinity,
            repeatType: 'reverse',
          },
          opacity: { delay, duration: 0.01 },
        },
      }
    },
  }
  return (
    <motion.svg
      initial="hidden"
      animate="visible"
      width={64}
      height={64}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={draw}
        d="M13 10V3L4 14h7v7l9-11h-7Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  )
}
