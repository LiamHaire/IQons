import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M15.458 8.73146C15.7443 8.43219 16.2193 8.42173 16.5186 8.70802C16.8178 8.99434 16.8283 9.46926 16.542 9.76857L11.0498 15.5108C10.7363 15.8383 10.2074 15.8199 9.917 15.4717L7.42383 12.4805C7.15871 12.1623 7.2015 11.689 7.51953 11.4238C7.83768 11.1587 8.31097 11.2015 8.57617 11.5195L10.5381 13.874L15.458 8.73146Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 2C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20ZM4 3.5C3.72386 3.5 3.5 3.72386 3.5 4V20C3.5 20.2761 3.72386 20.5 4 20.5H20C20.2761 20.5 20.5 20.2761 20.5 20V4C20.5 3.72386 20.2761 3.5 20 3.5H4Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M20 2C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20ZM16.5186 8.70801C16.2192 8.42176 15.7443 8.4322 15.458 8.73145L10.5381 13.874L8.57617 11.5195C8.31096 11.2015 7.83766 11.1587 7.51953 11.4238C7.20155 11.689 7.15876 12.1623 7.42383 12.4805L9.91699 15.4717C10.2074 15.8199 10.7363 15.8383 11.0498 15.5107L16.542 9.76855C16.8283 9.46925 16.8178 8.99433 16.5186 8.70801Z" fill="currentColor"/>`,
  duotone: `<path d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M15.458 8.73146C15.7443 8.43219 16.2193 8.42173 16.5186 8.70802C16.8178 8.99434 16.8283 9.46926 16.542 9.76857L11.0498 15.5108C10.7363 15.8383 10.2074 15.8199 9.917 15.4717L7.42383 12.4805C7.15871 12.1623 7.2015 11.689 7.51953 11.4238C7.83768 11.1587 8.31097 11.2015 8.57617 11.5195L10.5381 13.874L15.458 8.73146Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 2C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20ZM4 3.5C3.72386 3.5 3.5 3.72386 3.5 4V20C3.5 20.2761 3.72386 20.5 4 20.5H20C20.2761 20.5 20.5 20.2761 20.5 20V4C20.5 3.72386 20.2761 3.5 20 3.5H4Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * ApproveSquare icon
 * Variants: outline, fill, duotone
 */
export function ApproveSquare({
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

ApproveSquare.displayName = "ApproveSquare";
ApproveSquare.variants = AVAILABLE;
