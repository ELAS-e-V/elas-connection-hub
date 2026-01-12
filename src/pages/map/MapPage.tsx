import { useState } from "react";
import MapView from "@/map/MapView";
import Header from "@/components/Header";
import { MAP_CATEGORIES } from "@/map/config/categories";
import { useLanguage } from "@/contexts/LanguageContext";

const MapPage = () => {
  const [category, setCategory] = useState<string | undefined>();
  const { t } = useLanguage();

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Header (já internacionalizado) */}
      <Header
        onSelectCategory={setCategory}
        activeCategory={category}
      />

      {/* Conteúdo do mapa */}
      <div className="flex flex-1 overflow-hidden pt-16 md:pt-20">
        {/* Sidebar desktop */}
        <aside className="hidden md:flex w-72 flex-col border-r px-4 py-4 gap-4">
          <h2 className="text-base font-semibold">
            {t.mapUI.explore}
          </h2>

          {category && (
            <button
              onClick={() => setCategory(undefined)}
              className="rounded-md border px-3 py-2 text-sm hover:bg-muted"
            >
              {t.mapUI.allCategories}
            </button>
          )}

          <div className="flex flex-col gap-2">
            {MAP_CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`flex items-center gap-3 rounded-md border px-3 py-2 text-sm transition ${
                  category === c.id
                    ? "bg-muted font-medium"
                    : "hover:bg-muted"
                }`}
              >
                <img
                  src={`/icons/${c.icon}`}
                  alt=""
                  className="h-5 w-5"
                />
                {t.mapUI.categories[c.labelKey]}
              </button>
            ))}
          </div>
        </aside>

        {/* Map */}
        <main className="flex-1 overflow-hidden p-2 md:p-4">
          <div className="h-full w-full rounded-xl border overflow-hidden">
            <MapView category={category} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MapPage;
