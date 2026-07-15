import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { Mail, Check, Copy, Briefcase } from "lucide-react";

const DISCORD = "kindofmatt";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyDiscord = () => {
    navigator.clipboard.writeText(DISCORD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader index="03 // SAY HELLO" title="Contact" />

        <p className="text-2xl text-[#e0e0e0] max-w-xl mx-auto text-center mb-12">
          Send me a message and let's work together!
        </p>

        <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a
              href="mailto:contact@kindofmatt.com"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 bg-[#39FF14] text-black font-bold px-6 py-3 rounded-md transition-all duration-300 hover:neon-glow hover:scale-105"
            >
              <Mail size={18} /> Email
            </a>

            <a
              href="https://twitter.com/kindofmatt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 bg-[#39FF14] text-black font-bold px-6 py-3 rounded-md transition-all duration-300 hover:neon-glow hover:scale-105"
            >
              {/* Ícone clássico do Twitter em SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              Twitter
            </a>

            <a
              href="https://ytjobs.co/talent/profile/573968"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 bg-[#39FF14] text-black font-bold px-6 py-3 rounded-md transition-all duration-300 hover:neon-glow hover:scale-105"
            >
              <Briefcase size={18} /> YT Jobs
            </a>
          </div>

          <button
            onClick={copyDiscord}
            className={`w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-md transition-all duration-300 hover:scale-105 ${
              copied ? "bg-[#39FF14] text-black neon-glow" : "bg-[#0a0a0a] text-white border border-[#39FF14]/40 hover:neon-glow"
            }`}
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? "Signal Copied!" : `Discord: ${DISCORD}`}
          </button>
        </div>
      </div>
    </section>
  );
}