import { UserX, Clock, Search } from "lucide-react";

const problems = [
  {
    icon: UserX,
    title: "Low Quality Applicants",
    description:
      "Sorting through unqualified candidates wastes valuable time and resources.",
  },
  {
    icon: Clock,
    title: "No-Shows & High Churn",
    description:
      "Workers who don't show up or leave after a few days disrupt your operations.",
  },
  {
    icon: Search,
    title: "Time Wasted on Screening",
    description:
      "Hours spent interviewing and vetting candidates that don't work out.",
  },
];

const Problem = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container container-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hiring Field Crews Is Broken
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Traditional hiring methods don't work for landscaping and irrigation
            businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card p-6 md:p-8 rounded-lg border border-border shadow-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
