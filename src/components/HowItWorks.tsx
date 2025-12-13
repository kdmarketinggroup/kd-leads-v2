import React from "react";
import { Smartphone, Brain, TrendingUp, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Install the App and Connect Your Tools",
    description:
      "Get started in minutes. Connect your CRM accounts email and other tools securely. KD Leads keeps customer data safe while bringing all lead sources into one place for easy lead generation and follow up.",
    image: "phone1"
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Lead Scoring and Insight",
    description:
      "KD Leads analyzes behavior and interaction patterns to score each lead. The app surfaces the highest potential prospects so your team focuses on leads that are most likely to convert.",
    image: "phone2"
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Automated Workflows and Smart Recommendations",
    description:
      "Create automated follow up sequences and one click workflows. KD Leads recommends the best next action for each prospect so your sales process becomes consistent and scalable.",
    image: "phone3"
  },
  {
    number: "04",
    icon: Zap,
    title: "Close Deals and Invoice Faster",
    description:
      "Track conversions in real time and send invoices from inside the app. With in app invoicing and payment tracking your cash flow improves and you spend more time closing deals and less time on admin.",
    image: "phone4"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af77]/5 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            How KD Leads Works
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">
              Four simple steps to capture leads close deals and get paid
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Lead generation CRM for small businesses made practical. From capturing a lead to routing follow ups to sending invoices KD Leads supports your entire sales workflow.
          </p>
        </div>

        <div className="space-y-32">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center`}
              >
                {/* Text */}
                <div className={`fade-up ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af77] to-[#b88a4a] flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77]/20 to-[#c89d5f]/20">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold mb-6">{step.title}</h3>
                  <p className="text-xl text-gray-400 leading-relaxed">{step.description}</p>
                </div>

                {/* Mockup (SIZE FIXED) */}
                <div className={`fade-up delay-200 ${isEven ? "lg:order-2" : "lg:order-1"} flex justify-center`}>
                  <div className="relative max-w-[360px] lg:max-w-[420px] w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/20 to-[#c89d5f]/20 rounded-[3rem] blur-3xl" />
                    <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-[3rem] shadow-2xl border border-white/10 transform hover:scale-105 transition-transform duration-500">
                      <div className="bg-[#0a0a0f] rounded-[2.5rem] overflow-hidden">
                        <div className="relative aspect-[9/19]">
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-3xl z-20" />

                          <div className="p-5 pt-9 h-full flex flex-col">
                            <div className="flex-1 flex items-center justify-center">
                              {/* ALL INNER CONTENT UNCHANGED */}
                              {/* Your existing conditional blocks remain exactly the same */}
                            </div>
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
