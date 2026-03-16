import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Ohana Car Wash",
  description: "Learn about Ohana Car Wash, a locally owned car wash in Monroe, OH. Family first values, eco-friendly practices, and exceptional service.",
};

const coreValues = [
  {
    title: "Family First",
    description: "\"Ohana\" means family in Hawaiian. Every customer and team member is treated like family.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Sustainable Clean",
    description: "Eco-friendly practices and products that protect our beautiful planet.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Community Spirit",
    description: "Supporting the Monroe community through local events and giving back.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Fun in the Sun",
    description: "Our tropical theme makes car care a fun and enjoyable experience.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Exceptional Service",
    description: "Sunny smiles, cheerful crew, and good vibes every time you visit.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Innovation & Excellence",
    description: "Continuously seeking innovative ways to improve and exceed expectations.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero title="About Ohana" subtitle="Our Story" />

      {/* Story Section - clean white with bubbles */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Floating bubbles */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="bubble" style={{ left: '5%', width: 14, height: 14, animationDuration: '8s', animationDelay: '0s' }} />
          <div className="bubble" style={{ left: '15%', width: 8, height: 8, animationDuration: '12s', animationDelay: '2s' }} />
          <div className="bubble" style={{ left: '28%', width: 18, height: 18, animationDuration: '10s', animationDelay: '1s' }} />
          <div className="bubble" style={{ left: '42%', width: 10, height: 10, animationDuration: '14s', animationDelay: '4s' }} />
          <div className="bubble" style={{ left: '55%', width: 6, height: 6, animationDuration: '9s', animationDelay: '3s' }} />
          <div className="bubble" style={{ left: '68%', width: 16, height: 16, animationDuration: '11s', animationDelay: '0.5s' }} />
          <div className="bubble" style={{ left: '78%', width: 12, height: 12, animationDuration: '13s', animationDelay: '5s' }} />
          <div className="bubble" style={{ left: '88%', width: 9, height: 9, animationDuration: '10s', animationDelay: '2.5s' }} />
          <div className="bubble" style={{ left: '35%', width: 7, height: 7, animationDuration: '15s', animationDelay: '6s' }} />
          <div className="bubble" style={{ left: '92%', width: 11, height: 11, animationDuration: '9s', animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#715924] text-xl md:text-2xl leading-relaxed font-medium mb-6 first-letter:text-5xl first-letter:font-display first-letter:font-extrabold first-letter:text-[#4AA2B9] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              At Ohana Car Wash, we&apos;re proud to be a locally owned and operated business that&apos;s deeply rooted in Ohio and the Monroe community. The name &ldquo;Ohana&rdquo; comes from the Hawaiian word for family, reflecting our most important core value of family first. We treat every customer and team member like part of our Ohana.
            </p>
            <p className="text-[#715924]/80 text-lg leading-relaxed mb-6">
              Our state-of-the-art car wash facility is designed to bring a touch of paradise to your day while taking the best care of your vehicle and our beautiful planet. We believe washing your car can be an enjoyable experience and create a wave of positivity with our community spirit and commitment to using eco-friendly products and practices.
            </p>
            <p className="text-[#715924]/80 text-lg leading-relaxed mb-6">
              We genuinely believe in always striving to improve and do more to continuously provide innovative solutions that exceed your expectations, all while making a positive impact!
            </p>
            <p className="text-[#715924]/80 text-lg leading-relaxed">
              Additionally, we are proud to have adopted marine animals, furthering our commitment to the environment. We are currently sponsoring a Sea Turtle named Kelpy!
            </p>
          </div>
        </div>
      </section>

      {/* Core Values - teal section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#4AA2B9]" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q25 0 50 10 Q75 20 100 10' stroke='%23fff' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 20px',
          }}
        />

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="font-script text-[#F7D711] text-2xl mb-3">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
              We Believe In
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {coreValues.map((value) => (
              <div key={value.title} className="flex items-start gap-4 bg-[#3B8FA5] rounded-2xl p-5 hover:bg-[#347f94] transition-colors">
                <div className="w-12 h-12 shrink-0 bg-[#F7D711] rounded-xl flex items-center justify-center text-[#715924]">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-lg font-display font-extrabold text-white mb-1">{value.title}</h3>
                  <p className="text-white/70 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
