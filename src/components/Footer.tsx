import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold">ELAS</span>
              <span className="text-sm opacity-80">e.V.</span>
            </div>

            <div className="flex items-center gap-1 text-sm opacity-80">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span>in Kassel</span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm opacity-80">
                © {currentYear} ELAS e.V. {t.footer.rights}
              </p>
              <p className="text-xs opacity-60 mt-1">
                {t.footer.nonprofit}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
