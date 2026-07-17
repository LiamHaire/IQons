import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M6.5 8H8" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M11 8H17.5" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M6.5 12H8" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M11 12H17.5" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M6.5 16H8" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M11 16H17.5" stroke="currentColor" stroke- stroke-linecap="round"/>
<mask id="path-7-inside-1_175_200" fill="white">
<path d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4Z"/>
</mask>
<path d="M4 2V3.5H20V2V0.5H4V2ZM22 4H20.5V20H22H23.5V4H22ZM20 22V20.5H4V22V23.5H20V22ZM2 20H3.5V4H2H0.5V20H2ZM4 22V20.5C3.72386 20.5 3.5 20.2761 3.5 20H2H0.5C0.5 21.933 2.067 23.5 4 23.5V22ZM22 20H20.5C20.5 20.2761 20.2761 20.5 20 20.5V22V23.5C21.933 23.5 23.5 21.933 23.5 20H22ZM20 2V3.5C20.2761 3.5 20.5 3.72386 20.5 4H22H23.5C23.5 2.067 21.933 0.5 20 0.5V2ZM4 2V0.5C2.067 0.5 0.5 2.067 0.5 4H2H3.5C3.5 3.72386 3.72386 3.5 4 3.5V2Z" fill="currentColor" mask="url(#path-7-inside-1_175_200)"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M20 2C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20ZM6.5 15C5.94772 15 5.5 15.4477 5.5 16C5.5 16.5523 5.94772 17 6.5 17H8C8.55228 17 9 16.5523 9 16C9 15.4477 8.55228 15 8 15H6.5ZM11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H17.5C18.0523 17 18.5 16.5523 18.5 16C18.5 15.4477 18.0523 15 17.5 15H11ZM6.5 11C5.94772 11 5.5 11.4477 5.5 12C5.5 12.5523 5.94772 13 6.5 13H8C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11H6.5ZM11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H17.5C18.0523 13 18.5 12.5523 18.5 12C18.5 11.4477 18.0523 11 17.5 11H11ZM6.5 7C5.94772 7 5.5 7.44772 5.5 8C5.5 8.55228 5.94772 9 6.5 9H8C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7H6.5ZM11 7C10.4477 7 10 7.44772 10 8C10 8.55228 10.4477 9 11 9H17.5C18.0523 9 18.5 8.55228 18.5 8C18.5 7.44772 18.0523 7 17.5 7H11Z" fill="currentColor"/>`,
  duotone: `<path d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4Z" fill="currentColor" fill-opacity="0.15"/>
<path d="M6.5 8H8" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M11 8H17.5" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M6.5 12H8" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M11 12H17.5" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M6.5 16H8" stroke="currentColor" stroke- stroke-linecap="round"/>
<path d="M11 16H17.5" stroke="currentColor" stroke- stroke-linecap="round"/>
<mask id="path-8-inside-1_175_185" fill="white">
<path d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4Z"/>
</mask>
<path d="M4 2V3.5H20V2V0.5H4V2ZM22 4H20.5V20H22H23.5V4H22ZM20 22V20.5H4V22V23.5H20V22ZM2 20H3.5V4H2H0.5V20H2ZM4 22V20.5C3.72386 20.5 3.5 20.2761 3.5 20H2H0.5C0.5 21.933 2.067 23.5 4 23.5V22ZM22 20H20.5C20.5 20.2761 20.2761 20.5 20 20.5V22V23.5C21.933 23.5 23.5 21.933 23.5 20H22ZM20 2V3.5C20.2761 3.5 20.5 3.72386 20.5 4H22H23.5C23.5 2.067 21.933 0.5 20 0.5V2ZM4 2V0.5C2.067 0.5 0.5 2.067 0.5 4H2H3.5C3.5 3.72386 3.72386 3.5 4 3.5V2Z" fill="currentColor" mask="url(#path-8-inside-1_175_185)"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Logs icon
 * Variants: outline, fill, duotone
 */
export function Logs({
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

Logs.displayName = "Logs";
Logs.variants = AVAILABLE;
