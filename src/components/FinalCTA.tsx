import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const navigate = useNavigate();
  const location = useLocation();

  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ---------------- Scroll tracking ---------------- */
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

  /* ---------------- Deep link support ---------------- */
  useEffect(() => {
    if (!sliderRef.current) return;

    const slug = location.pathname.split("/features/")[1];
    if (!slug) return;

    const index = FEATURES.findIndex(f => f.slug === slug);
    if (index === -1) return;

    const slider = sliderRef.current;
    const cardWidth = slider.scrollWidth / FEATURES.length;

    slider.scrollTo({
      left: cardWidth * index,
      behavior: "smooth"
    });

    setActiveIndex(index);
  }, [location.pathname]);

  /* ---------------- Arrow navigation ---------------- */
  const scrollByCard = (dir: "left" | "right") => {
    if (!sliderRef.current) return;

    const cardWidth = sliderRef.current.scrollWidth / FEATURES.length;

    sliderRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth"
    });
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
        <motion.div
          className="h-1 bg-gradient-to-r from-[#d4af77] to-[#c89d5f]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header */}
      <div className="container mx-auto px-6 lg:px-12 text-center mb-20">
        <p className="text-sm font-semibold text-[#d4af77] mb-3">FEATURES</p>
        <h2 className="text-4xl lg:text-6xl font-bold mb-6">
          Explore everything that powers{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">
            KD Leads
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Swipe, scroll, or click through each feature that helps you close faster and grow smarter.
        </p>
      </div>

      {/* Arrow buttons */}
      <button
        onClick={() => scrollByCard("left")}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 border border-white/10 items-center justify-center hover:bg-black transition"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => scrollByCard("right")}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 border border-white/10 items-center justify-center hover:bg-black transition"
      >
        <ChevronRight />
      </button>

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
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10 rounded-3xl overflow-hidden"
            >
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
