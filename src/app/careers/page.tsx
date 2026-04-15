"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import useNautilusEmbed from "@/hooks/useNautilusEmbed";

export default function CareersPage() {
  useNautilusEmbed();

  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero title="Join Our Ohana!" subtitle="Careers" />

      {/* Benefits - white */}
      <section className="py-20 relative overflow-hidden">
        <img src="/hibiscus.png" alt="" className="absolute top-10 -right-10 w-44 md:w-56 opacity-[0.05] pointer-events-none rotate-[20deg]" />
        <img src="/corner-hibiscus-tl.png" alt="" className="absolute bottom-12 -left-4 w-24 md:w-32 opacity-[0.08] pointer-events-none -rotate-6" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <p className="font-script text-[#F7D711] text-2xl mb-3">Perks</p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#715924]">
              Why Work at Ohana?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Positive Environment",
                desc: "Work in a friendly and supportive setting where everyone feels like family.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
              },
              {
                title: "Flexible Schedules",
                desc: "Ideal for students, retirees, or anyone needing adaptable hours.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
              },
              {
                title: "Growth Opportunities",
                desc: "We believe in promoting from within and helping team members grow.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
              },
              {
                title: "Community Impact",
                desc: "Be part of a team that values giving back and supporting the local Monroe community.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-2xl p-6 transition-colors" style={{ border: '4px solid #715924' }}>
                <div className="w-12 h-12 shrink-0 bg-[#4AA2B9] rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-display font-extrabold text-[#715924] mb-1">{item.title}</h3>
                  <p className="text-[#715924]/70 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form - dark brown */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#4A3520]" />
        <div className="absolute inset-0 hawaiian-bg opacity-[0.06]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="font-script text-[#F7D711] text-2xl mb-3">Ready?</p>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                Apply Today
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
                data-src="/c/form/150e08b3-48fb-47d3-887c-0fb615de5c5c"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
