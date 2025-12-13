import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0f] overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/5 via-transparent to-[#b88a4a]/5" />

      <div className="relative container mx-auto px-6 lg:px-12 pt-20 pb-10">
        {/* Main row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          {/* LEFT: Logo + description */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/kd_leads_icon.png"
                alt="KD Leads Logo"
                className="w-10 h-10 rounded-xl object-contain"
              />
              <h3 className="text-2xl font-bold">KD Lead</h3>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Empowering businesses to capture, qualify, and convert more leads
              through intelligent technology.
            </p>
          </div>

          {/* RIGHT: Social + copyright */}
          <div className="flex flex-col items-start lg:items-end">
            {/* Social icons */}
            <div className="flex gap-4 mb-6">
              <a
                href="https://x.com/kd_marketting"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KD Leads on X"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#d4af77] hover:border-[#d4af77]/40 hover:bg-[#d4af77]/10 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/kdmarketinggroup1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KD Leads on Facebook"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#d4af77] hover:border-[#d4af77]/40 hover:bg-[#d4af77]/10 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/kdmarketinggroup/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KD Leads on Instagram"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#d4af77] hover:border-[#d4af77]/40 hover:bg-[#d4af77]/10 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/company/kdmarketinggroup/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KD Leads on LinkedIn"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#d4af77] hover:border-[#d4af77]/40 hover:bg-[#d4af77]/10 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500 text-left lg:text-right">
              © 2024 KD Marketing Group. All rights reserved.
            </p>
          </div>
        </div>
{/* Made with love by AJ - instagram.com/Taggingmydad */}
        {/* Divider */}
        <div className="mt-12 h-px bg-white/10" />
      </div>
    </footer>
  );
};

export default Footer;
