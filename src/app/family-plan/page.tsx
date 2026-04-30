"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import useNautilusEmbed from "@/hooks/useNautilusEmbed";

export default function FamilyPlanPage() {
  useNautilusEmbed();

  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero title="Family Plan" subtitle="Save More Together" />

      {/* Benefits - white */}
      <section className="py-20 relative overflow-hidden">
        {/* Shadow hibiscus flowers */}
        <img src="/hibiscus.png" alt="" className="absolute top-10 -left-10 w-48 md:w-64 opacity-[0.06] pointer-events-none -rotate-12" />
        <img src="/corner-hibiscus-br.png" alt="" className="absolute bottom-16 -right-6 w-24 md:w-32 opacity-[0.08] pointer-events-none rotate-12" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <p className="font-script text-[#F7D711] text-2xl mb-3">Ohana Savings</p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#715924]">
              Family Plan Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Multi-Vehicle Savings",
                desc: "Save more when you add multiple family vehicles.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a5 5 0 00-10 0v2m10 0h1a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h1m10 0H7m5 5v3m-3-3h6" />,
              },
              {
                title: "Flexible Plans",
                desc: "Mix and match wash levels for each vehicle.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 8l2 2 4-4" />,
              },
              {
                title: "One Account",
                desc: "Manage all family vehicles under a single account.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-6 text-center transition-colors" style={{ border: '4px solid #715924' }}>
                <div className="w-14 h-14 mx-auto mb-4 bg-[#4AA2B9] rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-display font-extrabold text-[#715924] mb-2">{item.title}</h3>
                <p className="text-[#715924]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - teal */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#4AA2B9]" />
        <img src="/hibiscus.png" alt="" className="absolute top-10 -right-10 w-48 md:w-60 opacity-[0.06] pointer-events-none rotate-[18deg]" style={{ filter: 'brightness(0) invert(1)' }} />
        <img src="/corner-hibiscus-tl.png" alt="" className="absolute bottom-10 -left-4 w-24 md:w-32 opacity-[0.08] pointer-events-none -rotate-6" style={{ filter: 'brightness(1.5) saturate(0.4)' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <p className="font-script text-[#F7D711] text-2xl mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
              Simple for the Whole Family
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { num: "1", title: "Choose Each Plan", desc: "Choose your plan for each vehicle." },
              { num: "2", title: "Add Your Vehicles", desc: "Add vehicles to your family account." },
              { num: "3", title: "Enjoy Unlimited Washes", desc: "Enjoy unlimited washes for the whole family." },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#F7D711] rounded-full flex items-center justify-center text-[#715924] text-2xl font-display font-extrabold" style={{ border: '4px solid #715924' }}>
                  {step.num}
                </div>
                <h3 className="text-xl font-display font-extrabold text-white mb-2" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.18)' }}>{step.title}</h3>
                <p className="text-white/85">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Plan Form - white */}
      <section className="py-20 relative overflow-hidden">
        <img src="/hibiscus.png" alt="" className="absolute top-10 -left-8 w-40 md:w-56 opacity-[0.06] pointer-events-none -rotate-12" />
        <img src="/corner-hibiscus-br.png" alt="" className="absolute bottom-10 -right-4 w-24 md:w-32 opacity-[0.08] pointer-events-none rotate-6" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="font-script text-[#F7D711] text-2xl mb-3">Get Started</p>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#715924]">
                Family Plan Inquiry
              </h2>
            </div>

            <div
              className="rounded-xl p-4 md:p-6"
              style={{
                background: '#715924',
                border: '5px solid #DEA726',
                boxShadow: '4px 4px 0px 3px #4A3520',
              }}
            >
              <div
                data-nautilus-embed="form"
                data-src="/c/form/918e2a3b-db0c-452e-b4d3-9f69c774c699"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
