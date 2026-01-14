import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Map, MapPin, Shield, Users, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import mapsBackground from "@/assets/maps.png";

const MapSection: React.FC = () => {
  const { t } = useLanguage();

  const featureIcons = [MapPin, Shield, Users, MessageCircle];

  return (
    <section id="map" className="py-20 md:py-32 overflow-hidden relative">
      {/* Background Map Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${mapsBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* CTA para o mapa */}
              <Link
                to="/map"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                           bg-accent text-accent-foreground text-sm font-bold
                           hover:bg-accent/80 transition animate-pulse"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.map.exploreCta}</span>
              </Link>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                {t.map.title}
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.map.description}
              </p>

              <div className="space-y-4">
                {t.map.features.map((feature, index) => {
                  const IconComponent = featureIcons[index];
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl
                                 bg-card/80 backdrop-blur-sm
                                 border border-border/50"
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">
                        {feature}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right - Map Illustration */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-8 relative overflow-hidden">
                {/* Decorative map elements */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-accent animate-ping" />
                  <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-primary animate-ping animation-delay-200" />
                  <div className="absolute bottom-1/3 left-1/2 w-4 h-4 rounded-full bg-warm animate-ping animation-delay-400" />
                </div>

                {/* Central map icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 w-32 h-32 rounded-full bg-primary/20 animate-pulse" />
                    <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                      <Map className="w-16 h-16 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Pins */}
                <div className="absolute top-10 right-10">
                  <div className="p-2 rounded-full bg-card shadow-lg">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div className="absolute bottom-16 left-12">
                  <div className="p-2 rounded-full bg-card shadow-lg">
                    <MapPin className="w-5 h-5 text-primary" />
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

export default MapSection;
