import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M1 19V5C1 3.89543 1.89543 3 3 3H7.69238C8.4868 3.00016 9.20597 3.47042 9.52441 4.19824L10.3125 6H21C22.1046 6 23 6.89543 23 8V19C23 20.1046 22.1046 21 21 21V19.5C21.2761 19.5 21.5 19.2761 21.5 19V8C21.5 7.72386 21.2761 7.5 21 7.5H9.33105L8.15039 4.7998C8.08082 4.6408 7.93427 4.53093 7.76562 4.50586L7.69238 4.5H3C2.72386 4.5 2.5 4.72386 2.5 5V19C2.5 19.2761 2.72386 19.5 3 19.5V21C1.89543 21 1 20.1046 1 19ZM21 19.5V21H3V19.5H21Z" fill="currentColor"/>`,
  fill: `<path d="M7.7002 3C8.49057 3 9.20731 3.46526 9.52832 4.1875L10.334 6H21C22.1046 6 23 6.89543 23 8V19C23 20.1046 22.1046 21 21 21H3L2.7959 20.9893C1.78722 20.887 1 20.0357 1 19V5C1 3.89543 1.89543 3 3 3H7.7002Z" fill="currentColor"/>`,
  duotone: `<path d="M7.69238 3C8.4868 3.00016 9.20597 3.47042 9.52441 4.19824L10.3125 6H21C22.1046 6 23 6.89543 23 8V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3H7.69238Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M1 19V5C1 3.89543 1.89543 3 3 3H7.69238C8.4868 3.00016 9.20597 3.47042 9.52441 4.19824L10.3125 6H21C22.1046 6 23 6.89543 23 8V19C23 20.1046 22.1046 21 21 21V19.5C21.2761 19.5 21.5 19.2761 21.5 19V8C21.5 7.72386 21.2761 7.5 21 7.5H9.33105L8.15039 4.7998C8.08082 4.6408 7.93427 4.53093 7.76562 4.50586L7.69238 4.5H3C2.72386 4.5 2.5 4.72386 2.5 5V19C2.5 19.2761 2.72386 19.5 3 19.5V21C1.89543 21 1 20.1046 1 19ZM21 19.5V21H3V19.5H21Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * FolderBasic icon
 * Variants: outline, fill, duotone
 */
export function FolderBasic({
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

FolderBasic.displayName = "FolderBasic";
FolderBasic.variants = AVAILABLE;
