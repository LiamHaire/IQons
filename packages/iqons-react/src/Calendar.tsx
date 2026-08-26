import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C16.4142 2 16.75 2.33579 16.75 2.75V3.5H20L20.2041 3.51074C21.2128 3.613 22 4.46435 22 5.5V20C22 21.0357 21.2128 21.887 20.2041 21.9893L20 22H4C2.96435 22 2.113 21.2128 2.01074 20.2041L2 20V5.5C2 4.39543 2.89543 3.5 4 3.5H7.25V2.75C7.25 2.33579 7.58579 2 8 2C8.41421 2 8.75 2.33579 8.75 2.75V3.5H15.25V2.75C15.25 2.33579 15.5858 2 16 2ZM3.5 10.75V20C3.5 20.2761 3.72386 20.5 4 20.5H20C20.2761 20.5 20.5 20.2761 20.5 20V10.75H3.5ZM4 5C3.72386 5 3.5 5.22386 3.5 5.5V9.25H20.5V5.5C20.5 5.22386 20.2761 5 20 5H16.75V5.75C16.75 6.16421 16.4142 6.5 16 6.5C15.5858 6.5 15.25 6.16421 15.25 5.75V5H8.75V5.75C8.75 6.16421 8.41421 6.5 8 6.5C7.58579 6.5 7.25 6.16421 7.25 5.75V5H4Z" fill="currentColor"/>`,
  fill: `<path d="M22 20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V10.75H22V20Z" fill="currentColor"/>
<path d="M7.25 5.25C7.25 5.66421 7.58579 6 8 6C8.41421 6 8.75 5.66421 8.75 5.25V3.5H15.25V5.25C15.25 5.66421 15.5858 6 16 6C16.4142 6 16.75 5.66421 16.75 5.25V3.5H20C21.1046 3.5 22 4.39543 22 5.5V9.25H2V5.5C2 4.39543 2.89543 3.5 4 3.5H7.25V5.25Z" fill="currentColor"/>
<path d="M8 2C8.41421 2 8.75 2.33579 8.75 2.75V3.5H7.25V2.75C7.25 2.33579 7.58579 2 8 2Z" fill="currentColor"/>
<path d="M16 2C16.4142 2 16.75 2.33579 16.75 2.75V3.5H15.25V2.75C15.25 2.33579 15.5858 2 16 2Z" fill="currentColor"/>`,
  duotone: `<path d="M2 10H22V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V10Z" fill="currentColor" fill-opacity="0.2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C16.4142 2 16.75 2.33579 16.75 2.75V3.5H20L20.2041 3.51074C21.2128 3.613 22 4.46435 22 5.5V20C22 21.0357 21.2128 21.887 20.2041 21.9893L20 22H4C2.96435 22 2.113 21.2128 2.01074 20.2041L2 20V5.5C2 4.39543 2.89543 3.5 4 3.5H7.25V2.75C7.25 2.33579 7.58579 2 8 2C8.41421 2 8.75 2.33579 8.75 2.75V3.5H15.25V2.75C15.25 2.33579 15.5858 2 16 2ZM3.5 10.75V20C3.5 20.2761 3.72386 20.5 4 20.5H20C20.2761 20.5 20.5 20.2761 20.5 20V10.75H3.5ZM4 5C3.72386 5 3.5 5.22386 3.5 5.5V9.25H20.5V5.5C20.5 5.22386 20.2761 5 20 5H16.75V5.75C16.75 6.16421 16.4142 6.5 16 6.5C15.5858 6.5 15.25 6.16421 15.25 5.75V5H8.75V5.75C8.75 6.16421 8.41421 6.5 8 6.5C7.58579 6.5 7.25 6.16421 7.25 5.75V5H4Z" fill="currentColor"/>`,
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
