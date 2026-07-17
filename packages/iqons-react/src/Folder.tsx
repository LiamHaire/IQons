import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M7.7002 3C8.49056 3 9.20731 3.46526 9.52832 4.1875L10.334 6H21C22.1046 6 23 6.89543 23 8V19C23 20.1046 22.1046 21 21 21H3L2.7959 20.9893C1.78722 20.887 1 20.0357 1 19V5C1 3.89543 1.89543 3 3 3H7.7002ZM2.5 19C2.5 19.2761 2.72386 19.5 3 19.5H21C21.2761 19.5 21.5 19.2761 21.5 19V8C21.5 7.72386 21.2761 7.5 21 7.5H2.5V19ZM3 4.5C2.72386 4.5 2.5 4.72386 2.5 5V6H8.69141L8.15723 4.79688C8.07697 4.61632 7.89778 4.5 7.7002 4.5H3Z" fill="currentColor"/>`,
  fill: `<path d="M7.7002 3C8.49057 3 9.20731 3.46526 9.52832 4.1875L10.334 6H21C22.1046 6 23 6.89543 23 8V19C23 20.1046 22.1046 21 21 21H3L2.7959 20.9893C1.78722 20.887 1 20.0357 1 19V5C1 3.89543 1.89543 3 3 3H7.7002Z" fill="currentColor"/>`,
  duotone: `<path d="M2 7H20C21.1046 7 22 7.89543 22 9V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V7Z" fill="currentColor" fill-opacity="0.2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.7002 3C8.49056 3 9.20731 3.46526 9.52832 4.1875L10.334 6H21C22.1046 6 23 6.89543 23 8V19C23 20.1046 22.1046 21 21 21H3L2.7959 20.9893C1.78722 20.887 1 20.0357 1 19V5C1 3.89543 1.89543 3 3 3H7.7002ZM2.5 19C2.5 19.2761 2.72386 19.5 3 19.5H21C21.2761 19.5 21.5 19.2761 21.5 19V8C21.5 7.72386 21.2761 7.5 21 7.5H2.5V19ZM3 4.5C2.72386 4.5 2.5 4.72386 2.5 5V6H8.69141L8.15723 4.79688C8.07697 4.61632 7.89778 4.5 7.7002 4.5H3Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Folder icon
 * Variants: outline, fill, duotone
 */
export function Folder({
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

Folder.displayName = "Folder";
Folder.variants = AVAILABLE;
