import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0f] overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/5 via-transparent to-[#b88a4a]/5" />

      <div className="relative container mx-auto px-6 lg:px-12 py-20">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          {/* LEFT: Brand block */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#d4af77]/20 flex items-center justify-center text-[#d4af77] font-bold">
                KD
              </div>
              <h3 className="text-2xl font-bold">KD Leads</h3>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Empowering businesses to capture, qualify, and convert more leads
              through intelligent technology.
            </p>
          </div>

          {/* RIGHT: Social + copyright */}
          <div className="flex flex-col items-start lg:items-end justify-between">
            {/* Social icons */}
            <div className="flex gap-4 mb-8">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#d4af77] hover:border-[#d4af77]/40 hover:bg-[#d4af77]/10 transition cursor-pointer"
                >
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © 2024 KD Leads. All rights reserved.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px bg-white/10" />
      </div>
    </footer>
  );
};

export default Footer;
