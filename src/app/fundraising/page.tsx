"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import useNautilusEmbed from "@/hooks/useNautilusEmbed";

export default function FundraisingPage() {
  useNautilusEmbed();
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero title="Fundraising" subtitle="Community" />

      {/* How it Works - white */}
      <section className="py-20 relative overflow-hidden">
        {/* Shadow hibiscus flowers */}
        <img src="/hibiscus.png" alt="" className="absolute bottom-20 -left-10 w-40 md:w-56 opacity-[0.05] pointer-events-none -rotate-[15deg]" />
        <img src="/corner-hibiscus-br.png" alt="" className="absolute top-16 -right-4 w-24 md:w-32 opacity-[0.08] pointer-events-none -rotate-6" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <p className="font-script text-[#F7D711] text-2xl mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#715924]">
              Our Fundraising Program
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Steps */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { num: "1", title: "Share Your Cause", desc: "Tell us about your charity, school, church, or organization through our form." },
                { num: "2", title: "We Build a Plan", desc: "We create a customized fundraising plan tailored to your group and goals." },
                { num: "3", title: "Make Waves", desc: "Partner with Ohana for tropical-clean car wash fundraisers your community will love." },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#4AA2B9] rounded-full flex items-center justify-center text-white text-2xl font-display font-extrabold">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-display font-extrabold text-[#715924] mb-2">{step.title}</h3>
                  <p className="text-[#715924]/70">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Who can participate */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Churches", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
                { label: "Schools", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
                { label: "Organizations", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /> },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-2xl p-5" style={{ border: '4px solid #715924' }}>
                  <div className="w-12 h-12 shrink-0 bg-[#4AA2B9] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-[#715924]">{item.label}</h3>
                    <p className="text-[#715924]/60 text-sm">All sizes, year-round</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form - dark brown */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#4A3520]" />
        <div className="absolute inset-0 hawaiian-bg opacity-[0.06]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="font-script text-[#F7D711] text-2xl mb-3">Let&apos;s Go</p>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                Start Your Fundraiser
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
                data-src="/c/form/d2ff38a5-b340-4b90-b591-3e43e02a5760"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
