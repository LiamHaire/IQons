import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M17 3C18.1046 3 19 3.89543 19 5V6.5H21C22.1046 6.5 23 7.39543 23 8.5V19L22.9893 19.2041C22.8938 20.1457 22.1457 20.8938 21.2041 20.9893L21 21H3L2.7959 20.9893C1.78722 20.887 1 20.0357 1 19V8.5C1 7.39543 1.89543 6.5 3 6.5H5V5C5 3.89543 5.89543 3 7 3H17ZM2.5 19C2.5 19.2761 2.72386 19.5 3 19.5H21C21.2761 19.5 21.5 19.2761 21.5 19V12.75H18V14H16V12.75H8V14H6V12.75H2.5V19ZM3 8C2.72386 8 2.5 8.22386 2.5 8.5V11.25H6V10H8V11.25H16V10H18V11.25H21.5V8.5C21.5 8.22386 21.2761 8 21 8H3ZM7 4.5C6.72386 4.5 6.5 4.72386 6.5 5V6.5H17.5V5C17.5 4.72386 17.2761 4.5 17 4.5H7Z" fill="currentColor"/>`,
  fill: `<path d="M6 14H8V12.75H16V14H18V12.75H23V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V12.75H6V14Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 3C18.1046 3 19 3.89543 19 5V6.5H21C22.1046 6.5 23 7.39543 23 8.5V11.25H18V10H16V11.25H8V10H6V11.25H1V8.5C1 7.39543 1.89543 6.5 3 6.5H5V5C5 3.89543 5.89543 3 7 3H17ZM7 4.5C6.72386 4.5 6.5 4.72386 6.5 5V6.5H17.5V5C17.5 4.72386 17.2761 4.5 17 4.5H7Z" fill="currentColor"/>`,
  duotone: `<path d="M1 8.5C1 7.39543 1.89543 6.5 3 6.5H21C22.1046 6.5 23 7.39543 23 8.5V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V8.5Z" fill="currentColor" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 3C18.1046 3 19 3.89543 19 5V6.5H21C22.1046 6.5 23 7.39543 23 8.5V19L22.9893 19.2041C22.8938 20.1457 22.1457 20.8938 21.2041 20.9893L21 21H3L2.7959 20.9893C1.78722 20.887 1 20.0357 1 19V8.5C1 7.39543 1.89543 6.5 3 6.5H5V5C5 3.89543 5.89543 3 7 3H17ZM2.5 19C2.5 19.2761 2.72386 19.5 3 19.5H21C21.2761 19.5 21.5 19.2761 21.5 19V12.75H18V14H16V12.75H8V14H6V12.75H2.5V19ZM3 8C2.72386 8 2.5 8.22386 2.5 8.5V11.25H6V10H8V11.25H16V10H18V11.25H21.5V8.5C21.5 8.22386 21.2761 8 21 8H3ZM7 4.5C6.72386 4.5 6.5 4.72386 6.5 5V6.5H17.5V5C17.5 4.72386 17.2761 4.5 17 4.5H7Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Toolbox icon
 * Variants: outline, fill, duotone
 */
export function Toolbox({
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

Toolbox.displayName = "Toolbox";
Toolbox.variants = AVAILABLE;
