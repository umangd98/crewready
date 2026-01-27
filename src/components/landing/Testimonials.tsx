import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The screening process saved us considerable time. We received qualified candidates quickly and hired two workers who have been reliable additions to our crew.",
    name: "Mike Rodriguez",
    role: "Owner",
    company: "Green Valley Landscaping",
  },
  {
    quote:
      "CrewReady reduced our time spent on initial screening. The candidates we interviewed were better matched to our needs than typical job board applicants.",
    name: "Sarah Chen",
    role: "Operations Manager",
    company: "AquaFlow Irrigation",
  },
  {
    quote:
      "The turnaround was faster than posting on job boards. Candidates seemed more serious and the overall hiring experience was smoother.",
    name: "David Thompson",
    role: "Owner",
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
              <Quote className="h-7 w-7 md:h-8 md:w-8 text-primary/20 mb-3 md:mb-4" />
              <p className="text-sm md:text-base text-foreground mb-5 md:mb-6 leading-relaxed">
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
