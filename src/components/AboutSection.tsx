import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, Users, Globe2 } from "lucide-react";

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Heart className="w-4 h-4" />
                <span>Non-profit Organization</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                {t.about.title}
              </h2>

              <p className="text-muted-foreground leading-relaxed text-lg">
                {t.about.description}
              </p>

              <div className="p-6 rounded-2xl bg-gradient-accent border border-accent/20">
                <p className="text-foreground font-medium text-lg">
                  {t.about.highlight}
                </p>
              </div>
            </div>

            {/* Right - Stats/Icons */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-lg transition-shadow duration-300">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Community Led</h3>
                <p className="text-muted-foreground text-sm">
                  Built by and for immigrant women
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-lg transition-shadow duration-300">
                <Globe2 className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Inclusive</h3>
                <p className="text-muted-foreground text-sm">
                  Supporting FLINTA & queer communities
                </p>
              </div>

              <div className="col-span-2 p-6 rounded-2xl bg-primary text-primary-foreground">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary-foreground/80 text-sm mb-1">Serving</p>
                    <p className="text-2xl font-bold">Kassel & Beyond</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary-foreground/80 text-sm mb-1">Since</p>
                    <p className="text-2xl font-bold">2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
