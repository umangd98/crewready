import { UserX, Clock, Search } from "lucide-react";

const problems = [
  {
    icon: UserX,
    title: "Low Quality Applicants",
    description:
      "Job boards attract candidates with limited experience or mismatched skills. Unqualified applicants reduce hiring efficiency.",
  },
  {
    icon: Clock,
    title: "Unreliable Availability",
    description:
      "Candidates often drop out mid-process or become unavailable, forcing teams to restart hiring. Gaps in availability delay projects and disrupt schedules.",
  },
  {
    icon: Search,
    title: "Too Much Manual Screening",
    description:
      "Reviewing resumes, conducting phone screens, and checking references manually is time-consuming. It pulls you away from operations.",
  },
];

const Problem = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container container-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Traditional Field Hiring Is Inefficient
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Manual screening and low candidate quality slow your pipeline. CrewReady streamlines the process.
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
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
