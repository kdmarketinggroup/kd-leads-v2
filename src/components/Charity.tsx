import React from 'react';
import { Heart, Users, Globe } from 'lucide-react';

const Charity = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/10 via-[#c89d5f]/5 to-[#c89d5f]/10"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-[#d4af77]/20 rounded-[3rem] p-12 lg:p-16 fade-up">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/10 to-[#c89d5f]/10 rounded-[3rem] blur-3xl"></div>

            <div className="relative">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-500 mb-6">
                  <Heart className="w-12 h-12" fill="currentColor" />
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Building Wealth While <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Making a Difference</span>
                </h2>

                <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
                  For every premium subscription, we donate 10% to financial literacy programs in underserved communities.
                  Your success helps create opportunities for others to achieve financial freedom.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: Users,
                    stat: "50,000+",
                    label: "Students Educated",
                    description: "Free financial literacy courses provided"
                  },
                  {
                    icon: Globe,
                    stat: "25",
                    label: "Countries Reached",
                    description: "Global impact across continents"
                  },
                  {
                    icon: Heart,
                    stat: "$2.5M+",
                    label: "Donated",
                    description: "To educational programs worldwide"
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-pink-400" />
                      </div>
                      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 mb-2">
                        {item.stat}
                      </p>
                      <p className="font-semibold mb-2">{item.label}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="text-center">
                <div className="inline-block px-6 py-3 rounded-full bg-pink-500/10 border border-pink-500/20 backdrop-blur-sm">
                  <p className="text-sm text-pink-400">
                    <span className="font-bold">Together</span>, we're creating a world where everyone has access to financial education
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charity;
