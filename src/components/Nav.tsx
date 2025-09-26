import { useEffect, useState } from "react"
import { FiMenu } from "react-icons/fi"

export const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navOptions = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Performance", href: "#performance" },  
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 500) {
                setScrolled(false);
            } else if (window.scrollY > 500 && window.scrollY < 3000) {
                setScrolled(true);
            } else if (window.scrollY >= 1500) {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full fixed top-0 z-50 transition-colors duration-500 ${scrolled ? "bg-white" : "bg-black"}`}
        >
            <div className="flex items-center justify-between px-4 md:px-8 py-4">
                <div
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                    className={`text-2xl ${scrolled ? "text-[#0D0D0D]" : "text-white"}`}
                >
                    WickedFeet™
                </div>
                <div className="hidden md:flex gap-4 items-center">
                    <div>
                        {navOptions.map((option) => (
                            <a
                                key={option.name}
                                href={option.href}
                                className={`mx-2 ${scrolled ? "text-[#0D0D0D]" : "text-white"}`}
                                onClick={e => {
                                    e.preventDefault();
                                    setMenuOpen(false);
                                    const targetId = option.href.replace('#', '');
                                    const el = document.getElementById(targetId);
                                    if (el) {
                                        const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                                        const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
                                        window.scrollTo({ top: y, behavior: 'smooth' });
                                    }
                                }}
                            >
                                {option.name}
                            </a>
                        ))}
                    </div>
                    <a href="mailto:Lolufefs@gmail.com"
                        className={`py-2 px-4 flex justify-center items-center rounded-md bg-[#FFD166] font-medium text-white`}
                    >
                        Book Me
                    </a>
                </div>
                <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                    <FiMenu className={scrolled ? "text-[#0D0D0D]" : "text-white"} />
                </button>
            </div>
            {menuOpen && (
                <div className={`md:hidden w-full px-4 pb-4 flex flex-col gap-2 ${scrolled ? "bg-white" : "bg-black"} transition-all duration-300`}>
                    {navOptions.map((option) => (
                        <a
                            key={option.name}
                            href={option.href}
                            className={`py-2 border-b border-gray-200 ${scrolled ? "text-[#0D0D0D]" : "text-white"}`}
                            onClick={e => {
                                e.preventDefault();
                                setMenuOpen(false);
                                const targetId = option.href.replace('#', '');
                                const el = document.getElementById(targetId);
                                if (el) {
                                    const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                                    const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
                                    window.scrollTo({ top: y, behavior: 'smooth' });
                                }
                            }}
                        >
                            {option.name}
                        </a>
                    ))}
                    <a href="mailto:Lolufefs@gmail.com"
                        className={`w-full py-3 mt-2 flex justify-center items-center rounded-md bg-[#FFD166] font-medium text-white`}
                    >
                        Book Me
                    </a>
                </div>
            )}
        </nav>
    );
}
