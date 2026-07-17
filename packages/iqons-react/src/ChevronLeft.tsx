import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M7.69932 11.4541C7.43356 11.769 7.43356 12.2311 7.69932 12.5459L7.76016 12.6113L15.2224 19.7891C15.5216 20.077 15.9988 20.0692 16.2881 19.7716C16.5773 19.4738 16.5695 18.9989 16.2704 18.711L9.29401 12L16.2704 5.28899C16.5695 5.00108 16.5773 4.52618 16.2881 4.22843C15.9988 3.93081 15.5216 3.92303 15.2224 4.21086L7.76016 11.3887L7.69932 11.4541Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 2.89543 2.89543 2 4 2L20 2C21.1046 2 22 2.89543 22 4L22 20C22 21.1046 21.1046 22 20 22L4 22C2.89543 22 2 21.1046 2 20L2 4ZM7.69922 11.4541C7.43352 11.7689 7.43352 12.2311 7.69922 12.5459L7.75977 12.6113L15.2227 19.7891C15.5219 20.0768 15.9988 20.0691 16.2881 19.7715C16.5773 19.4737 16.5696 18.9988 16.2705 18.7109L9.29395 12L16.2705 5.28906C16.5696 5.00116 16.5773 4.52627 16.2881 4.22852C15.9988 3.93093 15.5219 3.92322 15.2227 4.21094L7.75977 11.3887L7.69922 11.4541Z" fill="currentColor"/>`,
  duotone: `<path d="M7.69932 11.4541C7.43356 11.769 7.43356 12.2311 7.69932 12.5459L7.76016 12.6113L15.2224 19.7891C15.5216 20.077 15.9988 20.0692 16.2881 19.7716C16.5773 19.4738 16.5695 18.9989 16.2704 18.711L9.29401 12L16.2704 5.28899C16.5695 5.00108 16.5773 4.52618 16.2881 4.22843C15.9988 3.93081 15.5216 3.92303 15.2224 4.21086L7.76016 11.3887L7.69932 11.4541Z" fill="currentColor"/>
<path d="M15.5 18.7586L15.5 5.24142C15.5 5.15233 15.3923 5.10771 15.3293 5.17071L8.57071 11.9293C8.53166 11.9683 8.53166 12.0317 8.57071 12.0707L15.3293 18.8293C15.3923 18.8923 15.5 18.8477 15.5 18.7586Z" fill="currentColor" fill-opacity="0.2"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * ChevronLeft icon
 * Variants: outline, fill, duotone
 */
export function ChevronLeft({
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

ChevronLeft.displayName = "ChevronLeft";
ChevronLeft.variants = AVAILABLE;
