const steps = [
  {
    number: "1",
    title: "Submit Your Job Request",
    description:
      "Tell us what roles you need, how many workers, and when you need them to start.",
  },
  {
    number: "2",
    title: "We Screen Candidates",
    description:
      "Our AI-powered system combined with human verification finds the best matches.",
  },
  {
    number: "3",
    title: "Receive Ready-to-Hire Workers",
    description:
      "Get pre-vetted, qualified candidates delivered to you within 24–48 hours.",
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
            A simple three-step process to get qualified workers on your team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
