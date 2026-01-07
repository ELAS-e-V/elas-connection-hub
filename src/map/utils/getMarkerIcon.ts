import L from "leaflet";
import { MAP_CATEGORIES } from "@/map/config/categories";

const ICON_BASE_PATH = "/icons";
const FALLBACK_ICON = "maps.png";

export function getMarkerIcon(categorySlug?: string) {
  const category = MAP_CATEGORIES.find(
    (cat) => cat.id === categorySlug
  );

  const iconFile = category?.icon ?? FALLBACK_ICON;

  return L.divIcon({
    className: "elas-marker",
    html: `
      <img 
        src="${ICON_BASE_PATH}/${iconFile}" 
        alt=""
        style="
          width: 36px;
          height: 36px;
          transform: translate(-50%, -100%);
        "
      />
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
  });
}
