"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import WoodBoardCard from "@/components/WoodBoardCard";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero title="Fleet & Family" subtitle="Business & Family Plans" />

      {/* Benefits - white */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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

            <WoodBoardCard>
              <form className="p-6 md:p-8 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-display font-bold text-[#715924] mb-1 text-sm">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border-2 border-[#DEA726] bg-white/80 text-[#715924] placeholder-[#715924]/40 focus:outline-none focus:ring-2 focus:ring-[#C9982E]" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-display font-bold text-[#715924] mb-1 text-sm">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border-2 border-[#DEA726] bg-white/80 text-[#715924] placeholder-[#715924]/40 focus:outline-none focus:ring-2 focus:ring-[#C9982E]" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block font-display font-bold text-[#715924] mb-1 text-sm">Phone</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border-2 border-[#DEA726] bg-white/80 text-[#715924] placeholder-[#715924]/40 focus:outline-none focus:ring-2 focus:ring-[#C9982E]" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block font-display font-bold text-[#715924] mb-1 text-sm">Organization</label>
                    <input type="text" id="organization" className="w-full px-4 py-3 rounded-lg border-2 border-[#DEA726] bg-white/80 text-[#715924] placeholder-[#715924]/40 focus:outline-none focus:ring-2 focus:ring-[#C9982E]" placeholder="Company name" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fleet-type" className="block font-display font-bold text-[#715924] mb-1 text-sm">Type of Fleet</label>
                    <select id="fleet-type" className="w-full px-4 py-3 rounded-lg border-2 border-[#DEA726] bg-white/80 text-[#715924] focus:outline-none focus:ring-2 focus:ring-[#C9982E]">
                      <option value="">Select type...</option>
                      <option value="auto-sales">Auto Sales</option>
                      <option value="vehicle-rentals">Vehicle Rentals</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="vehicle-count" className="block font-display font-bold text-[#715924] mb-1 text-sm">Number of Vehicles</label>
                    <select id="vehicle-count" className="w-full px-4 py-3 rounded-lg border-2 border-[#DEA726] bg-white/80 text-[#715924] focus:outline-none focus:ring-2 focus:ring-[#C9982E]">
                      <option value="">Select range...</option>
                      <option value="1-50">1-50</option>
                      <option value="51-100">51-100</option>
                      <option value="100+">100+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="fleet-details" className="block font-display font-bold text-[#715924] mb-1 text-sm">Tell us about your Fleet (Optional)</label>
                  <textarea id="fleet-details" rows={3} className="w-full px-4 py-3 rounded-lg border-2 border-[#DEA726] bg-white/80 text-[#715924] placeholder-[#715924]/40 focus:outline-none focus:ring-2 focus:ring-[#C9982E] resize-none" placeholder="Any additional details..." />
                </div>
                <button type="submit" className="w-full font-display px-8 py-3 bg-[#f7d70e] text-[#715924] font-extrabold rounded-lg hover:bg-[#e5c60d] transition-all border-2 border-[#715924] text-lg" style={{ boxShadow: '3px 3px 0px 0px #715924' }}>
                  Submit Inquiry
                </button>
              </form>
            </WoodBoardCard>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
