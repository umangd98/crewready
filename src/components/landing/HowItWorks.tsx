const steps = [
  {
    number: "1",
    title: "Submit job request",
    description:
      "Tell us your needs in 2 minutes.",
    microcopy: "",
  },
  {
    number: "2",
    title: "Get 5 pre-vetted candidates",
    description:
      "Receive profiles in 4–6 hours.",
    microcopy: "All confirmed available for your start date.",
  },
  {
    number: "3",
    title: "Interview or request more",
    description:
      "Choose who to interview or ask for more options.",
    microcopy: "Quick calls help confirm fit.",
  },
  {
    number: "4",
    title: "Start within 48 hours",
    description:
      "Workers are ready when you are.",
    microcopy: "",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container container-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How CrewReady Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Four simple steps to get qualified workers on your team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground mb-2">{step.description}</p>
              {step.microcopy && (
                <p className="text-sm text-muted-foreground/80 italic">
                  {step.microcopy}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
