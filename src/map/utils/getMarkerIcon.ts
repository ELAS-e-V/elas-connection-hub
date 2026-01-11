import L from "leaflet";
import { MAP_CATEGORIES } from "@/map/config/categories";

const ICON_BASE_PATH = "/icons";
const FALLBACK_ICON = "maps.png";

const ICON_SIZE = 44; // 🔹 ajuste centralizado
const ICON_ANCHOR_Y = ICON_SIZE;

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
          width: ${ICON_SIZE}px;
          height: ${ICON_SIZE}px;
          transform: translate(-50%, -100%);
          pointer-events: none;
        "
      />
    `,
    iconSize: [ICON_SIZE, ICON_SIZE],
    iconAnchor: [ICON_SIZE / 2, ICON_ANCHOR_Y],
    popupAnchor: [0, -ICON_SIZE],
  });
}
