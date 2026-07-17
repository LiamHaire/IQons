export type IconStyle = "outline" | "filled" | "duotone" | "thin";

export type IconCategory =
  | "navigation"
  | "search-discovery"
  | "data-actions"
  | "calendar-scheduling"
  | "communications"
  | "sharing"
  | "documents-content"
  | "workflow-productivity"
  | "user-id"
  | "status-feedback"
  | "security-access"
  | "analytics-reports"
  | "settings-admin"
  | "system-utility"
  | "ai"
  | "layout"
  | "sector-health"
  | "sector-education"
  | "sector-legal"
  | "sector-finance";

export interface Icon {
  id: string;
  name: string;
  tags: string[];
  category: IconCategory;
  styles: IconStyle[];
  svg: Partial<Record<IconStyle, string>>;
  description?: string;
  keywords?: string[];
  aliases?: string[];
}

export interface IconGroup {
  category: IconCategory;
  label: string;
  icons: Icon[];
}
