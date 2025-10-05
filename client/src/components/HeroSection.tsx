import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAvatar from "@assets/generated_images/Professional_developer_avatar_illustration_3c816b45.png";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 md:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src={heroAvatar}
              alt="Professional developer avatar"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl ring-4 ring-primary/20"
              data-testid="img-hero-avatar"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-chart-2/20 blur-2xl -z-10" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight" data-testid="text-hero-title">
          Hi, I'm Vivek Dixit
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8" data-testid="text-hero-tagline">
          Business Intelligence Engineer Manager
        </p>

        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Business Intelligence Engineer Manager at Amazon with 8+ years of experience delivering scalable BI solutions. 
          Skilled in leading end-to-end projects, managing teams, and aligning BI strategies with business goals in 
          pharmaceutical and e-commerce domains.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="gap-2 min-w-[200px]"
            data-testid="button-view-work"
          >
            View My Work
            <ArrowRight className="h-4 w-4" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="gap-2 min-w-[200px] backdrop-blur-sm"
            data-testid="button-contact"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
