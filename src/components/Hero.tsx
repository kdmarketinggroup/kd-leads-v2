import React from "react";
import { Star, Download, Shield, TrendingUp } from "lucide-react";

const Hero: React.FC = () => {
  const bars = [40, 60, 45, 80, 90, 70, 100];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/5 via-transparent to-[#b88a4a]/5" />

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af77]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#b88a4a]/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 fade-up">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[#d4af77]/10 border border-[#d4af77]/20 backdrop-blur-sm">
              <span className="text-sm text-[#d4af77]">Transform Clicks Into Customers</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Generate More
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">
                Quality Leads
              </span>
              <br />
              Every Single Day
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">
              The revolutionary platform that transforms how you capture, qualify, and convert leads.
              Join thousands of businesses scaling their growth with KD Leads.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://apps.apple.com/in/app/kd-leads/id6743548012"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-[#d4af77] to-[#b88a4a] rounded-xl font-semibold hover:shadow-lg hover:shadow-[#d4af77]/50 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                App Store
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.kdleads"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-lg">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af77] text-[#d4af77]" />
                  ))}
                </div>
                <p className="text-2xl font-bold text-[#d4af77]">4.9</p>
                <p className="text-sm text-gray-500">User Rating</p>
              </div>

              <div className="text-center">
                <Download className="w-8 h-8 text-[#d4af77] mx-auto mb-2" />
                <p className="text-2xl font-bold text-[#d4af77]">50K+</p>
                <p className="text-sm text-gray-500">Active Users</p>
              </div>

              <div className="text-center">
                <Shield className="w-8 h-8 text-[#d4af77] mx-auto mb-2" />
                <p className="text-2xl font-bold text-[#d4af77]">Trusted</p>
                <p className="text-sm text-gray-500">Since 2020</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative fade-up delay-200">
            <div className="relative z-10 transform hover:scale-102 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/20 to-[#c89d5f]/20 rounded-[3rem] blur-3xl" />
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-[3rem] shadow-2xl border border-white/10">
                <div className="bg-[#0a0a0f] rounded-[2.5rem] overflow-hidden">
                  <div className="relative aspect-[9/19] lg:aspect-[3/4] max-h-[780px] lg:max-h-[620px]">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-3xl z-20" />

                    <div className="p-6 pt-10 h-full flex flex-col">
                      <div className="text-center mb-6">
                        <p className="text-gray-400 text-sm mb-2">Total Leads Generated</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">12,847</h2>
                        <p className="text-green-400 text-sm mt-2 inline-flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          +32% this month
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-5">
                        {["Capture", "Qualify", "Convert", "Analytics"].map((action, i) => (
                          <div key={i} className="bg-gradient-to-br from-[#d4af77]/10 to-[#c89d5f]/10 border border-[#d4af77]/20 rounded-2xl p-3 text-center backdrop-blur-sm">
                            <p className="text-xs text-gray-400">{action}</p>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3 flex-1 overflow-hidden">
                        <div className="space-y-3 overflow-auto pr-1">
                          {[
                            { name: "Hot Leads", value: "4,240", change: "+18%" },
                            { name: "Warm Prospects", value: "5,890", change: "+25%" },
                            { name: "New Contacts", value: "2,717", change: "+45%" },
                          ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="text-sm font-medium">{item.name}</p>
                                  <p className="text-xs text-gray-500 mt-1">{item.value} leads</p>
                                </div>
                                <span className="text-green-400 text-sm">{item.change}</span>
                              </div>
                            </div>
                          ))}

                          <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                            <p className="text-sm font-medium mb-3">Lead Growth (Last 7 Days)</p>

                            <div className="h-28 w-full flex items-end gap-2">
                              {bars.map((h, i) => (
                                <div
                                  key={i}
                                  className="bg-green-400/70 rounded w-4 transform translate-y-4 opacity-0 animate-barRise"
                                  style={{ height: `${h}%`, animationDelay: `${i * 60}ms` }}
                                />
                              ))}
                            </div>
                          </div>

                          <div className="mt-4 grid grid-cols-1 gap-3">
                            <div className="bg-white/3 border border-white/6 rounded-xl p-3 text-xs text-gray-300">
                              <div className="flex justify-between">
                                <span>New lead from landing page</span>
                                <span className="text-gray-400">2m</span>
                              </div>
                            </div>
                            <div className="bg-white/3 border border-white/6 rounded-xl p-3 text-xs text-gray-300">
                              <div className="flex justify-between">
                                <span>Email nurture sequence started</span>
                                <span className="text-gray-400">1h</span>
                              </div>
                            </div>
                            <div className="bg-white/3 border border-white/6 rounded-xl p-3 text-xs text-gray-300">
                              <div className="flex justify-between">
                                <span>14 leads converted today</span>
                                <span className="text-gray-400">3h</span>
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
        </div>
      </div>

      <style jsx>{`
        @keyframes barRise {
          0% {
            transform: translateY(16px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-barRise {
          animation: barRise 600ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
