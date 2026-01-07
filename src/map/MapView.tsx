import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useLocations } from "@/map/hooks/useLocations";
import { getMarkerIcon } from "@/map/utils/getMarkerIcon";
import type { Location } from "@/lib/api/fetchLocations";
import MapMarkerPopup from "@/map/components/MapMarkerPopup";

export interface MapViewProps {
  category?: string;
}

const center: LatLngExpression = [51.3133, 9.4989];

const MapView = ({ category }: MapViewProps) => {
  // 🔹 Hook SEM parâmetros (correto)
  const { data, isLoading } = useLocations();

  if (!category) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        Select a category to see locations
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        Loading map...
      </div>
    );
  }

  // 🔹 Filtro acontece AQUI
  const filteredLocations: Location[] =
    data?.filter(
      (location) => location.properties.categorySlug === category
    ) ?? [];

  return (
    <MapContainer
      center={center}
      zoom={13}
      className="h-full w-full"
      scrollWheelZoom
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {filteredLocations.map((location) => {
        const [lng, lat] = location.geometry.coordinates;

        return (
          <Marker
            key={location.id}
            position={[lat, lng]}
            icon={getMarkerIcon(location.properties.categorySlug)}
          >
            <MapMarkerPopup location={location} />
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapView;
