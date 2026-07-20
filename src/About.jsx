import React from "react";
import SectionHeader from "./SectionHeader";

const clients = [
{ name: "BoltMotivation", subs: "2.9M", img: "https://media.base44.com/images/public/6a3df59a1e6b5178cc32775e/69d78dd82_BoltMotivation.png" },
{ name: "Crispy Concords", subs: "3.94M", img: "https://media.base44.com/images/public/6a3df59a1e6b5178cc32775e/bbd7905b8_CrispyConcords.png" },
{ name: "Soul Tayshi", subs: "75.9K", img: "https://media.base44.com/images/public/6a3df59a1e6b5178cc32775e/b7bc8c871_SoulTayshi.png" },
{ name: "Niko Omilana", subs: "8.84M", img: "https://media.base44.com/images/public/6a3df59a1e6b5178cc32775e/56d727802_niko-omilana.jpg" },
{ name: "Hoodie Guy", subs: "1.15M", img: "https://media.base44.com/images/public/6a3df59a1e6b5178cc32775e/97572b81e_hoodieguy.jpg" },
{ name: "LanceStuffs", subs: "1.24M", img: "https://media.base44.com/images/public/6a3df59a1e6b5178cc32775e/feeab5b79_lance-stuffs.jpg" }];


export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0a] border-y border-white/10">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader index="02 // IMPACT" title="About Me" />

        <span className="block mx-auto mb-8 h-px w-16 bg-[#39FF14]" />

        <p className="text-lg leading-[1.7] text-[#e0e0e0] max-w-3xl mx-auto text-center mb-20">Roblox content editor for YouTube. Check out some of my work and feel free to reach out.

        </p>

        

        

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {clients.map((c) => null















          )}
        </div>
      </div>
    </section>);

}