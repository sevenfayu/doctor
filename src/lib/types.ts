export const DISCLAIMER =
  "This service helps organize information and coordinate medical travel. It does not provide emergency care, diagnosis, prescriptions or guaranteed treatment outcomes.";

export type RiskLevel = "low" | "medium" | "high" | "urgent";

export const SERVICE_TYPES = {
  caseReview: "Case review and expert matching",
  hospitalReferral: "China hospital referral",
  secondOpinion: "Second opinion from China specialists",
  treatmentTrip: "Treatment trip planning",
  internationalPatient: "International patient package",
  urgentCallback: "Urgent WhatsApp callback"
} as const;

export type ServiceType = keyof typeof SERVICE_TYPES;

export const LEAD_STATUSES = ["new", "contacted", "qualified", "case_review", "expert_matched", "converted", "closed"] as const;
