import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M16 1C16.5523 1 17 1.44772 17 2V3H21C22.1046 3 23 3.89543 23 5V21C23 22.1046 22.1046 23 21 23H3L2.7959 22.9893C1.78722 22.887 1 22.0357 1 21V5C1 3.89543 1.89543 3 3 3H7V2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2V3H15V2C15 1.44772 15.4477 1 16 1ZM2.5 10.75V21C2.5 21.2761 2.72386 21.5 3 21.5H21C21.2761 21.5 21.5 21.2761 21.5 21V10.75H2.5ZM3 4.5C2.72386 4.5 2.5 4.72386 2.5 5V9.25H21.5V5C21.5 4.72386 21.2761 4.5 21 4.5H17V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V4.5H9V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V4.5H3Z" fill="currentColor"/>`,
  fill: `<path d="M23 21C23 22.1046 22.1046 23 21 23H3C1.89543 23 1 22.1046 1 21V10.75H23V21Z" fill="currentColor"/>
<path d="M7 4C7 4.55228 7.44772 5 8 5C8.55228 5 9 4.55228 9 4V3H15V4C15 4.55228 15.4477 5 16 5C16.5523 5 17 4.55228 17 4V3H21C22.1046 3 23 3.89543 23 5V9.25H1V5C1 3.89543 1.89543 3 3 3H7V4Z" fill="currentColor"/>
<path d="M8 1C8.55228 1 9 1.44772 9 2V3H7V2C7 1.44772 7.44772 1 8 1Z" fill="currentColor"/>
<path d="M16 1C16.5523 1 17 1.44772 17 2V3H15V2C15 1.44772 15.4477 1 16 1Z" fill="currentColor"/>`,
  duotone: `<path d="M1 10H23V21C23 22.1046 22.1046 23 21 23H3C1.89543 23 1 22.1046 1 21V10Z" fill="currentColor" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 1C16.5523 1 17 1.44772 17 2V3H21C22.1046 3 23 3.89543 23 5V21C23 22.1046 22.1046 23 21 23H3L2.7959 22.9893C1.78722 22.887 1 22.0357 1 21V5C1 3.89543 1.89543 3 3 3H7V2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2V3H15V2C15 1.44772 15.4477 1 16 1ZM2.5 10.75V21C2.5 21.2761 2.72386 21.5 3 21.5H21C21.2761 21.5 21.5 21.2761 21.5 21V10.75H2.5ZM3 4.5C2.72386 4.5 2.5 4.72386 2.5 5V9.25H21.5V5C21.5 4.72386 21.2761 4.5 21 4.5H17V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V4.5H9V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V4.5H3Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Calendar icon
 * Variants: outline, fill, duotone
 */
export function Calendar({
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

Calendar.displayName = "Calendar";
Calendar.variants = AVAILABLE;
