import { motion } from "framer-motion"

export default function Home() {
  return (
      <section id="home" className="h-screen flex flex-col items-center justify-center perspective-1000">
        {/* 3D SOFTWARE ENGINEER LOGO */}
        <motion.div
          animate={{ rotateY: 360, rotateX: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="w-44 h-44 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center shadow-2xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          <span className="text-6xl font-extrabold text-black">&lt;/&gt;</span>
        </motion.div>

        <h1 className="text-5xl font-bold mt-10">Hi, I'm Akshay 👋</h1>
        <p className="text-gray-400 mt-3">Software Engineer | ML & Full‑Stack</p>

        {/* RESUME BUTTON */}
        <a
          href="/resume.pdf"
          download
          className="mt-8 inline-block px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-black font-semibold transition"
        >
          Download Resume
        </a>
      </section>

  )
}
