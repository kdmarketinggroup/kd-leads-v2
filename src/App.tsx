import React, { useEffect } from 'react';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import WonderedSection from './components/WonderedSection';
import BreakthroughSection from './components/BreakthroughSection';
import HowItWorks from './components/HowItWorks';
import WorldwideAudience from './components/WorldwideAudience';
import Features from './components/Features';
import Charity from './components/Charity';
import ThreeSteps from './components/ThreeSteps';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    document.querySelectorAll('.fade-up, .fade-in').forEach(el => {
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
}

export default App;
