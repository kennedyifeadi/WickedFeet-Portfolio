import type { MotionValue } from "framer-motion"
import { useTransform } from "framer-motion"
import { motion } from "framer-motion"
    
export const AboutMe = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])
  return (
    <motion.div style={{ scale }} className="h-screen w-full relative z-10 bg-red-700">
      <div>AboutMe</div>
    </motion.div>
  )
}
