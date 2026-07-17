import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M1 17C1 15.8954 1.89543 15 3 15H5C6.10457 15 7 15.8954 7 17V21C7 22.1046 6.10457 23 5 23H3C1.89543 23 1 22.1046 1 21V17Z" fill="currentColor"/>
<path d="M9 10C9 8.89543 9.89543 8 11 8H13C14.1046 8 15 8.89543 15 10V21C15 22.1046 14.1046 23 13 23H11C9.89543 23 9 22.1046 9 21V10Z" fill="currentColor"/>
<path d="M17 3C17 1.89543 17.8954 1 19 1H21C22.1046 1 23 1.89543 23 3V21C23 22.1046 22.1046 23 21 23H19C17.8954 23 17 22.1046 17 21V3Z" fill="currentColor"/>`,
  fill: `<path d="M1 17C1 15.8954 1.89543 15 3 15H5C6.10457 15 7 15.8954 7 17V21C7 22.1046 6.10457 23 5 23H3C1.89543 23 1 22.1046 1 21V17Z" fill="currentColor"/>
<path d="M9 10C9 8.89543 9.89543 8 11 8H13C14.1046 8 15 8.89543 15 10V21C15 22.1046 14.1046 23 13 23H11C9.89543 23 9 22.1046 9 21V10Z" fill="currentColor"/>
<path d="M17 3C17 1.89543 17.8954 1 19 1H21C22.1046 1 23 1.89543 23 3V21C23 22.1046 22.1046 23 21 23H19C17.8954 23 17 22.1046 17 21V3Z" fill="currentColor"/>`,
  duotone: `<path d="M1 17C1 15.8954 1.89543 15 3 15H5C6.10457 15 7 15.8954 7 17V21C7 22.1046 6.10457 23 5 23H3C1.89543 23 1 22.1046 1 21V17Z" fill="currentColor"/>
<path d="M9 10C9 8.89543 9.89543 8 11 8H13C14.1046 8 15 8.89543 15 10V21C15 22.1046 14.1046 23 13 23H11C9.89543 23 9 22.1046 9 21V10Z" fill="currentColor"/>
<path d="M17 3C17 1.89543 17.8954 1 19 1H21C22.1046 1 23 1.89543 23 3V21C23 22.1046 22.1046 23 21 23H19C17.8954 23 17 22.1046 17 21V3Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * SignalHigh icon
 * Variants: outline, fill, duotone
 */
export function SignalHigh({
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

SignalHigh.displayName = "SignalHigh";
SignalHigh.variants = AVAILABLE;
