import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Mail, FileText, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Left - Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                {t.contact.title}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary-foreground/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">{t.contact.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary-foreground/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <a
                      href="mailto:hello@elas-de.org"
                      className="font-medium text-lg hover:underline"
                    >
                      {t.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary-foreground/20">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/90">{t.contact.registry}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Social & Links */}
            <div className="space-y-8">
              <div>
                <p className="text-primary-foreground/80 mb-4">
                  {t.contact.websiteNotice}
                </p>
                <h3 className="text-xl font-semibold mb-6">{t.contact.followUs}</h3>

                <div className="flex flex-col gap-4">
                  <a
                    href="https://www.instagram.com/elas_de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-200"
                  >
                    <Instagram className="w-6 h-6" />
                    <span className="font-medium">@elas_de</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-60" />
                  </a>

                  <a
                    href="https://linktr.ee/elas_de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-200"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center text-xs font-bold">
                      LT
                    </div>
                    <span className="font-medium">Linktree</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-60" />
                  </a>
                </div>
              </div>

              <Button
                variant="outline"
                size="lg"
                className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="mailto:hello@elas-de.org">
                  <Mail className="w-4 h-4 mr-2" />
                  {t.contact.email}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
