import type { MotionValue } from "framer-motion"
import { useTransform } from "framer-motion"
import { motion } from "framer-motion"
    
export const AboutMe = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  return (
    <div className="h-screen w-full relative z-10 bg-red-900 flex justify-center items-center">
      <motion.div style={{ scale }}>AboutMe</motion.div>
    </div>
  )
}
