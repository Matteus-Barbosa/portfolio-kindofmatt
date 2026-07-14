import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Videos from "./Videos";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-body selection:bg-[#39FF14] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Videos />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}