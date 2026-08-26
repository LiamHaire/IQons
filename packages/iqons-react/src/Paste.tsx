import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2041 5.01074C19.2128 5.113 20 5.96435 20 7V20C20 21.1046 19.1046 22 18 22H9C7.89543 22 7 21.1046 7 20V19H6C4.89543 19 4 18.1046 4 17V4L4.01074 3.7959C4.1062 2.85435 4.85435 2.1062 5.7959 2.01074L6 2H15L15.2041 2.01074C16.2128 2.113 17 2.96435 17 4V5H18L18.2041 5.01074ZM15.5 5V4C15.5 3.72386 15.2761 3.5 15 3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V17C5.5 17.2761 5.72386 17.5 6 17.5H7V7L7.01074 6.7959C7.1062 5.85435 7.85435 5.1062 8.7959 5.01074L9 5H15.5ZM9 6.5C8.72386 6.5 8.5 6.72386 8.5 7V20C8.5 20.2761 8.72386 20.5 9 20.5H18C18.2761 20.5 18.5 20.2761 18.5 20V7C18.5 6.72386 18.2761 6.5 18 6.5H9Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M18 5C19.1046 5 20 5.89543 20 7V20C20 21.1046 19.1046 22 18 22H9C7.89543 22 7 21.1046 7 20V19H6C4.89543 19 4 18.1046 4 17V4L4.01074 3.7959C4.1062 2.85435 4.85435 2.1062 5.7959 2.01074L6 2H15L15.2041 2.01074C16.2128 2.113 17 2.96435 17 4V5H18ZM15.5 5V4C15.5 3.72386 15.2761 3.5 15 3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V17C5.5 17.2761 5.72386 17.5 6 17.5H7V7C7 5.89543 7.89543 5 9 5H15.5Z" fill="currentColor"/>`,
  duotone: `<path d="M7 20C7 21.1046 7.89543 22 9 22H18C19.1046 22 20 21.1046 20 20V7C20 5.89543 19.1046 5 18 5H9C7.89543 5 7 5.89543 7 7V20Z" fill="currentColor" fill-opacity="0.2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2041 5.01074C19.2128 5.113 20 5.96435 20 7V20C20 21.1046 19.1046 22 18 22H9C7.89543 22 7 21.1046 7 20V19H6C4.89543 19 4 18.1046 4 17V4L4.01074 3.7959C4.1062 2.85435 4.85435 2.1062 5.7959 2.01074L6 2H15L15.2041 2.01074C16.2128 2.113 17 2.96435 17 4V5H18L18.2041 5.01074ZM15.5 5V4C15.5 3.72386 15.2761 3.5 15 3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V17C5.5 17.2761 5.72386 17.5 6 17.5H7V7L7.01074 6.7959C7.1062 5.85435 7.85435 5.1062 8.7959 5.01074L9 5H15.5ZM9 6.5C8.72386 6.5 8.5 6.72386 8.5 7V20C8.5 20.2761 8.72386 20.5 9 20.5H18C18.2761 20.5 18.5 20.2761 18.5 20V7C18.5 6.72386 18.2761 6.5 18 6.5H9Z" fill="currentColor"/>`,
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
