import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 px-4 ">

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-14"
      >
        About Me
      </motion.h2>

      {/* FULL WIDTH 3D CARDS */}
      <div className="max-w-7xl mx-auto grid gap-8">
        {[{
          title: "🎓 Education",
          desc: "Doing B.Tech from MNIT Jaipur in Computer Science & Engineering. Strong foundation in CS fundamentals, systems, and algorithms."
        }, {
          title: "🧑‍💻 Full Stack Developer",
          desc: "Proficient in MERN stack. Experienced with frontend (React, Tailwind) and backend (Node, Express, MongoDB) development."
        }, {
          title: "🤖 Machine Learning Engineer",
          desc: "Hands-on experience with scikit-learn and classical ML algorithms including regression, classification, clustering, and recommender systems."
        }, {
          title: "🧠 Deep Learning",
          desc: "Worked with PyTorch, CNNs, RNNs, LSTM, GRU. Implemented Transformers from scratch with forward & backward propagation."
        }, {
          title: "✨ GenAI & Agentic AI",
          desc: "Built RAG systems using LangChain, tool-using agents, ReAct framework, vector databases, and LLM orchestration pipelines."
        }, {
          title: "🔥 Problem Solving",
          desc: "Solved 300+ LeetCode DSA problems. Strong focus on hard-level problems, optimization, and clean algorithmic thinking."
        }].map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-full bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 shadow-xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
            <p className="text-gray-400 leading-relaxed max-w-5xl">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* EXTRA LINE */}
      <motion.p
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center text-gray-500 mt-16"
      >
        I enjoy building systems end-to-end — from low-level algorithms to full-scale AI-powered applications.
      </motion.p>
    </section>
  )
}
