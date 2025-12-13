import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { FEATURES } from "../data/features";

const Features = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  /* ---------- Scroll tracking + active card ---------- */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onScroll = () => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      setProgress((slider.scrollLeft / maxScroll) * 100);

      const cards = Array.from(slider.children) as HTMLElement[];
      let closest = 0;
      let minDistance = Infinity;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;
        const distance = Math.abs(cardCenter - sliderCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closest = index;
        }
      });

      setActiveIndex(closest);
    };

    slider.addEventListener("scroll", onScroll, { passive: true });
    return () => slider.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- Deep link auto-scroll ---------- */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slug = location.pathname.split("/features/")[1];
    if (!slug) return;

    const index = FEATURES.findIndex(f => f.slug === slug);
    if (index === -1) return;

    const card = slider.children[index] as HTMLElement;
    if (!card) return;

    slider.scrollTo({
      left: card.offsetLeft - slider.clientWidth / 2 + card.offsetWidth / 2,
      behavior: "smooth"
    });

    setActiveIndex(index);
  }, [location.pathname]);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Scroll progress bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
        <motion.div
          className="h-1 bg-gradient-to-r from-[#d4af77] to-[#c89d5f]"
          animate={{ width: `${progress}%` }}
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
        className="flex gap-10 overflow-x-scroll px-6 pb-12 snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {FEATURES.map((item, i) => (
          <motion.div
            key={item.slug}
            className="min-w-[300px] md:min-w-[420px] snap-center cursor-pointer"
            onClick={() => navigate(`/features/${item.slug}`)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10 rounded-3xl overflow-hidden"
            >
              {/* Image + skeleton */}
              <div className="relative h-64 bg-white/5">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  onLoad={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.nextElementSibling?.remove();
                  }}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700"
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
