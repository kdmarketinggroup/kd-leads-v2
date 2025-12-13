import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0f] overflow-hidden">
      {/* subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/5 via-transparent to-[#b88a4a]/5" />

      <div className="relative container mx-auto px-6 lg:px-12 py-20">
        {/* Main footer content */}
        <div className="max-w-xl">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#d4af77]/20 flex items-center justify-center text-[#d4af77] font-bold">
              KD
            </div>
            <h3 className="text-2xl font-bold">KD Leads</h3>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-8">
            Empowering businesses to capture, qualify, and convert more leads
            through intelligent technology.
          </p>

          {/* Social icons */}
          <div className="flex gap-4">
            {[
              { icon: Twitter },
              { icon: Facebook },
              { icon: Instagram },
              { icon: Linkedin }
            ].map((Item, i) => (
              <div
                key={i}
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#d4af77] hover:border-[#d4af77]/40 hover:bg-[#d4af77]/10 transition cursor-pointer"
              >
                <Item.icon className="w-5 h-5" />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2024 KD Leads. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-gray-300 transition cursor-default">
              Privacy Policy
            </span>
            <span className="hover:text-gray-300 transition cursor-default">
              Terms of Service
            </span>
            <span className="hover:text-gray-300 transition cursor-default">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
