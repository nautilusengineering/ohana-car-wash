"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import useNautilusEmbed from "@/hooks/useNautilusEmbed";

// Plumeria flower bullet (matches the wash-package feature markers used site-wide).
function Plumeria({ className = "", center = "#F7D711" }: { className?: string; center?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <ellipse cx="10" cy="5.5" rx="2.8" ry="4.5" transform="rotate(0 10 10)" />
      <ellipse cx="10" cy="5.5" rx="2.8" ry="4.5" transform="rotate(72 10 10)" />
      <ellipse cx="10" cy="5.5" rx="2.8" ry="4.5" transform="rotate(144 10 10)" />
      <ellipse cx="10" cy="5.5" rx="2.8" ry="4.5" transform="rotate(216 10 10)" />
      <ellipse cx="10" cy="5.5" rx="2.8" ry="4.5" transform="rotate(288 10 10)" />
      <circle cx="10" cy="10" r="2.2" fill={center} />
    </svg>
  );
}

// How the fleet program works — from the Ohana Fleet Program flyer.
const steps = [
  { n: 1, title: "Pick Your Wash", desc: "Choose one of our four packages for the account." },
  { n: 2, title: "Buy In Bulk", desc: "The more washes you buy, the lower your price." },
  { n: 3, title: "Send Your Plates", desc: "We load your plate list — nothing to install." },
  { n: 4, title: "Just Drive Up", desc: "Our camera reads the plate and opens the gate." },
  { n: 5, title: "We Watch It", desc: "We call you when your balance runs low." },
];

// Fleet price-per-wash ladder — from the Ohana Fleet Program flyer.
// prices: [price, save%] for 50–99 / 100–249 / 250–499 / 500+ washes.
const volumeTiers = ["50–99 Washes", "100–249 Washes", "250–499 Washes", "500+ Washes"];
const fleetPricing = [
  {
    name: "The Big Kahuna",
    reg: 25,
    icon: "/big-kahuna.png",
    includes: "Graphene Xtreme & Ceramic X3",
    prices: [
      [19.0, 24],
      [17.75, 29],
      [16.75, 33],
      [16.0, 36],
    ],
  },
  {
    name: "Island Shine",
    reg: 20,
    icon: "/island-shine.png",
    includes: "Hot wax, sealer wax, tire shine",
    prices: [
      [14.6, 27],
      [13.8, 31],
      [13.0, 35],
      [12.2, 39],
    ],
  },
  {
    name: "Tropical Breeze",
    reg: 15,
    icon: "/tropical-breeze.png",
    includes: "Rain Repel, wheel cleaner, air dry",
    prices: [
      [11.25, 25],
      [10.65, 29],
      [9.9, 34],
      [9.45, 37],
    ],
  },
  {
    name: "Splash & Dash",
    reg: 10,
    icon: "/splash-dash.png",
    includes: "Wash, rinse, dry, basic clean",
    prices: [
      [8.0, 20],
      [7.5, 25],
      [7.3, 27],
      [6.6, 34],
    ],
  },
];

// Account benefits — from the flyer's "What Your Fleet Gets" panel.
const benefits = [
  {
    title: "No Tags or Stickers",
    desc: "Nothing to hand out and nothing to install — our camera reads the plate and opens the gate.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z M4 8h2l2-3h8l2 3h2a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z"
      />
    ),
  },
  {
    title: "Monthly Usage Reports",
    desc: "See exactly which vehicles washed and when, reported by plate every month.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 17v-4m3 4v-8m3 8v-2M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
      />
    ),
  },
  {
    title: "Swap Plates Anytime",
    desc: "Add, swap, or remove vehicles whenever your fleet changes — no paperwork.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    ),
  },
  {
    title: "Washes Never Expire",
    desc: "No contract, no monthly commitment. Buy a batch and use it at your own pace.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Free Vacuums & Air Guns",
    desc: "Every wash includes free vacuums and air guns — drivers can clean out the cab at no extra charge.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Locally Owned",
    desc: "Right here in Monroe — Liʻi Liʻi and the Ohana team look after every vehicle that rolls through.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    ),
  },
];

// Starter packs — flyer footnote: start with as few as 50 washes.
const starterPacks = [
  { name: "Splash & Dash", total: "$400" },
  { name: "Tropical Breeze", total: "$562.50" },
  { name: "Island Shine", total: "$730" },
  { name: "The Big Kahuna", total: "$950" },
];

export default function FleetPage() {
  useNautilusEmbed();

  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero title="Fleet Program" subtitle="Aloha, Business Owners!" />

      {/* Intro + How It Works — white */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <img
          src="/hibiscus.png"
          alt=""
          className="absolute top-10 -left-10 w-48 md:w-64 opacity-[0.06] pointer-events-none -rotate-12"
        />
        <img
          src="/corner-hibiscus-br.png"
          alt=""
          className="absolute bottom-16 -right-6 w-24 md:w-32 opacity-[0.08] pointer-events-none rotate-12"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="font-script text-[#F7D711] text-2xl mb-3">Where Every Wash is a Splash of Paradise</p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#715924] mb-4">
              A Clean, Shiny Fleet Says a Lot About Your Business
            </h2>
            <p className="text-lg text-[#715924]/70">
              Work trucks, service vans, sales cars, church buses — whatever you drive, Ohana keeps it
              looking sharp for less. Buy washes in bulk, pay one simple price per wash, and let your
              team roll through any time we&apos;re open — no cards, no codes, no cash.
            </p>
          </div>

          {/* Key promises */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {["No contract", "No monthly commitment", "Washes never expire"].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-2 bg-[#4AA2B9] text-white text-sm font-extrabold uppercase tracking-wide px-4 py-2 rounded-full"
                style={{ border: "2px solid #1B5668", boxShadow: "0 3px 8px rgba(0,0,0,0.2)" }}
              >
                <Plumeria className="w-4 h-4" center="#F7D711" />
                {chip}
              </span>
            ))}
          </div>

          <div className="text-center mb-10">
            <p className="font-script text-[#F7D711] text-2xl mb-3">Simple as a Day at the Beach</p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#715924]">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {steps.map((step) => (
              <div key={step.n} className="rounded-2xl p-5 text-center" style={{ border: "4px solid #715924" }}>
                <div
                  className="w-12 h-12 mx-auto mb-3 bg-[#4AA2B9] rounded-full flex items-center justify-center text-white font-display font-extrabold text-xl"
                  style={{ border: "3px solid #1B5668" }}
                >
                  {step.n}
                </div>
                <h3 className="text-lg font-display font-extrabold text-[#715924] mb-1.5">{step.title}</h3>
                <p className="text-sm text-[#715924]/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet pricing — sand */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-[#EDE5D8] via-[#E8DFD0] to-[#EDE5D8] relative overflow-hidden">
        <img
          src="/hibiscus.png"
          alt=""
          className="absolute top-20 -right-10 w-44 md:w-60 opacity-[0.05] pointer-events-none rotate-[20deg]"
        />
        <img
          src="/corner-hibiscus-tl.png"
          alt=""
          className="absolute bottom-20 -left-6 w-24 md:w-32 opacity-[0.08] pointer-events-none -rotate-12"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <p className="font-script text-[#F7D711] text-2xl mb-2">The More You Wash, The More You Save</p>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-stroke-heading mb-4">
              Fleet Pricing
            </h2>
            <p className="text-lg text-[#715924]/70">
              One simple price per wash — all four packages, four volume levels.
            </p>
          </div>

          {/* Contained horizontal scroll on small screens */}
          <div className="max-w-5xl mx-auto">
            <p className="md:hidden text-center text-sm text-[#715924]/60 mb-3">
              Swipe the table to see all volume tiers →
            </p>
            <div
              className="overflow-x-auto max-w-full rounded-xl bg-white/95"
              style={{ border: "4px solid #715924", boxShadow: "4px 4px 0px 2px #DEA726" }}
            >
              <table className="w-full min-w-[720px] border-collapse">
                <thead>
                  <tr className="bg-[#4AA2B9] text-white">
                    <th className="text-left px-4 py-3 font-display font-extrabold text-sm uppercase tracking-wide">
                      Wash Package
                    </th>
                    {volumeTiers.map((tier) => (
                      <th
                        key={tier}
                        className="px-3 py-3 font-display font-extrabold text-sm uppercase tracking-wide text-center whitespace-nowrap"
                      >
                        {tier}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {fleetPricing.map((pkg, i) => (
                    <tr key={pkg.name} className={i % 2 === 1 ? "bg-[#F3FAFB]" : ""}>
                      <td className="px-4 py-3 border-t border-[#715924]/15">
                        <div className="flex items-center gap-3">
                          <Image
                            src={pkg.icon}
                            alt={pkg.name}
                            width={44}
                            height={44}
                            className="w-11 h-11 object-contain flex-shrink-0"
                          />
                          <div>
                            <span className="block font-display font-extrabold text-[#715924] leading-tight">
                              {pkg.name}
                            </span>
                            <span className="block text-xs text-[#715924]/60 font-semibold">
                              Reg. ${pkg.reg} per wash
                            </span>
                          </div>
                        </div>
                      </td>
                      {pkg.prices.map(([price, save], j) => (
                        <td
                          key={volumeTiers[j]}
                          className="px-3 py-3 text-center border-t border-[#715924]/15"
                        >
                          <span className="block font-extrabold text-[#1B5668] text-lg">
                            ${price.toFixed(2)}
                          </span>
                          <span className="block text-xs font-bold text-[#A87608]">Save {save}%</span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Starter packs */}
            <div className="mt-8 text-center">
              <p className="font-display font-extrabold text-[#715924] mb-3">
                Start with as few as <span className="text-[#1B5668]">50 washes</span>
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {starterPacks.map((pack) => (
                  <span
                    key={pack.name}
                    className="inline-block bg-white text-sm font-bold text-[#715924] px-4 py-2 rounded-full"
                    style={{ border: "2px solid #DEA726" }}
                  >
                    {pack.name} · <span className="text-[#1B5668]">{pack.total}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What your fleet gets — white */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <img
          src="/corner-hibiscus-tl.png"
          alt=""
          className="absolute top-10 -left-6 w-24 md:w-32 opacity-[0.08] pointer-events-none -rotate-6"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="font-script text-[#F7D711] text-2xl mb-3">Ohana Means Family</p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#715924]">
              What Your Fleet Gets
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-2xl p-6" style={{ border: "4px solid #715924" }}>
                <div className="w-12 h-12 mb-4 bg-[#4AA2B9] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-display font-extrabold text-[#715924] mb-1.5">{item.title}</h3>
                <p className="text-sm text-[#715924]/70">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Package inclusions */}
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-sm font-extrabold uppercase tracking-wide text-[#715924]/60 mb-4">
              Every package, fleet-priced
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {fleetPricing.map((pkg) => (
                <div
                  key={pkg.name}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 bg-[#F3FAFB]"
                  style={{ border: "2px solid #4AA2B9" }}
                >
                  <Image
                    src={pkg.icon}
                    alt={pkg.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain flex-shrink-0"
                  />
                  <div>
                    <span className="block font-display font-extrabold text-[#715924] text-sm leading-tight">
                      {pkg.name}
                    </span>
                    <span className="block text-xs text-[#715924]/70">{pkg.includes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — teal band */}
      <section className="py-14 md:py-16 bg-[#4AA2B9] relative overflow-hidden">
        <img
          src="/hibiscus.png"
          alt=""
          className="absolute -top-8 -right-8 w-40 md:w-56 opacity-10 pointer-events-none rotate-12"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <img
          src="/hibiscus.png"
          alt=""
          className="absolute -bottom-10 -left-8 w-36 md:w-48 opacity-10 pointer-events-none -rotate-12"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="font-script text-[#F7D711] text-2xl mb-2">Ready to Roll?</p>
          <h2
            className="text-3xl md:text-4xl font-display font-extrabold text-white mb-6"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
          >
            Start Your Fleet Account
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="tel:5133607205"
              className="font-display px-7 py-3 bg-[#f7d70e] text-[#715924] font-extrabold rounded-lg hover:bg-[#e5c60d] transition-all border-2 border-[#715924] text-lg"
              style={{ boxShadow: "3px 3px 0px 0px #715924" }}
            >
              Call (513) 360-7205
            </a>
            <a
              href="#inquiry"
              className="font-display px-7 py-3 bg-white text-[#1B5668] font-extrabold rounded-lg hover:bg-[#f0f8fa] transition-all border-2 border-[#1B5668]"
              style={{ boxShadow: "3px 3px 0px 0px #1B5668" }}
            >
              Send a Fleet Inquiry
            </a>
          </div>
          <p className="text-white/90 text-sm">
            401 Gateway Blvd. · Monroe, OH 45050 · Open Daily 8AM – 8PM
          </p>
        </div>
      </section>

      {/* Fleet inquiry form — white (same Nautilus form as /services) */}
      <section id="inquiry" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="font-script text-[#F7D711] text-2xl mb-3">Prefer to Write?</p>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#715924]">
                Send a Fleet Inquiry
              </h2>
              <p className="text-[#715924]/70 mt-3">
                Tell us about your vehicles and we&apos;ll get back to you with a quote.
              </p>
            </div>

            <div
              className="rounded-xl p-4 md:p-6"
              style={{
                background: "#715924",
                border: "5px solid #DEA726",
                boxShadow: "4px 4px 0px 3px #4A3520",
              }}
            >
              <div data-nautilus-embed="form" data-src="/c/form/918e2a3b-db0c-452e-b4d3-9f69c774c699" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
