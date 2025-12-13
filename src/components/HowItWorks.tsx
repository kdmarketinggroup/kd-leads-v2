import React from "react";
import { Smartphone, Brain, TrendingUp, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Install the App and Connect Your Tools",
    description:
      "Get started in minutes. Connect your CRM, email, and other tools securely. KD Leads brings all lead sources into one place for faster follow-ups.",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Lead Scoring and Insight",
    description:
      "KD Leads analyzes behavior patterns and scores each lead so your team focuses only on prospects most likely to convert.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Automated Workflows and Smart Recommendations",
    description:
      "Create automated follow-ups and one-click workflows. KD Leads recommends the next best action for every prospect.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Close Deals and Invoice Faster",
    description:
      "Track conversions in real time and send invoices inside the app. Improve cash flow and reduce admin work.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af77]/5 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            How KD Leads Works
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">
              Four simple steps to capture leads and close deals
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From lead capture to automation, invoicing, and growth — KD Leads
            supports your entire sales workflow.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-28">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center`}
              >
                {/* Text */}
                <div className={`fade-up ${isEven ? "" : "lg:order-2"}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d4af77] to-[#b88a4a] flex items-center justify-center">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77]/30 to-[#c89d5f]/30">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>

                {/* Mockup */}
                <div className={`fade-up delay-200 ${isEven ? "" : "lg:order-1"}`}>
                  <div className="relative flex justify-center">
                    {/* Glow (reduced) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/15 to-[#c89d5f]/15 rounded-[2.5rem] blur-2xl" />

                    {/* Phone container */}
                    <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-[2.5rem] border border-white/10 shadow-xl max-w-[300px] w-full">
                      <div className="bg-[#0a0a0f] rounded-[2rem] overflow-hidden">
                        <div className="relative aspect-[9/18]">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-2xl z-10" />

                          {/* Placeholder UI */}
                          <div className="h-full flex items-center justify-center text-gray-500 text-sm">
                            App Preview
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
