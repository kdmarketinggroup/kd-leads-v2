import React from "react";
import { Brain, Shield, Zap, PieChart, Bell, Lock } from "lucide-react";

type Feature = {
  icon: any;
  title: string;
  description: string;
  stats: string[];
};

const features: Feature[] = [
  {
    icon: Brain,
    title: "AI Insights for Better Lead Prioritization",
    description:
      "KD Leads uses AI lead scoring to highlight the prospects most likely to convert. Spend time on high value leads and stop guessing who to contact next.",
    stats: ["AI lead scoring", "Real time analysis", "Smart lead routing"]
  },
  {
    icon: Shield,
    title: "Secure Customer Data Storage",
    description:
      "Keep all customer conversations, notes, and documents in a secure central hub. We use strong encryption and best in class security practices so your data stays protected.",
    stats: ["256 bit encryption", "SOC 2 compliant practices", "Read only bank connections"]
  },
  {
    icon: Zap,
    title: "Automated Workflows and Instant Alerts",
    description:
      "Create follow up sequences that run automatically and receive instant notifications for high priority events. Automation saves time and keeps leads moving through the sales pipeline.",
    stats: ["Automated follow ups", "Custom triggers", "Instant notifications"]
  },
  {
    icon: PieChart,
    title: "Pipeline and Revenue Optimization",
    description:
      "Track conversion rates, rebalance campaigns, and send invoices from inside the app. KD Leads gives you the data and tools to increase revenue and improve cash flow.",
    stats: ["Conversion tracking", "In app invoicing", "Performance dashboards"]
  }
];

const colorMap: Record<string, { bg: string; border: string; dot: string }> = {
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", dot: "bg-blue-400" },
  yellow: { bg: "bg-yellow-500/10", border: "border-yellow-500/30", dot: "bg-yellow-400" },
  green: { bg: "bg-green-500/10", border: "border-green-500/30", dot: "bg-green-400" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", dot: "bg-purple-400" },
  default: { bg: "bg-gray-800/20", border: "border-gray-700/30", dot: "bg-gray-400" }
};

const Features: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af77]/5 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Everything your sales team needs to capture leads convert customers and grow revenue
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            KD Leads combines lead generation CRM automation and secure data storage to help small businesses and growing teams sell more with less busy work.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={`fade-up ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af77] to-[#b88a4a] flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold mb-6">{feature.title}</h3>
                  <p className="text-xl text-gray-400 leading-relaxed mb-8">{feature.description}</p>

                  <div className="flex flex-wrap gap-3">
                    {feature.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 rounded-full bg-[#d4af77]/10 border border-[#d4af77]/20 backdrop-blur-sm"
                      >
                        <span className="text-sm text-[#d4af77] font-semibold">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`fade-up delay-200 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/20 to-[#c89d5f]/20 rounded-[3rem] blur-3xl" />
                    <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-[3rem] shadow-2xl border border-white/10 transform hover:scale-105 transition-transform duration-500">
                      <div className="bg-[#0a0a0f] rounded-[2.5rem] overflow-hidden">
                        <div className="relative aspect-[9/19]">
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-3xl z-20" />

                          <div className="p-6 pt-10 h-full">
                            {index === 0 && (
                              <div className="space-y-4">
                                <div className="text-center mb-6">
                                  <div className="relative inline-block">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#d4af77] to-[#b88a4a] flex items-center justify-center animate-pulse">
                                      <Brain className="w-12 h-12" />
                                    </div>
                                    <div className="absolute inset-0 rounded-full blur-xl" style={{ background: "radial-gradient(circle at center, rgba(212,175,119,0.08), transparent 40%)" }} />
                                  </div>
                                  <p className="text-sm text-gray-400 mt-4">Recommend highest potential leads first</p>
                                </div>

                                <div className="bg-gradient-to-br from-[#d4af77]/20 to-[#c89d5f]/20 border border-[#d4af77]/30 rounded-2xl p-4 backdrop-blur-sm">
                                  <p className="text-sm font-semibold mb-2">Opportunity surfaced</p>
                                  <p className="text-xs text-gray-400">AI suggests contacting this lead now based on recent activity and intent signals.</p>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                  <p className="text-xs text-gray-500 mb-2">Predicted conversion trend</p>
                                  <div className="flex items-end gap-1 h-16">
                                    {[40, 55, 45, 70, 65, 85, 95].map((height, i) => (
                                      <div key={i} className="flex-1 bg-gradient-to-t from-[#d4af77] to-[#c89d5f] rounded-t" style={{ height: `${height}%` }} />
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}

                            {index === 1 && (
                              <div className="space-y-4 h-full flex flex-col justify-center">
                                <div className="text-center mb-6">
                                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-10 h-10" />
                                  </div>
                                  <p className="text-xl font-bold">All data secured and auditable</p>
                                  <p className="text-sm text-gray-400 mt-2">Encryption monitoring and compliance are built in</p>
                                </div>

                                {[
                                  { icon: Lock, label: "256 bit encryption", status: "Active" },
                                  { icon: Shield, label: "Fraud monitoring", status: "Active" },
                                  { icon: Bell, label: "Security alerts", status: "Active" }
                                ].map((item, i) => {
                                  const ItemIcon = item.icon;
                                  return (
                                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                                      <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                                          <ItemIcon className="w-5 h-5 text-green-400" />
                                        </div>
                                        <span className="text-sm font-medium">{item.label}</span>
                                      </div>
                                      <span className="text-xs text-green-400 font-semibold">{item.status}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            )}

                            {index === 2 && (
                              <div className="space-y-3">
                                <div className="text-center mb-6">
                                  <Bell className="w-12 h-12 text-[#d4af77] mx-auto mb-3" />
                                  <p className="text-lg font-semibold">Alerts and automation keep leads warm</p>
                                </div>

                                {[
                                  { type: "opportunity", title: "High intent lead matched", time: "2 minutes ago", color: "blue" },
                                  { type: "warning", title: "Unusual activity on account", time: "1 hour ago", color: "yellow" },
                                  { type: "success", title: "Invoice paid", time: "3 hours ago", color: "green" },
                                  { type: "info", title: "New performance report", time: "5 hours ago", color: "purple" }
                                ].map((alert, i) => {
                                  const classes = colorMap[alert.color] || colorMap.default;
                                  return (
                                    <div key={i} className={`${classes.bg} ${classes.border} rounded-xl p-4 backdrop-blur-sm`}>
                                      <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                          <p className="text-sm font-semibold mb-1">{alert.title}</p>
                                          <p className="text-xs text-gray-400">{alert.time}</p>
                                        </div>
                                        <div className={`w-2 h-2 rounded-full ${classes.dot} animate-pulse`} />
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}

                            {index === 3 && (
                              <div className="space-y-6 h-full flex flex-col justify-center">
                                <div className="text-center">
                                  <p className="text-sm text-gray-400 mb-2">Portfolio snapshot</p>
                                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">$68,940</p>
                                </div>

                                <div className="relative h-48">
                                  <svg className="w-full h-full" viewBox="0 0 200 200" aria-hidden>
                                    <defs>
                                      <linearGradient id="pieGradientMain" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#d4af77" />
                                        <stop offset="100%" stopColor="#c89d5f" />
                                      </linearGradient>
                                      <linearGradient id="pieGradientAlt" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#34d399" />
                                        <stop offset="100%" stopColor="#10b981" />
                                      </linearGradient>
                                    </defs>

                                    <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="18" />
                                    <circle cx="100" cy="100" r="80" fill="none" stroke="url(#pieGradientMain)" strokeWidth="18" strokeDasharray="251 503" strokeDashoffset="0" transform="rotate(-90 100 100)" />
                                    <circle cx="100" cy="100" r="80" fill="none" stroke="url(#pieGradientAlt)" strokeWidth="18" strokeDasharray="125 503" strokeDashoffset="-251" transform="rotate(-90 100 100)" />
                                  </svg>
                                </div>

                                <div className="space-y-2">
                                  {[
                                    { color: "blue", label: "Stocks", value: "50%" },
                                    { color: "purple", label: "Bonds", value: "25%" },
                                    { color: "green", label: "Cash", value: "15%" }
                                  ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between text-sm">
                                      <div className="flex items-center gap-2">
                                        <div className={`w-3 h-3 rounded-full ${item.color === "blue" ? "bg-[#d4af77]" : item.color === "purple" ? "bg-[#c89d5f]" : "bg-green-400"}`}></div>
                                        <span className="text-gray-400">{item.label}</span>
                                      </div>
                                      <span className="font-semibold">{item.value}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
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

export default Features;
