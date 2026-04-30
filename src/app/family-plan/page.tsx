"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function FamilyPlanPage() {

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

      {/* Get Started - teal */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#4AA2B9]" />
        <img src="/hibiscus.png" alt="" className="absolute top-10 -right-10 w-48 md:w-60 opacity-[0.06] pointer-events-none rotate-[18deg]" style={{ filter: 'brightness(0) invert(1)' }} />
        <img src="/corner-hibiscus-tl.png" alt="" className="absolute bottom-10 -left-4 w-24 md:w-32 opacity-[0.08] pointer-events-none -rotate-6" style={{ filter: 'brightness(1.5) saturate(0.4)' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="font-script text-[#F7D711] text-2xl mb-3">Get Started</p>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                Add a Vehicle to Your Plan
              </h2>
              <p className="text-white/90 mt-4 text-lg">
                Already a member? Adding family vehicles is easy — just log into your membership portal.
              </p>
            </div>

            <div
              className="rounded-xl p-6 md:p-8"
              style={{
                background: '#715924',
                border: '5px solid #DEA726',
                boxShadow: '4px 4px 0px 3px #4A3520',
              }}
            >
              <ol className="space-y-6 text-white">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-[#F7D711] rounded-full flex items-center justify-center text-[#715924] font-display font-extrabold text-lg" style={{ border: '3px solid #4A3520' }}>1</span>
                  <div>
                    <h3 className="font-display font-extrabold text-lg mb-1">Log Into the Membership Portal</h3>
                    <p className="text-white/80">Visit the membership portal and sign in with your existing account.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-[#F7D711] rounded-full flex items-center justify-center text-[#715924] font-display font-extrabold text-lg" style={{ border: '3px solid #4A3520' }}>2</span>
                  <div>
                    <h3 className="font-display font-extrabold text-lg mb-1">Go to Manage Membership</h3>
                    <p className="text-white/80">From your dashboard, select <strong>&quot;Manage Membership&quot;</strong> to view your current plan.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-[#F7D711] rounded-full flex items-center justify-center text-[#715924] font-display font-extrabold text-lg" style={{ border: '3px solid #4A3520' }}>3</span>
                  <div>
                    <h3 className="font-display font-extrabold text-lg mb-1">Add an Additional Vehicle</h3>
                    <p className="text-white/80">Click <strong>&quot;Add Vehicle&quot;</strong> and enter the details for your family member&apos;s car. The new vehicle will be added to the same plan as your original membership.</p>
                  </div>
                </li>
              </ol>

              <div className="mt-8 pt-6 border-t border-white/20 text-center">
                <p className="text-white/70 text-sm mb-4">Note: All additional vehicles must be on the same plan as your current membership.</p>
                <a
                  href="https://www.nautilus-app.com/c/ohana/p/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-display px-8 py-3 bg-[#F7D711] text-[#715924] font-extrabold rounded-lg hover:bg-[#e5c60d] transition-all border-2 border-[#4A3520] text-lg"
                  style={{ boxShadow: '3px 3px 0px 0px #4A3520' }}
                >
                  Log In to Membership Portal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
