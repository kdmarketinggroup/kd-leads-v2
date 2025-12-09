import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Mehta",
    role: "Sales Manager",
    content:
      "KD Leads stopped deals from slipping through the cracks. Automated follow-ups and clear pipeline stages helped my team close 3x more qualified meetings.",
    rating: 5
  },
  {
    name: "Natasha Singh",
    role: "Head of Marketing",
    content:
      "We doubled our lead-to-opportunity rate by centralizing capture and automations. The built-in campaign tracking made optimization straightforward.",
    rating: 5
  },
  {
    name: "Omar Khalid",
    role: "Operations Lead",
    content:
      "No more messy spreadsheets. All conversations, notes, and tasks live in one place, our reps save hours every week and nothing falls through.",
    rating: 5
  },
  {
    name: "Leah Parker",
    role: "Agency Owner",
    content:
      "Invoicing and payment collection inside the app sped up cashflow. Closing a deal and issuing an invoice now takes minutes, not days.",
    rating: 5
  },
  {
    name: "Arjun Rao",
    role: "Head of Revenue",
    content:
      "The dashboard and forecasting tools finally give us reliable numbers. We can spot pipeline gaps at a glance and act before opportunities cool off.",
    rating: 5
  },
  {
    name: "Maya Roy",
    role: "Startup Founder",
    content:
      "KD Leads is like having a sales ops team in the app. Custom workflows routed leads to the right people and our conversion rate improved visibly.",
    rating: 5
  }
];

const SocialProof: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    let rafId: number | null = null;

    const step = () => {
      scrollPosition += 0.4;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af77]/5 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">
              growing teams worldwide
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how sales teams and founders streamline pipeline, automate follow-ups, and close more deals with KD Leads.
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden pb-4 px-6 lg:px-12"
        style={{ scrollBehavior: "auto" }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[400px] bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af77]/20 rounded-2xl p-6 hover:border-[#d4af77]/40 transition-all duration-300 group"
            aria-hidden={index >= testimonials.length ? "true" : "false"}
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">“{testimonial.content}”</p>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af77] to-[#b88a4a] flex items-center justify-center text-sm font-bold text-black">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
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
