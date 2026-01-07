// types usados no popup para saber o que renderizar
export type PopupField =
  | "description"
  | "formattedaddress"
  | "openingHours"
  | "telephone"
  | "email"
  | "website"
  | "languages"
  | "responsible"
  | "observations"
  | "attendanceType"
  | "teamMember";

// contrato da categoria no mapa
export interface MapCategory {
  id: string;
  label: string;
  icon: string;

  /**
   * Campos que devem aparecer no popup
   * O componente do popup decide como renderizar,
   * aqui só diz O QUE mostrar.
   */
  showFields: PopupField[];
}

/**
 * Labels humanizados para o popup
 * Centralizado aqui pra não espalhar string pela UI
 */
export const POPUP_FIELD_LABELS: Record<PopupField, string> = {
  description: "Description",
  formattedaddress: "Address",
  openingHours: "Opening hours",
  telephone: "Phone",
  email: "Email",
  website: "Website",
  languages: "Languages",
  responsible: "Responsible",
  observations: "Notes",
  attendanceType: "Attendance type",
  teamMember: "Team member",
};

/**
 * Configuração das categorias do mapa
 * O id PRECISA bater com categorySlug do backend
 */
export const MAP_CATEGORIES: MapCategory[] = [
  {
    id: "health",
    label: "Health",
    icon: "health.svg",
    showFields: [
      "description",
      "openingHours",
      "telephone",
      "email",
      "website",
      "languages",
      "attendanceType",
    ],
  },
  {
    id: "legal-support",
    label: "Access to Legal Support",
    icon: "legal-support.svg",
    showFields: [
      "description",
      "openingHours",
      "telephone",
      "email",
      "website",
      "responsible",
      "observations",
    ],
  },
  {
    id: "education",
    label: "Education",
    icon: "education.svg",
    showFields: [
      "description",
      "telephone",
      "email",
      "website",
      "openingHours",
    ],
  },
  {
    id: "culture",
    label: "Culture and Socialization",
    icon: "culture.svg",
    showFields: [
      "description",
      "openingHours",
      "website",
      "observations",
    ],
  },
  {
    id: "work",
    label: "Work",
    icon: "work.svg",
    showFields: [
      "description",
      "openingHours",
      "telephone",
      "email",
      "website",
      "observations",
    ],
  },
  {
    id: "social-service",
    label: "Access to Social Services",
    icon: "social-service.svg",
    showFields: [
      "description",
      "openingHours",
      "telephone",
      "email",
      "website",
      "observations",
      "teamMember",
    ],
  },
  {
    id: "housing",
    label: "Housing",
    icon: "housing.svg",
    showFields: [
      "description",
      "telephone",
      "email",
      "website",
      "observations",
    ],
  },
  {
    id: "women-rights",
    label: "Women’s Rights",
    icon: "womens-rights.svg",
    showFields: [
      "description",
      "openingHours",
      "telephone",
      "email",
      "website",
      "observations",
    ],
  },
  {
    id: "counseling",
    label: "Counseling",
    icon: "counselor.svg",
    showFields: [
      "description",
      "openingHours",
      "telephone",
      "email",
      "website",
      "responsible",
      "observations",
    ],
  },
];
