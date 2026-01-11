import { useState } from "react";
import MapView from "@/map/MapView";
import { Menu, X, Layers } from "lucide-react";
import { MAP_CATEGORIES } from "@/map/config/categories";

const HEADER_HEIGHT = "3.5rem"; // 56px

const MapPage = () => {
  const [category, setCategory] = useState<string | undefined>();
  const [open, setOpen] = useState(false);

  const handleSelect = (value?: string) => {
    setCategory(value);
    setOpen(false);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header
        className="flex items-center justify-between px-4 border-b md:px-6"
        style={{ height: HEADER_HEIGHT }}
      >
        <a href="/" className="text-sm text-muted-foreground hover:underline">
          ← Back to home
        </a>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2 rounded-md border"
          aria-label="Open map filters"
        >
          <Menu size={20} />
        </button>
      </header>

      {/* Content */}
      <div
        className="flex flex-1 overflow-hidden"
        style={{ height: `calc(100vh - ${HEADER_HEIGHT})` }}
      >
        {/* Sidebar desktop */}
        <aside className="hidden md:flex w-72 flex-col border-r px-4 py-4 gap-4">
          <h2 className="text-base font-semibold">Explore the map</h2>

          {category && (
            <button
              onClick={() => handleSelect(undefined)}
              className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-muted"
            >
              <Layers size={18} />
              All categories
            </button>
          )}

          <div className="flex flex-col gap-2">
            {MAP_CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => handleSelect(c.id)}
                className={`flex items-center gap-3 rounded-md border px-3 py-2 text-sm transition
                  ${
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
                {c.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Map */}
        <main className="flex-1 p-2 md:p-4 overflow-hidden">
          <div
            className={`h-full w-full rounded-xl border relative z-0 ${
              open ? "pointer-events-none" : ""
            }`}
          >
            <MapView category={category} />
          </div>
        </main>
      </div>

      {/* Mobile Bottom Sheet */}
      {open && (
        <div className="fixed inset-0 z-[2000] md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* Sheet */}
          <div className="absolute bottom-0 left-0 right-0 rounded-t-xl bg-background p-4 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold">Categories</h2>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-md border"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {category && (
                <button
                  onClick={() => handleSelect(undefined)}
                  className="col-span-2 flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-muted"
                >
                  <Layers size={18} />
                  All categories
                </button>
              )}

              {MAP_CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleSelect(c.id)}
                  className={`flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition
                    ${
                      category === c.id
                        ? "bg-muted font-medium"
                        : "hover:bg-muted"
                    }`}
                >
                  <img
                    src={`/icons/${c.icon}`}
                    alt=""
                    className="h-4 w-4"
                  />
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapPage;
