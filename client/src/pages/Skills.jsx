import SkillsTabs from "../components/SkillsTabs"
import { motion } from "framer-motion"

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Skills
      </motion.h2>

      <SkillsTabs />
    </section>
  )
}
