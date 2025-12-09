import React from 'react';
import { TrendingUp } from 'lucide-react';

const WonderedSection = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/5 via-transparent to-[#c89d5f]/5"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Have You Ever <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">Wondered Why</span> Some People Build Wealth Effortlessly?
            </h2>

            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                The truth is, <span className="text-[#d4af77] font-semibold">it's not about working harder</span>. It's about having the right tools and insights at the right time.
              </p>

              <p>
                Most financial apps give you basic tracking. We give you <span className="text-[#d4af77] font-semibold">predictive intelligence</span> that shows you exactly where your money should go next.
              </p>

              <p>
                Imagine knowing, with confidence, that every financial decision you make is <span className="text-[#d4af77] font-semibold">backed by data and proven strategies</span> used by the world's most successful investors.
              </p>

              <p>
                That's not a dream anymore. <span className="text-[#d4af77] font-semibold">That's what we built.</span>
              </p>
            </div>
          </div>

          <div className="fade-up delay-200">
            <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-[#d4af77]/20 rounded-3xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/10 to-[#c89d5f]/10 rounded-3xl blur-2xl"></div>

              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Average User Growth</p>
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">+156%</p>
                  </div>
                  <div className="bg-[#d4af77]/20 p-3 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-[#d4af77]" />
                  </div>
                </div>

                <div className="relative h-64">
                  <svg className="w-full h-full" viewBox="0 0 400 250" fill="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#d4af77" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#d4af77" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M 0 200 L 50 180 L 100 160 L 150 140 L 200 100 L 250 80 L 300 50 L 350 30 L 400 20"
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      fill="none"
                    />

                    <path
                      d="M 0 200 L 50 180 L 100 160 L 150 140 L 200 100 L 250 80 L 300 50 L 350 30 L 400 20 L 400 250 L 0 250 Z"
                      fill="url(#chartGradient)"
                    />

                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#d4af77" />
                        <stop offset="100%" stopColor="#c89d5f" />
                      </linearGradient>
                    </defs>

                    {[50, 100, 150, 200, 250, 300, 350, 400].map((x, i) => (
                      <circle
                        key={i}
                        cx={x}
                        cy={[180, 160, 140, 100, 80, 50, 30, 20][i]}
                        r="4"
                        fill="#d4af77"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </svg>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                  <div>
                    <p className="text-2xl font-bold text-[#d4af77]">2.4x</p>
                    <p className="text-xs text-gray-500">ROI Increase</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#c89d5f]">87%</p>
                    <p className="text-xs text-gray-500">Success Rate</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#c89d5f]">24/7</p>
                    <p className="text-xs text-gray-500">Monitoring</p>
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
