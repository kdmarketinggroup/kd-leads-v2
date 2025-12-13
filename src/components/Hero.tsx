import React from "react";
import { Star, Download, Shield, TrendingUp, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/5 via-transparent to-[#b88a4a]/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af77]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#b88a4a]/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="fade-up">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[#d4af77]/10 border border-[#d4af77]/20 backdrop-blur-sm">
              <span className="text-sm text-[#d4af77]">
                Transform Clicks Into Customers
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Generate More
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">
                Quality Leads
              </span>
              <br />
              Every Single Day
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">
              The all-in-one platform to capture, qualify, and convert leads.
              Thousands of businesses grow faster with KD Leads.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-10">
              {/* App Store */}
              <a
                href="https://apps.apple.com/in/app/kd-leads/id6743548012"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-gradient-to-r from-[#d4af77] to-[#b88a4a] rounded-xl font-semibold hover:shadow-lg hover:shadow-[#d4af77]/40 transition flex items-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88Z" />
                </svg>
                App Store
              </a>

              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.kdleads"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition backdrop-blur-sm flex items-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M3 20.5V3.5C3 2.9 3.34 2.4 3.84 2.15L13.69 12 3.84 21.85Z" />
                </svg>
                Google Play
              </a>

              {/* Start Onboarding */}
              <a
                href="/onboarding"
                className="group px-6 py-3 border border-[#d4af77]/40 text-[#d4af77] rounded-xl font-semibold hover:bg-[#d4af77]/10 transition backdrop-blur-sm flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Start Onboarding
              </a>
            </div>

            {/* TRUST STATS */}
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

          {/* RIGHT MOCKUP */}
          <div className="relative fade-up delay-200 flex justify-center">
            <div className="relative w-[300px] lg:w-[360px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/20 to-[#c89d5f]/20 rounded-[3rem] blur-3xl" />
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-[3rem] shadow-2xl border border-white/10">
                <div className="bg-[#0a0a0f] rounded-[2.5rem] overflow-hidden">
                  <div className="p-6 pt-10 text-center">
                    <p className="text-gray-400 text-sm mb-2">Total Leads</p>
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">
                      12,847
                    </h2>
                    <p className="text-green-400 text-sm mt-2 flex items-center justify-center gap-1">
                      <TrendingUp className="w-4 h-4" /> +32%
                    </p>

                    <div className="mt-6 space-y-3">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between">
                        <span>Hot Leads</span>
                        <span className="text-green-400">+18%</span>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between">
                        <span>Warm Prospects</span>
                        <span className="text-green-400">+25%</span>
                      </div>
                    </div>

                    <div className="mt-6 flex items-end gap-2 h-20">
                      {[40, 55, 45, 70, 85, 65, 90].map((h, i) => (
                        <div
                          key={i}
                          className="bg-green-400/70 rounded w-4"
                          style={{ height: `${h}%` }}
                        />
                      ))}
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

export default Hero;
