import { motion } from "framer-motion"
import { useState } from "react"
import { sendContact } from "../services/api"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [status, setStatus] = useState("idle") // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    try {
      await sendContact(form)
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-24 px-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Contact
      </motion.h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-black/40 backdrop-blur-md rounded-2xl p-8 space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded bg-zinc-900 text-white outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded bg-zinc-900 text-white outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-3 rounded bg-zinc-900 text-white outline-none"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3 rounded bg-sky-500 text-black font-semibold hover:bg-sky-400 transition disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-400 text-center">
            Message sent successfully ✅
          </p>
        )}

        {status === "error" && (
          <p className="text-red-400 text-center">
            Something went wrong ❌
          </p>
        )}
      </form>
    </section>
  )
}
