import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { FiMenu } from "react-icons/fi"

export const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navOptions = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full fixed top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-white" : "bg-transparent"}`}
        >
            <div className="flex items-center justify-between px-4 md:px-8 py-2">
                <div
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                    className={`text-2xl ${scrolled ? "text-[#0D0D0D]" : "text-white"}`}
                >
                    WickedFeet™
                </div>
                {/* Desktop Nav */}
                <div className="hidden md:flex gap-4 items-center">
                    <div>
                        {navOptions.map((option) => (
                            <Link
                                key={option.name}
                                to={option.path}
                                className={`mx-2 ${scrolled ? "text-[#0D0D0D]" : "text-white"}`}
                            >
                                {option.name}
                            </Link>
                        ))}
                    </div>
                    <span
                        className={`py-2 px-4 flex justify-center items-center rounded-md bg-[#FFD166] font-medium text-white`}
                    >
                        Book Me
                    </span>
                </div>
                {/* Hamburger Icon for Mobile */}
                <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                    <FiMenu className={scrolled ? "text-[#0D0D0D]" : "text-white"} />
                </button>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className={`md:hidden w-full px-4 pb-4 flex flex-col gap-2 ${scrolled ? "bg-white" : "bg-transparent"} transition-all duration-300`}>
                    {navOptions.map((option) => (
                        <Link
                            key={option.name}
                            to={option.path}
                            className={`py-2 border-b border-gray-200 ${scrolled ? "text-[#0D0D0D]" : "text-white"}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {option.name}
                        </Link>
                    ))}
                    <span
                        className={`w-full py-3 mt-2 flex justify-center items-center rounded-md bg-[#FFD166] font-medium text-white`}
                    >
                        Book Me
                    </span>
                </div>
            )}
        </nav>
    );
}
