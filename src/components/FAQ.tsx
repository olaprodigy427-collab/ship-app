"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-bgLight">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

        {/* Left Image – scroll reveal */}
        <motion.div
          className="h-full"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/ajet.png"
            alt="Warehouse staff"
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-3xl"
            priority
          />
        </motion.div>

        {/* Right FAQ – same height as image */}
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-textDark">
              Frequently asked questions
            </h2>
            <p className="text-textGray mt-2">
              Have questions? We’re here to help
            </p>
          </div>

          {/* FAQ List */}
          <div className="flex flex-col gap-4 flex-1">
            {[
              {
                q: "What services do you offer?",
                a: "We provide a wide range of logistics solutions, including domestic and international shipping.",
              },
              {
                q: "How do I track my shipment?",
                a: "You’ll receive a tracking number once dispatched, which you can use on our website.",
              },
              {
                q: "How are shipping rates determined?",
                a: "Rates depend on weight, size, destination, and delivery timeline.",
              },
              {
                q: "What types of payment do you accept?",
                a: "We accept bank transfers, debit cards, and secure online payments.",
              },
              {
                q: "Do you ship internationally?",
                a: "Yes, we ship globally with trusted international partners.",
              },
              {
                q: "Does insurance cover my shipment?",
                a: "Yes — insurance covers your goods depending on the shipping option you choose.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="bg-white rounded-xl border border-gray-100 group"
              >
                <summary className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 cursor-pointer list-none">
                  <span className="font-medium text-textDark">
                    {item.q}
                  </span>
                  <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="px-4 sm:px-6 pb-4 text-textGray text-sm leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
