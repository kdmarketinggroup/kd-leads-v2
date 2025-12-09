import React from 'react';

const BreakthroughSection = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af77]/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center fade-up">
          <div className="inline-block mb-6 px-6 py-3 rounded-full bg-[#d4af77]/10 border border-[#d4af77]/20 backdrop-blur-sm">
            <span className="text-sm text-[#d4af77] font-semibold">THE BREAKTHROUGH DISCOVERY</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-12 leading-tight">
            A <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">Breakthrough Discovery</span> That Allows Users to Build Wealth Faster
          </h2>

          <div className="space-y-8 text-xl text-gray-400 leading-relaxed mb-12">
            <p>
              After analyzing <span className="text-[#d4af77] font-semibold">billions of financial transactions</span> and studying the patterns of successful investors, our team made a startling discovery.
            </p>

            <p>
              The difference between those who build wealth and those who don't isn't luck, intelligence, or even starting capital. <span className="text-[#d4af77] font-semibold">It's timing and pattern recognition.</span>
            </p>

            <p>
              Our proprietary algorithm identifies <span className="text-[#d4af77] font-semibold">micro-opportunities</span> that most people miss completely. These small, calculated moves compound into extraordinary results over time.
            </p>

            <p className="text-2xl text-white font-semibold">
              This isn't theory. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">This is proven, measurable, repeatable success.</span>
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#d4af77]/50 to-transparent"></div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { number: "156%", label: "Average Portfolio Growth", sublabel: "First 12 months" },
              { number: "10M+", label: "Active Users", sublabel: "Across 120 countries" },
              { number: "4.9/5", label: "User Rating", sublabel: "50K+ reviews" }
            ].map((stat, index) => (
              <div key={index} className="fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af77]/20 rounded-2xl p-8 hover:border-[#d4af77]/40 transition-all duration-300">
                  <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f] mb-3">
                    {stat.number}
                  </p>
                  <p className="text-white font-semibold mb-2">{stat.label}</p>
                  <p className="text-sm text-gray-500">{stat.sublabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakthroughSection;
