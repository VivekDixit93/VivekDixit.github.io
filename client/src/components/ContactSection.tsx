import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com",
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
    color: "hover:text-[#1DA1F2]",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-title">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="mb-8">
          <Button
            size="lg"
            className="gap-2 text-lg px-8"
            onClick={() => {
              window.location.href = "mailto:vivekdixit0311193@gmail.com";
              console.log("Opening email client");
            }}
            data-testid="button-email-contact"
          >
            <Mail className="h-5 w-5" />
            vivekdixit0311193@gmail.com
          </Button>
        </div>

        <div className="mb-12 text-muted-foreground">
          <p className="text-sm">Luxembourg • +352 691622796</p>
        </div>

        <div className="flex justify-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Button
                key={social.name}
                size="icon"
                variant="outline"
                className={`h-12 w-12 transition-colors ${social.color}`}
                onClick={() => {
                  window.open(social.url, "_blank");
                  console.log(`Opening ${social.name}`);
                }}
                data-testid={`button-social-${social.name.toLowerCase()}`}
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
