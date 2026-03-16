import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import WoodBoardCard from "@/components/WoodBoardCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Ohana Car Wash",
  description: "Ohana Car Wash terms and conditions. Learn about our commitment to quality, exclusions, and customer experience policies.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero title="Terms & Conditions" subtitle="Our Commitment to Quality" />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Intro */}
            <WoodBoardCard>
              <div className="p-8 md:p-12">
                <p className="text-[#715924] text-lg leading-relaxed">
                  At Ohana Car Wash, we strive to deliver a clean, safe, and shiny experience for every vehicle that passes through our wash.
                </p>
              </div>
            </WoodBoardCard>

            {/* Exclusions */}
            <WoodBoardCard>
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-display font-extrabold text-[#715924] mb-4">Exclusions</h2>
                <p className="text-[#715924]/80 mb-4">Ohana Car Wash is not responsible for damage to the following:</p>
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                  {[
                    "Antennas & Shark Fin Antennas",
                    "Windshield Wiper Components",
                    "Non-factory installed items",
                    "Glass chips or cracks",
                    "Mirrors",
                    "Sunroofs",
                    "Spare tire covers",
                    "Bug shields",
                    "Wind/Rain deflectors",
                    "Emblems",
                    "Running boards",
                    "Wheel covers",
                    "Pinstriping & Decals",
                    "Wraps & Body molding",
                    "Repainted vehicles",
                    "Vehicles over 5 years old",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#715924]/80">
                      <svg className="w-4 h-4 shrink-0 text-[#C9982E]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </WoodBoardCard>

            {/* Truck Bed */}
            <WoodBoardCard>
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-display font-extrabold text-[#715924] mb-4">Truck Bed & Accessories</h2>
                <ul className="space-y-3 text-[#715924]/80">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 shrink-0 mt-0.5 text-[#C9982E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Truck beds must be clean, empty, and debris-free before entering the wash.
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 shrink-0 mt-0.5 text-[#C9982E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Please remove trailer hitches and bike racks before entering.
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 shrink-0 mt-0.5 text-[#C9982E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    No auxiliary fuel tanks or lockers are allowed in the wash tunnel.
                  </li>
                </ul>
              </div>
            </WoodBoardCard>

            {/* Special Equipment */}
            <WoodBoardCard>
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-display font-extrabold text-[#715924] mb-4">Special Equipment</h2>
                <p className="text-[#715924]/80 leading-relaxed">
                  We reserve the right to retract equipment for vehicles with brush guards, winches, light bars, and similar accessories. Wash quality for these vehicles cannot be guaranteed.
                </p>
              </div>
            </WoodBoardCard>

            {/* Customer Experience */}
            <WoodBoardCard>
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-display font-extrabold text-[#715924] mb-4">Customer Experience</h2>
                <p className="text-[#715924]/80 leading-relaxed">
                  Our wash includes a light show that may not be suitable for individuals with photosensitivity or claustrophobia. Please let our attendants know if you have any concerns.
                </p>
              </div>
            </WoodBoardCard>

            {/* Liability */}
            <WoodBoardCard>
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-display font-extrabold text-[#715924] mb-4">Liability</h2>
                <p className="text-[#715924]/80 leading-relaxed">
                  Ohana Car Wash is not responsible for collisions due to braking or driving through a car wash tunnel. Please follow all posted instructions and attendant directions while in the wash.
                </p>
              </div>
            </WoodBoardCard>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
