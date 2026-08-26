import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M20 4C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4L3.7959 19.9893C2.78722 19.887 2 19.0357 2 18V6C2 4.89543 2.89543 4 4 4H20ZM3.5 18C3.5 18.2761 3.72386 18.5 4 18.5H7.9502V9.375H3.5V18ZM9.4502 9.375V18.5H20C20.2761 18.5 20.5 18.2761 20.5 18V9.375H9.4502ZM4 5.5C3.72386 5.5 3.5 5.72386 3.5 6V7.875H20.5V6C20.5 5.72386 20.2761 5.5 20 5.5H4Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M20 4C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4L3.7959 19.9893C2.78722 19.887 2 19.0357 2 18V6C2 4.89543 2.89543 4 4 4H20ZM9.4502 9.375V18.5H20C20.2761 18.5 20.5 18.2761 20.5 18V9.375H9.4502ZM3.5 18C3.5 18.2761 3.72386 18.5 4 18.5H7.9502V9.375H3.5V18Z" fill="currentColor"/>`,
  duotone: `<path d="M20 4C21.1046 4 22 4.89543 22 6V9H9V20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4H20Z" fill="currentColor" fill-opacity="0.2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 4C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4L3.7959 19.9893C2.78722 19.887 2 19.0357 2 18V6C2 4.89543 2.89543 4 4 4H20ZM3.5 18C3.5 18.2761 3.72386 18.5 4 18.5H7.9502V9.375H3.5V18ZM9.4502 9.375V18.5H20C20.2761 18.5 20.5 18.2761 20.5 18V9.375H9.4502ZM4 5.5C3.72386 5.5 3.5 5.72386 3.5 6V7.875H20.5V6C20.5 5.72386 20.2761 5.5 20 5.5H4Z" fill="currentColor"/>`,
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
