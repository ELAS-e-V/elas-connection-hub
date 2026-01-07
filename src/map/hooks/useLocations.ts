import { useQuery } from "@tanstack/react-query";
import { fetchLocations, Location } from "@/lib/api/fetchLocations";

export const useLocations = () => {
  return useQuery<Location[]>({
    queryKey: ["locations"],
    queryFn: fetchLocations,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};
