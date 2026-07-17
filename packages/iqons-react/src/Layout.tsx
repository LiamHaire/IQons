import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M21 3C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3L2.7959 20.9893C1.78722 20.887 1 20.0357 1 19V5C1 3.89543 1.89543 3 3 3H21ZM2.5 19C2.5 19.2761 2.72386 19.5 3 19.5H7.9502V9.375H2.5V19ZM9.4502 9.375V19.5H21C21.2761 19.5 21.5 19.2761 21.5 19V9.375H9.4502ZM3 4.5C2.72386 4.5 2.5 4.72386 2.5 5V7.875H21.5V5C21.5 4.72386 21.2761 4.5 21 4.5H3Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M21 3C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3L2.7959 20.9893C1.78722 20.887 1 20.0357 1 19V5C1 3.89543 1.89543 3 3 3H21ZM9.4502 9.375V19.5H21C21.2761 19.5 21.5 19.2761 21.5 19V9.375H9.4502ZM2.5 19C2.5 19.2761 2.72386 19.5 3 19.5H7.9502V9.375H2.5V19Z" fill="currentColor"/>`,
  duotone: `<path d="M20 4C21.1046 4 22 4.89543 22 6V9H9V20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4H20Z" fill="currentColor" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 3C22.1046 3 23 3.89543 23 5V19C23 20.0357 22.2128 20.887 21.2041 20.9893L21 21H3L2.7959 20.9893C1.85435 20.8938 1.1062 20.1457 1.01074 19.2041L1 19V5C1 3.89543 1.89543 3 3 3H21ZM2.5 19C2.5 19.2761 2.72386 19.5 3 19.5H7.9502V9.375H2.5V19ZM9.4502 9.375V19.5H21C21.2761 19.5 21.5 19.2761 21.5 19V9.375H9.4502ZM3 4.5C2.72386 4.5 2.5 4.72386 2.5 5V7.875H21.5V5C21.5 4.72386 21.2761 4.5 21 4.5H3Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Layout icon
 * Variants: outline, fill, duotone
 */
export function Layout({
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

Layout.displayName = "Layout";
Layout.variants = AVAILABLE;
