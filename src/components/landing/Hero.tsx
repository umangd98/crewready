import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenContactModal: () => void;
}

const Hero = ({ onOpenContactModal }: HeroProps) => {
  const scrollToHowItWorks = () => {
    const element = document.querySelector("#how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-12 md:pt-40 md:pb-24">
      <div className="container container-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-[2.25rem] leading-tight md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-5">
            Get Reliable Field Workers{" "}
            <span className="text-primary">in 48 Hours or Less.</span>
          </h1>
          <p className="text-[1.0625rem] leading-relaxed md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Pre-screened landscaping and irrigation workers ready to start. 
            No more no-shows, bad hires, or wasted time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" onClick={onOpenContactModal} className="text-base">
              Request Workers
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToHowItWorks}
              className="text-base"
            >
              How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
