import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M8 11H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 15.5H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<mask id="path-3-inside-1_73_163" fill="white">
<path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V5Z"/>
</mask>
<path d="M5 3V4.5H19V3V1.5H5V3ZM21 5H19.5V21H21H22.5V5H21ZM19 23V21.5H5V23V24.5H19V23ZM3 21H4.5V5H3H1.5V21H3ZM5 23V21.5C4.72386 21.5 4.5 21.2761 4.5 21H3H1.5C1.5 22.933 3.067 24.5 5 24.5V23ZM21 21H19.5C19.5 21.2761 19.2761 21.5 19 21.5V23V24.5C20.933 24.5 22.5 22.933 22.5 21H21ZM19 3V4.5C19.2761 4.5 19.5 4.72386 19.5 5H21H22.5C22.5 3.067 20.933 1.5 19 1.5V3ZM5 3V1.5C3.067 1.5 1.5 3.067 1.5 5H3H4.5C4.5 4.72386 4.72386 4.5 5 4.5V3Z" fill="currentColor" mask="url(#path-3-inside-1_73_163)"/>
<mask id="path-5-inside-2_73_163" fill="white">
<path d="M7.5 3C7.5 1.89543 8.39543 1 9.5 1H14.5C15.6046 1 16.5 1.89543 16.5 3V5C16.5 6.10457 15.6046 7 14.5 7H9.5C8.39543 7 7.5 6.10457 7.5 5V3Z"/>
</mask>
<path d="M7.5 3C7.5 1.89543 8.39543 1 9.5 1H14.5C15.6046 1 16.5 1.89543 16.5 3V5C16.5 6.10457 15.6046 7 14.5 7H9.5C8.39543 7 7.5 6.10457 7.5 5V3Z" fill="currentColor"/>
<path d="M9.5 1V2.5H14.5V1V-0.5H9.5V1ZM16.5 3H15V5H16.5H18V3H16.5ZM14.5 7V5.5H9.5V7V8.5H14.5V7ZM7.5 5H9V3H7.5H6V5H7.5ZM9.5 7V5.5C9.22386 5.5 9 5.27614 9 5H7.5H6C6 6.933 7.567 8.5 9.5 8.5V7ZM16.5 5H15C15 5.27614 14.7761 5.5 14.5 5.5V7V8.5C16.433 8.5 18 6.933 18 5H16.5ZM14.5 1V2.5C14.7761 2.5 15 2.72386 15 3H16.5H18C18 1.067 16.433 -0.5 14.5 -0.5V1ZM9.5 1V-0.5C7.567 -0.5 6 1.067 6 3H7.5H9C9 2.72386 9.22386 2.5 9.5 2.5V1Z" fill="currentColor" mask="url(#path-5-inside-2_73_163)"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 1C15.6046 1 16.5 1.89543 16.5 3H19C20.1046 3 21 3.89543 21 5V21L20.9893 21.2041C20.8938 22.1457 20.1457 22.8938 19.2041 22.9893L19 23H5L4.7959 22.9893C3.85435 22.8938 3.1062 22.1457 3.01074 21.2041L3 21V5C3 3.89543 3.89543 3 5 3H7.5C7.5 1.89543 8.39543 1 9.5 1H14.5ZM8 14.75C7.58579 14.75 7.25 15.0858 7.25 15.5C7.25 15.9142 7.58579 16.25 8 16.25H16C16.4142 16.25 16.75 15.9142 16.75 15.5C16.75 15.0858 16.4142 14.75 16 14.75H8ZM8 10.25C7.58579 10.25 7.25 10.5858 7.25 11C7.25 11.4142 7.58579 11.75 8 11.75H16C16.4142 11.75 16.75 11.4142 16.75 11C16.75 10.5858 16.4142 10.25 16 10.25H8ZM9.5 2.5C9.22386 2.5 9 2.72386 9 3V5C9 5.27614 9.22386 5.5 9.5 5.5H14.5C14.7761 5.5 15 5.27614 15 5V3C15 2.72386 14.7761 2.5 14.5 2.5H9.5Z" fill="currentColor"/>`,
  duotone: `<path d="M3 5C3 3.89543 3.89543 3 5 3H8.5V6H15.5V3H19C20.1046 3 21 3.89543 21 5V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V5Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M8 11H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 15.5H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 1C15.6046 1 16.5 1.89543 16.5 3H19C20.1046 3 21 3.89543 21 5V21L20.9893 21.2041C20.8938 22.1457 20.1457 22.8938 19.2041 22.9893L19 23H5L4.7959 22.9893C3.85435 22.8938 3.1062 22.1457 3.01074 21.2041L3 21V5C3 3.89543 3.89543 3 5 3H7.5C7.5 1.89543 8.39543 1 9.5 1H14.5ZM5 4.5C4.72386 4.5 4.5 4.72386 4.5 5V21C4.5 21.2761 4.72386 21.5 5 21.5H19C19.2761 21.5 19.5 21.2761 19.5 21V5C19.5 4.72386 19.2761 4.5 19 4.5H16.5V5C16.5 6.03565 15.7128 6.887 14.7041 6.98926L14.5 7H9.5L9.2959 6.98926C8.35435 6.8938 7.6062 6.14565 7.51074 5.2041L7.5 5V4.5H5ZM9.5 2.5C9.22386 2.5 9 2.72386 9 3V5C9 5.27614 9.22386 5.5 9.5 5.5H14.5C14.7761 5.5 15 5.27614 15 5V3C15 2.72386 14.7761 2.5 14.5 2.5H9.5Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Task icon
 * Variants: outline, fill, duotone
 */
export function Task({
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

Task.displayName = "Task";
Task.variants = AVAILABLE;
