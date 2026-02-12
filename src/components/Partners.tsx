import Image from "next/image";

export default function Partners() {
  return (
    <section className="py-8 px-4 md:px-6 lg:px-8 bg-bgLight">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <p className="text-textGray">Partnered with</p>
        <div className="overflow-hidden">
          <div className="flex animate-marquee space-x-8">
            <Image src="/images/fdex.png" alt="FedEx" width={100} height={50} />
            <Image src="/images/gig.png" alt="GIG" width={100} height={50} />
            <Image src="/images/dhl.png" alt="DHL" width={100} height={50} />
            <Image src="/images/ups.png" alt="UPS" width={100} height={50} />
            <Image src="/images/deliv.png" alt="GIG" width={100} height={50} />
            <Image src="/images/slog.png" alt="DHL" width={100} height={50} />
            <Image src="/images/exp.png" alt="UPS" width={100} height={50} />
            {/* Duplicate for seamless loop */}
            <Image src="/images/fdex.png" alt="FedEx" width={100} height={50} />
            <Image src="/images/gig.png" alt="GIG" width={100} height={50} />
            <Image src="/images/dhl.png" alt="DHL" width={100} height={50} />
            <Image src="/images/ups.png" alt="UPS" width={100} height={50} />
            <Image src="/images/deliv.png" alt="GIG" width={100} height={50} />
            <Image src="/images/slog.png" alt="DHL" width={100} height={50} />
            <Image src="/images/exp.png" alt="UPS" width={100} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
}

