import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bgDark text-gray-300 px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* Newsletter */}
          <div className="max-w-md">
            <p className="text-white font-semibold mb-4">
              Subscribe to our newsletter
            </p>

            <div className="flex w-full">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-5 py-3 rounded-l-full bg-white text-textDark focus:outline-none"
              />
              <button className="bg-primary text-white px-8 py-3 rounded-r-full hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-sm">
            <div>
              <p className="text-white font-medium mb-3">Products</p>
              <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer">Shipping</li>
                <li className="hover:text-white cursor-pointer">Tracking</li>
              </ul>
            </div>

            <div>
              <p className="text-white font-medium mb-3">Company</p>
              <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer">Contact Us</li>
              </ul>
            </div>

            <div>
              <p className="text-white font-medium mb-3">Resources</p>
              <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer">FAQs</li>
              </ul>
            </div>

            <div>
              <p className="text-white font-medium mb-3">Legal</p>
              <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-white cursor-pointer">
                  Terms and conditions
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Copyright */}
          <p className="text-sm">
            © {new Date().getFullYear()} Doyinbo Logistics. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">
            <p className="text-sm">Follow us</p>
            <Image src="/images/book.png" alt="Facebook" width={22} height={22} />
            <Image src="/images/kinn.png" alt="LinkedIn" width={22} height={22} />
            <Image src="/images/twitt.png" alt="Twitter" width={22} height={22} />
            <Image src="/images/gramm.png" alt="Instagram" width={22} height={22} />
            <Image src="/images/tok.png" alt="Instagram" width={25} height={23} />
          </div>
        </div>

      </div>
    </footer>
  );
}
