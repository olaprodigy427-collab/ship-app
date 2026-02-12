import Image from "next/image";

export default function DeliverySection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white text-textDark">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Left - Map + Overlays */}
        <div className="lg:w-3/5 relative rounded-xl overflow-hidden shadow-2xl">
          {/* Main map image – replace with your actual dark-themed route map */}
          <Image
            src="/images/ship.png"           // ← keep your file or use a darker Africa/US route map
            alt="Shipment route map"
            width={800}
            height={600}
            className="w-full h-auto object-cover brightness-75 contrast-125"
            priority
          />

          {/* Dark overlay for mood + subtle radar glow effect */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30" />

          {/* Central "Ready to GO!" pill */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-black/80 backdrop-blur-md text-white text-sm md:text-base font-semibold px-6 py-3 rounded-full border border-green-500/40 shadow-lg shadow-green-500/20 whitespace-nowrap">
              "Ready to GO!"
            </div>
          </div>

          {/* Floating status cards + route line */}
          <div className="absolute bottom-8 left-6 right-6 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            {/* Origin card */}
            <div className="bg-black/85 backdrop-blur-md rounded-xl p-4 flex items-center gap-3 border border-yellow-500/30 shadow-lg shadow-yellow-600/20 min-w-[160px]">
              <div className="w-3 h-3 rounded-full bg-yellow-500 shrink-0" />
              <div>
                <p className="text-xs text-gray-400">Origin</p>
                <p className="text-sm font-medium">Lagos, Nigeria</p> {/* ← customize city */}
              </div>
            </div>

            {/* Dotted line (horizontal on mobile, can be curved with SVG if needed) */}
            <div className="hidden sm:block w-16 h-px bg-linear-to-r from-yellow-500 to-green-500 relative">
              <div className="absolute inset-0 bg-linear-to-r from-yellow-500 via-green-500 to-transparent animate-pulse" />
            </div>

            {/* In progress indicator + destination */}
            <div className="bg-black/85 backdrop-blur-md rounded-xl p-4 flex flex-col gap-2 border border-green-500/40 shadow-lg shadow-green-600/20 min-w-[180px]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shrink-0" />
                <p className="text-sm font-semibold text-green-400">In progress</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 shrink-0" />
                <div>
                  <p className="text-xs text-gray-400">Destination</p>
                  <p className="text-sm font-medium">Maryland, USA</p> {/* ← customize */}
                </div>
              </div>
            </div>
          </div>

          {/* Optional: small green status dots on map (you can position more precisely) */}
          <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-400/50 animate-ping" />
          <div className="absolute top-[55%] right-[25%] w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-400/50 animate-ping" />
        </div>

        {/* Right - Text content */}
        <div className="lg:w-2/5 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-600">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            Deliver packages that matter on time
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Speed, <span className="text-orange-500">Accuracy</span>,<br />
            Reliability – Logistics<br />that counts
          </h2>

          <p className="text-gray-500 leading-relaxed">
            At DYB Africa, we prioritize speed, accuracy and reliability to ensure
            your shipments arrive on-time, every time. With real-time tracking and
            seamless coordination, we deliver logistics that truly counts.
          </p>

          <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-full transition shadow-lg shadow-orange-600/30">
            Ship Now →
          </button>
        </div>
      </div>
    </section>
  );
}