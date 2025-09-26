import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import Profile from "../../assets/Dancer6.jpg"
import { FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";


export const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)
    setError(null)

    if (form.current) {
      emailjs
        .sendForm(
          "service_z5rwee1", // replace with your EmailJS service ID
          "template_rm5d6ta", // replace with your EmailJS template ID
          form.current,
          "lQr-c2qYEnakJ6sgF" // replace with your EmailJS public key
        )
        .then(
          () => {
            setSuccess("Message sent successfully!")
            setLoading(false)
            form.current?.reset()
          },
          () => {
            setError("Failed to send message. Please try again.")
            setLoading(false)
          }
        )
    }
  }

  return (
    <section id="contact" className="bg-black text-white px-4 py-2 h-max md:h-screen">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 hidden md:block"
        >
          <img
            src={Profile}
            alt="Dancer"
            className="w-full h-[600px] object-cover rounded-2xl border border-white/30"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full"
        >
          <h2 className="text-2xl text-center md:text-3xl font-bold mb-6">Work with WickedFeet™</h2>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:border-[#FFD166]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:border-[#FFD166]"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="p-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:border-[#FFD166]"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#FFD166] text-white py-3 px-6 rounded-md font-semibold hover:bg-[#e6ba5d] transition-colors disabled:opacity-50"
            >
              {loading ? <span className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full border-t-transparent"></span> : "Send Message"}
            </button>
          </form>

          {success && <p className="text-green-400 mt-4">{success}</p>}
          {error && <p className="text-red-400 mt-4">{error}</p>}

          <div className="hidden md:flex items-center gap-6 mt-8">
            <a
              href="https://www.instagram.com/lolu_fefs?igsh=MTNrdWFjYTQ3NjJiNw=="
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
        </motion.div>
      </div>
    </section>
  )
}
