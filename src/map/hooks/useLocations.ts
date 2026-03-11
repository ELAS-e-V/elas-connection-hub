import { useQuery } from "@tanstack/react-query";
import { fetchLocations, Location } from "@/lib/api/fetchLocations";

/**
 * Hook responsável apenas por buscar os locations do mapa.
 * Não aplica filtros de categoria.
 * Categoria é responsabilidade da camada de UI (MapView).
 */
export const useLocations = () => {
  return useQuery<Location[]>({
    queryKey: ["locations"],
    queryFn: fetchLocations,
    staleTime: 1000 * 60 * 10, // 10 minutos
    gcTime: 1000 * 60 * 30,    // 30 minutos (React Query v5)
    refetchOnWindowFocus: false,
  });
};
