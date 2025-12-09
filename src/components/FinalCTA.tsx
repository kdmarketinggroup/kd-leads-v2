import React from 'react';
import { Star } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/10 via-[#c89d5f]/10 to-[#c89d5f]/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af77]/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c89d5f]/20 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="fade-up">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[#d4af77]/10 border border-[#d4af77]/20 backdrop-blur-sm">
              <span className="text-sm text-[#d4af77] font-semibold">THE FUTURE IS NOW</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">Transformation</span> Starts Today
            </h2>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Join over 10 million people who've already taken control of their financial future.
              Download now and get your first AI-powered investment recommendation within minutes.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#d4af77] to-[#b88a4a] rounded-xl font-semibold hover:shadow-lg hover:shadow-[#d4af77]/50 transition-all duration-300 flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                Download on App Store
              </button>

              <button className="group px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Get it on Google Play
              </button>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-400">4.9/5</span>
              </div>

              <div className="h-8 w-px bg-white/10"></div>

              <div className="text-gray-400">
                <span className="text-white font-bold">10M+</span> Downloads
              </div>
            </div>
          </div>

          <div className="relative fade-up delay-200">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/30 to-[#c89d5f]/30 rounded-[3rem] blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-[3rem] shadow-2xl border border-white/10">
                <div className="bg-[#0a0a0f] rounded-[2.5rem] overflow-hidden">
                  <div className="relative aspect-[9/19]">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-3xl z-20"></div>

                    <div className="p-6 pt-10 h-full flex flex-col">
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-4">
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                          <span className="text-xs text-green-400 font-semibold">LIVE</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">Portfolio Value</p>
                        <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">$68,940</h3>
                        <p className="text-green-400 text-sm mt-2">+$21,358 (44.8%) all time</p>
                      </div>

                      <div className="bg-gradient-to-br from-[#d4af77]/20 to-[#c89d5f]/20 border border-[#d4af77]/30 rounded-2xl p-4 backdrop-blur-sm mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-sm font-semibold">Monthly Performance</p>
                          <span className="text-green-400 text-sm font-bold">+12.5%</span>
                        </div>
                        <div className="flex items-end gap-1 h-20">
                          {[45, 55, 50, 70, 65, 85, 95, 90, 100, 95, 105, 110].map((height, i) => (
                            <div key={i} className="flex-1 bg-gradient-to-t from-[#d4af77] to-[#c89d5f] rounded-t" style={{ height: `${height}%` }}></div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3 flex-1">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">Tech Growth Portfolio</p>
                              <p className="text-xs text-gray-500 mt-1">$28,450</p>
                            </div>
                            <span className="text-green-400 font-bold">+18.2%</span>
                          </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">Real Estate Fund</p>
                              <p className="text-xs text-gray-500 mt-1">$22,180</p>
                            </div>
                            <span className="text-green-400 font-bold">+11.4%</span>
                          </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">Diversified Bonds</p>
                              <p className="text-xs text-gray-500 mt-1">$18,310</p>
                            </div>
                            <span className="text-green-400 font-bold">+6.8%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
