import { Badge } from "@/components/ui/badge";
import dashboardPreview from "@assets/generated_images/Dashboard_web_app_project_preview_bd7be2b2.png";
import ecommercePreview from "@assets/generated_images/E-commerce_website_project_preview_de6da630.png";// bad coding practice
import ecommercePreview from "@assets/generated_images/ProjectImage.jpg";
import mobileAppPreview from "@assets/generated_images/Mobile_app_project_preview_1ed18521.png";

const projects = [
  {
    id: 1,
    title: "EU Communication Reporting System",
    description: "Automated reporting system saving 80% (17hrs weekly) of a 7-member team's time. QuickSight dashboard with 300 daily users driving strategic execution.",
    image: dashboardPreview,
    tags: ["AWS", "Redshift", "Quicksight", "Salesforce"],
    company: "Amazon",
    impact: "80% time savings, 300 daily users",
  },
  {
    id: 2,
    title: "Marketing Analytics Solution",
    description: "Architected solution adopted Amazon Worldwide, integrating data with 3rd-party tools to improve website traffic by 15% in EU and ROI by 50%.",
    image: ecommercePreview,
    tags: ["AWS", "Redshift", "Python", "Quicksight"],
    company: "Amazon",
    impact: "15% traffic increase, 50% ROI improvement",
  },
  {
    id: 3,
    title: "Commercial Data Lake & Tableau Platform",
    description: "Set up first cloud-based environment with PySpark processing and Tableau reporting. Integrated multiple hybrid platforms for comprehensive analytics.",
    image: mobileAppPreview,
    tags: ["AWS", "PySpark", "Tableau", "Airflow"],
    company: "ZS Associates",
    impact: "First cloud-based BI platform",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-projects-title">
            Key Projects & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Impactful BI solutions delivering measurable business value across pharmaceutical and e-commerce domains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-xl border overflow-hidden hover-elevate transition-transform hover:-translate-y-1"
              data-testid={`card-project-${project.id}`}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  data-testid={`img-project-${project.id}`}
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <Badge variant="outline" className="ml-2 shrink-0">
                    {project.company}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4 p-3 bg-muted/50 rounded-md">
                  <p className="text-sm font-medium text-primary">
                    Impact: {project.impact}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" data-testid={`badge-tech-${tag.toLowerCase()}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
