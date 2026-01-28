import Navbar from "./components/Navbar"
import BackgroundAnimation from "./components/BackgroundAnimation"

import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      
      {/* GLOBAL BACKGROUND (ALWAYS VISIBLE) */}
      <BackgroundAnimation />

      {/* CONTENT LAYER */}
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        
      </div>

    </div>
  )
}
