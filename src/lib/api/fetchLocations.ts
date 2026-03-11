import axios from "axios";

export interface Location {
  id: string | number;
  geometry: {
    coordinates: [number, number];
  };
  properties: {
    name?: string;
    categorySlug?: string;
    subcategorySlug?: string;
    formattedaddress?: string;
    telephone?: string;
    country?: string;
  };
}

export const fetchLocations = async (): Promise<Location[]> => {
  const url = "https://fgi.nvv.de/geojson/elas.php";

  const { data } = await axios.get(url, {
    headers: { "Content-Type": "application/json" },
  });

  return data?.features ?? [];
};

