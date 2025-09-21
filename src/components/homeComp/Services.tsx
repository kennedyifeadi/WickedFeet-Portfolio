"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Dancer1 from "../../assets/Dancer1.jpg"
import image1 from "../../assets/Dancer2.jpg"
import image2 from "../../assets/Dancer3.jpg"
import image3 from "../../assets/Dancer4.jpg"
import image4 from "../../assets/Dancer5.jpg"
import image5 from "../../assets/Dancer6.jpg"

import ServiceVid from "../../assets/Dancervid2.mp4"
import { FaPlay } from "react-icons/fa6";


const rotatingImages = [
  Dancer1,
  image1,
  image2,
  image3,
  image4,
  image5,
]

export const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section className="w-full bg-white px-6 h-[150dvh] flex flex-col">
      <h2 className="text-center text-3xl font-bold mb-10 uppercase">About My Services</h2>

      <div className="flex flex-col gap-8 h-[95%]">
        <div
          className="relative rounded-xl overflow-hidden w-full h-[45%]"
          onMouseEnter={handlePlay}
          onMouseLeave={handlePause}
          onClick={handlePlay} // for mobile
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
          >
            <source src={ServiceVid} type="video/mp4" />
          </video>

          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/50 rounded-full p-5 text-white text-3xl">
                <FaPlay />
              </div>
            </div>
          )}

          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl bg-black/40"
            >
              Choreography
            </motion.div>
          )}
        </div>
        <div className="w-full h-[55%] flex gap-8">
          <div className="relative rounded-xl overflow-hidden h-full flex-1">
            <motion.img
              key={currentIndex}
              src={rotatingImages[currentIndex]}
              alt="Workshops"
              className="w-full h-full object-cover absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">Workshops</span>
            </div>
          </div>
          <div className="flex flex-col gap-8 flex-1 h-full">
            <div className="relative rounded-xl overflow-hidden h-1/2">
              <img src={image4} alt="Performance" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Event Performances</span>
              </div>
            </div>

            {/* Right Bottom Static Image */}
            <div className="relative rounded-xl overflow-hidden h-1/2">
              <img src={image5} alt="Collaboration" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Collaborations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
