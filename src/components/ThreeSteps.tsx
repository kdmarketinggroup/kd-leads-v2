import React from 'react';
import { Download, Sparkles, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: "1",
    icon: Download,
    title: "Download the App",
    description: "Available free on iOS and Android. No credit card required to start."
  },
  {
    number: "2",
    icon: Sparkles,
    title: "Set Your Goals",
    description: "Tell us your financial dreams. We'll create a personalized roadmap to get you there."
  },
  {
    number: "3",
    icon: TrendingUp,
    title: "Watch Your Wealth Grow",
    description: "Follow AI-powered recommendations and track your progress in real-time."
  }
];

const ThreeSteps = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af77]/5 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">3 Simple Steps</span> to Financial Freedom
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Getting started is easier than you think. Join millions who've already transformed their financial future.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-[#d4af77] to-[#b88a4a] opacity-30"></div>
                )}

                <div className="flex gap-6 mb-12 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af77] to-[#b88a4a] flex items-center justify-center shadow-lg shadow-[#d4af77]/50 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-gray-900 to-black border-2 border-[#d4af77] flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                  </div>

                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-lg text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center fade-up">
          <button className="group px-10 py-5 bg-gradient-to-r from-[#d4af77] to-[#b88a4a] rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-[#d4af77]/50 transition-all duration-300 inline-flex items-center gap-3">
            Start Your Journey Now
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <p className="text-sm text-gray-500 mt-4">No credit card required • Free forever</p>
        </div>
      </div>
    </section>
  );
};

export default ThreeSteps;
