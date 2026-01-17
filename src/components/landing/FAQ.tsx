import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can I get workers?",
    answer:
      "Most clients receive pre-vetted candidates within 24-48 hours of submitting their request. For urgent needs, we offer expedited matching services.",
  },
  {
    question: "What roles do you fill?",
    answer:
      "We specialize in landscaping and irrigation roles including lawn care technicians, landscape laborers, irrigation installers, maintenance workers, crew leaders, and equipment operators.",
  },
  {
    question: "How does your screening process work?",
    answer:
      "We use a combination of AI-powered screening and human verification. Candidates go through skills assessments, background checks, work history verification, and reference checks before being matched with your company.",
  },
  {
    question: "What are the costs?",
    answer:
      "We offer flexible pricing including pay-per-hire and monthly subscription plans. There are no upfront fees or job posting costs. You only pay when you successfully hire a candidate.",
  },
  {
    question: "Is there a minimum commitment?",
    answer:
      "No. Our pay-per-hire model has no minimum commitment. Monthly plans are available for businesses with recurring hiring needs and offer discounted rates.",
  },
  {
    question: "What if a worker doesn't work out?",
    answer:
      "We offer a replacement guarantee. If a worker doesn't meet expectations within the first 30 days, we'll find you a replacement at no additional cost.",
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
