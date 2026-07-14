import React from "react";
import SectionHeader from "./SectionHeader";

const longVideos = [
{ id: "yzdugnstMNg", client: "client1", role: "Trial" },
{ id: "yzdugnstMNg", client: "client2", role: "Trial" },
{ id: "yzdugnstMNg", client: "client3", role: "Trial" }];


const shortVideos = [
{ id: "28ufM37HoWA", client: "client1", role: "Trial" },
{ id: "28ufM37HoWA", client: "client2", role: "Trial" },
{ id: "28ufM37HoWA", client: "client3", role: "Trial" }];


function Corner({ className }) {
  return <span className={`absolute w-4 h-4 border-[#39FF14] ${className}`} />;
}

export default function Videos() {
  return (
    <section id="videos" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader index="01 // PORTFOLIO" title="Videos" />

        <p className="font-mono text-xs tracking-[0.25em] text-white/40 mb-6">LONG-FORM — 16:9</p>
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {longVideos.map((v, i) =>
          <div key={i} className="relative group">
              <Corner className="top-0 left-0 border-t-2 border-l-2" />
              <Corner className="top-0 right-0 border-t-2 border-r-2" />
              <Corner className="bottom-8 left-0 border-b-2 border-l-2" />
              <Corner className="bottom-8 right-0 border-b-2 border-r-2" />
              <div className="p-2 bg-[#0a0a0a] border border-white/10">
                <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                  <iframe
                  title={`Long-form video portfolio piece for ${v.client}`}
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  src={`https://www.youtube.com/embed/${v.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 font-mono text-xs text-white/50">
                
                <span>{v.role}</span>
              </div>
            </div>
          )}
        </div>
























        

        <p className="font-mono text-xs tracking-[0.25em] text-white/40 mb-6">SHORT-FORM — 9:16</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {shortVideos.map((v, i) =>
          <div key={i} className="relative group transition-transform duration-300 hover:scale-[1.02] w-full max-w-[300px]">
              <div className="p-2 bg-[#0a0a0a] border border-white/10 group-hover:border-[#39FF14] group-hover:neon-glow transition-all duration-300 rounded-sm">
                <div style={{ position: "relative", width: "100%", paddingBottom: "177.78%", height: 0, overflow: "hidden" }}>
                  <iframe
                  title={`Short-form vertical reel ${i + 1}`}
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  src={`https://www.youtube.com/embed/${v.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
                
                </div>
              </div>
		<div className="flex justify-between items-center mt-2 font-mono text-xs text-white/50">
                
                <span>{v.role}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}