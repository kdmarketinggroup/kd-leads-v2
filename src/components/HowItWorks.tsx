import React from 'react';
import { Smartphone, Brain, TrendingUp, Zap } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Download & Connect",
    description: "Link your accounts securely in under 2 minutes. Bank-level encryption protects your data.",
    image: "phone1"
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Analysis",
    description: "Our advanced AI analyzes your financial patterns and identifies opportunities for growth.",
    image: "phone2"
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Smart Recommendations",
    description: "Receive personalized investment strategies tailored to your goals and risk tolerance.",
    image: "phone3"
  },
  {
    number: "04",
    icon: Zap,
    title: "Watch Your Wealth Grow",
    description: "Track your progress in real-time and watch your financial goals become reality.",
    image: "phone4"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af77]/5 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building wealth has never been this simple. Four easy steps to financial freedom.
          </p>
        </div>

        <div className="space-y-32">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                <div className={`fade-up ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af77] to-[#b88a4a] flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77]/20 to-[#c89d5f]/20">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold mb-6">{step.title}</h3>
                  <p className="text-xl text-gray-400 leading-relaxed">{step.description}</p>
                </div>

                <div className={`fade-up delay-200 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/20 to-[#c89d5f]/20 rounded-[3rem] blur-3xl"></div>
                    <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-[3rem] shadow-2xl border border-white/10 transform hover:scale-105 transition-transform duration-500">
                      <div className="bg-[#0a0a0f] rounded-[2.5rem] overflow-hidden">
                        <div className="relative aspect-[9/19]">
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-3xl z-20"></div>

                          <div className="p-6 pt-10 h-full flex flex-col">
                            <div className="flex-1 flex items-center justify-center">
                              <div className={`w-full ${index === 0 ? 'space-y-4' : index === 1 ? 'text-center' : index === 2 ? 'space-y-3' : 'space-y-4'}`}>
                                {index === 0 && (
                                  <>
                                    <div className="bg-gradient-to-r from-[#d4af77]/20 to-[#c89d5f]/20 border border-[#d4af77]/30 rounded-2xl p-6 backdrop-blur-sm">
                                      <p className="text-sm text-gray-400 mb-2">Connected Accounts</p>
                                      <p className="text-2xl font-bold">3 Banks Linked</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                      <p className="text-xs text-gray-500">Total Balance</p>
                                      <p className="text-xl font-bold mt-1">$47,582.00</p>
                                    </div>
                                  </>
                                )}
                                {index === 1 && (
                                  <div className="space-y-6">
                                    <div className="relative">
                                      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#d4af77] to-[#b88a4a] flex items-center justify-center animate-pulse">
                                        <Brain className="w-16 h-16" />
                                      </div>
                                      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/20 to-[#c89d5f]/20 rounded-full blur-2xl"></div>
                                    </div>
                                    <p className="text-lg font-semibold">Analyzing Patterns...</p>
                                    <div className="w-full bg-white/10 rounded-full h-2">
                                      <div className="bg-gradient-to-r from-[#d4af77] to-[#b88a4a] h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                                    </div>
                                  </div>
                                )}
                                {index === 2 && (
                                  <>
                                    <div className="bg-gradient-to-br from-[#d4af77]/20 to-[#c89d5f]/20 border border-[#d4af77]/30 rounded-2xl p-4 backdrop-blur-sm">
                                      <div className="flex items-center justify-between">
                                        <div>
                                          <p className="text-sm font-medium">Tech Growth Fund</p>
                                          <p className="text-xs text-gray-500 mt-1">High potential</p>
                                        </div>
                                        <span className="text-green-400 font-bold">+18%</span>
                                      </div>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                      <div className="flex items-center justify-between">
                                        <div>
                                          <p className="text-sm font-medium">Real Estate ETF</p>
                                          <p className="text-xs text-gray-500 mt-1">Moderate risk</p>
                                        </div>
                                        <span className="text-green-400 font-bold">+12%</span>
                                      </div>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                      <div className="flex items-center justify-between">
                                        <div>
                                          <p className="text-sm font-medium">Bond Portfolio</p>
                                          <p className="text-xs text-gray-500 mt-1">Low risk</p>
                                        </div>
                                        <span className="text-green-400 font-bold">+5%</span>
                                      </div>
                                    </div>
                                  </>
                                )}
                                {index === 3 && (
                                  <>
                                    <div className="text-center mb-6">
                                      <p className="text-gray-400 text-sm mb-2">Portfolio Value</p>
                                      <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">$68,940</h3>
                                      <p className="text-green-400 text-sm mt-2 flex items-center justify-center gap-1">
                                        <TrendingUp className="w-4 h-4" />
                                        +44.8% Growth
                                      </p>
                                    </div>
                                    <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-4">
                                      <p className="text-sm text-green-400 font-semibold">Goal Reached! 🎉</p>
                                      <p className="text-xs text-gray-400 mt-1">Emergency Fund Complete</p>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
