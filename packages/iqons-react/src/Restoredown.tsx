import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M20 2C21.1046 2 22 2.89543 22 4V16C22 17.1046 21.1046 18 20 18H18V20C18 21.1046 17.1046 22 16 22H4C2.89543 22 2 21.1046 2 20V8C2 6.89543 2.89543 6 4 6H6V4C6 2.89543 6.89543 2 8 2H20ZM4 7.5C3.72386 7.5 3.5 7.72386 3.5 8V20C3.5 20.2761 3.72386 20.5 4 20.5H16C16.2761 20.5 16.5 20.2761 16.5 20V8C16.5 7.72386 16.2761 7.5 16 7.5H4ZM8 3.5C7.72386 3.5 7.5 3.72386 7.5 4V6H16C17.1046 6 18 6.89543 18 8V16.5H20C20.2761 16.5 20.5 16.2761 20.5 16V4C20.5 3.72386 20.2761 3.5 20 3.5H8Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M20 2C21.1046 2 22 2.89543 22 4V16C22 17.1046 21.1046 18 20 18H18V22H2V6H6V4C6 2.89543 6.89543 2 8 2H20ZM8 3.5C7.72386 3.5 7.5 3.72386 7.5 4V6H18V16.5H20C20.2761 16.5 20.5 16.2761 20.5 16V4C20.5 3.72386 20.2761 3.5 20 3.5H8Z" fill="currentColor"/>`,
  duotone: `<path d="M2 8C2 6.89543 2.89543 6 4 6H16C17.1046 6 18 6.89543 18 8V20C18 21.1046 17.1046 22 16 22H4C2.89543 22 2 21.1046 2 20V8Z" fill="currentColor" fill-opacity="0.2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 2C21.1046 2 22 2.89543 22 4V16C22 17.1046 21.1046 18 20 18H18V20C18 21.1046 17.1046 22 16 22H4C2.89543 22 2 21.1046 2 20V8C2 6.89543 2.89543 6 4 6H6V4C6 2.89543 6.89543 2 8 2H20ZM4 7.5C3.72386 7.5 3.5 7.72386 3.5 8V20C3.5 20.2761 3.72386 20.5 4 20.5H16C16.2761 20.5 16.5 20.2761 16.5 20V8C16.5 7.72386 16.2761 7.5 16 7.5H4ZM8 3.5C7.72386 3.5 7.5 3.72386 7.5 4V6H16C17.1046 6 18 6.89543 18 8V16.5H20C20.2761 16.5 20.5 16.2761 20.5 16V4C20.5 3.72386 20.2761 3.5 20 3.5H8Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * RestoreDown icon
 * Variants: outline, fill, duotone
 */
export function RestoreDown({
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

RestoreDown.displayName = "RestoreDown";
RestoreDown.variants = AVAILABLE;
