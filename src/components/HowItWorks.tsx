import React from "react";

const STEPS = [
  {
    step: "01",
    title: "Install the App and Connect Your Tools",
    description:
      "Get started in minutes. Connect your CRM accounts, email, and other tools securely. KD Leads keeps customer data safe while bringing all lead sources into one place for easy lead generation and follow-up.",
  },
  {
    step: "02",
    title: "Capture and Organize Your Leads",
    description:
      "Automatically capture leads from all channels. Organize conversations, tag prospects, and never miss an opportunity with a unified inbox and smart lead tracking.",
  },
  {
    step: "03",
    title: "Convert More Leads Into Customers",
    description:
      "Follow up faster, automate workflows, and turn warm prospects into paying customers with intelligent insights and real-time analytics.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 space-y-32">
        {STEPS.map((item, index) => (
          <div
            key={item.step}
            className={`grid lg:grid-cols-2 gap-16 items-center ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* TEXT */}
            <div className="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af77] to-[#b88a4a] flex items-center justify-center text-black font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold">
                  {item.title}
                </h3>
              </div>

              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>

            {/* MOCKUP (FIXED HEIGHT – NO BLANK SPACE) */}
            <div className="fade-up delay-200 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[300px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/20 to-[#c89d5f]/20 rounded-[3rem] blur-3xl" />

                <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-[2.5rem] border border-white/10 shadow-2xl">
                  <div className="bg-[#0a0a0f] rounded-[2rem] overflow-hidden">
                    <div className="relative aspect-[9/19] max-h-[520px]">
                      {/* notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-3xl z-20" />

                      {/* keep your existing mockup content */}
                      <div className="h-full flex items-center justify-center text-gray-400 text-sm">
                        App Preview
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
