import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCanonicalUrl } from "@/hooks/use-canonical-url";

import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import Value from "@/components/landing/Value";
import Testimonials from "@/components/landing/Testimonials";
import Audience from "@/components/landing/Audience";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";

interface IndexProps {
  onOpenContactModal: () => void;
}

const Index = ({ onOpenContactModal }: IndexProps) => {
  useCanonicalUrl();
  const location = useLocation();

  // Scroll to section when navigating from other pages
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.querySelector(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="min-h-screen bg-background">
      <Hero onOpenContactModal={onOpenContactModal} />
      <Problem />
      <HowItWorks />
      <Value />
      <Testimonials />
      <Audience />
      <Pricing onOpenContactModal={onOpenContactModal} />
      <FAQ />
      <CTA onOpenContactModal={onOpenContactModal} />
    </main>
  );
};

export default Index;
