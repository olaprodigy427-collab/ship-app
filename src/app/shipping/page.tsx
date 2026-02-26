// src/app/shipping/page.tsx
import FAQSection from "@/components/FAQ";
import Link from "next/link";

export default function ShippingPage() {
  return (
    <div className="bg-bgLight">
      {/* Hero / Title Section */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textDark leading-tight mb-6">
            Choose Your Preferred Shipping <br className="hidden sm:inline"></br> Option By Cost
          </h1>
        </div>
      </section>

      {/* Main Content - Three Columns (desktop) → Stack (mobile) */}
      <section className="pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Domestic Shipping Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col h-full">
            <h2 className="text-2xl font-bold text-textDark mb-4">Domestic Shipping</h2>
            <p className="text-textGray mb-8 flex-grow">
              At DYB Africa, we efficiently deliver nationwide by different channels and carefully selected couriers so your packages remain protected.
            </p>
            <Link
              href="#"
              className="bg-primary text-white font-medium py-4 px-8 rounded-full text-center hover:bg-opacity-90 transition inline-block mt-auto"
            >
              Explore →
            </Link>
          </div>

          {/* Middle - Charges / Rates */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6">Charges</h3>
            <p className="text-textGray mb-4">Check destination to check shipping rates</p>

            {/* Destination Dropdown (mock) */}
            <div className="relative mb-8">
              <select className="w-full p-4 pr-10 rounded-full border border-gray-300 bg-white appearance-none focus:outline-none focus:border-primary">
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Port Harcourt</option>
                <option>Kano</option>
                <option>Ibadan</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-textGray">▼</span>
            </div>

            <h4 className="text-lg font-semibold mb-4">Rates</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 sm:p-4 border border-primary rounded-full">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🚚</span>
                  <span className="font-medium">Express</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-primary">₦8,000.00</span>
                  <p className="text-sm text-textGray">1 day</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-full">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🚶</span>
                  <span className="font-medium">Domestic</span>
                </div>
                <div className="text-right">
                  <span className="font-bold">₦5,000.00</span>
                  <p className="text-sm text-textGray">2-4 days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Search + All Services */}
          <div className="space-y-8">
            {/* Search */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6">Search here</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full p-4 pl-12 rounded-full border border-gray-300 focus:outline-none focus:border-primary"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-textGray">🔍</span>
              </div>
            </div>

            {/* All Services */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6">All Services</h3>
              <div className="space-y-4">
                {["Air Freight", "Road Freight", "Sea Freight"].map((service) => (
                  <div
                    key={service}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-full hover:border-primary transition"
                  >
                    <span className="font-medium">{service}</span>
                    <span>→</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable FAQ */}
      <FAQSection />

      {/* Reusable Footer - already in layout.tsx, but confirm it matches */}
      {/* If footer needs page-specific tweaks, let me know */}
    </div>
  );
}