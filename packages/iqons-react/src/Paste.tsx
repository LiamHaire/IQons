import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M19 5C20.1046 5 21 5.89543 21 7V21C21 22.0357 20.2128 22.887 19.2041 22.9893L19 23H9L8.7959 22.9893C7.85435 22.8938 7.1062 22.1457 7.01074 21.2041L7 21V19H5L4.7959 18.9893C3.85435 18.8938 3.1062 18.1457 3.01074 17.2041L3 17V3C3 1.89543 3.89543 1 5 1H15C16.1046 1 17 1.89543 17 3V5H19ZM15.5 5V3C15.5 2.72386 15.2761 2.5 15 2.5H5C4.72386 2.5 4.5 2.72386 4.5 3V17C4.5 17.2761 4.72386 17.5 5 17.5H7V7C7 5.89543 7.89543 5 9 5H15.5ZM9 6.5C8.72386 6.5 8.5 6.72386 8.5 7V21C8.5 21.2761 8.72386 21.5 9 21.5H19C19.2761 21.5 19.5 21.2761 19.5 21V7C19.5 6.72386 19.2761 6.5 19 6.5H9Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M15 1C16.1046 1 17 1.89543 17 3V5H19C20.1046 5 21 5.89543 21 7V21C21 22.1046 20.1046 23 19 23H9C7.89543 23 7 22.1046 7 21V19H5L4.7959 18.9893C3.85435 18.8938 3.1062 18.1457 3.01074 17.2041L3 17V3C3 1.89543 3.89543 1 5 1H15ZM5 2.5C4.72386 2.5 4.5 2.72386 4.5 3V17C4.5 17.2761 4.72386 17.5 5 17.5H7V7C7 5.89543 7.89543 5 9 5H15.5V3C15.5 2.72386 15.2761 2.5 15 2.5H5Z" fill="currentColor"/>`,
  duotone: `<path d="M7 7C7 5.89543 7.89543 5 9 5H19C20.1046 5 21 5.89543 21 7V21C21 22.1046 20.1046 23 19 23H9C7.89543 23 7 22.1046 7 21V7Z" fill="currentColor" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 5C20.1046 5 21 5.89543 21 7V21C21 22.0357 20.2128 22.887 19.2041 22.9893L19 23H9L8.7959 22.9893C7.85435 22.8938 7.1062 22.1457 7.01074 21.2041L7 21V19H5L4.7959 18.9893C3.85435 18.8938 3.1062 18.1457 3.01074 17.2041L3 17V3C3 1.89543 3.89543 1 5 1H15C16.1046 1 17 1.89543 17 3V5H19ZM15.5 5V3C15.5 2.72386 15.2761 2.5 15 2.5H5C4.72386 2.5 4.5 2.72386 4.5 3V17C4.5 17.2761 4.72386 17.5 5 17.5H7V7C7 5.89543 7.89543 5 9 5H15.5ZM9 6.5C8.72386 6.5 8.5 6.72386 8.5 7V21C8.5 21.2761 8.72386 21.5 9 21.5H19C19.2761 21.5 19.5 21.2761 19.5 21V7C19.5 6.72386 19.2761 6.5 19 6.5H9Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Paste icon
 * Variants: outline, fill, duotone
 */
export function Paste({
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

Paste.displayName = "Paste";
Paste.variants = AVAILABLE;
