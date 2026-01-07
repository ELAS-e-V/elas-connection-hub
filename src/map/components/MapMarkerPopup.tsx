import { Popup } from "react-leaflet";
import type { Location } from "@/lib/api/fetchLocations";
import {
  MapPin,
  Phone,
  PlusCircle,
  CheckCircle
} from "lucide-react";

interface Props {
  location: Location;
}

const MapMarkerPopup = ({ location }: Props) => {
  const {
    name,
    categorySlug,
    formattedaddress,
    telephone,
    country,
  } = location.properties;

  return (
    <Popup className="rounded-xl p-0">
      <div className="w-[280px] rounded-xl bg-neutral-900 text-white p-4 space-y-3">
        {/* Title */}
        <div>
          <h3 className="text-lg font-semibold">
            {name ?? "Unnamed location"}
          </h3>
          <p className="text-xs uppercase text-neutral-400">
            {categorySlug}
          </p>
        </div>

        {/* Address */}
        {formattedaddress && (
          <div className="flex gap-2 text-sm text-neutral-300">
            <MapPin size={16} />
            <span>
              {formattedaddress}
              {country ? `, ${country}` : ""}
            </span>
          </div>
        )}

        {/* Phone */}
        {telephone && (
          <div className="flex gap-2 text-sm">
            <Phone size={16} />
            <a
              href={`tel:${telephone}`}
              className="underline"
            >
              {telephone}
            </a>
          </div>
        )}

        {/* Footer icons */}
        <div className="flex justify-between items-center pt-3">
          <CheckCircle className="text-primary" size={20} />

          <div className="flex gap-3">
            <PlusCircle
              className="cursor-pointer hover:text-primary"
              size={22}
            />
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default MapMarkerPopup;
