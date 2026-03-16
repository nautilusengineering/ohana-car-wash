import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Environment - Ohana Car Wash",
  description: "Learn about Ohana Car Wash's commitment to sustainability, eco-friendly practices, water reclamation, and our sea turtle conservation partnership.",
};

export default function EnvironmentPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero title="Committed to Sustainability" subtitle="Our Planet" />

      {/* Intro with turtle mascot */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0">
              <Image
                src="/turtle.png"
                alt="Ohana Car Wash Turtle Mascot"
                width={200}
                height={200}
                className="w-40 md:w-52 h-auto animate-float"
              />
            </div>
            <div>
              <p className="text-[#715924] text-xl md:text-2xl leading-relaxed font-medium">
                At Ohana Car Wash, we&apos;re committed to sustainability and reducing our environmental impact. By choosing us, you&apos;re supporting a business that cares about the planet and its future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Green Practices - teal */}
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
            <p className="font-script text-[#F7D711] text-2xl mb-3">Eco-Friendly</p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
              Our Green Practices
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              {
                title: "Green Chemicals",
                desc: "Eco-friendly and biodegradable chemicals in our cleaning, foaming, washing, waxing, and drying processes. Safe for your car and the planet.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
              },
              {
                title: "Green Electric Energy",
                desc: "We use Green Electric Energy and are planning solar panels and EV chargers. Variable Frequency Drives (VFDs) reduce our electricity consumption significantly.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
              },
              {
                title: "Water Reclaim System",
                desc: "Our advanced system recycles over 80% of water used. Only about 14 gallons of fresh water per car — less than most washing machines at home.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
              },
              {
                title: "Noise Control",
                desc: "Extended tunnel walls minimize excess noise. We're planting 25 new trees on site to further reduce noise and beautify our location.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />,
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-[#3B8FA5] rounded-2xl p-6 hover:bg-[#347f94] transition-colors">
                <div className="w-12 h-12 shrink-0 bg-[#F7D711] rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#715924]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-display font-extrabold text-white mb-1">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Water stat highlight */}
          <div className="max-w-md mx-auto mt-10 text-center">
            <div className="bg-[#3B8FA5] rounded-2xl p-6">
              <p className="text-5xl font-display font-extrabold text-[#F7D711] mb-1">80%+</p>
              <p className="text-white/80 font-medium">Water Recycled Per Wash</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Kelpy - dark brown with turtle */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#4A3520]" />
        <div className="absolute inset-0 hawaiian-bg opacity-[0.06]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Turtle image */}
              <div className="text-center">
                <Image
                  src="/turtle-laying.png"
                  alt="Kelpy the Sea Turtle"
                  width={400}
                  height={400}
                  className="w-64 md:w-80 h-auto mx-auto drop-shadow-2xl animate-float"
                />
              </div>

              {/* Content */}
              <div>
                <p className="font-script text-[#F7D711] text-2xl mb-3">Conservation</p>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-6" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                  Meet Kelpy
                </h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                  We&apos;re proud partners of the Sea Turtle Conservancy! We&apos;ve adopted a sea turtle named <strong className="text-[#F7D711]">Kelpy</strong>, an adult female Loggerhead Sea Turtle released with a satellite transmitter from the Archie Carr National Wildlife Refuge in Florida.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Species</p>
                    <p className="text-white font-semibold">Loggerhead Sea Turtle</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Biggest Threat</p>
                    <p className="text-white font-semibold">Habitat Loss</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Carapace Length</p>
                    <p className="text-white font-semibold">114.7 cm</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Carapace Width</p>
                    <p className="text-white font-semibold">104.1 cm</p>
                  </div>
                </div>

                <p className="text-white/60 text-sm">
                  Track Kelpy&apos;s journey through the Fahlo App, available on Android and iPhone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
