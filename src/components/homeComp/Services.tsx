import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Dancer1 from "../../assets/Dancer1.jpg"
import image1 from "../../assets/Dancer2.jpg"
import image2 from "../../assets/Dancer3.jpg"
import image3 from "../../assets/Dancer4.jpg"
import image4 from "../../assets/Dancer5.jpg"
import image5 from "../../assets/Dancer6.jpg"

import ServiceVid from "../../assets/Dancer45.mp4"
import { FaPlay } from "react-icons/fa6";
import { Performance } from "./Performance"

const rotatingImages = [
  Dancer1,
  image1,
  image2,
  image3,
  image4,
  image5,
]

// Subtexts
const SUBTEXTS = {
  choreography:
    "I design routines that balance creativity and precision, tailored to fit the mood and size of any stage — from intimate showcases to full productions.",
  workshops:
    "I run workshops where dancers of all levels sharpen technique, explore musicality, and build confidence — learning through connection and playful practice.",
  performances:
    "I deliver vibrant, story-driven performances that elevate events and leave audiences with memorable moments.",
  collaborations:
    "I collaborate with artists across disciplines to blend styles and create unique, boundary-pushing experiences."
}

export const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

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
    <section id="services" className="w-full bg-white h-max min-h-screen flex flex-col">
      <h2 className="text-center text-3xl font-bold mb-10 uppercase">About My Services</h2>

      <div className="flex flex-col gap-2 md:gap-8">
        {/* Video block */}
        <div
          className="relative rounded-xl overflow-hidden px-6 w-full md:h-[60dvh]"
          onMouseEnter={handlePlay}
          onMouseLeave={handlePause}
          onClick={handlePlay} // for mobile tap
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-xl"
            muted
            loop
            playsInline
            preload="auto"
            autoPlay={isMobile} // i want it that if it is on mobile it autoplay
          >
            <source src={ServiceVid} type="video/mp4" />
          </video>

          {!isPlaying && (
            <div className="absolute inset-0 hidden md:flex items-center justify-center">
              <div className="bg-black/50 rounded-full p-5 text-white text-3xl">
                <FaPlay />
              </div>
            </div>
          )}

          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-0 md:bottom-4 md:left-4 text-white bg-black/40 px-2 w-[300px] md:px-4 py-3 rounded-md md:max-w-lvh"
            >
              <h3 className="text-md md:text-3xl font-bold">Choreography</h3>
              <p className="text-[10px] md:text-sm mt-2 leading-snug">{SUBTEXTS.choreography}</p>
            </motion.div>
          )}
        </div>

        <div className="w-full relative min-h-[210dvh] md:h-[210dvh] flex flex-col">
          <div className="w-full h-[110dvh] md:h-[110dvh] pb-16 md:pb-32 sticky top-0 flex px-6 flex-col-reverse md:flex-row gap-2 md:gap-8">
          <div className="relative rounded-xl overflow-hidden h-[60%] md:h-full flex-1">
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
            <div className="absolute inset-0 bg-black/30 flex items-end">
              <div className="md:p-4 p-2 mb-2 md:mb-6 ">
                <h4 className="text-white text-md md:text-3xl font-semibold">Workshops</h4>
                <p className="text-white text-[10px] md:text-sm mt-1 leading-snug">{SUBTEXTS.workshops}</p>
              </div>
            </div>
          </div>

          <div className="flex md:flex-col gap-2 md:gap-8 flex-1 h-[20%] md:h-full">
            <div className="relative rounded-xl flex-1 overflow-hidden h-full md:h-1/2">
              <img src={image4} alt="Performance" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="md:p-4 p-2 mb-2 md:mb-6 ">
                  <h4 className="text-white text-md md:text-3xl font-semibold">Event Performances</h4>
                  <p className="text-white text-[10px] md:text-sm mt-1 leading-snug">{SUBTEXTS.performances}</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl flex-1 overflow-hidden h-full md:h-1/2">
              <img src={image5} alt="Collaboration" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="md:p-4 p-2 mb-2 md:mb-6 ">
                  <h4 className="text-white text-md md:text-3xl font-semibold">Collaborations</h4>
                  <p className="text-white text-[10px] md:text-sm mt-1 leading-snug">{SUBTEXTS.collaborations}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Performance/>
        </div>
      </div>
    </section>
  )
}
