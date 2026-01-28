import { motion } from "framer-motion"
import { useState } from "react"

export default function SkillsTabs() {

  const categories = {
    programming: {
      label: "💻 Programming",
      skills: [
        { name: "C", icon: "🅲" },
        { name: "C++", icon: "➕" },
        { name: "Python", icon: "🐍" },
        { name: "HTML", icon: "📄" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "SQL", icon: "🗄️" }
      ]
    },
    frameworks: {
      label: "📚 Frameworks",
      skills: [
        { name: "NumPy", icon: "🔢" },
        { name: "Pandas", icon: "🐼" },
        { name: "Matplotlib", icon: "📊" },
        { name: "Scikit-Learn", icon: "🤖" },
        { name: "PyTorch", icon: "🔥" },
        { name: "Streamlit", icon: "🧪" },
        { name: "FastAPI", icon: "⚡" },
        { name: "React", icon: "⚛️" },
        { name: "Express.js", icon: "🚂" },
        { name: "Node.js", icon: "🌿" },
        { name: "Tailwind", icon: "💨" }
      ]
    },
    tools: {
      label: "🛠 Tools & DB",
      skills: [
        { name: "Git", icon: "🔧" },
        { name: "Docker", icon: "🐳" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Vector DB", icon: "🧭" },
        { name: "Chroma", icon: "🌈" },
        { name: "FAISS", icon: "📦" }
      ]
    },
    newtech: {
      label: "✨ New Tech",
      skills: [
        { name: "GenAI", icon: "✨" },
        { name: "LangChain", icon: "🔗" },
        { name: "RAG", icon: "📚" },
        { name: "Agentic AI", icon: "🧠" },
        { name: "ReAct", icon: "⚙️" }
      ]
    },
    core: {
      label: "🧠 Core CS",
      skills: [
        { name: "Data Structures", icon: "🧱" },
        { name: "Algorithms", icon: "🧮" },
        { name: "Computer Networks", icon: "🌐" },
        { name: "DBMS", icon: "🗃️" },
        { name: "OOPS", icon: "🧩" }
      ]
    }
  }

  const [active, setActive] = useState("programming")

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(categories).map(([key, cat]) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-6 py-3 rounded-full border transition ${
              active === key
                ? "bg-sky-500 text-black border-sky-400"
                : "bg-black border-zinc-700 text-white hover:border-sky-400"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, rotateX: 10 }}
        animate={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      >
        {categories[active].skills.map(skill => (
          <motion.div
            whileHover={{ scale: 1.1, rotateY: 8 }}
            key={skill.name}
            className="bg-black border border-zinc-700 rounded-xl p-6 flex flex-col items-center justify-center gap-2 shadow-lg"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="text-3xl">{skill.icon}</span>
            <span className="text-sm text-center">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
