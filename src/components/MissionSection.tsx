import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Eye, Sparkles } from "lucide-react";

const MissionSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="mission" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <div className="group p-8 md:p-10 rounded-3xl bg-primary text-primary-foreground hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary-foreground/20">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold">{t.missionVision.missionTitle}</h3>
              </div>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                {t.missionVision.missionText}
              </p>
            </div>

            {/* Vision */}
            <div className="group p-8 md:p-10 rounded-3xl bg-gradient-warm text-foreground border border-border/50 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent/30">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-display font-bold">{t.missionVision.visionTitle}</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.missionVision.visionText}
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Our Core Values</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              {t.missionVision.valuesTitle}
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.missionVision.values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mb-4">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
