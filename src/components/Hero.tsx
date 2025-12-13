import React from "react";
import {
  Star,
  Download,
  Shield,
  TrendingUp,
  ArrowRight,
  Apple,
  Play
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/5 via-transparent to-[#b88a4a]/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af77]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#b88a4a]/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[#d4af77]/10 border border-[#d4af77]/20 backdrop-blur-sm">
              <span className="text-sm text-[#d4af77]">
                Transform Clicks Into Customers
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Generate More <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">
                Quality Leads
              </span>{" "}
              <br />
              Every Single Day
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-xl">
              The all-in-one platform to capture, qualify, and convert leads.
              Thousands of businesses grow faster with KD Leads.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
  {/* Apple */}
  <a
    href="https://apps.apple.com/in/app/kd-leads/id6743548012"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-[1.03] transition"
  >
    <img
      src="/badges/appstore.svg"
      alt="Download on the App Store"
      className="h-[56px]"
    />
  </a>

  {/* Google Play */}
  <a
    href="https://play.google.com/store/apps/details?id=com.kdleads"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-[1.03] transition"
  >
    <img
      src="/badges/googleplay.svg"
      alt="Get it on Google Play"
      className="h-[56px]"
    />
  </a>

  {/* Onboarding CTA */}
  <a
    href="https://onboardingplan.netlify.app/"
    className="flex items-center gap-3 px-6 py-4 rounded-xl border border-[#d4af77]/40 text-[#d4af77] font-semibold hover:bg-[#d4af77]/10 transition"
  >
    <span className="text-lg">✨</span>
    Start Onboarding
  </a>
</div>


            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 max-w-lg">
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#d4af77] text-[#d4af77]"
                    />
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
          <div className="flex justify-center">
            <div className="relative w-[300px] lg:w-[360px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/20 to-[#c89d5f]/20 rounded-[2.5rem] blur-3xl" />

              <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-[2.5rem] border border-white/10 shadow-2xl">
                <div className="bg-[#0a0a0f] rounded-[2rem] p-6">
                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-400">Total Leads</p>
                    <h2 className="text-4xl font-bold text-[#d4af77]">
                      12,847
                    </h2>
                    <p className="text-green-400 text-sm flex justify-center items-center gap-1">
                      <TrendingUp className="w-4 h-4" /> +32%
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex justify-between">
                      <span>Hot Leads</span>
                      <span className="text-green-400">+18%</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex justify-between">
                      <span>Warm Prospects</span>
                      <span className="text-green-400">+25%</span>
                    </div>
                  </div>

                  <div className="flex items-end gap-2 h-24">
                    {[40, 60, 45, 80, 90, 70, 100].map((h, i) => (
                      <div
                        key={i}
                        className="w-4 bg-green-400/70 rounded"
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
    </section>
  );
};

export default Hero;
