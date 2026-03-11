export interface MapSubcategory {
  id: string;        // slug técnico (camelCase)
  labelKey: string; // i18n key (camelCase)
}

export interface MapCategory {
  id: string;        // categorySlug (NVV / frontend)
  icon: string;
  labelKey: string; // i18n key
  subcategories: MapSubcategory[];
}

export const MAP_CATEGORIES: MapCategory[] = [
  {
    id: "health",
    icon: "health.svg",
    labelKey: "health",
    subcategories: [
      { id: "familyDoctor", labelKey: "familyDoctor" },
      { id: "primaryCareClinic", labelKey: "primaryCareClinic" },
      { id: "pediatrics", labelKey: "pediatrics" },
      { id: "gynecology", labelKey: "gynecology" },
      { id: "reproductiveHealth", labelKey: "reproductiveHealth" },
      { id: "dermatology", labelKey: "dermatology" },
      { id: "orthopedics", labelKey: "orthopedics" },
      { id: "urology", labelKey: "urology" },
      { id: "psychiatry", labelKey: "psychiatry" },
      { id: "eyeCare", labelKey: "eyeCare" },
      { id: "ent", labelKey: "ent" },
      { id: "radiologyImaging", labelKey: "radiologyImaging" },
      { id: "surgery", labelKey: "surgery" },
      { id: "plasticSurgery", labelKey: "plasticSurgery" },
      { id: "psychology", labelKey: "psychology" },
      { id: "mentalHealthSupport", labelKey: "mentalHealthSupport" },
      { id: "therapyCounseling", labelKey: "therapyCounseling" },
      { id: "mentalHealthHotlines", labelKey: "mentalHealthHotlines" },
      { id: "physical-therapy", labelKey: "physicalTherapy" },
      { id: "occupationalTherapy", labelKey: "occupationalTherapy" },
      { id: "hospital", labelKey: "hospital" },
      { id: "medicalClinic", labelKey: "medicalClinic" },
      { id: "specialistClinics", labelKey: "specialistClinics" },
      { id: "emergencyServices", labelKey: "emergencyServices" },
      { id: "dentistry", labelKey: "dentistry" },
      { id: "other", labelKey: "other" },
    ],
  },

  {
    id: "education",
    icon: "education.svg",
    labelKey: "education",
    subcategories: [
      { id: "kindergartenPreschool", labelKey: "kindergartenPreschool" },
      { id: "schoolPrimarySecondary", labelKey: "schoolPrimarySecondary" },
      { id: "languageCourses", labelKey: "languageCourses" },
      { id: "integrationCourses", labelKey: "integrationCourses" },
      { id: "continuing-education", labelKey: "continuingEducation" },
      { id: "vocationalTraining", labelKey: "vocationalTraining" },
      { id: "computerDigitalSkills", labelKey: "computerDigitalSkills" },
      { id: "universityCollege", labelKey: "universityCollege" },
      { id: "certificationAuthorities", labelKey: "certificationAuthorities" },
      { id: "educationalConsulting", labelKey: "educationalConsulting" },
      { id: "other", labelKey: "other" },
    ],
  },

  {
    id: "legal-support",
    icon: "legal-support.svg",
    labelKey: "legalSupport",
    subcategories: [
      { id: "lawyersLawFirms", labelKey: "lawyersLawFirms" },
      { id: "notaryServices", labelKey: "notaryServices" },
      { id: "legalAidOrganizations", labelKey: "legalAidOrganizations" },
      { id: "legalCounselingCenters", labelKey: "legalCounselingCenters" },
      { id: "immigrationLegalServices", labelKey: "immigrationLegalServices" },
      { id: "refugeeAsylumSupport", labelKey: "refugeeAsylumSupport" },
      { id: "police-stations", labelKey: "policeStations" },
      { id: "governmentLegalOffices", labelKey: "governmentLegalOffices" },
      { id: "humanRightsOrganizations", labelKey: "humanRightsOrganizations" },
      { id: "advocacyGroups", labelKey: "advocacyGroups" },
      { id: "equalOpportunityOrganizations", labelKey: "equalOpportunityOrganizations" },
      { id: "emergencyAid", labelKey: "emergencyAid" },
      { id: "shelters", labelKey: "shelters" },
      { id: "legalTranslationInterpreting", labelKey: "legalTranslationInterpreting" },
      { id: "other", labelKey: "other" },
    ],
  },

  {
    id: "work",
    icon: "work.svg",
    labelKey: "work",
    subcategories: [
      { id: "jobcenter", labelKey: "jobcenter" },
      { id: "jobAgencies", labelKey: "jobAgencies" },
      { id: "careerConsultingCoaching", labelKey: "careerConsultingCoaching" },
      { id: "mentorshipPrograms", labelKey: "mentorshipPrograms" },
      { id: "languageCareerDevelopment", labelKey: "languageCareerDevelopment" },
      { id: "jobTrainingPrograms", labelKey: "jobTrainingPrograms" },
      { id: "professionalSkillsDevelopment", labelKey: "professionalSkillsDevelopment" },
      { id: "smallBusinessSupport", labelKey: "smallBusinessSupport" },
      { id: "entrepreneurshipPrograms", labelKey: "entrepreneurshipPrograms" },
      { id: "financialEducationWork", labelKey: "financialEducationWork" },
      { id: "other", labelKey: "other" },
    ],
  },

  {
    id: "social-service",
    icon: "social-service.svg",
    labelKey: "socialService",
    subcategories: [
      { id: "socialWorkers", labelKey: "socialWorkers" },
      { id: "socialWelfareServices", labelKey: "socialWelfareServices" },
      { id: "financialAssistanceGovernment", labelKey: "financialAssistanceGovernment" },
      { id: "integrationSupportCenters", labelKey: "integrationSupportCenters" },
      { id: "foodBanks", labelKey: "foodBanks" },
      { id: "parentingSupportGroups", labelKey: "parentingSupportGroups" },
      { id: "womenSupportGroups", labelKey: "womenSupportGroups" },
      { id: "emergencyAid", labelKey: "emergencyAid" },
      { id: "other", labelKey: "other" },
    ],
  },

  {
    id: "housing",
    icon: "housing.svg",
    labelKey: "housing",
    subcategories: [
      { id: "rentalAgenciesHousingSearch", labelKey: "rentalAgenciesHousingSearch" },
      { id: "temporaryHousing", labelKey: "temporaryHousing" },
      { id: "publicSocialHousing", labelKey: "publicSocialHousing" },
      { id: "emergencyShelters", labelKey: "emergencyShelters" },
      { id: "other", labelKey: "other" },
    ],
  },

  {
    id: "community-support",
    icon: "community.svg",
    labelKey: "communitySupport",
    subcategories: [
      { id: "womenSupportGroups", labelKey: "womenSupportGroups" },
      { id: "parentingSupportGroups", labelKey: "parentingSupportGroups" },
      { id: "lgbtqiaSpacesGroups", labelKey: "lgbtqiaSpacesGroups" },
      { id: "migrantDiasporaCommunities", labelKey: "migrantDiasporaCommunities" },
      { id: "communitySupportGroups", labelKey: "communitySupportGroups" },
      { id: "volunteeringCommunityEngagement", labelKey: "volunteeringCommunityEngagement" },
      { id: "other", labelKey: "other" },
    ],
  },
  {
    id: "culture",
    icon: "culture.svg",
    labelKey: "culture",
    subcategories: [
      { id: "museum", labelKey: "museum" },
      { id: "galleries", labelKey: "galleries" },
      { id: "cultural-center", labelKey: "culturalCenters" },
      { id: "libraries", labelKey: "libraries" },
      { id: "movie-theater", labelKey: "movieTheaters" },
      { id: "theaters", labelKey: "theaters" },
      { id: "dance-school", labelKey: "danceSchools" },
      { id: "artCreativityPrograms", labelKey: "artCreativityPrograms" },
      { id: "parksPlaygrounds", labelKey: "parksPlaygrounds" },
      { id: "sportsRecreation", labelKey: "sportsRecreation" },
      { id: "placesOfWorship", labelKey: "placesOfWorship" },
      { id: "culturalDiversityOrganizations", labelKey: "culturalDiversityOrganizations" },
      { id: "volunteeringCommunityWork", labelKey: "volunteeringCommunityWork" },
      { id: "other", labelKey: "other" },
    ],
  },
];
