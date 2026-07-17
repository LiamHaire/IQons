import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M5 15C6.10457 15 7 15.8954 7 17V21C7 22.1046 6.10457 23 5 23H3C1.89543 23 1 22.1046 1 21V17C1 15.8954 1.89543 15 3 15H5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 8C14.1046 8 15 8.89543 15 10V21C15 22.1046 14.1046 23 13 23H11L10.7959 22.9893C9.78722 22.887 9 22.0357 9 21V10C9 8.89543 9.89543 8 11 8H13ZM11 9.5C10.7239 9.5 10.5 9.72386 10.5 10V21C10.5 21.2761 10.7239 21.5 11 21.5H13C13.2761 21.5 13.5 21.2761 13.5 21V10C13.5 9.72386 13.2761 9.5 13 9.5H11Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 1C22.1046 1 23 1.89543 23 3V21C23 22.1046 22.1046 23 21 23H19L18.7959 22.9893C17.7872 22.887 17 22.0356 17 21V3C17 1.89543 17.8954 1 19 1H21ZM19 2.5C18.7239 2.5 18.5 2.72386 18.5 3V21C18.5 21.2761 18.7239 21.5 19 21.5H21C21.2761 21.5 21.5 21.2761 21.5 21V3C21.5 2.72386 21.2761 2.5 21 2.5H19Z" fill="currentColor"/>`,
  fill: `<path d="M1 17C1 15.8954 1.89543 15 3 15H5C6.10457 15 7 15.8954 7 17V21C7 22.1046 6.10457 23 5 23H3C1.89543 23 1 22.1046 1 21V17Z" fill="currentColor"/>
<path d="M9 10C9 8.89543 9.89543 8 11 8H13C14.1046 8 15 8.89543 15 10V21C15 22.1046 14.1046 23 13 23H11C9.89543 23 9 22.1046 9 21V10Z" fill="currentColor" fill-opacity="0.15"/>
<path d="M13 21.5V23H11V21.5H13ZM13.5 21V10C13.5 9.72386 13.2761 9.5 13 9.5H11C10.7239 9.5 10.5 9.72386 10.5 10V21C10.5 21.2761 10.7239 21.5 11 21.5V23L10.7959 22.9893C9.78722 22.887 9 22.0357 9 21V10C9 8.89543 9.89543 8 11 8H13C14.1046 8 15 8.89543 15 10V21C15 22.1046 14.1046 23 13 23V21.5C13.2761 21.5 13.5 21.2761 13.5 21Z" fill="currentColor"/>
<path d="M17 3C17 1.89543 17.8954 1 19 1H21C22.1046 1 23 1.89543 23 3V21C23 22.1046 22.1046 23 21 23H19C17.8954 23 17 22.1046 17 21V3Z" fill="currentColor" fill-opacity="0.15"/>
<path d="M21 21.5V23H19V21.5H21ZM21.5 21V3C21.5 2.72386 21.2761 2.5 21 2.5H19C18.7239 2.5 18.5 2.72386 18.5 3V21C18.5 21.2761 18.7239 21.5 19 21.5V23L18.7959 22.9893C17.7872 22.887 17 22.0356 17 21V3C17 1.89543 17.8954 1 19 1H21C22.1046 1 23 1.89543 23 3V21C23 22.1046 22.1046 23 21 23V21.5C21.2761 21.5 21.5 21.2761 21.5 21Z" fill="currentColor"/>`,
  duotone: `<path d="M1 17C1 15.8954 1.89543 15 3 15H5C6.10457 15 7 15.8954 7 17V21C7 22.1046 6.10457 23 5 23H3C1.89543 23 1 22.1046 1 21V17Z" fill="currentColor"/>
<path d="M9 10C9 8.89543 9.89543 8 11 8H13C14.1046 8 15 8.89543 15 10V21C15 22.1046 14.1046 23 13 23H11C9.89543 23 9 22.1046 9 21V10Z" fill="currentColor" fill-opacity="0.15"/>
<path d="M17 3C17 1.89543 17.8954 1 19 1H21C22.1046 1 23 1.89543 23 3V21C23 22.1046 22.1046 23 21 23H19C17.8954 23 17 22.1046 17 21V3Z" fill="currentColor" fill-opacity="0.15"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * SignalLow icon
 * Variants: outline, fill, duotone
 */
export function SignalLow({
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

SignalLow.displayName = "SignalLow";
SignalLow.variants = AVAILABLE;
