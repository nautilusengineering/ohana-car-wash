"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import WoodBoardCard from "@/components/WoodBoardCard";

export default function FundraisingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero title="Fundraising" subtitle="Community" />

      {/* How it Works - white */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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

            <form className="bg-white/10 rounded-2xl p-6 md:p-8 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fund-name" className="block font-display font-bold text-white mb-1 text-sm">Name</label>
                  <input type="text" id="fund-name" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F7D711]" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="fund-org" className="block font-display font-bold text-white mb-1 text-sm">Organization</label>
                  <input type="text" id="fund-org" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F7D711]" placeholder="Organization name" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fund-email" className="block font-display font-bold text-white mb-1 text-sm">Email</label>
                  <input type="email" id="fund-email" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F7D711]" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="fund-phone" className="block font-display font-bold text-white mb-1 text-sm">Phone</label>
                  <input type="tel" id="fund-phone" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F7D711]" placeholder="(555) 123-4567" />
                </div>
              </div>
              <div>
                <label htmlFor="fund-campaign" className="block font-display font-bold text-white mb-1 text-sm">Tell us about your campaign</label>
                <textarea id="fund-campaign" rows={4} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F7D711] resize-none" placeholder="Describe your fundraising goals..." />
              </div>
              <button type="submit" className="w-full font-display px-8 py-3 bg-[#F7D711] text-[#715924] font-extrabold rounded-lg hover:bg-[#e5c60d] transition-all border-2 border-[#715924] text-lg" style={{ boxShadow: '3px 3px 0px 0px #715924' }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
