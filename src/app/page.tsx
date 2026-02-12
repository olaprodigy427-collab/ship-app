import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import DeliverySection from "@/components/DeliverySection";
import LogisticsSection from "@/components/LogisticsSection";
import Testimonials from "@/components/Testimonias";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <DeliverySection />
      <LogisticsSection />
      <Testimonials />
      <FAQ />
    </>
  );
}