import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How fast is the matching process?",
    answer:
      "Most requests receive 3–5 candidate matches within 24–48 hours. Timing depends on role requirements and candidate availability in your area.",
  },
  {
    question: "What roles do you fill?",
    answer:
      "We focus on landscaping and irrigation roles: lawn care technicians, landscape laborers, irrigation installers, maintenance workers, crew leaders, and equipment operators.",
  },
  {
    question: "How does screening work?",
    answer:
      "Our AI filters candidates by experience, skills, and availability. We verify work history and check references before presenting matches to you.",
  },
  {
    question: "What does it cost?",
    answer:
      "Pay-per-hire pricing ranges from $299–$499 per completed hire. Monthly plans start at $99/month with reduced per-hire fees. No upfront costs or job posting fees.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No contract required for pay-per-hire. Monthly plans are month-to-month and can be canceled anytime.",
  },
  {
    question: "What if a hire doesn't work out?",
    answer:
      "Monthly plan includes 30-day replacement support. We'll provide additional candidates at no extra fee if a hire leaves within 30 days.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-section-alt">
      <div className="container container-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about working with CrewReady.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
