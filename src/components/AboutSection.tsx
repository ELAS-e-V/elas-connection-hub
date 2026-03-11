import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, Users, Globe2 } from "lucide-react";
import womenGroup from "@/assets/women-group.png";

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
                <span>Non-profit organization</span>
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

            {/* Right - Illustration and Stats */}
            <div className="space-y-6">
              {/* Women Group Illustration */}
              <div className="flex justify-center">
                <img 
                  src={womenGroup} 
                  alt="Diverse group of women illustration" 
                  width={400}
                  height={300}
                  className="w-full max-w-md h-auto"
                />
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border/50 shadow-soft text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Community-led</p>
                </div>

                <div className="p-4 rounded-xl bg-card border border-border/50 shadow-soft text-center">
                  <Globe2 className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Inclusive</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-primary text-primary-foreground">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary-foreground/80 text-xs mb-1">Serving</p>
                    <p className="text-xl font-bold">Kassel & Beyond</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary-foreground/80 text-xs mb-1">Since</p>
                    <p className="text-xl font-bold">2022</p>
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
