import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Entrepreneur",
    content: "This app completely transformed my investment strategy. I've seen returns I never thought possible.",
    rating: 5
  },
  {
    name: "James Rodriguez",
    role: "Software Engineer",
    content: "The insights are incredible. Finally, an app that makes financial planning actually enjoyable.",
    rating: 5
  },
  {
    name: "Emily Chen",
    role: "Marketing Director",
    content: "I've tried countless financial apps. This is the only one I actually use every single day.",
    rating: 5
  },
  {
    name: "Michael Thompson",
    role: "Business Owner",
    content: "My portfolio has grown by 40% since I started using this app. Absolutely game-changing.",
    rating: 5
  },
  {
    name: "Lisa Anderson",
    role: "Financial Analyst",
    content: "As a professional, I'm impressed by the depth and accuracy of the analytics provided.",
    rating: 5
  },
  {
    name: "David Park",
    role: "Investor",
    content: "This is the future of personal finance. Clean, powerful, and incredibly intuitive.",
    rating: 5
  }
];

const SocialProof = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af77]/5 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">Millions Worldwide</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See what our community is saying about their financial transformation
          </p>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-6 overflow-x-hidden pb-4" style={{ scrollBehavior: 'auto' }}>
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[400px] bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af77]/20 rounded-2xl p-6 hover:border-[#d4af77]/40 transition-all duration-300 group"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af77] to-[#b88a4a] flex items-center justify-center text-lg font-bold">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
