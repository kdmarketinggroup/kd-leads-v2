import React, { useEffect, useRef, useState } from "react";

const features = [
  { src: "/features/EST.png", title: "Estimates", desc: "Create and send professional estimates that convert faster and stay organized." },
  { src: "/features/INV.png", title: "Invoices", desc: "Send invoices, accept payments, and track cash flow without friction." },
  { src: "/features/POS.png", title: "Point of Sale", desc: "Take payments on the spot with an integrated POS system." },
  { src: "/features/appointments.png", title: "Appointments & Calendar", desc: "Schedule jobs, manage calendars, and keep your team aligned." },
  { src: "/features/dashboard.png", title: "Main Dashboard", desc: "See your entire business performance at a glance." },
  { src: "/features/inbox.png", title: "Unified Inbox", desc: "All SMS, email, and conversations in one place." },
  { src: "/features/media.png", title: "Media Storage", desc: "Store documents, photos, and files securely." },
  { src: "/features/pipeline.png", title: "Sales Pipeline", desc: "Track deals visually from new lead to closed sale." },
  { src: "/features/review.png", title: "Review Management", desc: "Collect, manage, and showcase customer reviews." },
  { src: "/features/social-planner.png", title: "Social Planner", desc: "Plan and schedule social content from one dashboard." }
];

const Features = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<any>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [active, setActive] = useState<any>(null);

  /* ---------- Auto Scroll ---------- */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    autoScrollRef.current = setInterval(() => {
      if (!isPaused) {
        slider.scrollLeft += 0.6;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
    }, 16);

    return () => clearInterval(autoScrollRef.current);
  }, [isPaused]);

  /* ---------- Drag Scroll ---------- */
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const startDrag = (e: any) => {
    isDown = true;
    setIsPaused(true);
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = sliderRef.current!.scrollLeft;
  };

  const stopDrag = () => {
    isDown = false;
    setIsPaused(false);
  };

  const onDrag = (e: any) => {
    if (!isDown) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 1.4;
    sliderRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Heading */}
      <div className="container mx-auto px-6 lg:px-12 text-center mb-20">
        <p className="text-sm text-[#d4af77] font-semibold mb-3">FEATURES</p>
        <h2 className="text-4xl lg:text-6xl font-bold mb-6">
          One platform to run your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">
            entire business
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          From lead capture to invoicing, payments, communication, and growth.
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={sliderRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onMouseDown={startDrag}
        onMouseUp={stopDrag}
        onMouseMove={onDrag}
        onTouchStart={startDrag}
        onTouchEnd={stopDrag}
        onTouchMove={onDrag}
        className="flex gap-10 overflow-x-scroll px-6 pb-10 scroll-smooth cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none" }}
      >
        {[...features, ...features].map((item, i) => (
          <div
            key={i}
            onClick={() => setActive(item)}
            className="min-w-[300px] md:min-w-[420px] snap-center group transition-all duration-500"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl group-hover:scale-105">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-6">
          <div className="relative max-w-5xl w-full bg-black rounded-3xl border border-white/10 overflow-hidden animate-fadeIn">
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 text-white text-xl hover:opacity-70"
            >
              ✕
            </button>

            <img
              src={active.src}
              alt={active.title}
              className="w-full max-h-[75vh] object-contain bg-black"
            />

            <div className="p-8 text-center">
              <h3 className="text-3xl font-bold mb-3">{active.title}</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">{active.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;
