import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingProps {
  onOpenContactModal: () => void;
}

const plans = [
  {
    name: "Pay Per Hire",
    description: "Perfect for occasional hiring needs",
    features: [
      "Pay only when you hire",
      "No upfront costs",
      "Pre-vetted candidates",
      "24-48 hour delivery",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Monthly Plan",
    description: "Best for recurring hiring needs",
    features: [
      "Discounted per-hire rates",
      "Priority candidate matching",
      "Dedicated account support",
      "Replacement guarantee",
    ],
    cta: "Contact Us",
    highlighted: true,
  },
];

const Pricing = ({ onOpenContactModal }: PricingProps) => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container container-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that works best for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border ${
                plan.highlighted
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border bg-card shadow-sm"
              }`}
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={onOpenContactModal}
                className="w-full"
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8">
          Custom pricing available based on volume.{" "}
          <button
            onClick={onOpenContactModal}
            className="text-primary hover:underline font-medium"
          >
            Contact us
          </button>{" "}
          to learn more.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
