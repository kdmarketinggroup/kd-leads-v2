import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-20 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#d4af77]/5"></div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/kd_leads_icon.png" alt="KD Leads" className="w-12 h-12 rounded-xl" />
              <span className="text-xl font-bold">KD Leads</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering businesses to capture, qualify, and convert more leads through intelligent technology.
            </p>
            <div className="flex gap-4">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#d4af77]/20 hover:border-[#d4af77]/30 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-3">
              {['Features', 'Security', 'Pricing', 'API', 'Roadmap'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[#d4af77] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Press', 'Partners'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[#d4af77] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              {['Help Center', 'Community', 'Guides', 'Webinars', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[#d4af77] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 KD Leads. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-[#d4af77] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-[#d4af77] transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-[#d4af77] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
