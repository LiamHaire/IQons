import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M2 16C2 14.8954 2.89543 14 4 14H6C7.10457 14 8 14.8954 8 16V20C8 21.1046 7.10457 22 6 22H4C2.89543 22 2 21.1046 2 20V16Z" fill="currentColor"/>
<path d="M9 10C9 8.89543 9.89543 8 11 8H13C14.1046 8 15 8.89543 15 10V20C15 21.1046 14.1046 22 13 22H11C9.89543 22 9 21.1046 9 20V10Z" fill="currentColor"/>`,
  fill: `<path d="M2 16C2 14.8954 2.89543 14 4 14H6C7.10457 14 8 14.8954 8 16V20C8 21.1046 7.10457 22 6 22H4C2.89543 22 2 21.1046 2 20V16Z" fill="currentColor"/>
<path d="M9 10C9 8.89543 9.89543 8 11 8H13C14.1046 8 15 8.89543 15 10V20C15 21.1046 14.1046 22 13 22H11C9.89543 22 9 21.1046 9 20V10Z" fill="currentColor"/>
<path d="M20 20.5V22H18V20.5H20ZM20.5 20V4C20.5 3.72386 20.2761 3.5 20 3.5H18C17.7239 3.5 17.5 3.72386 17.5 4V20C17.5 20.2761 17.7239 20.5 18 20.5V22L17.7959 21.9893C16.7872 21.887 16 21.0357 16 20V4C16 2.89543 16.8954 2 18 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22V20.5C20.2761 20.5 20.5 20.2761 20.5 20Z" fill="currentColor"/>`,
  duotone: `<path d="M2 16C2 14.8954 2.89543 14 4 14H6C7.10457 14 8 14.8954 8 16V20C8 21.1046 7.10457 22 6 22H4C2.89543 22 2 21.1046 2 20V16Z" fill="currentColor"/>
<path d="M9 10C9 8.89543 9.89543 8 11 8H13C14.1046 8 15 8.89543 15 10V20C15 21.1046 14.1046 22 13 22H11C9.89543 22 9 21.1046 9 20V10Z" fill="currentColor"/>
<path d="M16 4C16 2.89543 16.8954 2 18 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H18C16.8954 22 16 21.1046 16 20V4Z" fill="currentColor" fill-opacity="0.2"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * IconSignalMedium icon
 * Variants: outline, fill, duotone
 */
export function IconSignalMedium({
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

IconSignalMedium.displayName = "IconSignalMedium";
IconSignalMedium.variants = AVAILABLE;
