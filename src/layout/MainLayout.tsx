import { Footer } from "../components/Footer"
import { Nav } from "../components/Nav"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen relative" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Nav />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

const withMainLayout = (Component: React.ComponentType) => {
  return (props: any) => (
    <MainLayout>
      <Component {...props} />
    </MainLayout>
  )
}

export default withMainLayout
