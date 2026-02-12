import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-bgLight">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Scattered Images */}
        <div className="flex flex-wrap justify-center gap-4">
          <Image
            src="/images/issue.png"
            alt="Customer"
            width={1200}
            height={900}
            className="rounded-full"
          />
        </div>

        {/* Title */}
        <div className="text-center">
          <p className="text-textGray">Testimonials</p>
          <h2 className="text-3xl font-bold text-textDark">
            What Our Customers Are Saying
          </h2>
          <p className="text-textGray">
            Trusted worldwide for reliable service
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/seu.png"
                alt="Ada"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium">Ada A., Lagos</p>
                <div className="flex text-primary">★★★★★</div>
              </div>
            </div>
            <p className="mt-4 text-textGray">
              "This logistics has been a game changer for us. Their service is
              always on time and very cost effective. We found a reliable
              partner."
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/aki.png"
                alt="Favour O"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium">Favour O., Jos</p>
                <div className="flex text-primary">★★★★★</div>
              </div>
            </div>
            <p className="mt-4 text-textGray">
              "Your commitment to excellence and attention to detail is greatly
              appreciated. Thank you for your consistent, top-tier service.
              Thank you DYB."
            </p>
          </div>

          {/* Card 3 (optional later) */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/ana.png"
                alt="Daniel.i"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium">Daniel I., Abuja</p>
                <div className="flex text-primary">★★★★★</div>
              </div>
            </div>
            <p className="mt-4 text-textGray">
               "Sending parcels used to be a hassle, but with DYB Logistics, it’s now 
               effortless and smooth, fast and reliable."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
