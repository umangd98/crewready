import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  onOpenContactModal: () => void;
}

const CTA = ({ onOpenContactModal }: CTAProps) => {
  return (
    <section className="section-padding">
      <div className="container container-padding">
        <div className="bg-primary rounded-2xl p-6 md:p-12 lg:p-16 text-center">
          <h2 className="text-[1.75rem] leading-tight md:text-4xl font-bold text-primary-foreground mb-4">
            Stop Hiring the Hard Way
          </h2>
          <p className="text-primary-foreground/90 text-base leading-relaxed md:text-xl mb-6 max-w-2xl mx-auto">
            Get reliable workers in 48 hours. No job boards. No no-shows. No wasted time.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={onOpenContactModal}
            className="text-base h-14 px-8 w-full sm:w-auto min-w-[240px]"
          >
            Request Workers Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
