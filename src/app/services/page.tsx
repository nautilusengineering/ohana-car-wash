"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import useNautilusEmbed from "@/hooks/useNautilusEmbed";

export default function ServicesPage() {
  useNautilusEmbed();
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero title="Fleet & Family" subtitle="Business & Family Plans" />

      {/* Benefits - white */}
      <section className="py-20 relative overflow-hidden">
        {/* Shadow hibiscus flowers */}
        <img src="/hibiscus.png" alt="" className="absolute top-10 -left-10 w-48 md:w-64 opacity-[0.06] pointer-events-none -rotate-12" />
        <img src="/corner-hibiscus-br.png" alt="" className="absolute bottom-16 -right-6 w-24 md:w-32 opacity-[0.08] pointer-events-none rotate-12" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <p className="font-script text-[#F7D711] text-2xl mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#715924]">
              Fleet Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Cost Savings",
                desc: "Tailored fleet plans designed to be budget-friendly for businesses of all sizes.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
              },
              {
                title: "Professional Image",
                desc: "A clean fleet enhances your company's image and makes a great first impression.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />,
              },
              {
                title: "Convenience",
                desc: "Fast car washes and easy account management to keep your fleet moving.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
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

      {/* Fleet Form - white */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="font-script text-[#F7D711] text-2xl mb-3">Get Started</p>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#715924]">
                Fleet Inquiry
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
