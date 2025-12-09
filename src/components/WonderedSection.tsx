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
              Ever wondered why some teams turn more prospects into customers?
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">
                The difference is systems that work
              </span>
            </h2>

            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                If your sales process feels chaotic or you rely on scattered spreadsheets, you are not alone. KD Leads brings everything together so you can focus on closing deals. Think unified lead capture, a single place for contact history, and clear next steps for every prospect.
              </p>

              <p>
                With KD Leads you get practical tools for better lead generation and marketing automation. The app uses AI lead scoring and smart routing so the right lead reaches the right team member at the right time. That means fewer missed opportunities and more predictable growth for your business.
              </p>

              <p>
                Small business owners, local service providers, and sales teams love KD Leads because it replaces busy work with reliable automation. Automated follow ups, in app invoicing, and secure customer data storage make it easy to move leads through your sales pipeline faster and with confidence.
              </p>

              <p>
                This is not about guesswork. KD Leads gives you clear reporting, real time performance dashboards, and tools to improve conversion rates. If you want a smarter CRM for small businesses that helps you capture more leads convert more customers and get paid faster KD Leads does that for you.
              </p>
            </div>
          </div>
          
          <div className="fade-up delay-200">
            <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-[#d4af77]/20 rounded-3xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/10 to-[#c89d5f]/10 rounded-3xl blur-2xl pointer-events-none" />

              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Average pipeline growth</p>
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">+156 percent</p>
                  </div>
                  <div className="bg-[#d4af77]/20 p-3 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-[#d4af77]" />
                  </div>
                </div>

                <div className="relative h-64" aria-hidden>
                  <svg className="w-full h-full" viewBox="0 0 400 250" fill="none">
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
                    <p className="text-xs text-gray-500">Lead velocity improvement</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#c89d5f]">87 percent</p>
                    <p className="text-xs text-gray-500">Follow up completion rate</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#c89d5f]">Around the clock</p>
                    <p className="text-xs text-gray-500">Automation uptime and reliability</p>
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
