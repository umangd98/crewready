import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We needed 3 irrigation techs for a big commercial project. Had them working within 48 hours. All three are still with us 4 months later.",
    name: "Mike Rodriguez",
    role: "Owner, 12-person crew",
    company: "Green Valley Landscaping",
  },
  {
    quote:
      "Used to spend 15+ hours a week screening applicants. Now I submit a request and get 5 solid candidates by end of day. Saves me a full day every week.",
    name: "Sarah Chen",
    role: "Operations Manager",
    company: "AquaFlow Irrigation",
  },
  {
    quote:
      "The no-show rate dropped to basically zero. Before CrewReady, we'd have workers ghost us constantly. Now they actually show up ready to work.",
    name: "David Thompson",
    role: "Owner, 8-person crew",
    company: "Thompson Property Services",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container container-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Landscaping Professionals
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what business owners are saying about CrewReady.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 md:p-8 rounded-lg border border-border shadow-sm"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
