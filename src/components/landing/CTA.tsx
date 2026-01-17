import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  onOpenContactModal: () => void;
}

const CTA = ({ onOpenContactModal }: CTAProps) => {
  return (
    <section className="section-padding">
      <div className="container container-padding">
        <div className="bg-primary rounded-2xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Get Workers When You Need Them
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Stop wasting time on bad hires. Let CrewReady deliver qualified,
            pre-vetted workers to your team.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={onOpenContactModal}
            className="text-base"
          >
            Start Hiring Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
