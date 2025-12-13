import React, { useEffect } from "react";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import WonderedSection from "./components/WonderedSection";
import BreakthroughSection from "./components/BreakthroughSection";
import HowItWorks from "./components/HowItWorks";
import WorldwideAudience from "./components/WorldwideAudience";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in");
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up, .fade-in").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0a0a0f] text-white overflow-x-hidden">
      <Hero />
      <SocialProof />
      <WonderedSection />
      <BreakthroughSection />
      <HowItWorks />
      <WorldwideAudience />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
