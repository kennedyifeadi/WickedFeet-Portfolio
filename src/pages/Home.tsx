import { useEffect, useRef } from "react"
import withMainLayout from "../layout/MainLayout"
import Lenis from "lenis"
import { Landing } from "../components/homeComp/Landing"
import { Services } from "../components/homeComp/Services"
import { Performance } from "../components/homeComp/Performance"
import { Contact } from "../components/homeComp/Contact"
import { AboutMe } from "../components/homeComp/AboutMe"
import { useScroll } from "framer-motion"

const Home = () => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <div className="relative h-max bg-[#1A1A1A]">
      <div ref={container} className="relative md:h-[200dvh] h-[250dvh]">
        <Landing scrollYProgress={scrollYProgress} />
        <AboutMe />
      </div>
      <Services />
      <Performance />
      <Contact />
    </div>
  )
}

export default withMainLayout(Home)
