import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Ohana Car Wash",
  description: "Join the Ohana Car Wash team in Monroe, OH. We're looking for enthusiastic individuals with a passion for delivering excellent service.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero title="Join Our Ohana!" subtitle="Careers" />

      {/* Benefits - white */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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

            <form className="bg-white/10 rounded-2xl p-6 md:p-8 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block font-display font-bold text-white mb-1 text-sm">First Name</label>
                  <input type="text" id="first-name" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F7D711]" placeholder="First name" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block font-display font-bold text-white mb-1 text-sm">Last Name</label>
                  <input type="text" id="last-name" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F7D711]" placeholder="Last name" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="career-email" className="block font-display font-bold text-white mb-1 text-sm">Email</label>
                  <input type="email" id="career-email" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F7D711]" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="career-phone" className="block font-display font-bold text-white mb-1 text-sm">Phone</label>
                  <input type="tel" id="career-phone" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F7D711]" placeholder="(555) 123-4567" />
                </div>
              </div>
              <div>
                <label htmlFor="employment-type" className="block font-display font-bold text-white mb-1 text-sm">Employment Type</label>
                <select id="employment-type" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#F7D711]">
                  <option value="" className="text-[#4A3520]">Select...</option>
                  <option value="full-time" className="text-[#4A3520]">Full-Time</option>
                  <option value="part-time" className="text-[#4A3520]">Part-Time</option>
                  <option value="either" className="text-[#4A3520]">Either</option>
                </select>
              </div>
              <div>
                <label htmlFor="availability" className="block font-display font-bold text-white mb-1 text-sm">Availability</label>
                <input type="text" id="availability" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F7D711]" placeholder="e.g. Weekdays 9AM-5PM, Weekends open" />
              </div>
              <div>
                <label htmlFor="career-message" className="block font-display font-bold text-white mb-1 text-sm">Anything else? (Optional)</label>
                <textarea id="career-message" rows={3} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F7D711] resize-none" placeholder="Tell us about yourself..." />
              </div>
              <button type="submit" className="w-full font-display px-8 py-3 bg-[#F7D711] text-[#715924] font-extrabold rounded-lg hover:bg-[#e5c60d] transition-all border-2 border-[#715924] text-lg" style={{ boxShadow: '3px 3px 0px 0px #715924' }}>
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
