import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M20.25 19.5C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25C3 19.8358 3.33579 19.5 3.75 19.5H20.25Z" fill="currentColor"/>
<path d="M20.25 15.5C20.6642 15.5 21 15.8358 21 16.25C21 16.6642 20.6642 17 20.25 17H3.75C3.33579 17 3 16.6642 3 16.25C3 15.8358 3.33579 15.5 3.75 15.5H20.25Z" fill="currentColor"/>
<path d="M11 4.49023H7.91699V13H6.04883V4.49023H3V3H11V4.49023Z" fill="currentColor"/>
<path d="M20.25 11.5C20.6642 11.5 21 11.8358 21 12.25C21 12.6642 20.6642 13 20.25 13H11.25C10.8358 13 10.5 12.6642 10.5 12.25C10.5 11.8358 10.8358 11.5 11.25 11.5H20.25Z" fill="currentColor"/>
<path d="M20.25 7.5C20.6642 7.5 21 7.83579 21 8.25C21 8.66421 20.6642 9 20.25 9H11.25C10.8358 9 10.5 8.66421 10.5 8.25C10.5 7.83579 10.8358 7.5 11.25 7.5H20.25Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM6.75 16.5C6.33579 16.5 6 16.8358 6 17.25C6 17.6642 6.33579 18 6.75 18H17.25C17.6642 18 18 17.6642 18 17.25C18 16.8358 17.6642 16.5 17.25 16.5H6.75ZM6.75 13.25C6.33579 13.25 6 13.5858 6 14C6 14.4142 6.33579 14.75 6.75 14.75H17.25C17.6642 14.75 18 14.4142 18 14C18 13.5858 17.6642 13.25 17.25 13.25H6.75ZM6 6V7.19238H8.28613V12H9.6875V7.19238H12V6H6ZM12 10C11.5858 10 11.25 10.3358 11.25 10.75C11.25 11.1642 11.5858 11.5 12 11.5H17.25C17.6642 11.5 18 11.1642 18 10.75C18 10.3358 17.6642 10 17.25 10H12Z" fill="currentColor"/>`,
  duotone: `<path d="M11.5 16V8H20V20H4V16H11.5Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M20.25 19.5C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25C3 19.8358 3.33579 19.5 3.75 19.5H20.25Z" fill="currentColor"/>
<path d="M20.25 15.5C20.6642 15.5 21 15.8358 21 16.25C21 16.6642 20.6642 17 20.25 17H3.75C3.33579 17 3 16.6642 3 16.25C3 15.8358 3.33579 15.5 3.75 15.5H20.25Z" fill="currentColor"/>
<path d="M11 4.49023H7.91699V13H6.04883V4.49023H3V3H11V4.49023Z" fill="currentColor"/>
<path d="M20.25 11.5C20.6642 11.5 21 11.8358 21 12.25C21 12.6642 20.6642 13 20.25 13H11.25C10.8358 13 10.5 12.6642 10.5 12.25C10.5 11.8358 10.8358 11.5 11.25 11.5H20.25Z" fill="currentColor"/>
<path d="M20.25 7.5C20.6642 7.5 21 7.83579 21 8.25C21 8.66421 20.6642 9 20.25 9H11.25C10.8358 9 10.5 8.66421 10.5 8.25C10.5 7.83579 10.8358 7.5 11.25 7.5H20.25Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Paragraph icon
 * Variants: outline, fill, duotone
 */
export function Paragraph({
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

Paragraph.displayName = "Paragraph";
Paragraph.variants = AVAILABLE;
