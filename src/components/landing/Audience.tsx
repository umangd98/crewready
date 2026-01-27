import { TreeDeciduous, Droplets, Building2, Users } from "lucide-react";

const audiences = [
  {
    icon: TreeDeciduous,
    title: "Landscaping Contractors",
    description: "Lawn care, garden design, and outdoor maintenance teams.",
  },
  {
    icon: Droplets,
    title: "Irrigation Installers",
    description: "Sprinkler system installation and maintenance crews.",
  },
  {
    icon: Building2,
    title: "Property Maintenance Teams",
    description: "Commercial and residential property upkeep services.",
  },
  {
    icon: Users,
    title: "Field Service Businesses",
    description: "Small to mid-sized companies needing reliable field workers.",
  },
];

const Audience = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container container-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for US Landscaping & Irrigation Companies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            CrewReady specializes in finding qualified workers for outdoor
            service businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border shadow-sm text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <audience.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
