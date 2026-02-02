import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import InsuranceTypes from "@/components/home/InsuranceTypes";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CalculatorSection from "@/components/home/CalculatorSection";
import HowItWorks from "@/components/home/HowItWorks";
import Partners from "@/components/home/Partners";
import Testimonials from "@/components/home/Testimonials";
import ContactForm from "@/components/home/ContactForm";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <InsuranceTypes />
      <WhyChooseUs />
      <CalculatorSection />
      <HowItWorks />
      <Partners />
      <Testimonials />
      <ContactForm />
    </Layout>
  );
};

export default Index;
