import type { IconCategory, IconStyle } from "./types";

export const CATEGORY_LABELS: Record<IconCategory, string> = {
  "navigation":            "Navigation",
  "search-discovery":      "Search & Discovery",
  "data-actions":          "Data Actions",
  "calendar-scheduling":   "Calendar & Scheduling",
  "communications":        "Communications",
  "sharing":               "Sharing",
  "documents-content":     "Documents & Content",
  "workflow-productivity": "Workflow & Productivity",
  "user-id":               "User & ID",
  "status-feedback":       "Status & Feedback",
  "security-access":       "Security & Access",
  "analytics-reports":     "Analytics & Reports",
  "settings-admin":        "Settings & Admin",
  "system-utility":        "System & Utility",
  "ai":                    "AI",
  "sector-health":         "Health",
};

// Categories in display order
export const CATEGORY_ORDER: IconCategory[] = [
  "navigation",
  "search-discovery",
  "data-actions",
  "calendar-scheduling",
  "communications",
  "sharing",
  "documents-content",
  "workflow-productivity",
  "user-id",
  "status-feedback",
  "security-access",
  "analytics-reports",
  "settings-admin",
  "system-utility",
  "ai",
  "sector-health",
];

// Categories that belong to the Sector group (rendered under a "Sector" heading)
export const SECTOR_CATEGORIES = new Set<IconCategory>(["sector-health"]);

export const ICON_STYLES: IconStyle[] = ["outline", "filled", "duotone"];

export const STYLE_LABELS: Record<IconStyle, string> = {
  outline: "Outline",
  filled:  "Filled",
  duotone: "Duotone",
  thin:    "Thin",
};
