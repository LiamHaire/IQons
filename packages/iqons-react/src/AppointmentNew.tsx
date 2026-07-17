import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<mask id="path-1-inside-1_201_50" fill="white">
<path d="M1 5C1 3.89543 1.89543 3 3 3H21C22.1046 3 23 3.89543 23 5V21C23 22.1046 22.1046 23 21 23H3C1.89543 23 1 22.1046 1 21V5Z"/>
</mask>
<path d="M3 3V4.5H21V3V1.5H3V3ZM23 5H21.5V21H23H24.5V5H23ZM21 23V21.5H3V23V24.5H21V23ZM1 21H2.5V5H1H-0.5V21H1ZM3 23V21.5C2.72386 21.5 2.5 21.2761 2.5 21H1H-0.5C-0.5 22.933 1.067 24.5 3 24.5V23ZM23 21H21.5C21.5 21.2761 21.2761 21.5 21 21.5V23V24.5C22.933 24.5 24.5 22.933 24.5 21H23ZM21 3V4.5C21.2761 4.5 21.5 4.72386 21.5 5H23H24.5C24.5 3.067 22.933 1.5 21 1.5V3ZM3 3V1.5C1.067 1.5 -0.5 3.067 -0.5 5H1H2.5C2.5 4.72386 2.72386 4.5 3 4.5V3Z" fill="currentColor" mask="url(#path-1-inside-1_201_50)"/>
<path d="M8 6V2" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M16 6V2" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M12 9.75C12 13.3461 12 14.6539 12 18.25" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M7.75 14H16.25" stroke="currentColor" stroke- stroke-linecap="round"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 5.55228 7.44772 6 8 6C8.55228 6 9 5.55228 9 5V3H15V5C15 5.55228 15.4477 6 16 6C16.5523 6 17 5.55228 17 5V3H21C22.1046 3 23 3.89543 23 5V21C23 22.1046 22.1046 23 21 23H3C1.89543 23 1 22.1046 1 21V5C1 3.89543 1.89543 3 3 3H7V5ZM12 9C11.5858 9 11.25 9.33579 11.25 9.75V13.25H7.75C7.33579 13.25 7 13.5858 7 14C7 14.4142 7.33579 14.75 7.75 14.75H11.25V18.25C11.25 18.6642 11.5858 19 12 19C12.4142 19 12.75 18.6642 12.75 18.25V14.75H16.25C16.6642 14.75 17 14.4142 17 14C17 13.5858 16.6642 13.25 16.25 13.25H12.75V9.75C12.75 9.33579 12.4142 9 12 9Z" fill="currentColor"/>
<path d="M8 1C8.55228 1 9 1.44772 9 2V3H7V2C7 1.44772 7.44772 1 8 1Z" fill="currentColor"/>
<path d="M16 1C16.5523 1 17 1.44772 17 2V3H15V2C15 1.44772 15.4477 1 16 1Z" fill="currentColor"/>`,
  duotone: `<path d="M1 5C1 3.89543 1.89543 3 3 3H21C22.1046 3 23 3.89543 23 5V21C23 22.1046 22.1046 23 21 23H3C1.89543 23 1 22.1046 1 21V5Z" fill="currentColor" fill-opacity="0.2"/>
<mask id="path-2-inside-1_201_78" fill="white">
<path d="M1 5C1 3.89543 1.89543 3 3 3H21C22.1046 3 23 3.89543 23 5V21C23 22.1046 22.1046 23 21 23H3C1.89543 23 1 22.1046 1 21V5Z"/>
</mask>
<path d="M3 3V4.5H21V3V1.5H3V3ZM23 5H21.5V21H23H24.5V5H23ZM21 23V21.5H3V23V24.5H21V23ZM1 21H2.5V5H1H-0.5V21H1ZM3 23V21.5C2.72386 21.5 2.5 21.2761 2.5 21H1H-0.5C-0.5 22.933 1.067 24.5 3 24.5V23ZM23 21H21.5C21.5 21.2761 21.2761 21.5 21 21.5V23V24.5C22.933 24.5 24.5 22.933 24.5 21H23ZM21 3V4.5C21.2761 4.5 21.5 4.72386 21.5 5H23H24.5C24.5 3.067 22.933 1.5 21 1.5V3ZM3 3V1.5C1.067 1.5 -0.5 3.067 -0.5 5H1H2.5C2.5 4.72386 2.72386 4.5 3 4.5V3Z" fill="currentColor" mask="url(#path-2-inside-1_201_78)"/>
<path d="M8 6V2" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M16 6V2" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M12 9.75C12 13.3461 12 14.6539 12 18.25" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M7.75 14H16.25" stroke="currentColor" stroke- stroke-linecap="round"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * AppointmentNew icon
 * Variants: outline, fill, duotone
 */
export function AppointmentNew({
  variant = "outline",
  size = 24,
  label,
  ...props
}: IqonProps) {
  const inner = VARIANTS[variant] ?? VARIANTS["outline"] ?? "";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      aria-label={label}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      {...props}
      dangerouslySetInnerHTML={{ __html: inner }}
    />
  );
}

AppointmentNew.displayName = "AppointmentNew";
AppointmentNew.variants = AVAILABLE;
