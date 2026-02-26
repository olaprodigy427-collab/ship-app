/*src/app/about/page.tsx */

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Package, Users, MapPin } from "lucide-react"; // ✅ Added icon imports

const faqs = [
  {
    question: "How do I track my shipment?",
    answer:
      "Once your package is shipped, you'll receive a tracking number via email. You can use it on our tracking page to monitor your delivery in real time.",
  },
  {
    question: "What destinations do you cover?",
    answer:
      "We currently cover 25 destinations worldwide. Visit our destinations page or contact us for a full list.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery times vary by destination. Domestic shipments typically take 1–3 business days, while international shipments may take 5–14 business days.",
  },
  {
    question: "What items are prohibited from shipping?",
    answer:
      "Prohibited items include hazardous materials, perishables, and items restricted by law. Please review our shipping policy for a complete list.",
  },
  {
    question: "How do I get a shipping quote?",
    answer:
      "You can get an instant quote by signing up and using our quote calculator on the dashboard.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center hover:bg-gray-50 transition"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-500 text-sm leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-bgLight min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textDark leading-tight mb-8">
            Redefining global logistics with smart solutions and seamless parcel
            delivery that connects the world.
          </h1>
          <Link
            href="/signup"
            className="inline-block bg-primary text-white font-medium px-10 py-4 rounded-full hover:bg-primary/90 transition text-lg"
          >
            Sign Up
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* ✅ Packages delivered */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <div className="mb-3 flex justify-center">
              <Package className="w-8 h-8 text-primary" />
            </div>
            <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">70,000</p>
            <p className="text-textGray">Packages delivered</p>
          </div>

          {/* ✅ Active Users */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <div className="mb-3 flex justify-center">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">5,000</p>
            <p className="text-textGray">Active Users</p>
          </div>

          {/* ✅ Destinations covered */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <div className="mb-3 flex justify-center">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">25</p>
            <p className="text-textGray">Destinations covered</p>
          </div>

        </div>
      </section>

      {/* Team Photo — only renders if image exists */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <Image
            src="/images/aboutus1.png"
            alt="Doyinbo Logistics Team"
            width={1200}
            height={600}
            className="rounded-2xl shadow-lg w-full"
            priority
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <div className="h-1 w-12 bg-primary mb-4"></div>
              <h3 className="text-xl font-bold mb-3">1. Customer First</h3>
              <p className="text-textGray">
                Putting our customers at the heart of everything we do, delivering
                tailored solutions that exceed expectations.
              </p>
            </div>
            <div>
              <div className="h-1 w-12 bg-primary mb-4"></div>
              <h3 className="text-xl font-bold mb-3">2. Efficiency</h3>
              <p className="text-textGray">
                Optimizing every process for faster, more reliable deliveries,
                ensuring the best use of time and resources.
              </p>
            </div>
            <div>
              <div className="h-1 w-12 bg-primary mb-4"></div>
              <h3 className="text-xl font-bold mb-3">3. Innovation</h3>
              <p className="text-textGray">
                Constantly evolving with cutting-edge solutions to stay ahead of
                the curve and redefine logistics.
              </p>
            </div>
            <div>
              <div className="h-1 w-12 bg-primary mb-4"></div>
              <h3 className="text-xl font-bold mb-3">4. Teamwork</h3>
              <p className="text-textGray">
                Collaboration and mutual support drive our success, working
                together to achieve excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/aboutus2.png"
              alt="Mission Team"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg w-full"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-textGray leading-relaxed">
                To transform global logistics by providing fast, reliable, and
                seamless parcel delivery through innovative digital solutions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-textGray leading-relaxed">
                To empower businesses worldwide with fast, reliable, and innovative
                logistics solutions that drive growth and seamless global
                connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ship with DYB Banner */}
      <section className="bg-bgDark text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Ship with the DYB team</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            DYB is a forward-thinking logistics company, and we are intentional
            about working with people who are passionate, innovative, and committed
            to excellence. Ship with us today for fast and efficient package
            delivery.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-primary text-white font-medium px-10 py-4 rounded-full hover:bg-primary/90 transition"
          >
            Sign Up
          </Link>
        </div>
      </section>

      {/* FAQ with Image */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bgLight">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="hidden md:block">
            <Image
              src="/images/ajet.png"
              alt="Warehouse team"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <FAQSection />
        </div>
      </section>
    </div>
  );
}