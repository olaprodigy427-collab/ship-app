"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-bgHero py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Text */}
        <div className="md:w-1/2 space-y-6">
          <div className="flex items-center gap-2 text-sm text-textGray">
            <span className="w-2 h-2 rounded-full bg-accentGreen" />
            <p>Demos available on request</p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textDark leading-tight">
            Reliable Logistics, <br className="hidden sm:inline" /> On-Time Every Time
          </h1>

          <p className="text-textGray max-w-md">
            Seamless shipment delivery solutions for your business with on-time
            precision to keep you on track.
          </p>
        </div>

        {/* Right Image + Floating Cards */}
        <motion.div
          className="md:w-1/2 relative p-4 sm:p-8"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-3xl bg-[#E9EFF2] p-6">
            <Image
              src="/images/hass.png"
              alt="Delivery man"
              width={500}
              height={500}
              className="rounded-2xl object-cover"
            />

            {/* Top Floating Card */}
            <motion.div
              className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-white px-4 sm:px-5 py-2 sm:py-3 rounded-xl shadow-md sm:-rotate-6 z-10"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-textGray">
                <span className="font-semibold text-primary">1.2 Days</span>
                <br />
                Average delivery time
              </p>
            </motion.div>

            {/* Bottom Floating Card */}
            <motion.div
              className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white px-4 sm:px-5 py-2 sm:py-3 rounded-xl shadow-md z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-textGray">
                <span className="font-semibold text-primary">+2.3K Orders</span>
                <br />
                Delivered on time
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
