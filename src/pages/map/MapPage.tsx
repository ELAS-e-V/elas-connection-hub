import MapView from "@/map/MapView";

const MapPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="h-16 flex items-center px-6 border-b">
        <a
          href="/"
          className="text-sm text-muted-foreground hover:underline"
        >
          ← Back to home
        </a>
      </header>

      {/* Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-72 border-r p-6">
          <h2 className="text-lg font-semibold mb-4">Explore the map</h2>

          <p className="text-sm text-muted-foreground mb-6">
            Select a category to display locations on the map.
          </p>

          <div className="space-y-3">
            <button className="w-full rounded-md border px-4 py-2 text-left hover:bg-muted">
              Safe spaces
            </button>
            <button className="w-full rounded-md border px-4 py-2 text-left hover:bg-muted">
              Community resources
            </button>
            <button className="w-full rounded-md border px-4 py-2 text-left hover:bg-muted">
              Essential services
            </button>
          </div>
        </aside>

        {/* Map area */}
        <main className="flex-1 p-6">
          <div className="h-full w-full overflow-hidden rounded-2xl border bg-background shadow-sm">
            <MapView />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MapPage;
