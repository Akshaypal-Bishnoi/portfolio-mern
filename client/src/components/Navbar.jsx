export default function Navbar() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-10 px-10 py-3 rounded-full bg-black/70 backdrop-blur-2xl border border-zinc-800 shadow-[0_0_40px_rgba(56,189,248,0.15)]">
        <span className="font-semibold text-white">Portfolio</span>
        <ul className="flex gap-6 text-sm font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map(s => (
            <li key={s}>
              <a
                href={`#${s.toLowerCase()}`}
                className="relative text-gray-300 hover:text-sky-400 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all hover:after:w-full"
              >
                {s}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
