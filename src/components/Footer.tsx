import { FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <div className="flex gap-6">
          <a
            href="https://instagram.com/lolu_fefs?igsh=MTNrdWFjYTQ3NjJiNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFD166] transition-colors"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://youtube.com/@smithomololu6296?si=3GuMIZSlhnwDcH3G"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFD166] transition-colors"
          >
            <FaYoutube size={28} />
          </a>
          <a
            href="https://www.tiktok.com/@lolu__fefs?_t=ZS-901QWXk49gN&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFD166] transition-colors"
          >
            <FaTiktok size={28} />
          </a>
          <a
            href="mailto:Lolufefs@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFD166] transition-colors"
          >
            <FaEnvelope size={28} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-center">
          © {new Date().getFullYear()} WickedFeet™. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
