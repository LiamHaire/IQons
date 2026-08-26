import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M20 6C21.1046 6 22 6.89543 22 8V20C22 21.1046 21.1046 22 20 22H8C6.89543 22 6 21.1046 6 20V18H4C2.89543 18 2 17.1046 2 16V4C2 2.89543 2.89543 2 4 2H16C17.1046 2 18 2.89543 18 4V6H20ZM16.5 6V4C16.5 3.72386 16.2761 3.5 16 3.5H4C3.72386 3.5 3.5 3.72386 3.5 4V16C3.5 16.2761 3.72386 16.5 4 16.5H6V8C6 6.89543 6.89543 6 8 6H16.5ZM8 7.5C7.72386 7.5 7.5 7.72386 7.5 8V20C7.5 20.2761 7.72386 20.5 8 20.5H20C20.2761 20.5 20.5 20.2761 20.5 20V8C20.5 7.72386 20.2761 7.5 20 7.5H8Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C17.1046 2 18 2.89543 18 4V6H20C21.1046 6 22 6.89543 22 8V20C22 21.1046 21.1046 22 20 22H8C6.89543 22 6 21.1046 6 20V18H4C2.89543 18 2 17.1046 2 16V4C2 2.89543 2.89543 2 4 2H16ZM4 3.5C3.72386 3.5 3.5 3.72386 3.5 4V16C3.5 16.2761 3.72386 16.5 4 16.5H6V8C6 6.89543 6.89543 6 8 6H16.5V4C16.5 3.72386 16.2761 3.5 16 3.5H4Z" fill="currentColor"/>`,
  duotone: `<path d="M6 8C6 6.89543 6.89543 6 8 6H20C21.1046 6 22 6.89543 22 8V20C22 21.1046 21.1046 22 20 22H8C6.89543 22 6 21.1046 6 20V8Z" fill="currentColor" fill-opacity="0.2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 6C21.1046 6 22 6.89543 22 8V20C22 21.1046 21.1046 22 20 22H8C6.89543 22 6 21.1046 6 20V18H4C2.89543 18 2 17.1046 2 16V4C2 2.89543 2.89543 2 4 2H16C17.1046 2 18 2.89543 18 4V6H20ZM16.5 6V4C16.5 3.72386 16.2761 3.5 16 3.5H4C3.72386 3.5 3.5 3.72386 3.5 4V16C3.5 16.2761 3.72386 16.5 4 16.5H6V8C6 6.89543 6.89543 6 8 6H16.5ZM8 7.5C7.72386 7.5 7.5 7.72386 7.5 8V20C7.5 20.2761 7.72386 20.5 8 20.5H20C20.2761 20.5 20.5 20.2761 20.5 20V8C20.5 7.72386 20.2761 7.5 20 7.5H8Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Duplicate icon
 * Variants: outline, fill, duotone
 */
export function Duplicate({
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

Duplicate.displayName = "Duplicate";
Duplicate.variants = AVAILABLE;
