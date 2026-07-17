import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M18.0704 18.9974C18.5656 19.0355 18.9835 18.6509 19 18.1674L18.9979 18.0699L18.2886 8.84911C18.2562 8.42968 17.89 8.11538 17.4705 8.14753C17.0511 8.17982 16.7369 8.54616 16.7689 8.96557L17.3295 16.2514L6.30085 5.22315C6.00328 4.9256 5.52078 4.92564 5.22319 5.22315C4.9256 5.52073 4.9256 6.00319 5.22319 6.30077L16.2518 17.329L8.96573 16.7685C8.5463 16.7364 8.18003 17.0507 8.14767 17.4701C8.11552 17.8895 8.42976 18.2558 8.84927 18.2881L18.0704 18.9974Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M20 22C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20ZM18.0703 18.9971L8.84961 18.2881C8.4301 18.2558 8.11531 17.8892 8.14746 17.4697C8.17999 17.0505 8.5465 16.7365 8.96582 16.7686L16.252 17.3291L5.22363 6.30078C4.92605 6.00321 4.92607 5.52121 5.22363 5.22363C5.52122 4.92612 6.00322 4.92608 6.30078 5.22363L17.3291 16.251L16.7686 8.96582C16.7365 8.54641 17.0512 8.17975 17.4707 8.14746C17.8899 8.11544 18.2565 8.42949 18.2891 8.84863L18.998 18.0703L19 18.167C18.9835 18.6505 18.5655 19.0352 18.0703 18.9971Z" fill="currentColor"/>`,
  duotone: `<path d="M2 20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V20Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M18.0704 18.9974C18.5656 19.0355 18.9835 18.6509 19 18.1674L18.9979 18.0699L18.2886 8.84911C18.2562 8.42968 17.89 8.11538 17.4705 8.14753C17.0511 8.17982 16.7369 8.54616 16.7689 8.96557L17.3295 16.2514L6.30085 5.22315C6.00328 4.9256 5.52078 4.92564 5.22319 5.22315C4.9256 5.52073 4.9256 6.00319 5.22319 6.30077L16.2518 17.329L8.96573 16.7685C8.5463 16.7364 8.18003 17.0507 8.14767 17.4701C8.11552 17.8895 8.42976 18.2558 8.84927 18.2881L18.0704 18.9974Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * ArrowDiagonalDownRight icon
 * Variants: outline, fill, duotone
 */
export function ArrowDiagonalDownRight({
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

ArrowDiagonalDownRight.displayName = "ArrowDiagonalDownRight";
ArrowDiagonalDownRight.variants = AVAILABLE;
