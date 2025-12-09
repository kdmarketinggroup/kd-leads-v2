import React from "react";
import { TrendingUp } from "lucide-react";

const WonderedSection: React.FC = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/5 via-transparent to-[#c89d5f]/5" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Ever wonder <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">why some teams close more deals?</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                The answer isn't hustle — it's systems. KD Leads composes your entire sales workflow into a single, reliable engine so your team spends time closing, not searching.
              </p>

              <p>
                From unified lead capture and automatic follow-ups to in-app invoicing and performance dashboards, KD Leads gives you <span className="text-[#d4af77] font-semibold">the tools to scale predictably</span>.
              </p>

              <p>
                Imagine every lead routed to the right rep, followed up at the right cadence, and progressed through a transparent pipeline — with payments and reporting handled automatically.
              </p>

              <p>
                This isn’t guesswork. <span className="text-[#d4af77] font-semibold">It’s KD Leads.</span>
              </p>
            </div>
          </div>

          <div className="fade-up delay-200">
            <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-[#d4af77]/20 rounded-3xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/10 to-[#c89d5f]/10 rounded-3xl blur-2xl pointer-events-none" />

              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Average Pipeline Growth</p>
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">+156%</p>
                  </div>
                  <div className="bg-[#d4af77]/20 p-3 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-[#d4af77]" />
                  </div>
                </div>

                <div className="relative h-64">
                  <svg className="w-full h-full" viewBox="0 0 400 250" fill="none" aria-hidden>

                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#d4af77" />
                        <stop offset="100%" stopColor="#c89d5f" />
                      </linearGradient>

                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#d4af77" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#d4af77" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M 0 200 C 50 180, 100 160, 150 140 C 190 120, 210 100, 250 85 C 290 70, 330 50, 400 30"
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M 0 200 C 50 180, 100 160, 150 140 C 190 120, 210 100, 250 85 C 290 70, 330 50, 400 30 L 400 250 L 0 250 Z"
                      fill="url(#chartGradient)"
                    />
                    
                    {[
                      { x: 0, y: 200 },
                      { x: 50, y: 180 },
                      { x: 100, y: 160 },
                      { x: 150, y: 140 },
                      { x: 200, y: 100 },
                      { x: 250, y: 85 },
                      { x: 300, y: 70 },
                      { x: 350, y: 50 },
                      { x: 400, y: 30 }
                    ].map((pt, i) => (
                      <circle
                        key={i}
                        cx={pt.x}
                        cy={pt.y}
                        r="4"
                        fill="#d4af77"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.08}s` }}
                      />
                    ))}
                  </svg>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                  <div>
                    <p className="text-2xl font-bold text-[#d4af77]">2.4x</p>
                    <p className="text-xs text-gray-500">Lead Velocity</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#c89d5f]">87%</p>
                    <p className="text-xs text-gray-500">Follow-up Completion</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#c89d5f]">24/7</p>
                    <p className="text-xs text-gray-500">Automation Uptime</p>
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

export default WonderedSection;
