import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent/30 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary/20 blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-32 right-20 w-4 h-4 rounded-full bg-accent animate-pulse hidden md:block" />
      <div className="absolute bottom-40 left-32 w-3 h-3 rounded-full bg-primary/60 animate-pulse hidden md:block" />
      <div className="absolute top-1/3 left-20 w-2 h-2 rounded-full bg-warm animate-pulse hidden md:block" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 animate-fade-in">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{t.hero.location}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
            {t.hero.subtitle}
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="animate-fade-in-up animation-delay-400"
          >
            {t.hero.cta}
            <ArrowDown className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
