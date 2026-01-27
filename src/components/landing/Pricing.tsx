import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingProps {
  onOpenContactModal: () => void;
}

const plans = [
  {
    name: "Pay Per Hire",
    price: "$299–$499",
    priceDetail: "per successful hire",
    description: "Pay when you move forward with a hire.",
    features: [
      "No upfront costs",
      "No monthly fees or contracts",
      "Candidate shortlists typically delivered within hours",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Monthly Plan",
    price: "$199–$399",
    priceDetail: "per hire + $99/month",
    description: "Lower per-hire rate for ongoing hiring needs.",
    features: [
      "Reduced per-hire fee",
      "Faster candidate delivery",
      "30-day replacement support",
      "Dedicated account contact",
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
            Transparent Pricing
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Pay per hire or choose monthly. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 rounded-lg border ${
                plan.highlighted
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border bg-card shadow-sm"
              }`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <div className="mb-4">
                <p className="text-2xl md:text-3xl font-bold text-foreground">{plan.price}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{plan.priceDetail}</p>
              </div>
              <p className="text-sm md:text-base text-muted-foreground mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-6 md:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2.5 md:gap-3">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-secondary flex-shrink-0" />
                    <span className="text-sm md:text-base text-foreground">{feature}</span>
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

        <p className="text-center text-sm md:text-base text-muted-foreground mt-6 md:mt-8">
          Hiring 5+ workers per month?{" "}
          <button
            onClick={onOpenContactModal}
            className="text-primary hover:underline font-medium"
          >
            Contact us
          </button>{" "}
          for volume pricing.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
