import { Briefcase, TrendingUp, Database, BarChart } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Amazon",
    role: "Business Intelligence Engineer Manager",
    period: "July 2024 - Present",
    location: "Luxembourg, Europe",
    icon: TrendingUp,
    achievements: [
      "Conceptualized and managed implementation of automated EU communication reporting system, saving 80% (17hrs weekly) of team time",
      "Managed diverse team of Marketing Specialists, Data Engineers, and BIEs to deliver QuickSight dashboard with 300 daily users",
      "Collaborating with cross-functional teams to devise 2025 BIE strategy",
    ],
  },
  {
    id: 2,
    company: "Amazon",
    role: "Senior Business Intelligence Engineer",
    period: "June 2021 - June 2024",
    location: "Luxembourg, Europe",
    icon: BarChart,
    achievements: [
      "Architected solution adopted Amazon Worldwide, improving website traffic by 15% in EU and ROI by 50%",
      "Designed automated process saving 27hrs/week across team of 18",
      "Led stakeholder management process, improving satisfaction score from 27% to 73%",
      "Led end-to-end reporting and data management for Marketing (Traffic) team",
    ],
  },
  {
    id: 3,
    company: "Novartis",
    role: "Senior Business Analyst",
    period: "September 2020 - June 2021",
    location: "Strategic Data Convergence Initiative",
    icon: Database,
    achievements: [
      "Integrated data from disparate sources into centralized system, improving data quality and reporting efficiency",
      "Orchestrated stakeholder management ensuring alignment on project objectives",
      "Managed team of 5 Analysts, 4 Data Engineers, and 2 Dell Boomi experts",
    ],
  },
  {
    id: 4,
    company: "ZS Associates",
    role: "Senior Business Technology Analyst",
    period: "January 2019 - August 2020",
    location: "Commercial Data Lake & Tableau Platform",
    icon: Briefcase,
    achievements: [
      "Orchestrated setup of first cloud-based environment and generated Tableau reports with key KPIs",
      "Designed data warehouse layer involving dimensions, facts, and aggregates",
      "Developed AWS Lambda converting Excel to text files and pushing data to Datamart",
      "Integrated multiple hybrid platforms to push raw data into AWS environment",
    ],
  },
  {
    id: 5,
    company: "ZS Associates",
    role: "Business Technology Analyst",
    period: "September 2016 - December 2018",
    location: "Business Conduct for EMEA",
    icon: Database,
    achievements: [
      "Conducted design sessions and end-to-end deployment for comprehensive attendee spend tracking",
      "Process optimization utilizing indexing & partitioning techniques achieving 40% efficiency gain",
      "Collaborated with cross-functional teams delivering high-quality solutions",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-experience-title">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey building impactful solutions
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={exp.id}
                  className="relative"
                  data-testid={`card-experience-${exp.id}`}
                >
                  <div className="flex gap-6">
                    <div className="hidden md:flex items-start">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-lg">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="flex-1 pb-8">
                      <div className="bg-card rounded-xl border p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                          <div>
                            <h3 className="text-xl font-semibold" data-testid={`text-role-${exp.id}`}>
                              {exp.role}
                            </h3>
                            <p className="text-muted-foreground font-medium" data-testid={`text-company-${exp.id}`}>
                              {exp.company}
                            </p>
                            <p className="text-sm text-muted-foreground" data-testid={`text-location-${exp.id}`}>
                              {exp.location}
                            </p>
                          </div>
                          <span className="text-sm text-muted-foreground font-medium shrink-0" data-testid={`text-period-${exp.id}`}>
                            {exp.period}
                          </span>
                        </div>

                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex gap-2 text-sm text-muted-foreground"
                              data-testid={`text-achievement-${exp.id}-${i}`}
                            >
                              <span className="text-primary mt-1.5">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
