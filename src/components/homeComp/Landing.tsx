import { useTransform } from "framer-motion"
import { motion } from "framer-motion"
import type { MotionValue } from "framer-motion"
import Dancer1 from "../../assets/dancer1.jpg"

export const Landing = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  return (
    <motion.div style={{ scale }} className="w-full h-screen sticky top-0" >
      <img src={Dancer1} alt="Dancer" className="w-full h-full object-cover absolute top-0 left-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-white text-lg md:text-2xl max-w-2xl">Discover my journey, skills, and projects in the world of dance and choreography.</p>
      </div>
    </motion.div>
  )
}
