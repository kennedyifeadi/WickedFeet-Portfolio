import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll } from "framer-motion"
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react"

const performances = [
  {
    id: 1,
    title: "Rio Zouk Immersion",
    video: <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xw2Wrpnt9zA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    thumbnail: "https://img.youtube.com/vi/xw2Wrpnt9zA/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Dance Showcase",
    video: <iframe width="100%" height="100%" src="https://www.youtube.com/embed/myFr7dW3ffQ?si=qLj6Id8hoYGi182F" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
    thumbnail: "https://img.youtube.com/vi/myFr7dW3ffQ/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Performance Night",
    video: <iframe width="100%" height="100%" src="https://www.youtube.com/embed/k2oJ7eO_iWM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    thumbnail: "https://img.youtube.com/vi/k2oJ7eO_iWM/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "Festival Performance",
    video: <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IShimoENFJg?si=zvpmHYFJJ_Q3rKM9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
    thumbnail: "https://img.youtube.com/vi/IShimoENFJg/maxresdefault.jpg",
  },
]

export const Performance = () => {
  const [selectedPerformance, setSelectedPerformance] = useState<typeof performances[0] | null>(null)
  const scrollContainer = useRef<HTMLDivElement>(null)

  const { scrollY } = useScroll()
  useEffect(() => {
    const prevY = { current: scrollY.get() }
    return scrollY.on("change", (latest: number) => {
      if (!scrollContainer.current) return
      const direction = latest > prevY.current ? 1 : -1 // down = 1, up = -1
      scrollContainer.current.scrollBy({
        left: direction * 50,
        behavior: "smooth",
      })
      prevY.current = latest
    })
  }, [scrollY])

  const scrollLeft = () => {
    scrollContainer.current?.scrollBy({ left: -300, behavior: "smooth" })
  }

  const scrollRight = () => {
    scrollContainer.current?.scrollBy({ left: 300, behavior: "smooth" })
  }

  return (
    <section id="performance" className="relative w-full min-h-screen bg-black text-white py-20 px-6">
      <h2 className="text-center text-3xl font-bold mb-12 uppercase">
        Performances & Portfolio
      </h2>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 p-3 rounded-full hover:bg-black transition-colors duration-300"
        >
          <ChevronLeft className="text-white text-xl" />
        </button>

        <div
          ref={scrollContainer}
          className="flex gap-6 overflow-x-scroll scrollbar-hide scroll-smooth md:px-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {performances.map((perf) => (
            <div
              key={perf.id}
              onClick={() => setSelectedPerformance(perf)}
              className="relative min-w-[300px] md:min-w-[400px] cursor-pointer group"
            >

              <div 
                className="relative w-full h-[500px] rounded-2xl overflow-hidden"
                style={{
                  clipPath: `url(#wavy-clip-${perf.id})`,
                }}
              >
                <img
                  src={perf.thumbnail}
                  alt={perf.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="text-white text-2xl ml-1" />
                  </div>
                  <span className="font-semibold text-lg px-4 bg-black/50 rounded-full py-2 backdrop-blur-sm">
                    {perf.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 p-3 rounded-full hover:bg-black transition-colors duration-300"
        >
          <ChevronRight className="text-white text-xl" />
        </button>
      </div>

      <AnimatePresence>
        {selectedPerformance && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={() => setSelectedPerformance(null)}
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-black rounded-xl shadow-lg max-w-4xl w-[90%] mx-auto"
            >
              <div className="w-full h-[60vh] rounded-lg overflow-hidden flex items-center justify-center">
                {selectedPerformance.video}
              </div>
              <button
                onClick={() => setSelectedPerformance(null)}
                className="absolute top-2 right-2 text-white bg-black/50 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}