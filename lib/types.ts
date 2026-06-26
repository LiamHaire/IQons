export type IconStyle = "outline" | "filled" | "duotone" | "thin";

export type IconCategory =
  | "arrows"
  | "communication"
  | "design"
  | "devices"
  | "files"
  | "finance"
  | "interface"
  | "media"
  | "nature"
  | "security"
  | "shapes"
  | "social"
  | "time"
  | "travel"
  | "weather";

export interface Icon {
  id: string;
  name: string;
  tags: string[];
  category: IconCategory;
  styles: IconStyle[];
  svg: Record<IconStyle, string>;
}

export interface IconGroup {
  category: IconCategory;
  label: string;
  icons: Icon[];
}
