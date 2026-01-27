import { Check } from "lucide-react";

const benefits = [
  "Faster access to qualified candidates",
  "Reduced screening workload",
  "Structured matching based on job requirements",
  "No subscriptions or long-term contracts",
  "Pay when moving forward with a hire",
];

const Value = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container container-padding">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Businesses Choose CrewReady
            </h2>
            <p className="text-muted-foreground text-lg">
              Built for Faster, More Efficient Hiring
            </p>
          </div>

          <div className="bg-card p-6 md:p-10 rounded-lg border border-border shadow-sm">
            <ul className="space-y-3.5">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="text-foreground text-base md:text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
