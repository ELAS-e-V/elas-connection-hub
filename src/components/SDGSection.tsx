import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Equal, Scale, Building2, GraduationCap } from "lucide-react";

const SDGSection: React.FC = () => {
  const { t } = useLanguage();

  const icons = [Equal, Scale, Building2, GraduationCap];
  const colors = ["bg-accent", "bg-primary", "bg-warm", "bg-secondary"];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground">
              {t.sdgs.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.sdgs.goals.map((goal, index) => {
              const IconComponent = icons[index];
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl ${colors[index]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{goal.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{goal.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGSection;
