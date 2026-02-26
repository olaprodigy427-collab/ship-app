// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bgDark text-gray-300 px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Top Section: Newsletter + Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">

          {/* Newsletter */}
          <div className="max-w-md">
            <p className="text-white font-semibold text-lg mb-4">
              Subscribe to our newsletter
            </p>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-5 py-3.5 rounded-l-full bg-white text-textDark focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="bg-primary text-white px-8 py-3.5 rounded-r-full hover:opacity-90 transition font-medium">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 text-sm text-center sm:text-left">
            {/* Products */}
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/shipping" className="hover:text-white transition">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="/tracking" className="hover:text-white transition">
                    Tracking
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/contact#faq-section" className="hover:text-white transition">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Terms and conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Divider + Copyright + Social */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">

          {/* Copyright */}
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Doyinbo Logistics. All rights reserved.
          </p>

          {/* Social Icons */}
          <div id="socials-section" className="flex items-center gap-5">
            <span className="text-gray-400">Follow us</span>
            <div className="flex gap-4">
              <Link href="#" className="hover:opacity-80 transition">
                <Image src="/images/book.png" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <Image src="/images/kinn.png" alt="LinkedIn" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <Image src="/images/twitt.png" alt="Twitter" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <Image src="/images/gramm.png" alt="Instagram" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <Image src="/images/tok.png" alt="TikTok" width={28} height={28} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}