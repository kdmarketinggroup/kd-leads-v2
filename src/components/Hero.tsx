import React from "react";
import { Star, Download, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/5 via-transparent to-[#b88a4a]/5" />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#d4af77]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#b88a4a]/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="fade-up">
            <div className="inline-block mb-5 px-4 py-2 rounded-full bg-[#d4af77]/10 border border-[#d4af77]/20 backdrop-blur-sm">
              <span className="text-sm text-[#d4af77]">
                Transform Clicks Into Customers
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Generate More
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">
                Quality Leads
              </span>
              <br />
              Every Single Day
            </h1>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
              The all-in-one platform to capture, qualify, and convert leads.
              Thousands of businesses grow faster with KD Leads.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="https://apps.apple.com/in/app/kd-leads/id6743548012"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-[#d4af77] to-[#b88a4a] rounded-xl font-semibold hover:shadow-lg hover:shadow-[#d4af77]/40 transition"
              >
                App Store
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.kdleads"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition backdrop-blur-sm"
              >
                Google Play
              </a>

              {/* NEW CTA */}
              <Link
                to="/onboarding"
                className="px-6 py-3 border border-[#d4af77]/40 text-[#d4af77] rounded-xl font-semibold hover:bg-[#d4af77]/10 transition backdrop-blur-sm"
              >
                Start Onboarding
              </Link>
            </div>

            {/* TRUST STATS */}
            <div className="grid grid-cols-3 gap-6 max-w-lg">
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af77] text-[#d4af77]" />
                  ))}
                </div>
                <p className="text-xl font-bold text-[#d4af77]">4.9</p>
                <p className="text-xs text-gray-500">User Rating</p>
              </div>

              <div className="text-center">
                <Download className="w-7 h-7 text-[#d4af77] mx-auto mb-1" />
                <p className="text-xl font-bold text-[#d4af77]">50K+</p>
                <p className="text-xs text-gray-500">Active Users</p>
              </div>

              <div className="text-center">
                <Shield className="w-7 h-7 text-[#d4af77] mx-auto mb-1" />
                <p className="text-xl font-bold text-[#d4af77]">Trusted</p>
                <p className="text-xs text-gray-500">Since 2020</p>
              </div>
            </div>
          </div>

          {/* RIGHT MOCKUP */}
          <div className="relative fade-up delay-200 flex justify-center">
            <div className="relative w-[260px] lg:w-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/20 to-[#c89d5f]/20 rounded-[2.5rem] blur-2xl" />
              
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-[2.5rem] border border-white/10">
                <div className="bg-[#0a0a0f] rounded-[2.2rem] overflow-hidden">
                  <div className="p-5 pt-8">
                    <div className="text-center mb-6">
                      <p className="text-xs text-gray-400 mb-1">Total Leads</p>
                      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">
                        12,847
                      </h2>
                      <p className="text-green-400 text-xs mt-1 flex justify-center gap-1">
                        <TrendingUp className="w-3 h-3" /> +32%
                      </p>
                    </div>

                    <div className="space-y-3">
                      {[
                        { name: "Hot Leads", value: "4,240", change: "+18%" },
                        { name: "Warm Prospects", value: "5,890", change: "+25%" }
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="bg-white/5 border border-white/10 rounded-lg p-3"
                        >
                          <div className="flex justify-between">
                            <div>
                              <p className="text-sm">{item.name}</p>
                              <p className="text-xs text-gray-500">{item.value}</p>
                            </div>
                            <span className="text-green-400 text-xs">
                              {item.change}
                            </span>
                          </div>
                        </div>
                      ))}

                      <div className="flex items-end gap-2 h-16 mt-4">
                        {[40, 60, 45, 80, 90, 70, 100].map((h, i) => (
                          <div
                            key={i}
                            className="bg-green-400/70 w-3 rounded"
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
      </div>
    </section>
  );
};

export default Hero;
