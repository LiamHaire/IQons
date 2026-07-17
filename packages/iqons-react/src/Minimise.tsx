import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M19.25 14.25C19.6642 14.25 20 14.5858 20 15C20 15.4142 19.6642 15.75 19.25 15.75H4.75C4.33579 15.75 4 15.4142 4 15C4 14.5858 4.33579 14.25 4.75 14.25H19.25Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M20 2C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20ZM5.75 14.25C5.33579 14.25 5 14.5858 5 15C5 15.4142 5.33579 15.75 5.75 15.75H18.25C18.6642 15.75 19 15.4142 19 15C19 14.5858 18.6642 14.25 18.25 14.25H5.75Z" fill="currentColor"/>`,
  duotone: `<path d="M19 13.25C20.1046 13.25 21 14.0335 21 15C21 15.9665 20.1046 16.75 19 16.75H5C3.89543 16.75 3 15.9665 3 15C3 14.0335 3.89543 13.25 5 13.25H19Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M19.25 14.25C19.6642 14.25 20 14.5858 20 15C20 15.4142 19.6642 15.75 19.25 15.75H4.75C4.33579 15.75 4 15.4142 4 15C4 14.5858 4.33579 14.25 4.75 14.25H19.25Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Minimise icon
 * Variants: outline, fill, duotone
 */
export function Minimise({
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

Minimise.displayName = "Minimise";
Minimise.variants = AVAILABLE;
