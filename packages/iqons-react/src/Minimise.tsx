import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M18.25 16.5C18.6642 16.5 19 16.8358 19 17.25C19 17.6642 18.6642 18 18.25 18H5.75C5.33579 18 5 17.6642 5 17.25C5 16.8358 5.33579 16.5 5.75 16.5H18.25Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM6.75 16.5C6.33579 16.5 6 16.8358 6 17.25C6 17.6642 6.33579 18 6.75 18H17.25C17.6642 18 18 17.6642 18 17.25C18 16.8358 17.6642 16.5 17.25 16.5H6.75Z" fill="currentColor"/>`,
  duotone: `<path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M17.25 16.5C17.6642 16.5 18 16.8358 18 17.25C18 17.6642 17.6642 18 17.25 18H6.75C6.33579 18 6 17.6642 6 17.25C6 16.8358 6.33579 16.5 6.75 16.5H17.25Z" fill="currentColor"/>`,
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
