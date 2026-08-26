import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<circle cx="4.5" cy="5.5" r="1.5" fill="currentColor"/>
<circle cx="4.5" cy="18.5" r="1.5" fill="currentColor"/>
<circle cx="4.5" cy="12" r="1.5" fill="currentColor"/>
<path d="M20.25 4.75C20.6642 4.75 21 5.08579 21 5.5C21 5.91421 20.6642 6.25 20.25 6.25H8.25C7.83579 6.25 7.5 5.91421 7.5 5.5C7.5 5.08579 7.83579 4.75 8.25 4.75H20.25Z" fill="currentColor"/>
<path d="M20.25 17.75C20.6642 17.75 21 18.0858 21 18.5C21 18.9142 20.6642 19.25 20.25 19.25H8.25C7.83579 19.25 7.5 18.9142 7.5 18.5C7.5 18.0858 7.83579 17.75 8.25 17.75H20.25Z" fill="currentColor"/>
<path d="M20.25 11.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H8.25C7.83579 12.75 7.5 12.4142 7.5 12C7.5 11.5858 7.83579 11.25 8.25 11.25H20.25Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM7.5 15C6.67157 15 6 15.6716 6 16.5C6 17.3284 6.67157 18 7.5 18C8.32843 18 9 17.3284 9 16.5C9 15.6716 8.32843 15 7.5 15ZM11.25 15.75C10.8358 15.75 10.5 16.0858 10.5 16.5C10.5 16.9142 10.8358 17.25 11.25 17.25H17.25C17.6642 17.25 18 16.9142 18 16.5C18 16.0858 17.6642 15.75 17.25 15.75H11.25ZM7.5 10.5C6.67157 10.5 6 11.1716 6 12C6 12.8284 6.67157 13.5 7.5 13.5C8.32843 13.5 9 12.8284 9 12C9 11.1716 8.32843 10.5 7.5 10.5ZM11.25 11.25C10.8358 11.25 10.5 11.5858 10.5 12C10.5 12.4142 10.8358 12.75 11.25 12.75H17.25C17.6642 12.75 18 12.4142 18 12C18 11.5858 17.6642 11.25 17.25 11.25H11.25ZM7.5 6C6.67157 6 6 6.67157 6 7.5C6 8.32843 6.67157 9 7.5 9C8.32843 9 9 8.32843 9 7.5C9 6.67157 8.32843 6 7.5 6ZM11.25 6.75C10.8358 6.75 10.5 7.08579 10.5 7.5C10.5 7.91421 10.8358 8.25 11.25 8.25H17.25C17.6642 8.25 18 7.91421 18 7.5C18 7.08579 17.6642 6.75 17.25 6.75H11.25Z" fill="currentColor"/>`,
  duotone: `<path d="M8.5 5H20.5V19H8.5V5Z" fill="currentColor" fill-opacity="0.2"/>
<circle cx="4.5" cy="5.5" r="1.5" fill="currentColor"/>
<circle cx="4.5" cy="18.5" r="1.5" fill="currentColor"/>
<circle cx="4.5" cy="12" r="1.5" fill="currentColor"/>
<path d="M20.25 4.75C20.6642 4.75 21 5.08579 21 5.5C21 5.91421 20.6642 6.25 20.25 6.25H8.25C7.83579 6.25 7.5 5.91421 7.5 5.5C7.5 5.08579 7.83579 4.75 8.25 4.75H20.25Z" fill="currentColor"/>
<path d="M20.25 17.75C20.6642 17.75 21 18.0858 21 18.5C21 18.9142 20.6642 19.25 20.25 19.25H8.25C7.83579 19.25 7.5 18.9142 7.5 18.5C7.5 18.0858 7.83579 17.75 8.25 17.75H20.25Z" fill="currentColor"/>
<path d="M20.25 11.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H8.25C7.83579 12.75 7.5 12.4142 7.5 12C7.5 11.5858 7.83579 11.25 8.25 11.25H20.25Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * LayoutList icon
 * Variants: outline, fill, duotone
 */
export function LayoutList({
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

LayoutList.displayName = "LayoutList";
LayoutList.variants = AVAILABLE;
