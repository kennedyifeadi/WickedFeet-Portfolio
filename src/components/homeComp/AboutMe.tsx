import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa6";


import Dancervid from "../../assets/Dancervid.mp4";

export const AboutMe = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="h-screen w-full relative z-10 bg-white flex flex-col md:flex-row">
      <div className="flex-1 h-[40%] md:h-full flex justify-center items-center relative">
        <video
          ref={videoRef}
          className="w-[90%] h-[90%] md:h-[50%] object-cover rounded-2xl"
          loop
          muted
          playsInline
          preload="auto"
          onMouseEnter={() => {
            if (!/Mobi|Android/i.test(navigator.userAgent)) {
              videoRef.current?.play();
              setIsPlaying(true);
            }
          }}
          onMouseLeave={() => {
            if (!/Mobi|Android/i.test(navigator.userAgent)) {
              videoRef.current?.pause();
              setIsPlaying(false);
            }
          }}
        >
          <source src={Dancervid} type="video/mp4" />
        </video>

        {/* Play Overlay */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute flex justify-center items-center bg-black/50 rounded-full p-6 cursor-pointer"
          >
            <FaPlay className="w-10 h-10 text-white" />
          </button>
        )}
      </div>

      <div className="flex-1 h-[60%] md:h-full flex flex-col">
        <div className="flex-1 flex flex-col p-4 justify-center">
          <h2
            className="text-xl md:text-4xl font-bold mb-4 md:mb-4 italic"
            style={{ fontFamily: "Oswald" }}
          >
            “Dance is how I turn music into a story.”
          </h2>
          <p className="mb-2 md:mb-4 px-2 text-[12px] md:text-[16px]">
            I am a passionate dancer dedicated to turning music into movement and
            movement into stories. Over the years, I have explored diverse
            styles—from hip-hop to contemporary—but found my home in zouk and
            social partner dances.
          </p>
          <p className="mb-2 md:mb-4 px-2 text-[12px] md:text-[16px]">
            Whether performing on stage, teaching in the studio, or collaborating
            with other creatives, my mission is simple: to inspire connection,
            confidence, and joy through dance. Every step I take is not just
            choreography, but a chance to create memories that last.
          </p>
          <p className="mb-2 md:mb-4 px-2 text-[12px] md:text-[16px]">
            Join me on this journey of rhythm and expression. Let's dance,
            connect, and tell stories that move the soul.
          </p>
          <div className="mt-1 md:mt-4">
            <span className="py-2 px-4 w-max flex justify-center items-center rounded-md bg-[#FFD166] font-medium text-white cursor-pointer">
              Learn More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
