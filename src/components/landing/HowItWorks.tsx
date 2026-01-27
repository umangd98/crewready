const steps = [
  {
    number: "1",
    title: "Submit job request",
    description:
      "Complete a brief form in under 2 minutes.",
    microcopy: "",
  },
  {
    number: "2",
    title: "AI screens and matches candidates",
    description:
      "Receive 3–5 matched profiles within 4–6 hours.",
    microcopy: "Matching considers role requirements, location, availability, and pay alignment.",
  },
  {
    number: "3",
    title: "Review and interview",
    description:
      "Interview selected candidates to assess fit.",
    microcopy: "Interviews help reduce mismatches and improve outcomes.",
  },
  {
    number: "4",
    title: "Finalize hire and onboard",
    description:
      "Complete hiring decision and begin onboarding.",
    microcopy: "",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container container-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A structured hiring pipeline from request to hire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground text-xl md:text-2xl font-bold flex items-center justify-center mx-auto mb-5">
                {step.number}
              </div>
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-2">{step.description}</p>
              {step.microcopy && (
                <p className="text-xs md:text-sm text-muted-foreground/80 italic">
                  {step.microcopy}
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-xs md:text-sm text-muted-foreground/70 mt-8 max-w-3xl mx-auto">
          Hiring timelines and outcomes depend on role requirements and local candidate availability.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
