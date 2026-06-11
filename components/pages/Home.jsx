import Hero from "../ui/Hero";
import FeaturedServices from "../ui/FeaturedServices";
import WhyChoose from "../ui/WhyChoose";
import ProcessSection from "../ui/ProcessSection";
import Testimonials from "../ui/Testimonials";
import FAQSection from "../ui/FAQSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedServices />
      <WhyChoose />
      <ProcessSection />
      <Testimonials />
      <FAQSection />
    </div>
  );
}
