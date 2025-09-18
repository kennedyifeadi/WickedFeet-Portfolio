import { Link } from "react-router-dom"

export const Nav = () => {
    const navOptions =[
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
    ]
  return (
    <div className="w-full px-8 fixed top-0 py-2 flex justify-between border-b border-gray-200 z-50">
        <div style={{ fontFamily: "'Oswald', sans-serif" }} className="text-2xl">
            WickedFeet™
        </div>
        <div className="flex gap-4 items-center">
            <div>
                {navOptions.map((option) => (
                    <Link key={option.name} to={option.path} className="mx-2">
                        {option.name}
                    </Link>
                ))}
            </div>
            <span className="py-2 px-4 flex justify-center items-center rounded-md bg-[#FFD166] text-white font-medium">Book Me</span>
        </div>
    </div>
  )
}
