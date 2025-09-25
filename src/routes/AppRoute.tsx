import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import NotFound from "../pages/NotFound"

export const AppRoute = () => {
  return (
    <>
    <div className="w-full min-h-screen h-max">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
    </>
  )
}
