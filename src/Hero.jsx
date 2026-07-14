import React from "react";
import { ArrowDown } from "lucide-react";

const PROFILE = "https://media.base44.com/images/public/user_6a3deb05e04e12b2e4562661/9e7eaac55_me2.jpeg";

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 ghost-line opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />

      <div className="relative max-w-[1200px] mx-auto px-6 py-28 flex flex-col items-center text-center">
        <p className="font-mono text-xs tracking-[0.3em] text-[#39FF14] mb-8">// CONTENT VIDEO EDITOR</p>

        <div
          className="relative rounded-full p-[3px] mb-8"
          style={{ animation: "pulse-ring 3s ease-in-out infinite" }}
        >
          <img
            src={PROFILE}
            alt="Matt, content video editor"
            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full object-cover border-[3px] border-[#39FF14]"
            loading="eager"
          />
        </div>

        <h1 className="text-6xl md:text-[72px] font-black tracking-tight text-white neon-text">Matt</h1>
        <p className="mt-4 text-[#e0e0e0] text-lg max-w-md">
          Video editing for YouTubers
        </p>

        <button
          onClick={() => go("videos")}
          className="group mt-10 inline-flex items-center gap-3 bg-[#39FF14] text-black font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 neon-glow"
        >
          See portfolio
          <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}