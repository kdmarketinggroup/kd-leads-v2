import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

/* Landing Sections */
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import WonderedSection from "./components/WonderedSection";
import BreakthroughSection from "./components/BreakthroughSection";
import HowItWorks from "./components/HowItWorks";
import WorldwideAudience from "./components/WorldwideAudience";
import Features from "./components/Features";
import Charity from "./components/Charity";
import ThreeSteps from "./components/ThreeSteps";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

/* Placeholder Feature Detail Page (can be upgraded later) */
const FeatureDetail = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">Feature Details Coming Soon</h1>
    </div>
  );
};

/* Home Page Layout */
const Home = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    });

    document.querySelectorAll(".fade-up, .fade-in").forEach((el) => {
      observer.observe(el);
    });

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
      <Features />
      <Charity />
      <ThreeSteps />
      <FinalCTA />
      <Footer />
    </div>
  );
};

/* App Router */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features/:slug" element={<FeatureDetail />} />
    </Routes>
  );
}

export default App;
