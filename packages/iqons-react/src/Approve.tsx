import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M18.46 6.4796C18.7472 6.18139 19.2222 6.1728 19.5205 6.46006C19.8186 6.74747 19.8272 7.22264 19.54 7.52108L9.92285 17.5168C9.60958 17.8424 9.08326 17.825 8.79297 17.4787L4.42578 12.2674C4.15964 11.9498 4.20116 11.4765 4.51856 11.2103C4.83589 10.9442 5.30811 10.9858 5.57422 11.3031L9.41309 15.8823L18.46 6.4796Z" fill="currentColor"/>`,
  fill: `<path d="M18.46 6.4796C18.7473 6.18139 19.2222 6.1728 19.5205 6.46006C19.8186 6.74747 19.8272 7.22264 19.54 7.52108L9.92286 17.5168C9.60959 17.8424 9.08326 17.825 8.79298 17.4787L4.42579 12.2674C4.15964 11.9498 4.20117 11.4765 4.51856 11.2103C4.83589 10.9442 5.30811 10.9858 5.57423 11.3031L9.41309 15.8823L18.46 6.4796Z" fill="currentColor"/>`,
  duotone: `<path d="M6 8C6 6.89543 6.89543 6 8 6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M18.46 6.4796C18.7473 6.18139 19.2222 6.1728 19.5205 6.46006C19.8186 6.74747 19.8272 7.22264 19.54 7.52108L9.92286 17.5168C9.60959 17.8424 9.08326 17.825 8.79298 17.4787L4.42579 12.2674C4.15964 11.9498 4.20117 11.4765 4.51856 11.2103C4.83589 10.9442 5.30811 10.9858 5.57423 11.3031L9.41309 15.8823L18.46 6.4796Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * Approve icon
 * Variants: outline, fill, duotone
 */
export function Approve({
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

Approve.displayName = "Approve";
Approve.variants = AVAILABLE;
