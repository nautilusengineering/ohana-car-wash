"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Warm, earthy brand colors - not too bright
const colors = {
  gold: "#C9982E",
  goldLight: "#D4A83A",
  goldDark: "#A67C1A",
  brown: "#715924",
  brownDark: "#5A4720",
  sand: "#F5F0E8",
  beach: "#E8DFD0",
  oceanBlue: "#1E6B8A",
  oceanLight: "#3B99B8",
};

// Hero Section with Teal Ocean Waves and White Foam Transition
function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Teal ocean background matching original site */}
      <div className="absolute inset-0 bg-[#4AA2B9]" />

      {/* Subtle wave pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q25 0 50 10 Q75 20 100 10' stroke='%23367d91' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 20px',
        }}
      />

      {/* Bottom wave section with white cloud/foam transition */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Darker teal wave layer */}
        <svg className="w-full h-40 md:h-56" viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path
            d="M0,60 C180,120 360,30 540,80 C720,130 900,40 1080,90 C1260,140 1350,60 1440,80 L1440,150 L0,150 Z"
            fill="#3B8FA5"
          />
        </svg>

        {/* White cloud/foam transition - smooth curves */}
        <svg className="w-full h-24 md:h-32 -mt-8 md:-mt-12" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,50
               C60,30 120,60 180,40
               C240,20 300,50 360,35
               C420,20 480,45 540,30
               C600,15 660,40 720,25
               C780,10 840,35 900,20
               C960,5 1020,30 1080,18
               C1140,5 1200,28 1260,15
               C1320,2 1380,25 1440,12
               L1440,100 L0,100 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 pb-40">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="w-full max-w-md">
              <Image
                src="/logo.png"
                alt="Ohana Car Wash"
                width={500}
                height={200}
                className="w-full h-auto drop-shadow-lg"
                priority
              />
            </div>

            {/* Location Chip */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <svg className="w-5 h-5 text-[#715924]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-[#715924] font-medium text-sm">401 Gateway Blvd, Monroe, OH</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold uppercase text-outline-brown tracking-tight">
                Aloha, Ohana!
              </h1>
              <p className="text-lg md:text-xl text-[#715924]/80 max-w-xl leading-relaxed">
                Where every wash is a splash of paradise! Join Ohana Unlimited in Monroe, OH and start saving time and money on every car wash.
              </p>
            </div>

            {/* CTA Buttons - Directions & Join Unlimited */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://maps.google.com/?q=401+Gateway+Blvd+Monroe+OH+45050"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 bg-white text-[#715924] font-semibold rounded-full border-2 border-[#715924] hover:bg-[#715924] hover:text-white transition-all shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Directions
              </a>
              <a
                href="https://ohanacarwash.mywashaccount.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 bg-[#C9982E] text-white font-semibold rounded-full hover:bg-[#A67C1A] transition-all shadow-lg hover:shadow-xl"
              >
                Join Unlimited
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right content - Turtle */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <Image
                src="/turtle.png"
                alt="Surfing Turtle Mascot"
                width={500}
                height={500}
                className="w-full max-w-lg h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Tiki Card Component - cream/gold with hawaiian pattern for non-wash sections
function WoodBoardCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: '#FBF7C6',
        border: '5px solid #DEA726',
        borderRadius: '10px',
        boxShadow: '3px 3px 0px 3px #715924',
      }}
    >
      {/* Hawaiian/tiki pattern overlay */}
      <div className="absolute inset-0 hawaiian-bg opacity-[0.18]" />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Actual wooden board for wash packages - matching the original site screenshot
function WashWoodBoard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-[10px] overflow-hidden ${className}`}
      style={{ boxShadow: '0px 12px 18px -6px rgba(0,0,0,0.3)' }}
    >
      {/* Wood base - warm golden tones like original */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg,
            #D4A56A 0%, #DEB87A 10%, #C99A60 20%,
            #DEB87A 30%, #D4A56A 40%, #C99A60 50%,
            #DEB87A 60%, #D4A56A 70%, #C99A60 80%,
            #DEB87A 90%, #D4A56A 100%
          )`,
        }}
      />
      {/* Horizontal plank lines - thick and visible like original */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(180deg,
            transparent 0px, transparent 55px,
            rgba(120, 80, 30, 0.4) 55px, rgba(120, 80, 30, 0.25) 58px,
            transparent 58px, transparent 60px
          )`,
        }}
      />
      {/* Vertical wood grain - subtle streaks */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg,
              transparent 0px, transparent 3px,
              rgba(139, 90, 43, 0.06) 3px, rgba(139, 90, 43, 0.06) 4px,
              transparent 4px, transparent 18px
            ),
            repeating-linear-gradient(88deg,
              transparent 0px, transparent 25px,
              rgba(160, 110, 50, 0.04) 25px, rgba(160, 110, 50, 0.04) 27px,
              transparent 27px, transparent 50px
            )
          `,
        }}
      />
      {/* Noise for natural wood feel */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Top edge highlight */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E8C690]/60 via-[#F0D8A8]/80 to-[#E8C690]/60" />
      {/* Subtle border */}
      <div className="absolute inset-0 rounded-[10px] border-2 border-[#B08850]/30" />
      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

// Perks Section with Sand Background - seamless beach transition
function PerksSection() {
  const perks = [
    {
      title: "Free Vacuums",
      description: "Keep your car's interior spotless with our powerful vacuums",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Vacuum hose nozzle */}
          <path d="M6 20c0-1.5 0-3 2-4l4-3V8" strokeLinecap="round" strokeLinejoin="round" />
          {/* Vacuum canister body */}
          <rect x="9" y="3" width="6" height="6" rx="1.5" />
          {/* Suction lines */}
          <path d="M4 18l1.5-1M3 15.5l2-0.5M4 13l1.5 0.5" strokeLinecap="round" opacity="0.6" />
          {/* Floor line */}
          <path d="M2 20h8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Free Air Guns",
      description: "Blast away dirt and debris with our high-pressure air guns",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Gun body */}
          <path d="M3 11h8l2-2.5h4v5h-4l-2-2.5H3z" strokeLinejoin="round" />
          {/* Trigger/handle */}
          <path d="M8 13.5v4.5" strokeLinecap="round" />
          {/* Air blast lines */}
          <path d="M18 9.5h3M18 11h4M18 12.5h3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Vending Machines",
      description: "On-site towels, cleaners, and air fresheners for your convenience",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Machine body */}
          <rect x="4" y="2" width="16" height="20" rx="2" />
          {/* Product rows */}
          <rect x="7" y="5" width="4" height="3" rx="0.5" />
          <rect x="13" y="5" width="4" height="3" rx="0.5" />
          <rect x="7" y="10" width="4" height="3" rx="0.5" />
          <rect x="13" y="10" width="4" height="3" rx="0.5" />
          {/* Dispensing slot */}
          <rect x="7" y="16" width="10" height="3" rx="0.5" />
        </svg>
      ),
    },
    {
      title: "Mat Cleaner",
      description: "Deep clean your mats with our credit card-operated machine",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Mat shape */}
          <rect x="2" y="10" width="20" height="10" rx="1" />
          {/* Mat texture lines */}
          <path d="M5 13h14M5 17h10" strokeLinecap="round" />
          {/* Water/cleaning sparkles */}
          <path d="M15 4l1 3M18 3l-0.5 4M12 5.5l1.5 2" strokeLinecap="round" />
          <circle cx="17" cy="6" r="0.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative">
      {/* Seamless sand continuation from hero */}
      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-white via-[#F5F0E8] to-[#EDE5D8]" />
      {/* Sand grain texture */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 15% 25%, rgba(194, 178, 128, 0.25) 1px, transparent 1px),
          radial-gradient(circle at 85% 35%, rgba(210, 180, 140, 0.2) 1px, transparent 1px),
          radial-gradient(circle at 45% 65%, rgba(194, 178, 128, 0.22) 1px, transparent 1px),
          radial-gradient(circle at 75% 85%, rgba(210, 180, 140, 0.18) 1px, transparent 1px),
          radial-gradient(circle at 25% 90%, rgba(194, 178, 128, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px, 45px 45px, 35px 35px, 55px 55px, 40px 40px'
      }} />
      <div className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-script text-[#F7D711] text-2xl mb-2">Every Visit</p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-stroke-heading mb-4">
            Enjoy Extra Perks!
          </h2>
          <p className="text-lg text-[#715924]/70 max-w-2xl mx-auto">
            At Ohana Car Wash, we want to make your experience even better. Here&apos;s what you can enjoy:
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk) => (
            <WoodBoardCard key={perk.title}>
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#C9982E] rounded-xl flex items-center justify-center text-white shadow-md">
                  {perk.icon}
                </div>
                <h3 className="text-lg font-bold text-[#4A3520] mb-2">{perk.title}</h3>
                <p className="text-sm text-[#5C4428]">{perk.description}</p>
              </div>
            </WoodBoardCard>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

// Wash Packages Section
function WashPackagesSection() {
  const [isUnlimited, setIsUnlimited] = useState(true);

  const allPackages = [
    {
      name: "The Big Kahuna",
      tagline: "Longer Lasting Shine",
      singlePrice: 25,
      monthlyPrice: 39.99,
      firstMonth: 9.99,
      features: ["Graphene Xtreme", "Ceramic X3", "Rain Repel", "Triple Foam", "Hot Wax", "Sealer Wax", "Tire Shine", "Wheel Cleaner", "All Lower Tier Features"],
      icon: "/big-kahuna.png",
      chip: "PREMIUM",
      chipColor: "bg-[#F7D711]",
      chipBorder: "#8B6B15",
      chipText: "#6B4F10",
      premium: true,
    },
    {
      name: "Island Shine",
      tagline: "Great All-Around",
      singlePrice: 20,
      monthlyPrice: 34.99,
      firstMonth: 9.99,
      features: ["Triple Foam", "Hot Wax", "Sealer Wax", "Tire Shine"],
      icon: "/island-shine.png",
      chip: "BEST VALUE",
      chipColor: "bg-[#85CBE0]",
      chipBorder: "#2A6E85",
      chipText: "#1B5668",
      premium: false,
    },
    {
      name: "Tropical Breeze",
      tagline: "Everyday Clean",
      singlePrice: 15,
      monthlyPrice: 29.99,
      firstMonth: 9.99,
      features: ["Rain Repel", "Wheel Cleaner", "Spot Free Rinse", "Air Dry"],
      icon: "/tropical-breeze.png",
      chip: "MOST POPULAR",
      chipColor: "bg-[#F0CD50]",
      chipBorder: "#A07818",
      chipText: "#6B4F10",
      premium: false,
    },
    {
      name: "Splash & Dash",
      tagline: "Quick & Easy",
      singlePrice: 10,
      monthlyPrice: 24.99,
      firstMonth: 9.99,
      features: ["Wash", "Rinse", "Dry", "Basic Clean"],
      icon: "/splash-dash.png",
      chip: null,
      chipColor: "",
      chipBorder: "",
      chipText: "",
      premium: false,
    },
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-[#EDE5D8] via-[#E8DFD0] to-[#EDE5D8]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="font-script text-[#F7D711] text-2xl mb-2">Find Your Wave</p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-stroke-heading mb-4">
            Ohana Washes
          </h2>
          <p className="text-lg text-[#715924]/70 mb-8">
            Four Packages to Keep Your Ride Clean and Shiny
          </p>

          {/* Toggle - Single vs Unlimited */}
          <div className="inline-flex items-center rounded-full p-1 mb-6" style={{ background: '#FBF7C6', border: '3px solid #DEA726' }}>
            <button
              type="button"
              onClick={() => setIsUnlimited(true)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                isUnlimited
                  ? 'bg-[#715924] text-[#f7d70e] shadow-md'
                  : 'text-[#715924] hover:bg-[#DEA726]/20'
              }`}
            >
              Unlimited Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsUnlimited(false)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                !isUnlimited
                  ? 'bg-[#715924] text-[#f7d70e] shadow-md'
                  : 'text-[#715924] hover:bg-[#DEA726]/20'
              }`}
            >
              Single Wash
            </button>
          </div>
        </div>

        {/* All 4 Packages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {allPackages.map((pkg) => (
            <div key={pkg.name} className="relative h-full">
              {/* Chip on top of the board */}
              {pkg.chip && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <span className={`${pkg.chipColor} text-sm font-extrabold px-6 py-2 rounded-full whitespace-nowrap tracking-wide uppercase`}
                    style={{
                      boxShadow: '0 6px 16px rgba(0,0,0,0.25), 0 2px 4px rgba(0,0,0,0.15)',
                      border: `3px solid ${pkg.chipBorder}`,
                      color: pkg.chipText,
                    }}
                  >
                    {pkg.chip}
                  </span>
                </div>
              )}

              {/* Wooden board - real wood planks like original site */}
              <WashWoodBoard className={`h-full ${pkg.premium ? 'premium-gold-glow' : ''}`}>
                <div className="p-3 pt-10 h-full flex flex-col">
                  {/* Fixed-height wood header area so white containers align */}
                  <div className="h-[170px] flex flex-col items-center justify-end">
                    {/* Icon on wood */}
                    <div className="flex justify-center mb-3">
                      <Image src={pkg.icon} alt={pkg.name} width={120} height={120} className="w-24 h-24 drop-shadow-lg" />
                    </div>

                    {/* Package Name on wood - blue outline */}
                    <h3
                      className="text-center font-display font-extrabold uppercase text-2xl mb-1"
                      style={{
                        color: '#FFFDF0',
                        WebkitTextStroke: '4px #715924',
                        paintOrder: 'stroke fill',
                      }}
                    >
                      {pkg.name}
                    </h3>
                    <p className="text-center text-sm font-semibold text-white mb-3" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>{pkg.tagline}</p>
                  </div>

                  {/* White container for readable details */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-inner flex-1 flex flex-col">
                    {/* Price */}
                    <div className="text-center mb-3">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="font-bold text-[#4AA2B9] text-4xl">
                          ${isUnlimited ? pkg.monthlyPrice : pkg.singlePrice}
                        </span>
                        <span className="text-sm text-[#715924]/60 font-medium">
                          {isUnlimited ? '/mo' : '/wash'}
                        </span>
                      </div>
                      {isUnlimited && (
                        <div className="mt-2 inline-block bg-[#715924] text-[#f7d70e] text-xs font-bold px-3 py-1 rounded-full">
                          First Month: ${pkg.firstMonth}
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-1.5 mb-4 flex-1">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[#4A3520]">
                          <svg className="w-4 h-4 flex-shrink-0 text-[#DEA726]" fill="currentColor" viewBox="0 0 20 20">
                            <ellipse cx="10" cy="5.5" rx="2.8" ry="4.5" transform="rotate(0 10 10)" />
                            <ellipse cx="10" cy="5.5" rx="2.8" ry="4.5" transform="rotate(72 10 10)" />
                            <ellipse cx="10" cy="5.5" rx="2.8" ry="4.5" transform="rotate(144 10 10)" />
                            <ellipse cx="10" cy="5.5" rx="2.8" ry="4.5" transform="rotate(216 10 10)" />
                            <ellipse cx="10" cy="5.5" rx="2.8" ry="4.5" transform="rotate(288 10 10)" />
                            <circle cx="10" cy="10" r="2.2" fill="#F7D711" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href="https://ohanacarwash.mywashaccount.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-3 font-bold rounded-full text-center transition-all ${
                        pkg.premium
                          ? 'bg-[#715924] text-[#f7d70e] hover:bg-[#5A4720] premium-btn-glow'
                          : 'bg-[#f7d70e] text-[#715924] hover:bg-[#e5c60d] shadow-md'
                      }`}
                      style={pkg.premium ? undefined : { boxShadow: '3px 3px 0px 0px #715924' }}
                    >
                      {isUnlimited ? 'Join Unlimited' : 'Get Started'}
                    </a>
                  </div>
                </div>
              </WashWoodBoard>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-10 text-center">
          <a
            href="https://ohanacarwash.mywashaccount.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#715924] font-medium hover:text-[#D4A83A] transition-colors"
          >
            View All Options & Compare
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// About Us Section - ocean teal theme
function AboutSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Ocean teal background - matches hero */}
      <div className="absolute inset-0 bg-[#4AA2B9]" />
      {/* Wave pattern overlay */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q25 0 50 10 Q75 20 100 10' stroke='%23fff' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 20px',
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <p className="font-script text-[#f7d70e] text-2xl mb-2">Aloha!</p>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
              About Ohana
            </h2>
            <p className="text-white/85 text-lg leading-relaxed mb-4">
              At Ohana Car Wash, we&apos;re proud to be a locally owned and operated business that&apos;s deeply rooted in Ohio and the Monroe community. The name &ldquo;Ohana&rdquo; comes from the Hawaiian word for family, reflecting our most important core value of family first.
            </p>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Our state-of-the-art facility is designed to bring a touch of paradise to your day while taking the best care of your vehicle and our beautiful planet.
            </p>
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 font-display px-8 py-3 bg-[#f7d70e] text-[#715924] font-extrabold rounded-lg hover:bg-[#e5c60d] transition-all border-2 border-[#715924]"
              style={{ boxShadow: '3px 3px 0px 0px #715924' }}
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right - Value pills */}
          <div className="space-y-5">
            {[
              {
                title: "Family First",
                desc: "Every customer and team member is part of our Ohana.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
              },
              {
                title: "Eco-Friendly",
                desc: "Sustainable practices and products that protect our planet.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
              },
              {
                title: "Community Spirit",
                desc: "Giving back and supporting the Monroe community.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
              },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-5 bg-[#3B8FA5] rounded-2xl p-5 hover:bg-[#347f94] transition-colors">
                <div className="w-14 h-14 shrink-0 bg-[#f7d70e] rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#715924]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-display font-extrabold text-white">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Location Section - dark brown immersive
function LocationSection() {
  return (
    <section id="location" className="relative py-24 overflow-hidden">
      {/* Dark brown background */}
      <div className="absolute inset-0 bg-[#4A3520]" />
      {/* Subtle hawaiian pattern */}
      <div className="absolute inset-0 hawaiian-bg opacity-[0.06]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-script text-[#f7d70e] text-2xl mb-2">Come Visit!</p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            Find Us in Monroe
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Near Cincinnati Premium Outlets, Miami Valley Gaming, and Traders World Flea Market
          </p>
        </div>

        {/* Info row */}
        <div className="grid md:grid-cols-3 gap-0 max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden border border-white/10">
          {/* Location */}
          <div className="bg-white/5 p-8 text-center border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-center">
            <div className="w-12 h-12 mb-4 bg-[#f7d70e] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#715924]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-display font-bold text-[#f7d70e] uppercase tracking-wider mb-2">Address</h3>
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-white/90 text-lg font-medium">401 Gateway Blvd.</p>
              <p className="text-white/90 text-lg font-medium">Monroe, OH 45050</p>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white/5 p-8 text-center border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-center">
            <div className="w-12 h-12 mb-4 bg-[#f7d70e] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#715924]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-display font-bold text-[#f7d70e] uppercase tracking-wider mb-2">Hours</h3>
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-white/70 text-sm mb-1">Monday - Sunday</p>
              <p className="text-white text-3xl font-display font-extrabold">8AM - 8PM</p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white/5 p-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 mb-4 bg-[#f7d70e] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#715924]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-sm font-display font-bold text-[#f7d70e] uppercase tracking-wider mb-2">Call Us</h3>
            <div className="flex-1 flex flex-col justify-center">
              <a
                href="tel:5133607205"
                className="text-white text-2xl font-display font-extrabold hover:text-[#f7d70e] transition-colors block"
              >
                (513) 360-7205
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-white/50 mb-4 text-sm">Follow us on social media</p>
          <div className="flex justify-center gap-3">
            <a
              href="https://www.facebook.com/people/Ohana-Car-Wash/61567384826200/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-[#f7d70e] hover:text-[#715924] transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ohanacarwash.oh/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-[#f7d70e] hover:text-[#715924] transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


// Contact Section
function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-script text-[#F7D711] text-2xl mb-3">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-[#715924]">
              Contact Us
            </h2>
          </div>

          <div className="max-w-lg mx-auto">
            <WoodBoardCard>
              <form className="p-6 space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block font-display font-bold text-[#715924] mb-1 text-sm">Name</label>
                  <input type="text" id="contact-name" className="w-full px-4 py-3 rounded-lg border-2 border-[#DEA726] bg-white/80 text-[#715924] placeholder-[#715924]/40 focus:outline-none focus:ring-2 focus:ring-[#C9982E]" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block font-display font-bold text-[#715924] mb-1 text-sm">Email</label>
                  <input type="email" id="contact-email" className="w-full px-4 py-3 rounded-lg border-2 border-[#DEA726] bg-white/80 text-[#715924] placeholder-[#715924]/40 focus:outline-none focus:ring-2 focus:ring-[#C9982E]" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block font-display font-bold text-[#715924] mb-1 text-sm">Message</label>
                  <textarea id="contact-message" rows={4} className="w-full px-4 py-3 rounded-lg border-2 border-[#DEA726] bg-white/80 text-[#715924] placeholder-[#715924]/40 focus:outline-none focus:ring-2 focus:ring-[#C9982E] resize-none" placeholder="How can we help?" />
                </div>
                <button type="submit" className="w-full font-display px-8 py-3 bg-[#f7d70e] text-[#715924] font-extrabold rounded-lg hover:bg-[#e5c60d] transition-all border-2 border-[#715924] text-lg" style={{ boxShadow: '3px 3px 0px 0px #715924' }}>
                  Send Message
                </button>
              </form>
            </WoodBoardCard>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PerksSection />
      <WashPackagesSection />
      <AboutSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
