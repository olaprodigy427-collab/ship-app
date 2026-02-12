import Image from "next/image";

export default function LogisticsSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-bgLight">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-textDark leading-tight">
            Logistics for you <br />
            and your <span className="text-primary">business</span>
          </h2>

          <p className="text-textGray">
            At DYB Africa, we prioritize speed, accuracy
             and reliability to ensure your shipments arrive on-time, every time. With real-time
            tracking and seamless coordination, we deliver logistics that
            truly count.
          </p>

          <button className="bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition">
            Ship Now <span>→</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/redboi.png"
            alt="Logistics delivery staff"
            width={600}
            height={400}
            className="rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}
