import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoElas from "@/assets/logo-elas.png";
import { MAP_CATEGORIES } from "@/map/config/categories";

interface HeaderProps {
  onSelectCategory?: (id?: string) => void;
  activeCategory?: string;
}

const Header: React.FC<HeaderProps> = ({
  onSelectCategory,
  activeCategory,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isMapPage = location.pathname === "/map";

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.mission, href: "#mission" },
    { label: t.nav.map, href: "#map" },
    { label: t.nav.journey, href: "#journey" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={`
        top-0 left-0 right-0
        bg-background/95 backdrop-blur-md
        border-b border-border/50
        z-[1200]
        ${isMapPage ? "sticky" : "fixed"}
      `}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src={logoElas}
              alt="ELAS e.V."
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <div className="flex items-baseline gap-1">
              <span className="text-xl md:text-2xl font-bold text-primary">
                ELAS
              </span>
              <span className="text-xs md:text-sm text-muted-foreground">
                e.V.
              </span>
            </div>
          </a>

          {/* Desktop nav (landing only) */}
          {!isMapPage && (
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "de" : "en")}
            >
              <Globe className="w-4 h-4 mr-1" />
              {language.toUpperCase()}
            </Button>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-background">
            {isMapPage ? (
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => {
                    onSelectCategory?.(undefined);
                    setIsMenuOpen(false);
                  }}
                  className="px-4 py-2 text-left text-sm hover:bg-muted rounded-md"
                >
                  {t.mapUI.allCategories}
                </button>

                {MAP_CATEGORIES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      onSelectCategory?.(c.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-2 text-left text-sm rounded-md hover:bg-muted ${activeCategory === c.id ? "font-semibold" : ""
                      }`}
                  >
                    <img
                      src={`/icons/${c.icon}`}
                      alt=""
                      className="h-4 w-4 shrink-0"
                    />
                    {t.mapUI.categories[c.labelKey]}
                  </button>
                ))}

              </div>
            ) : (
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-sm hover:bg-muted rounded-md"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
