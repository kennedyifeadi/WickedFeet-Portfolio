import { useTransform } from "framer-motion"
import { motion } from "framer-motion"
import type { MotionValue } from "framer-motion"
import Dancer1 from "../../assets/Dancer1.jpg"
import image1 from "../../assets/Dancer2.jpg"
import image2 from "../../assets/Dancer3.jpg"
import image3 from "../../assets/Dancer4.jpg"
import image4 from "../../assets/Dancer5.jpg"
import image5 from "../../assets/Dancer6.jpg"

export const Landing = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const images = [image1, image2, image3, image4, image5, Dancer1];
  return (
    <motion.div id="home" style={{ scale }} className="w-full min-h-screen sticky top-0" >
      <img src={Dancer1} alt="Dancer" className="w-full h-full object-cover absolute top-0 left-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/90 flex flex-col gap-8 md:gap-0 md:flex-row px-4">
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 mt-20 md:mt-0">
          <div className="mb-8 flex flex-col justify-center w-full items-center">
            <h1 className="text-[48px] md:text-[64px] text-[#FFFFFF]">WickedFeet™</h1>
            <p className="text-[#CCCCCC]">Telling stories through dance</p>
          </div>
          <div className="flex gap-4 md:gap-8 justify-center w-full">
            <span className="py-2 px-4 flex justify-center items-center rounded-md font-medium border-2 text-white">Book Me</span>
            <span className="py-2 px-4 flex justify-center items-center rounded-md bg-[#FFD166] font-medium text-white">Watch Performance</span>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-screen md:flex justify-center items-center hidden">
          <div className="relative grid grid-cols-3 grid-rows-3 gap-4">
            <motion.img
              src={images[0]}
              alt="top"
              className="col-start-2 row-start-1 w-24 h-30 md:w-40 md:h-52 object-cover rounded-lg border-2 border-white"
              whileHover={{ scale: 1.1 }}
            />

            <motion.img
              src={images[1]}
              alt="left"
              className="col-start-1 row-start-2 w-24 h-30 md:w-40 md:h-52 object-cover rounded-lg border-2 border-white"
              whileHover={{ scale: 1.1 }}
            />

            <motion.img
              src={images[4]}
              alt="center"
              className="col-start-2 row-start-2 w-24 h-30 md:w-40 md:h-52 object-cover rounded-lg border-2 border-white z-10"
              whileHover={{ scale: 1.1, zIndex: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />

            <motion.img
              src={images[5]}
              alt="right"
              className="col-start-3 row-start-2 w-24 h-30 md:w-40 md:h-52 object-cover rounded-lg border-2 border-white"
              whileHover={{ scale: 1.1 }}
            />

            <motion.img
              src={images[3]}
              alt="bottom"
              className="col-start-2 row-start-3 w-24 h-30 md:w-40 md:h-52 object-cover rounded-lg border-2 border-white"
              whileHover={{ scale: 1.1 }}
            />
          </div>
        </div>
        <div className="w-full md:hidden flex justify-center items-center relative">
          <img
            src={image2}
            alt="First"
            className="absolute top-28 border-2 border-white left-2 w-48 h-64 object-cover rounded-xl"
          />

          <img
            src={Dancer1}
            alt="Second"
            className="absolute top-0 border-2 border-white right-2 w-48 h-64 object-cover rounded-xl"
          />
        </div>
      </div>
    </motion.div>
  )
}

// #06D6A0