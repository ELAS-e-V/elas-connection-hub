import { useState } from "react";
import MapView from "@/map/MapView";
import { Menu } from "lucide-react";

const MapPage = () => {
  const [category, setCategory] = useState<string | undefined>();
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="h-14 flex items-center justify-between px-4 border-b md:px-6">
        <a href="/" className="text-sm text-muted-foreground hover:underline">
          ← Back to home
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2 rounded-md border"
        >
          <Menu size={20} />
        </button>
      </header>

      {/* Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar desktop */}
        <aside className="hidden md:block w-72 border-r p-6">
          <h2 className="text-lg font-semibold mb-4">Explore the map</h2>

          <div className="space-y-3">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setCategory(c.value)}
                className="w-full rounded-md border px-4 py-2 text-left hover:bg-muted"
              >
                {c.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Map */}
        <main className="flex-1 p-2 md:p-6">
          <div className="h-full w-full overflow-hidden rounded-xl border">
            <MapView category={category} />
          </div>
        </main>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden">
          <div className="absolute left-0 top-0 h-full w-72 bg-background p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Explore the map</h2>

            <div className="space-y-3">
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => {
                    setCategory(c.value);
                    setOpen(false);
                  }}
                  className="w-full rounded-md border px-4 py-2 text-left hover:bg-muted"
                >
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

const categories = [
  { label: "Health", value: "health" },
  { label: "Legal support", value: "legal-support" },
  { label: "Education", value: "education" },
  { label: "Culture", value: "culture" },
  { label: "Work", value: "work" },
  { label: "Social services", value: "social-service" },
];
