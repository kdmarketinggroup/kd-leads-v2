import React from 'react';
import { Globe, Users, Award } from 'lucide-react';

const testimonials = [
  {
    image: "person1",
    quote: "I went from living paycheck to paycheck to having a six-figure investment portfolio in just 3 years.",
    author: "Marcus Johnson",
    location: "New York, USA",
    result: "+$127K"
  },
  {
    image: "person2",
    quote: "This app gave me the confidence to finally start investing. Now I'm outperforming my financial advisor.",
    author: "Sophie Laurent",
    location: "Paris, France",
    result: "+€89K"
  },
  {
    image: "person3",
    quote: "The AI recommendations are scary accurate. It's like having a personal wealth manager in my pocket.",
    author: "Raj Patel",
    location: "Mumbai, India",
    result: "+₹5.2M"
  },
  {
    image: "person4",
    quote: "I retired 5 years earlier than planned, all thanks to the strategies I learned through this app.",
    author: "Elena Rodriguez",
    location: "Barcelona, Spain",
    result: "+€156K"
  }
];

const WorldwideAudience = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/10 via-transparent to-[#c89d5f]/10"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 fade-up">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-[#d4af77]/10 border border-[#d4af77]/20 backdrop-blur-sm">
            <Globe className="w-5 h-5 text-[#d4af77]" />
            <span className="text-sm text-[#d4af77] font-semibold">WORLDWIDE IMPACT</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">Millions</span> Across the Globe
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real people. Real results. Real financial transformation happening every single day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="fade-up group" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-[#d4af77]/20 hover:border-[#d4af77]/40 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/20 via-transparent to-[#c89d5f]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative p-6">
                  <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-[#d4af77]/20 to-[#c89d5f]/20 mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-[#d4af77]/40" />
                  </div>

                  <div className="mb-4">
                    <div className="inline-block px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30">
                      <span className="text-green-400 font-bold text-lg">{testimonial.result}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.quote}"</p>

                  <div className="pt-4 border-t border-white/10">
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>

                  <div className="mt-4">
                    <div className="h-px bg-gradient-to-r from-[#d4af77]/50 via-[#c89d5f]/50 to-[#d4af77]/50"></div>
                    <p className="text-xs text-center text-gray-600 mt-2 italic">Verified User</p>
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
            { icon: Award, stat: "#1", label: "Finance App" }
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
