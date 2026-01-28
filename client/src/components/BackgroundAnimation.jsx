import { motion } from "framer-motion"

const techWords = [
  "stack()", "queue()", "tree", "graph",
  "O(n)", "O(n log n)", "hashMap",
  "dp[i]", "DFS", "BFS", "</>", "recursion()"
]

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

      {/* TECH GRID */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(56,189,248,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.25) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.9
        }}
      />

      {/* FLOATING DSA / TECH WORDS */}
      {techWords.map((text, i) => (
        <motion.span
          key={i}
          className="absolute font-mono text-sky-400 text-sm md:text-base"
          style={{
            top: `${(i * 13) % 100}%`,
            left: `${(i * 19) % 100}%`
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.35, 0.7, 0.35]
          }}
          transition={{
            duration: 22 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {text}
        </motion.span>
      ))}
    </div>
  )
}
