import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#715924] text-white py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Logo & Info */}
          <div className="sm:col-span-2">
            <Image
              src="/logo.png"
              alt="Ohana Car Wash"
              width={180}
              height={72}
              className="h-14 w-auto mb-5"
            />
            <p className="text-white/70 max-w-md mb-4">
              Where every wash is a splash of paradise! Your convenient and eco-friendly car wash destination in Monroe, OH.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/people/Ohana-Car-Wash/61567384826200/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9982E] hover:text-[#715924] transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ohanacarwash.oh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9982E] hover:text-[#715924] transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#D4A83A]">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-white/70 hover:text-[#D4A83A] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-[#D4A83A] transition-colors">Services</Link></li>
              <li><a href="https://ohanacarwash.mywashaccount.com/#gift-card" className="text-white/70 hover:text-[#D4A83A] transition-colors">Gift Cards</a></li>
              <li><Link href="/careers" className="text-white/70 hover:text-[#D4A83A] transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#D4A83A]">Contact</h4>
            <ul className="space-y-2 text-white/70">
              <li>401 Gateway Blvd.</li>
              <li>Monroe, OH 45050</li>
              <li className="pt-2">
                <a href="tel:5133607205" className="hover:text-[#D4A83A] transition-colors">
                  (513) 360-7205
                </a>
              </li>
              <li className="text-sm">Mon-Sun: 8AM - 8PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
          <div className="flex items-center justify-center gap-3 mb-2">
            <img src="/hibiscus.png" alt="" className="w-5 h-5 opacity-40 -rotate-12" />
            <p>&copy; {new Date().getFullYear()} Ohana Car Wash. All Rights Reserved.</p>
            <img src="/hibiscus.png" alt="" className="w-5 h-5 opacity-40 rotate-12" style={{ filter: 'hue-rotate(30deg)' }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
