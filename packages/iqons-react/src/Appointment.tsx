import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M9 9C9.55228 9 10 9.44772 10 10V13C10 13.5523 9.55228 14 9 14H6C5.44772 14 5 13.5523 5 13V10C5 9.44772 5.44772 9 6 9H9Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 1C16.5523 1 17 1.44772 17 2V3H21C22.1046 3 23 3.89543 23 5V21C23 22.1046 22.1046 23 21 23H3L2.7959 22.9893C1.78722 22.887 1 22.0357 1 21V5C1 3.89543 1.89543 3 3 3H7V2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2V3H15V2C15 1.44772 15.4477 1 16 1ZM3 4.5C2.72386 4.5 2.5 4.72386 2.5 5V21C2.5 21.2761 2.72386 21.5 3 21.5H21C21.2761 21.5 21.5 21.2761 21.5 21V5C21.5 4.72386 21.2761 4.5 21 4.5H17V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V4.5H9V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V4.5H3Z" fill="currentColor"/>`,
  fill: `<path d="M8 1C8.55228 1 9 1.44772 9 2V3H7V2C7 1.44772 7.44772 1 8 1Z" fill="currentColor"/>
<path d="M16 1C16.5523 1 17 1.44772 17 2V3H15V2C15 1.44772 15.4477 1 16 1Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 5.55228 7.44772 6 8 6C8.55228 6 9 5.55228 9 5V3H15V5C15 5.55228 15.4477 6 16 6C16.5523 6 17 5.55228 17 5V3H21C22.1046 3 23 3.89543 23 5V21C23 22.1046 22.1046 23 21 23H3C1.89543 23 1 22.1046 1 21V5C1 3.89543 1.89543 3 3 3H7V5ZM6 9C5.44772 9 5 9.44772 5 10V13C5 13.5523 5.44772 14 6 14H9C9.55228 14 10 13.5523 10 13V10C10 9.44772 9.55228 9 9 9H6Z" fill="currentColor"/>`,
  duotone: `<path d="M1 5C1 3.89543 1.89543 3 3 3H21C22.1046 3 23 3.89543 23 5V21C23 22.1046 22.1046 23 21 23H3C1.89543 23 1 22.1046 1 21V5Z" fill="currentColor" fill-opacity="0.15"/>
<path d="M9 9C9.55228 9 10 9.44772 10 10V13C10 13.5523 9.55228 14 9 14H6C5.44772 14 5 13.5523 5 13V10C5 9.44772 5.44772 9 6 9H9Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 1C16.5523 1 17 1.44772 17 2V3H21C22.1046 3 23 3.89543 23 5V21L22.9893 21.2041C22.8938 22.1457 22.1457 22.8938 21.2041 22.9893L21 23H3L2.7959 22.9893C1.85435 22.8938 1.1062 22.1457 1.01074 21.2041L1 21V5C1 3.89543 1.89543 3 3 3H7V2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2V3H15V2C15 1.44772 15.4477 1 16 1ZM3 4.5C2.72386 4.5 2.5 4.72386 2.5 5V21C2.5 21.2761 2.72386 21.5 3 21.5H21C21.2761 21.5 21.5 21.2761 21.5 21V5C21.5 4.72386 21.2761 4.5 21 4.5H17V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V4.5H9V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V4.5H3Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Appointment icon
 * Variants: outline, fill, duotone
 */
export function Appointment({
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

Appointment.displayName = "Appointment";
Appointment.variants = AVAILABLE;
