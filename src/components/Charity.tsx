import React, { useEffect, useRef } from "react";
import { Heart } from "lucide-react";

const OnboardingForm: React.FC = () => {
  const scriptLoadedRef = useRef(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {

    if (scriptLoadedRef.current) return;
    scriptLoadedRef.current = true;

    const src = "https://site.kdmarketinggroup.com/js/form_embed.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.defer = true;
      document.body.appendChild(s);
    }

    const iframe = iframeRef.current;
    if (iframe) {

      iframe.setAttribute("aria-label", "KD Leads onboarding form");
    }

    return () => {};
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af77]/10 via-[#c89d5f]/5 to-[#c89d5f]/10 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="fade-up">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div className="fade-up mb-6">
  <p className="text-sm text-[#d4af77] font-semibold tracking-wide mb-2">
    GET STARTED
  </p>

  <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
    Onboard to{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af77] to-[#c89d5f]">
      KD Leads
    </span>{" "}
    and stop losing valuable leads
  </h2>
</div>
            </div>

            <p className="text-lg text-gray-300 mb-6 max-w-xl">
              Fill out this quick onboarding form so we can connect your account, set up lead capture, and configure your automated follow up sequences. KD Leads will help you centralize your leads route high potential prospects to the right rep and start sending invoices from inside the app.
            </p>

            <ul className="space-y-3 text-gray-400 mb-6">
              <li>• Connect your lead sources in minutes</li>
              <li>• Turn website visitors into contacts automatically</li>
              <li>• Automate follow ups and invoice from one place</li>
            </ul>

            <p className="text-sm text-gray-500">
              By completing this form our team can prepare your workspace and recommend the best onboarding plan for your business.
            </p>
          </div>

          <div className="fade-up delay-200">
            <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-[#d4af77]/20 rounded-2xl p-1 shadow-2xl">
              <div className="bg-[#0a0a0f] rounded-xl overflow-hidden" style={{ minHeight: 520 }}>

                <div style={{ width: "100%", height: "100%", minHeight: 520 }}>
                  <iframe
                    ref={iframeRef}
                    src="https://site.kdmarketinggroup.com/widget/form/0SFoS45fL20iFTFQzWcX"
                    title="Kd Leads Onboarding Form"
                    id="inline-0SFoS45fL20iFTFQzWcX"
                    data-layout='{"id":"INLINE"}'
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Kd Leads Form"
                    data-height="852"
                    data-layout-iframe-id="inline-0SFoS45fL20iFTFQzWcX"
                    data-form-id="0SFoS45fL20iFTFQzWcX"
                    style={{
                      width: "100%",
                      height: "852px",
                      border: "none",
                      borderRadius: 6,
                      display: "block",
                      background: "transparent"
                    }}
                    loading="lazy"
                    aria-hidden={false}
                  ></iframe>

                  <noscript>
                    <div className="p-6 text-center text-gray-300">
                      Please enable JavaScript to complete the onboarding form. If you cannot, email{" "}
                      <a href="mailto:hello@kdmarketinggroup.com" className="text-[#d4af77] underline">
                        hello@kdmarketinggroup.com
                      </a>{" "}
                      and we will help you get set up.
                    </div>
                  </noscript>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default OnboardingForm;
