import { useState } from "react";
import MapView from "@/map/MapView";
import Header from "@/components/Header";
import { MAP_CATEGORIES } from "@/map/config/categories";
import { useLanguage } from "@/contexts/LanguageContext";

const MapPage = () => {
  const { t } = useLanguage();

  const [category, setCategory] = useState<string | undefined>();
  const [subcategory, setSubcategory] = useState<string | undefined>(); // 🔹 NOVO

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <Header
        onSelectCategory={(cat) => {
          setCategory(cat);
          setSubcategory(undefined); 
        }}
        onSelectSubcategory={(sub) => {
          setSubcategory(sub);
      }}
      activeCategory={category}
      />

      {/* Conteúdo do mapa */}
      <div className="flex flex-1 overflow-hidden pt-16 md:pt-20">
        {/* Sidebar desktop */}
        <aside className="hidden md:flex w-72 flex-col border-r px-4 py-4 gap-4 overflow-y-auto">
          <h2 className="text-base font-semibold">
            {t.mapUI.explore}
          </h2>

          {category && (
            <button
              onClick={() => {
                setCategory(undefined);
                setSubcategory(undefined); // 🔹 reset total
              }}
              className="rounded-md border px-3 py-2 text-sm hover:bg-muted"
            >
              {t.mapUI.allCategories}
            </button>
          )}

          <div className="flex flex-col gap-2">
            {MAP_CATEGORIES.map((c) => {
              const isActive = category === c.id;

              return (
                <div key={c.id} className="flex flex-col gap-1">
                  {/* Categoria */}
                  <button
                    onClick={() => {
                      setCategory(c.id);
                      setSubcategory(undefined);
                    }}
                    className={`flex items-center gap-3 rounded-md border px-3 py-2 text-sm transition ${isActive ? "bg-muted font-medium" : "hover:bg-muted"
                      }`}
                  >
                    <img
                      src={`/icons/${c.icon}`}
                      alt=""
                      className="h-5 w-5"
                    />
                    {t.mapUI.categories[c.labelKey]}
                  </button>

                  {/* Subcategorias */}
                  {isActive && c.subcategories.length > 0 && (
                    <div className="ml-8 flex flex-col gap-1 max-h-64 overflow-y-auto pr-2">
                      {c.subcategories.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => setSubcategory(sub.id)}
                          className={`text-left text-sm px-2 py-1 rounded-md transition ${subcategory === sub.id
                              ? "bg-primary/10 text-primary font-medium"
                              : "hover:bg-muted"
                            }`}
                        >
                          {t.mapUI.subcategories[sub.labelKey]}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </aside>

        {/* Map */}
        <main className="flex-1 overflow-hidden p-2 md:p-4">
          <div className="h-full w-full rounded-xl border overflow-hidden relative z-0">
            <MapView
              category={category}
              subcategory={subcategory} // 🔹 preparado
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MapPage;
