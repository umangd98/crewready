import { useState } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import Value from "@/components/landing/Value";
import Testimonials from "@/components/landing/Testimonials";
import Audience from "@/components/landing/Audience";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import ContactModal from "@/components/landing/ContactModal";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenContactModal={openContactModal} />
      <main>
        <Hero onOpenContactModal={openContactModal} />
        <Problem />
        <HowItWorks />
        <Value />
        <Testimonials />
        <Audience />
        <Pricing onOpenContactModal={openContactModal} />
        <FAQ />
        <CTA onOpenContactModal={openContactModal} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
};

export default Index;
