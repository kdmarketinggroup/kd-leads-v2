import React from "react";

const BreakthroughSection: React.FC = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af77]/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center fade-up">
          <div className="inline-block mb-6 px-6 py-3 rounded-full bg-[#d4af77]/10 border border-[#d4af77]/20 backdrop-blur-sm">
            <span className="text-sm text-[#d4af77] font-semibold">THE BREAKTHROUGH DISCOVERY</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-12 leading-tight">
            A breakthrough discovery that helps businesses capture more leads and close more deals
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">
              Smarter lead generation and sales pipeline management
            </span>
          </h2>

          <div className="space-y-8 text-xl text-gray-400 leading-relaxed mb-12">
            <p>
              We studied millions of lead interactions and sales conversations to find the patterns that actually move deals forward. What stood out was not luck or bigger budgets. It was the ability to capture intent, respond quickly, and follow through with the right cadence.
            </p>

            <p>
              KD Leads uses AI lead scoring and smart routing to surface the leads most likely to convert. When you combine that with marketing automation and automated follow ups you stop losing opportunities and start building predictable revenue.
            </p>

            <p>
              The small opportunities matter. Micro actions like a timely follow up or an in app invoice can compound into major results. KD Leads automates the busy work so teams can focus on relationships and closing deals.
            </p>

            <p className="text-2xl text-white font-semibold">
              This is not theory. This is proven performance and repeatable growth for small businesses and sales teams using KD Leads.
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#d4af77]/50 to-transparent"></div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                number: "156%",
                label: "Average pipeline growth",
                sublabel: "Measured in the first 12 months"
              },
              {
                number: "10M+",
                label: "Active users",
                sublabel: "Trusted by teams in over 120 countries"
              },
              {
                number: "4.9/5",
                label: "User rating",
                sublabel: "Over 50 thousand reviews"
              }
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
