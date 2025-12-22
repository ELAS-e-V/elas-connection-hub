import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Trophy, Users, Calendar, Eye, Award } from "lucide-react";

const JourneySection: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Calendar, value: t.journey.crowdfunding.stats.days },
    { icon: Users, value: t.journey.crowdfunding.stats.supporters },
    { icon: Trophy, value: t.journey.crowdfunding.stats.goal },
    { icon: Eye, value: t.journey.crowdfunding.stats.visitors },
  ];

  return (
    <section id="journey" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              {t.journey.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              {t.journey.story}
            </p>
          </div>

          {/* Crowdfunding */}
          <div className="mb-16">
            <div className="p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                    {t.journey.crowdfunding.title}
                  </h3>
                  <p className="text-primary-foreground/90 text-lg">
                    {t.journey.crowdfunding.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div
                        key={index}
                        className="p-4 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm text-center"
                      >
                        <IconComponent className="w-6 h-6 mx-auto mb-2 text-primary-foreground/80" />
                        <p className="font-bold text-lg">{stat.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* UNIKAT Award */}
            <div className="p-8 rounded-3xl bg-card border border-border/50 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-accent/20">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {t.journey.awards.unikat.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.journey.awards.unikat.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Diversity Award */}
            <div className="p-8 rounded-3xl bg-card border border-border/50 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-warm/20">
                  <Trophy className="w-8 h-8 text-warm" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {t.journey.awards.diversity.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.journey.awards.diversity.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
