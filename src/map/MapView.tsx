import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import type { LatLngBoundsExpression, LatLngExpression } from "leaflet";
import { useEffect, useMemo, useRef } from "react";
import L from "leaflet";
import MarkerClusterGroup from "@changey/react-leaflet-markercluster";

import { useLocations } from "@/map/hooks/useLocations";
import { getMarkerIcon } from "@/map/utils/getMarkerIcon";
import MapMarkerPopup from "@/map/components/MapMarkerPopup";
import type { Location } from "@/lib/api/fetchLocations";

export interface MapViewProps {
  category?: string;
}

/* =========================
 * Configurações do mapa
 * ========================= */
const CENTER: LatLngExpression = [51.3133, 9.4989];
const OVERVIEW_ZOOM = 11;
const CATEGORY_ZOOM_PADDING = 80;
const OVERVIEW_HIGHLIGHT_LIMIT = 15; //quantos pins ficam visíveis no overview

/* =========================
 * Componente
 * ========================= */
const MapView = ({ category }: MapViewProps) => {
  const { data, isLoading } = useLocations();
  const mapRef = useRef<L.Map | null>(null);

  const isMobile = window.innerWidth < 768;
  const isOverview = !category;

  /* =========================
   * Dados
   * ========================= */

  // 🔹 Locations filtradas apenas no modo categoria
  const filteredLocations: Location[] = useMemo(() => {
    if (!category || !data) return [];
    return data.filter(
      (location) => location.properties.categorySlug === category
    );
  }, [category, data]);

  // 🔹 Overview: separa pins visíveis x cluster
  const overviewHighlighted: Location[] = useMemo(() => {
    if (!isOverview || !data) return [];
    return data.slice(0, OVERVIEW_HIGHLIGHT_LIMIT);
  }, [isOverview, data]);

  const overviewClustered: Location[] = useMemo(() => {
    if (!isOverview || !data) return [];
    return data.slice(OVERVIEW_HIGHLIGHT_LIMIT);
  }, [isOverview, data]);

  /* =========================
   * Efeitos
   * ========================= */

  // 🔹 Ajusta o zoom automaticamente apenas no modo categoria
  useEffect(() => {
    if (!mapRef.current) return;
    if (isOverview) return;
    if (!filteredLocations.length) return;

    const bounds: LatLngBoundsExpression = filteredLocations.map(
      (location) => {
        const [lng, lat] = location.geometry.coordinates;
        return [lat, lng];
      }
    );

    mapRef.current.fitBounds(bounds, {
      padding: [CATEGORY_ZOOM_PADDING, CATEGORY_ZOOM_PADDING],
    });
  }, [filteredLocations, isOverview]);

  /* =========================
   * Estados visuais
   * ========================= */

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center text-sm">
        Loading map…
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
        No locations available
      </div>
    );
  }

  /* =========================
   * Render
   * ========================= */
  return (
    <MapContainer
      ref={mapRef}
      center={CENTER}
      zoom={OVERVIEW_ZOOM}
      className="h-full w-full"
      scrollWheelZoom={!isMobile}
      zoomControl={!isMobile}
      preferCanvas
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* =========================
       * OVERVIEW MODE
       * ========================= */}

      {/* 🔹 Pins destacados */}
      {isOverview &&
        overviewHighlighted.map((location) => {
          const [lng, lat] = location.geometry.coordinates;

          return (
            <Marker
              key={`highlight-${location.id}`}
              position={[lat, lng]}
              icon={getMarkerIcon(location.properties.categorySlug)}
            >
              <MapMarkerPopup location={location} />
            </Marker>
          );
        })}

      {/* 🔹 Cluster com o restante */}
      {isOverview && overviewClustered.length > 0 && (
        <MarkerClusterGroup chunkedLoading>
          {overviewClustered.map((location) => {
            const [lng, lat] = location.geometry.coordinates;

            return (
              <Marker
                key={`cluster-${location.id}`}
                position={[lat, lng]}
                icon={getMarkerIcon(location.properties.categorySlug)}
              >
                <MapMarkerPopup location={location} />
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      )}

      {/* =========================
       * CATEGORY MODE
       * ========================= */}
      {!isOverview &&
        filteredLocations.map((location) => {
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
