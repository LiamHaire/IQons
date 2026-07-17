import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M21 3C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3L2.7959 20.9893C1.78722 20.887 1 20.0357 1 19V5C1 3.89543 1.89543 3 3 3H21ZM2.5 19C2.5 19.2761 2.72386 19.5 3 19.5H7.9502V15.5625H2.5V19ZM9.4502 15.5625V19.5H21C21.2761 19.5 21.5 19.2761 21.5 19V15.5625H9.4502ZM9.4502 10.5V14.0625H21.5V10.5H9.4502ZM2.5 14.0625H7.9502V10.5H2.5V14.0625ZM3 4.5C2.72386 4.5 2.5 4.72386 2.5 5V9H21.5V5C21.5 4.72386 21.2761 4.5 21 4.5H3Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M21 3C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3L2.7959 20.9893C1.78722 20.887 1 20.0357 1 19V5C1 3.89543 1.89543 3 3 3H21ZM2.5 19C2.5 19.2761 2.72386 19.5 3 19.5H7.9502V15.5625H2.5V19ZM9.4502 19.5H21C21.2761 19.5 21.5 19.2761 21.5 19V15.5625H9.4502V19.5ZM2.5 14.0625H7.9502V10.5H2.5V14.0625ZM9.4502 14.0625H21.5V10.5H9.4502V14.0625Z" fill="currentColor"/>`,
  duotone: `<path d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V10H2V6Z" fill="currentColor" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 3C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3L2.7959 20.9893C1.78722 20.887 1 20.0357 1 19V5C1 3.89543 1.89543 3 3 3H21ZM2.5 19C2.5 19.2761 2.72386 19.5 3 19.5H7.9502V15.5625H2.5V19ZM9.4502 15.5625V19.5H21C21.2761 19.5 21.5 19.2761 21.5 19V15.5625H9.4502ZM9.4502 10.5V14.0625H21.5V10.5H9.4502ZM2.5 14.0625H7.9502V10.5H2.5V14.0625ZM3 4.5C2.72386 4.5 2.5 4.72386 2.5 5V9H21.5V5C21.5 4.72386 21.2761 4.5 21 4.5H3Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Datatable icon
 * Variants: outline, fill, duotone
 */
export function Datatable({
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

Datatable.displayName = "Datatable";
Datatable.variants = AVAILABLE;
