import React, { useRef, useState } from "react";

const features = [
  { src: "/features/EST.png", title: "Estimates", desc: "Create and send professional estimates and convert them into invoices instantly." },
  { src: "/features/INV.png", title: "Invoices", desc: "Send invoices, track payments, and manage billing in one place." },
  { src: "/features/POS.png", title: "Point of Sale", desc: "Accept payments instantly with an integrated POS system." },
  { src: "/features/appointments.png", title: "Appointments & Calendar", desc: "Schedule jobs, manage calendars, and avoid double bookings." },
  { src: "/features/dashboard.png", title: "Main Dashboard", desc: "View leads, revenue, tasks, and performance at a glance." },
  { src: "/features/inbox.png", title: "Unified Inbox", desc: "All customer conversations in one inbox including SMS and email." },
  { src: "/features/media.png", title: "Media Storage", desc: "Securely store files, documents, and customer media." },
  { src: "/features/pipeline.png", title: "Sales Pipeline", desc: "Track deals visually from new lead to closed sale." },
  { src: "/features/review.png", title: "Review Management", desc: "Collect and manage customer reviews to boost trust." },
  { src: "/features/social-planner.png", title: "Social Planner", desc: "Plan and schedule social media posts from one dashboard." }
];

const Features = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [active, setActive] = useState<any>(null);

  const startDrag = (e: any) => {
    setIsDown(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const stopDrag = () => setIsDown(false);

  const onDrag = (e: any) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 1.5;
    sliderRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-16 text-center">
        <p className="text-sm text-[#d4af77] font-semibold mb-3">FEATURES</p>
        <h2 className="text-4xl lg:text-6xl font-bold mb-6">
          Explore what you can do with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">
            KD Leads
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          One platform to manage leads, sales, payments, communication, and growth.
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={sliderRef}
        onMouseDown={startDrag}
        onMouseLeave={stopDrag}
        onMouseUp={stopDrag}
        onMouseMove={onDrag}
        onTouchStart={startDrag}
        onTouchEnd={stopDrag}
        onTouchMove={onDrag}
        className="flex gap-8 overflow-x-scroll cursor-grab active:cursor-grabbing px-6 pb-8 scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {[...features, ...features].map((item, i) => (
          <div
            key={i}
            onClick={() => setActive(item)}
            className="min-w-[320px] md:min-w-[420px] bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl cursor-pointer"
          >
            <img src={item.src} alt={item.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-6">
          <div className="max-w-4xl w-full bg-black rounded-3xl border border-white/10 overflow-hidden relative">
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 text-white text-xl"
            >
              ✕
            </button>

            <img src={active.src} alt={active.title} className="w-full max-h-[70vh] object-contain bg-black" />

            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">{active.title}</h3>
              <p className="text-gray-400">{active.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;
