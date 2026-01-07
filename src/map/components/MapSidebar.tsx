import { MAP_CATEGORIES } from "@/map/config/categories";

interface MapSidebarProps {
  selectedCategory?: string;
  onSelectCategory: (category: string) => void;
}

const MapSidebar = ({
  selectedCategory,
  onSelectCategory,
}: MapSidebarProps) => {
  return (
    <aside className="w-72 bg-zinc-900 text-white p-4">
      <nav className="space-y-1">
        {MAP_CATEGORIES.map((category) => {
          const isActive = selectedCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left transition
                ${
                  isActive
                    ? "bg-zinc-800"
                    : "hover:bg-zinc-800/70"
                }
              `}
            >
              <img
                src={`/icons/${category.icon}`}
                alt={category.label}
                className="h-5 w-5"
              />

              <span className="text-sm font-medium">
                {category.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default MapSidebar;
