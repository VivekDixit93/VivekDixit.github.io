import { SiAmazon, SiApacheairflow, SiPython, SiJira, SiTableau } from "react-icons/si";
import { Database, Workflow, BarChart3, FileSpreadsheet, Code } from "lucide-react";

const skills = [
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "Redshift", icon: Database, color: "#8C4FFF" },
  { name: "Teradata", icon: Database, color: "#F37440" },
  { name: "SQL", icon: Code, color: "#00758F" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Apache Airflow", icon: SiApacheairflow, color: "#017CEE" },
  { name: "Informatica", icon: Database, color: "#FF6600" },
  { name: "Quicksight", icon: BarChart3, color: "#FF9900" },
  { name: "Tableau", icon: SiTableau, color: "#E97627" },
  { name: "Alteryx", icon: Workflow, color: "#0078C0" },
  { name: "Excel", icon: FileSpreadsheet, color: "#217346" },
  { name: "Jira", icon: SiJira, color: "#0052CC" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-skills-title">
            Technical Proficiency
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expertise in cloud computing, data warehousing, and orchestration tools for building scalable BI solutions
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-3 p-6 rounded-md border bg-card hover-elevate active-elevate-2 transition-transform hover:-translate-y-1"
                data-testid={`card-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Icon className="h-12 w-12" style={{ color: skill.color }} />
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
