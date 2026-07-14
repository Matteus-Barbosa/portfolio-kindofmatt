import React from "react";

const links = [
  { label: "Home", id: "home" },
  { label: "Videos", id: "videos" },
  { label: "About Me", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-10">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center gap-6">
        <div className="flex flex-wrap justify-center gap-6">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-sm text-[#e0e0e0] hover:text-[#39FF14] transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-[#39FF14]">
          <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
          CURRENT STATUS: AVAILABLE FOR PROJECTS
        </div>
        <p className="text-sm text-[#888888]">© {new Date().getFullYear()} kindofmatt. All rights reserved.</p>
      </div>
    </footer>
  );
}