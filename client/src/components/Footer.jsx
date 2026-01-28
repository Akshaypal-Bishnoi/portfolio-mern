import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-zinc-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400"
      >
        {/* LEFT */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Akshay. All rights reserved.
        </p>

        {/* RIGHT */}
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <a
            href="mailto:akshay@gmail.com"
            className="hover:text-sky-400 transition"
          >
            📧 akshay@gmail.com
          </a>

          <span className="hidden sm:inline">|</span>

          <span className="hover:text-sky-400 transition">
            📱 +91-XXXXXXXXXX
          </span>

          <span className="hidden sm:inline">|</span>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition"
          >
            GitHub
          </a>

          <span className="hidden sm:inline">|</span>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </footer>
  )
}
