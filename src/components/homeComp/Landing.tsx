import { useTransform } from "framer-motion"
import { motion } from "framer-motion"
import type { MotionValue } from "framer-motion"

export const Landing = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  return (
    <motion.div style={{ scale }} className="w-full h-screen sticky top-0 bg-black flex text-red-900 justify-center items-center" >Landing</motion.div>
  )
}
