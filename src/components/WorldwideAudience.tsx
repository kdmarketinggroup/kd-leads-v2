import React from "react";
import { Globe, Users, Award } from "lucide-react";

const testimonials = [
  {
    quote:
      "KD Leads turned our messy process into a clear sales engine. We stopped losing conversations and started closing predictable deals. The automation and lead routing saved our team hours every week.",
    author: "Amit Sharma",
    location: "Bengaluru, India",
    result: "42 closed deals"
  },
  {
    quote:
      "We recovered lost opportunities because follow ups are now automatic and timely. Our reply rate improved and our small business finally has a simple CRM that actually helps us grow.",
    author: "Olivia Bennett",
    location: "London, United Kingdom",
    result: "38 percent more replies"
  },
  {
    quote:
      "Sending invoices from inside the app sped up payments and improved cash flow. Integrating invoices with lead records made reconciliation effortless and our accounting team loves it.",
    author: "Carlos Mendes",
    location: "Lisbon, Portugal",
    result: "46k additional revenue"
  },
  {
    quote:
      "The reporting dashboard changed how we forecast. Pipeline visibility means fewer surprises and more confident planning. We know which campaigns actually drive results.",
    author: "Priya Nair",
    location: "Mumbai, India",
    result: "Reliable forecasting"
  }
];

const WorldwideAudience: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/10 via-transparent to-[#c89d5f]/10" />

      <div className="container mx-auto px-6 lg:px-12">

        <div className="text-center mb-20 fade-up">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-[#d4af77]/10 border border-[#d4af77]/20 backdrop-blur-sm">
            <Globe className="w-5 h-5 text-[#d4af77]" />
            <span className="text-sm text-[#d4af77] font-semibold">WORLDWIDE IMPACT</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Businesses trust KD Leads to capture more leads and close more customers
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">
              CRM for small businesses and growing teams
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real teams use KD Leads for lead generation marketing automation AI lead scoring in app invoicing and sales pipeline management to grow revenue and reduce admin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="fade-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-[#d4af77]/20 hover:border-[#d4af77]/40 transition-all duration-300 h-full">

                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/20 via-transparent to-[#c89d5f]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative p-6 flex flex-col h-full">

                  <div className="mb-4">
                    <div className="inline-block px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30">
                      <span className="text-green-400 font-bold text-lg">{testimonial.result}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed flex-1">
                    “{testimonial.quote}”
                  </p>

                  <div className="pt-4 border-t border-white/10">
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>

                  <div className="mt-4">
                    <div className="h-px bg-gradient-to-r from-[#d4af77]/50 via-[#c89d5f]/50 to-[#d4af77]/50" />
                    <p className="text-xs text-center text-gray-600 mt-2 italic">
                      Verified KD Leads customer
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto fade-up">
          {[
            { icon: Globe, stat: "120 plus", label: "Countries served" },
            { icon: Users, stat: "10 million plus", label: "Active users" },
            { icon: Award, stat: "Top rated", label: "Sales and CRM app" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af77] to-[#b88a4a] mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f] mb-2">
                  {item.stat}
                </p>
                <p className="text-gray-400">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorldwideAudience;
