import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FEATURES = [
  { slug: "estimates", title: "Estimates", img: "/features/EST.png", desc: "Create fast, professional estimates that close deals quicker." },
  { slug: "invoices", title: "Invoices", img: "/features/INV.png", desc: "Send invoices, accept payments, and track revenue effortlessly." },
  { slug: "pos", title: "Point of Sale", img: "/features/POS.png", desc: "Collect payments on site with an integrated POS system." },
  { slug: "appointments", title: "Appointments & Calendar", img: "/features/appointments.png", desc: "Manage jobs, schedules, and team availability in one place." },
  { slug: "dashboard", title: "Main Dashboard", img: "/features/dashboard.png", desc: "View your entire business performance at a glance." },
  { slug: "inbox", title: "Unified Inbox", img: "/features/inbox.png", desc: "All conversations, SMS, and emails in one inbox." },
  { slug: "media", title: "Media Storage", img: "/features/media.png", desc: "Securely store photos, documents, and files." },
  { slug: "pipeline", title: "Sales Pipeline", img: "/features/pipeline.png", desc: "Track every deal from lead to close visually." },
  { slug: "reviews", title: "Review Management", img: "/features/review.png", desc: "Collect and manage customer reviews automatically." },
  { slug: "social-planner", title: "Social Planner", img: "/features/social-planner.png", desc: "Plan, schedule, and manage social posts easily." }
];

const Features = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  /* ---------- Scroll Progress + Active Card ---------- */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onScroll = () => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const scrolled = slider.scrollLeft / maxScroll;
      setProgress(scrolled * 100);

      const cardWidth = slider.scrollWidth / FEATURES.length;
      setActiveIndex(Math.round(slider.scrollLeft / cardWidth));
    };

    slider.addEventListener("scroll", onScroll);
    return () => slider.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
        <motion.div
          className="h-1 bg-gradient-to-r from-[#d4af77] to-[#c89d5f]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Heading */}
      <div className="container mx-auto px-6 lg:px-12 text-center mb-20">
        <p className="text-sm font-semibold text-[#d4af77] mb-3">FEATURES</p>
        <h2 className="text-4xl lg:text-6xl font-bold mb-6">
          Everything you need to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">
            run & grow your business
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          From lead capture to invoicing, payments, automation, and growth.
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={sliderRef}
        className="flex gap-10 overflow-x-scroll px-6 pb-12 scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {FEATURES.map((item, i) => (
          <motion.div
            key={item.slug}
            onClick={() => navigate(`/features/${item.slug}`)}
            className="min-w-[300px] md:min-w-[420px] snap-center cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              animate={{
                scale: i === activeIndex ? 1.05 : 0.95,
                boxShadow:
                  i === activeIndex
                    ? "0 0 40px rgba(212,175,119,0.35)"
                    : "0 0 0 rgba(0,0,0,0)"
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10 rounded-3xl overflow-hidden"
            >
              {/* Skeleton Loader */}
              <div className="relative h-64 bg-white/5">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                  onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                  style={{ opacity: 0 }}
                />
                <div className="absolute inset-0 animate-pulse bg-white/10" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
