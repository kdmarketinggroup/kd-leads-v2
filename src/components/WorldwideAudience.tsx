import React from "react";
import { Globe, Users, Award } from "lucide-react";

const testimonials = [
  {
    image: "person1",
    quote:
      "KD Leads cleaned up our sales chaos — we went from scattered spreadsheets to a predictable pipeline. Closed 42 high-value deals in the first 6 months.",
    author: "Amit Sharma",
    location: "Bengaluru, India",
    result: "+42 deals"
  },
  {
    image: "person2",
    quote:
      "Automated follow-ups saved our reps hours every week. Our response rate jumped and we recovered dozens of lost opportunities.",
    author: "Olivia Bennett",
    location: "London, UK",
    result: "+38% replies"
  },
  {
    image: "person3",
    quote:
      "Invoicing and payment collection built into the app made closing so much smoother — cashflow improved almost immediately.",
    author: "Carlos Mendes",
    location: "Lisbon, Portugal",
    result: "+$46K revenue"
  },
  {
    image: "person4",
    quote:
      "The dashboard and performance reports let me see pipeline health at a glance. Our forecasting is actually useful now.",
    author: "Priya Nair",
    location: "Mumbai, India",
    result: "Forecast ✓"
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
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">businesses</span> across the globe
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real teams using KD Leads to capture more leads, automate follow-ups, invoice faster, and close deals with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="fade-up group" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-[#d4af77]/20 hover:border-[#d4af77]/40 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/20 via-transparent to-[#c89d5f]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative p-6">
                  <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-[#d4af77]/20 to-[#c89d5f]/20 mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-xl bg-black/30 flex items-center justify-center text-sm text-[#d4af77] font-semibold">
                      {testimonial.author.split(" ").map(n => n[0]).slice(0,2).join("")}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="inline-block px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30">
                      <span className="text-green-400 font-bold text-lg">{testimonial.result}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">“{testimonial.quote}”</p>

                  <div className="pt-4 border-t border-white/10">
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>

                  <div className="mt-4">
                    <div className="h-px bg-gradient-to-r from-[#d4af77]/50 via-[#c89d5f]/50 to-[#d4af77]/50" />
                    <p className="text-xs text-center text-gray-600 mt-2 italic">Verified KD Leads user</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto fade-up">
          {[
            { icon: Globe, stat: "120+", label: "Countries" },
            { icon: Users, stat: "10M+", label: "Active Users" },
            { icon: Award, stat: "#1", label: "Sales & CRM App" }
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
