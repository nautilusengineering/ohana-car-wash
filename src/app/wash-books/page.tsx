"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import IframeDrawer from "@/components/IframeDrawer";

// Plumeria flower bullet (matches the wash-package feature markers on the homepage).
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

// Wooden plank board — same treatment as the homepage wash cards.
function WoodBoard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative rounded-[10px] overflow-hidden ${className}`}
      style={{ boxShadow: "0px 12px 18px -6px rgba(0,0,0,0.3)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg,
            #D4A56A 0%, #DEB87A 10%, #C99A60 20%,
            #DEB87A 30%, #D4A56A 40%, #C99A60 50%,
            #DEB87A 60%, #D4A56A 70%, #C99A60 80%,
            #DEB87A 90%, #D4A56A 100%)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(180deg,
            transparent 0px, transparent 55px,
            rgba(120, 80, 30, 0.4) 55px, rgba(120, 80, 30, 0.25) 58px,
            transparent 58px, transparent 60px)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg,
            transparent 0px, transparent 3px,
            rgba(139, 90, 43, 0.06) 3px, rgba(139, 90, 43, 0.06) 4px,
            transparent 4px, transparent 18px)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Four wash books. Each is "buy 4, get 2 free" = 6 washes for the price of 4.
// singlePrice is the walk-up price of that wash level (used to show the savings).
// productId = the Nautilus SalesItem UUID for that wash book (deep-links its checkout).
const books = [
  { name: "Splash & Dash", tagline: "Quick & Easy", price: 40, single: 10, icon: "/splash-dash.png", premium: false, chip: null, productId: "bdf68c3a-9b0f-47c3-a5ae-a47c246b3b84" },
  { name: "Tropical Breeze", tagline: "Everyday Clean", price: 60, single: 15, icon: "/tropical-breeze.png", premium: false, chip: null, productId: "561eae33-2ad5-4703-8cbe-7bdef28a9398" },
  { name: "Island Shine", tagline: "Great All-Around", price: 80, single: 20, icon: "/island-shine.png", premium: false, chip: null, productId: "3df7fbd7-ce21-49de-9584-1b6d4b1b3c19" },
  { name: "The Big Kahuna", tagline: "Longer Lasting Shine", price: 100, single: 25, icon: "/big-kahuna.png", premium: true, chip: "The Ultimate Clean", productId: "46f63382-57a0-422a-8b25-1f71f5e294ed" },
];

const steps = [
  { n: 1, title: "Pick Your Wash", desc: "Choose any of our four wash levels — Splash & Dash up to The Big Kahuna." },
  { n: 2, title: "Buy 4 Up Front", desc: "Pay once for a pack of four washes. No monthly plan, no commitment." },
  { n: 3, title: "Get 2 Free", desc: "We add 2 bonus washes on the house — 6 total, ready whenever you are." },
];

export default function WashBooksPage() {
  const [drawerProductId, setDrawerProductId] = useState<string | undefined>();
  const [showDrawer, setShowDrawer] = useState(false);

  const buyBook = (productId: string) => {
    setDrawerProductId(productId || undefined);
    setShowDrawer(true);
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero title="Buy 4, Get 2 Free" subtitle="Ohana Wash Books" />

      {/* How it works — white */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <img src="/hibiscus.png" alt="" className="absolute top-10 -left-10 w-48 md:w-64 opacity-[0.06] pointer-events-none -rotate-12" />
        <img src="/corner-hibiscus-br.png" alt="" className="absolute bottom-16 -right-6 w-24 md:w-32 opacity-[0.08] pointer-events-none rotate-12" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-script text-[#F7D711] text-2xl mb-3">Prepaid &amp; Simple</p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#715924] mb-4">
              Six Washes for the Price of Four
            </h2>
            <p className="text-lg text-[#715924]/70">
              Stock up on washes and save. Every pack gives you{" "}
              <strong className="text-[#4AA2B9]">6 washes</strong> — you pay for 4 and the last 2
              are on us. <strong className="text-[#715924]">No membership required.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {steps.map((step) => (
              <div key={step.n} className="rounded-2xl p-6 text-center" style={{ border: "4px solid #715924" }}>
                <div
                  className="w-14 h-14 mx-auto mb-4 bg-[#F7D711] rounded-full flex items-center justify-center text-[#715924] font-display font-extrabold text-2xl"
                  style={{ border: "3px solid #4A3520" }}
                >
                  {step.n}
                </div>
                <h3 className="text-xl font-display font-extrabold text-[#715924] mb-2">{step.title}</h3>
                <p className="text-[#715924]/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The wash books — sand */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-[#EDE5D8] via-[#E8DFD0] to-[#EDE5D8] relative overflow-hidden">
        <img src="/hibiscus.png" alt="" className="absolute top-20 -right-10 w-44 md:w-60 opacity-[0.05] pointer-events-none rotate-[20deg]" />
        <img src="/corner-hibiscus-tl.png" alt="" className="absolute bottom-20 -left-6 w-24 md:w-32 opacity-[0.08] pointer-events-none -rotate-12" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="font-script text-[#F7D711] text-2xl mb-2">Pick Your Pack</p>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-stroke-heading mb-4">
              Wash Books
            </h2>
            <p className="text-lg text-[#715924]/70">Four levels — every pack is buy 4, get 2 free.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch pt-6">
            {books.map((book) => {
              const perWash = (book.price / 6).toFixed(2);
              const savings = book.single * 6 - book.price;
              return (
                <div key={book.name} className="relative h-full">
                  {/* Premium distinguisher */}
                  {book.chip && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                      <span
                        className="bg-[#F7D711] text-sm font-extrabold px-6 py-2 rounded-full whitespace-nowrap tracking-wide uppercase"
                        style={{
                          boxShadow: "0 6px 16px rgba(0,0,0,0.25), 0 2px 4px rgba(0,0,0,0.15)",
                          border: "3px solid #8B6B15",
                          color: "#6B4F10",
                        }}
                      >
                        {book.chip}
                      </span>
                    </div>
                  )}

                  <WoodBoard className={book.premium ? "h-full ring-4 ring-[#F7D711]" : "h-full"}>
                    <div className="p-3 pt-10 h-full flex flex-col">
                      {/* Wood header */}
                      <div className="h-[170px] flex flex-col items-center justify-end">
                        <Image
                          src={book.icon}
                          alt={book.name}
                          width={120}
                          height={120}
                          className="w-32 h-32 object-contain drop-shadow-lg"
                        />
                        <h3
                          className="text-center font-display font-extrabold uppercase text-2xl mb-1"
                          style={{ color: "#FFFDF0", WebkitTextStroke: "4px #715924", paintOrder: "stroke fill" }}
                        >
                          {book.name}
                        </h3>
                        <p className="text-center text-sm font-semibold text-white mb-3" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                          {book.tagline}
                        </p>
                      </div>

                      {/* White detail container */}
                      <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-4 pt-7 shadow-inner flex-1 flex flex-col">
                        {/* 2 FREE WASHES badge — on every card */}
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                          <span
                            className="inline-flex items-center gap-1.5 bg-[#4AA2B9] text-white text-xs font-extrabold uppercase tracking-wide px-4 py-1.5 rounded-full whitespace-nowrap"
                            style={{ border: "2px solid #1B5668", boxShadow: "0 3px 8px rgba(0,0,0,0.25)" }}
                          >
                            <Plumeria className="w-3.5 h-3.5" center="#F7D711" />
                            2 Free Washes
                          </span>
                        </div>

                        {/* Price */}
                        <div className="text-center mb-3 mt-1">
                          <div className="flex items-baseline justify-center gap-1">
                            <span className="font-bold text-[#4AA2B9] text-4xl">${book.price}</span>
                            <span className="text-sm text-[#715924]/60 font-medium">/ 6 washes</span>
                          </div>
                          <p className="text-xs text-[#715924]/60 mt-1">Just ${perWash} per wash</p>
                        </div>

                        {/* Deal breakdown */}
                        <ul className="space-y-1.5 mb-3 flex-1">
                          {["4 washes paid", "2 washes FREE", "No membership required", "Redeem anytime"].map((line) => (
                            <li key={line} className="flex items-center gap-2 text-sm text-[#4A3520]">
                              <Plumeria className="w-4 h-4 flex-shrink-0 text-[#DEA726]" />
                              {line}
                            </li>
                          ))}
                        </ul>

                        {/* Savings */}
                        <div className="mb-4 text-center">
                          <span className="inline-block bg-[#715924] text-[#f7d70e] text-xs font-bold px-3 py-1 rounded-full">
                            You save ${savings}
                          </span>
                        </div>

                        {/* CTA */}
                        <button
                          type="button"
                          onClick={() => buyBook(book.productId)}
                          className={`block w-full py-3 font-bold rounded-full text-center transition-all cursor-pointer ${
                            book.premium
                              ? "bg-[#715924] text-[#f7d70e] hover:bg-[#f7d70e] hover:text-[#715924]"
                              : "bg-[#f7d70e] text-[#715924] hover:bg-[#e5c60d] shadow-md"
                          }`}
                          style={{ boxShadow: "3px 3px 0px 0px #715924" }}
                        >
                          Get This Pack
                        </button>
                      </div>
                    </div>
                  </WoodBoard>
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-center text-sm text-[#715924]/60">
            No membership required · Redeem at any Ohana Car Wash · Mix and match anytime
          </p>
        </div>
      </section>

      <Footer />

      {showDrawer && (
        <IframeDrawer
          onClose={() => setShowDrawer(false)}
          productId={drawerProductId}
          title="Buy a Wash Book"
        />
      )}
    </main>
  );
}
