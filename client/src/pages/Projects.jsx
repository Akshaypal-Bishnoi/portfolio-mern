import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { fetchProjects } from "../services/api"

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProjects()
      .then(res => {
        setProjects(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return (
    <section id="projects" className="py-24 px-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        className="text-3xl font-bold text-center mb-14"
      >
        Projects
      </motion.h2>

      {loading ? (
        <p className="text-center text-gray-400">Loading projects...</p>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project._id}
              whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-8 shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                {project.tech}
              </p>

              <div className="flex gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full bg-sky-500 text-black text-sm font-semibold hover:bg-sky-400 transition"
                  >
                    Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full border border-zinc-600 text-sm hover:border-sky-400 transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}
