import React from "react";

const features = [
  {
    src: "/features/EST.png",
    title: "Estimates",
    description:
      "Create and send professional estimates in seconds. Convert approved estimates directly into invoices without duplicate work."
  },
  {
    src: "/features/INV.png",
    title: "Invoices",
    description:
      "Send invoices, track payments, and manage billing from one centralized dashboard designed for growing businesses."
  },
  {
    src: "/features/POS.png",
    title: "Point of Sale",
    description:
      "Accept payments instantly with an integrated point of sale system that keeps your sales and records perfectly synced."
  },
  {
    src: "/features/appointments.png",
    title: "Appointments & Calendar",
    description:
      "Schedule appointments, manage calendars, and avoid double bookings with real time availability tracking."
  },
  {
    src: "/features/dashboard.png",
    title: "Main Dashboard",
    description:
      "Get a complete overview of leads, revenue, tasks, and performance from one powerful business dashboard."
  },
  {
    src: "/features/inbox.png",
    title: "Unified Inbox",
    description:
      "Keep all customer conversations in one place including SMS, email, and follow ups so nothing slips through."
  },
  {
    src: "/features/media.png",
    title: "Media Storage",
    description:
      "Store files, documents, and customer media securely and access them instantly from anywhere."
  },
  {
    src: "/features/pipeline.png",
    title: "Sales Pipeline",
    description:
      "Track every deal from first contact to closed sale using a clean, visual sales pipeline."
  },
  {
    src: "/features/review.png",
    title: "Review Management",
    description:
      "Collect, manage, and respond to customer reviews to build trust and improve local visibility."
  },
  {
    src: "/features/social-planner.png",
    title: "Social Planner",
    description:
      "Plan, schedule, and manage social media posts directly from your CRM to stay consistent online."
  }
];

const Features = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af77]/5 to-transparent" />

      {/* Header */}
      <div className="container mx-auto px-6 lg:px-12 mb-16 text-center">
        <p className="text-sm text-[#d4af77] font-semibold mb-3">
          PRODUCT FEATURES
        </p>

        <h2 className="text-4xl lg:text-6xl font-bold mb-6">
          Everything you need to run your business with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">
            KD Leads
          </span>
        </h2>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          From lead capture and sales pipelines to invoicing, payments, reviews,
          and social planning. KD Leads replaces scattered tools with one powerful system.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]">
          {[...features, ...features].map((item, index) => (
            <div
              key={index}
              className="min-w-[320px] md:min-w-[420px] bg-gradient-to-br from-gray-900/70 to-black/70 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm shadow-xl"
            >
              <div className="relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent" />

      {/* Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Features;
