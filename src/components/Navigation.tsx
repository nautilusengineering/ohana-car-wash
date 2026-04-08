"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 shadow-lg">
      <div className="relative overflow-hidden" style={{
        background: '#FFFFFF',
        boxShadow: '0 4px 6px rgba(113, 89, 36, 0.15)',
      }}>
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Ohana Car Wash"
                width={120}
                height={48}
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/about-us" className="font-display text-[#715924] font-extrabold text-sm uppercase hover:text-[#4A3520] transition-colors">About Us</Link>
              <Link href="/services" className="font-display text-[#715924] font-extrabold text-sm uppercase hover:text-[#4A3520] transition-colors">Fleet</Link>
              <Link href="/environment" className="font-display text-[#715924] font-extrabold text-sm uppercase hover:text-[#4A3520] transition-colors">Environment</Link>
              <Link href="/fundraising" className="font-display text-[#715924] font-extrabold text-sm uppercase hover:text-[#4A3520] transition-colors">Fundraising</Link>
              <Link href="/careers" className="font-display text-[#715924] font-extrabold text-sm uppercase hover:text-[#4A3520] transition-colors">Careers</Link>

              <a
                href="https://www.nautilus-app.com/c/ohana/p/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display px-5 py-2 bg-white text-[#715924] font-extrabold rounded-lg hover:bg-[#F5F0E8] transition-all border-2 border-[#715924]"
              >
                Manage Membership
              </a>
              <a
                href="https://ohanacarwash.mywashaccount.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display px-5 py-2 bg-[#f7d70e] text-[#715924] font-extrabold rounded-lg hover:bg-[#e5c60d] transition-all border-2 border-[#715924]"
                style={{ boxShadow: '3px 3px 0px 0px #715924' }}
              >
                Join Ohana Unlimited
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6 text-[#715924]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="md:hidden py-4 border-t border-[#E8DFD0]">
              <div className="flex flex-col gap-3">
                <Link href="/about-us" className="font-display text-[#715924] font-extrabold uppercase hover:text-[#4A3520] transition-colors py-2">About Us</Link>
                <Link href="/services" className="font-display text-[#715924] font-extrabold uppercase hover:text-[#4A3520] transition-colors py-2">Fleet</Link>
                <Link href="/environment" className="font-display text-[#715924] font-extrabold uppercase hover:text-[#4A3520] transition-colors py-2">Environment</Link>
                <Link href="/fundraising" className="font-display text-[#715924] font-extrabold uppercase hover:text-[#4A3520] transition-colors py-2">Fundraising</Link>
                <Link href="/careers" className="font-display text-[#715924] font-extrabold uppercase hover:text-[#4A3520] transition-colors py-2">Careers</Link>
                <a
                  href="https://www.nautilus-app.com/c/ohana/p/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display px-5 py-2.5 bg-white text-[#715924] font-extrabold rounded-lg text-center border-2 border-[#715924]"
                >
                  Manage Membership
                </a>
                <a
                  href="https://ohanacarwash.mywashaccount.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display px-5 py-2.5 bg-[#f7d70e] text-[#715924] font-extrabold rounded-lg text-center border-2 border-[#715924]"
                >
                  Join Ohana Unlimited
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
