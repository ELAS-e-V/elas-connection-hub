export interface MapCategory {
  id: string;
  icon: string;
  labelKey:
    | "health"
    | "legalSupport"
    | "education"
    | "culture"
    | "work"
    | "socialService"
    | "housing"
    | "womenRights"
    | "counseling";
}

export const MAP_CATEGORIES: MapCategory[] = [
  { id: "health", icon: "health.svg", labelKey: "health" },
  { id: "legal-support", icon: "legal-support.svg", labelKey: "legalSupport" },
  { id: "education", icon: "education.svg", labelKey: "education" },
  { id: "culture", icon: "culture.svg", labelKey: "culture" },
  { id: "work", icon: "work.svg", labelKey: "work" },
  { id: "social-service", icon: "social-service.svg", labelKey: "socialService" },
  { id: "housing", icon: "housing.svg", labelKey: "housing" },
  { id: "women-rights", icon: "womens-rights.svg", labelKey: "womenRights" },
  { id: "counseling", icon: "counselor.svg", labelKey: "counseling" },
];
