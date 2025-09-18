import { BrowserRouter } from "react-router-dom"
import { AppRoute } from "./routes/AppRoute"
import { SpeedInsights } from "@vercel/speed-insights/next"


function App() {

  return (
    <BrowserRouter>
    <AppRoute />
    <SpeedInsights />
    </BrowserRouter>
  )
}

export default App
