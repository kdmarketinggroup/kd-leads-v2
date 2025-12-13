import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

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

const FinalCTA = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  /* ---------------- Scroll + Active Card ---------------- */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onScroll = () => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      setProgress((slider.scrollLeft / maxScroll) * 100);

      const cardWidth = slider.scrollWidth / FEATURES.length;
      setActiveIndex(Math.round(slider.scrollLeft / cardWidth));
    };

    slider.addEventListener("scroll", onScroll);
    return () => slider.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- Deep link auto-scroll ---------------- */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slug = location.pathname.split("/features/")[1];
    if (!slug) return;

    const index = FEATURES.findIndex(f => f.slug === slug);
    if (index === -1) return;

    const cardWidth = slider.scrollWidth / FEATURES.length;

    slider.scrollTo({
      left: cardWidth * index,
      behavior: "smooth"
    });

    setActiveIndex(index);
  }, [location.pathname]);

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
            run and grow your business
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          From estimates and invoicing to automation, reviews, and growth tools.
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={sliderRef}
        className="flex gap-10 overflow-x-scroll px-6 pb-12 snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {FEATURES.map((item, i) => (
          <motion.div
            key={item.slug}
            onClick={() => navigate(`/features/${item.slug}`)}
            className="min-w-[300px] md:min-w-[420px] snap-center cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{
                scale: i === activeIndex ? 1.05 : 0.95,
                boxShadow:
                  i === activeIndex
                    ? "0 0 40px rgba(212,175,119,0.35)"
                    : "none"
              }}
              transition={{ type: "spring", stiffness: 180, damping: 24 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10 rounded-3xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 bg-white/5">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
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

export default FinalCTA;
