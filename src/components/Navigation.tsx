"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">
      <div className="relative overflow-hidden" style={{
        background: `linear-gradient(90deg,
          #D4A56A 0%, #DEB87A 10%, #C99A60 20%,
          #DEB87A 30%, #D4A56A 40%, #C99A60 50%,
          #DEB87A 60%, #D4A56A 70%, #C99A60 80%,
          #DEB87A 90%, #D4A56A 100%
        )`,
        boxShadow: '0 6px 12px rgba(0,0,0,0.25)',
      }}>
        {/* Wood plank lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg,
            transparent 0px, transparent 3px,
            rgba(139, 90, 43, 0.06) 3px, rgba(139, 90, 43, 0.06) 4px,
            transparent 4px, transparent 18px
          )`,
        }} />
        {/* Subtle wood grain noise */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
        {/* Top highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#E8C690]/60 via-[#F0D8A8]/80 to-[#E8C690]/60" />
        {/* Bottom shadow edge */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B6B30]/30" />

        {/* Muted tropical flowers — left side */}
        <img
          src="/corner-hibiscus-tl.png"
          alt=""
          className="absolute -top-3 -left-4 w-16 md:w-20 pointer-events-none opacity-70 -rotate-6"
        />
        {/* Hibiscus shadow — right side background */}
        <img
          src="/hibiscus.png"
          alt=""
          className="absolute -bottom-3 -right-4 w-20 md:w-24 pointer-events-none opacity-[0.08] rotate-[20deg]"
        />
        {/* Muted tropical flowers — right side */}
        <img
          src="/corner-hibiscus-br.png"
          alt=""
          className="absolute -bottom-3 -right-4 w-16 md:w-20 pointer-events-none opacity-70 rotate-6"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Ohana Car Wash"
                width={120}
                height={48}
                className="h-10 w-auto drop-shadow-md"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/about-us" className="font-display text-white font-extrabold text-sm uppercase hover:text-[#f7d70e] transition-colors" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>About Us</Link>
              <Link href="/services" className="font-display text-white font-extrabold text-sm uppercase hover:text-[#f7d70e] transition-colors" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>Fleet</Link>
              <Link href="/family-plan" className="font-display text-white font-extrabold text-sm uppercase hover:text-[#f7d70e] transition-colors" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>Family Plan</Link>
              <Link href="/environment" className="font-display text-white font-extrabold text-sm uppercase hover:text-[#f7d70e] transition-colors" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>Environment</Link>
              <Link href="/fundraising" className="font-display text-white font-extrabold text-sm uppercase hover:text-[#f7d70e] transition-colors" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>Fundraising</Link>
              <Link href="/careers" className="font-display text-white font-extrabold text-sm uppercase hover:text-[#f7d70e] transition-colors" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>Careers</Link>

              <a
                href="https://www.nautilus-app.com/c/ohana/p/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display px-5 py-2 bg-[#f7d70e] text-[#715924] font-extrabold rounded-lg hover:bg-[#e5c60d] transition-all border-2 border-[#715924]"
                style={{ boxShadow: '3px 3px 0px 0px #715924' }}
              >
                Manage Membership
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-[#B08850]/30">
              <div className="flex flex-col gap-3">
                <Link href="/about-us" className="font-display text-white font-extrabold uppercase hover:text-[#f7d70e] transition-colors py-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>About Us</Link>
                <Link href="/services" className="font-display text-white font-extrabold uppercase hover:text-[#f7d70e] transition-colors py-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>Fleet</Link>
                <Link href="/family-plan" className="font-display text-white font-extrabold uppercase hover:text-[#f7d70e] transition-colors py-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>Family Plan</Link>
                <Link href="/environment" className="font-display text-white font-extrabold uppercase hover:text-[#f7d70e] transition-colors py-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>Environment</Link>
                <Link href="/fundraising" className="font-display text-white font-extrabold uppercase hover:text-[#f7d70e] transition-colors py-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>Fundraising</Link>
                <Link href="/careers" className="font-display text-white font-extrabold uppercase hover:text-[#f7d70e] transition-colors py-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>Careers</Link>
                <a
                  href="https://www.nautilus-app.com/c/ohana/p/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display px-5 py-2.5 bg-[#f7d70e] text-[#715924] font-extrabold rounded-lg text-center border-2 border-[#715924]"
                >
                  Manage Membership
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
