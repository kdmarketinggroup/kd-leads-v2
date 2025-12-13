import React from "react";

const StepOne = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af77] to-[#b88a4a] flex items-center justify-center text-black font-bold text-lg">
                01
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Install the App and Connect Your Tools
              </h2>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Get started in minutes. Connect your CRM accounts, email, and
              other tools securely. KD Leads keeps customer data safe while
              bringing all lead sources into one place for easy lead generation
              and follow-up.
            </p>
          </div>

          {/* RIGHT MOCKUP — FIXED */}
          <div className="fade-up delay-200 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[300px] max-h-[520px]">
              
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/20 to-[#c89d5f]/20 rounded-[3rem] blur-3xl" />

              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-[2.5rem] shadow-2xl border border-white/10 h-full">
                <div className="bg-[#0a0a0f] rounded-[2rem] overflow-hidden h-full">
                  <div className="relative aspect-[9/19] h-full max-h-[520px]">
                    
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-3xl z-20" />

                    {/* EXISTING CONTENT (UNCHANGED) */}
                    <div className="p-6 pt-10 h-full flex items-center justify-center text-gray-400 text-sm">
                      App Preview
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StepOne;
