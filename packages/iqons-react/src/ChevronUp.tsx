import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M11.4541 7.69932C11.769 7.43356 12.2311 7.43356 12.5459 7.69932L12.6113 7.76016L19.7891 15.2224C20.077 15.5216 20.0692 15.9988 19.7716 16.2881C19.4738 16.5773 18.9989 16.5695 18.711 16.2704L12 9.29401L5.28899 16.2704C5.00108 16.5695 4.52618 16.5773 4.22843 16.2881C3.93081 15.9988 3.92303 15.5216 4.21086 15.2224L11.3887 7.76016L11.4541 7.69932Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M20 2C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20ZM12.5459 7.69922C12.2311 7.43352 11.7689 7.43352 11.4541 7.69922L11.3887 7.75977L4.21094 15.2227C3.92322 15.5219 3.93093 15.9988 4.22852 16.2881C4.52627 16.5773 5.00116 16.5696 5.28906 16.2705L12 9.29395L18.7109 16.2705C18.9988 16.5696 19.4737 16.5773 19.7715 16.2881C20.0691 15.9988 20.0768 15.5219 19.7891 15.2227L12.6113 7.75977L12.5459 7.69922Z" fill="currentColor"/>`,
  duotone: `<path d="M18.7586 15.5H5.24142C5.15233 15.5 5.10771 15.3923 5.17071 15.3293L11.9293 8.57071C11.9683 8.53166 12.0317 8.53166 12.0707 8.57071L18.8293 15.3293C18.8923 15.3923 18.8477 15.5 18.7586 15.5Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M11.4541 7.69932C11.769 7.43356 12.2311 7.43356 12.5459 7.69932L12.6113 7.76016L19.7891 15.2224C20.077 15.5216 20.0692 15.9988 19.7716 16.2881C19.4738 16.5773 18.9989 16.5695 18.711 16.2704L12 9.29401L5.28899 16.2704C5.00108 16.5695 4.52618 16.5773 4.22843 16.2881C3.93081 15.9988 3.92303 15.5216 4.21086 15.2224L11.3887 7.76016L11.4541 7.69932Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * ChevronUp icon
 * Variants: outline, fill, duotone
 */
export function ChevronUp({
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

ChevronUp.displayName = "ChevronUp";
ChevronUp.variants = AVAILABLE;
