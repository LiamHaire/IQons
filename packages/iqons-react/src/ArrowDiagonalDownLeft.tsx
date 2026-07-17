import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M5.92962 18.9974C5.43439 19.0355 5.0165 18.6509 5 18.1674L5.00211 18.0699L5.71142 8.84911C5.74379 8.42968 6.11003 8.11538 6.52949 8.14753C6.94894 8.17982 7.26313 8.54616 7.23108 8.96557L6.67051 16.2514L17.6992 5.22315C17.9967 4.9256 18.4792 4.92564 18.7768 5.22315C19.0744 5.52073 19.0744 6.00319 18.7768 6.30077L7.74816 17.329L15.0343 16.7685C15.4537 16.7364 15.82 17.0507 15.8523 17.4701C15.8845 17.8895 15.5702 18.2558 15.1507 18.2881L5.92962 18.9974Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M4 22C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4ZM5.92969 18.9971L15.1504 18.2881C15.5699 18.2558 15.8847 17.8892 15.8525 17.4697C15.82 17.0505 15.4535 16.7365 15.0342 16.7686L7.74805 17.3291L18.7764 6.30078C19.0739 6.00321 19.0739 5.52121 18.7764 5.22363C18.4788 4.92612 17.9968 4.92608 17.6992 5.22363L6.6709 16.251L7.23145 8.96582C7.26349 8.54641 6.94875 8.17975 6.5293 8.14746C6.11007 8.11544 5.74352 8.42949 5.71094 8.84863L5.00195 18.0703L5 18.167C5.0165 18.6505 5.43446 19.0352 5.92969 18.9971Z" fill="currentColor"/>`,
  duotone: `<path d="M22 20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M5.92962 18.9974C5.43439 19.0355 5.0165 18.6509 5 18.1674L5.00211 18.0699L5.71142 8.84911C5.74379 8.42968 6.11003 8.11538 6.52949 8.14753C6.94894 8.17982 7.26313 8.54616 7.23108 8.96557L6.67051 16.2514L17.6992 5.22315C17.9967 4.9256 18.4792 4.92564 18.7768 5.22315C19.0744 5.52073 19.0744 6.00319 18.7768 6.30077L7.74816 17.329L15.0343 16.7685C15.4537 16.7364 15.82 17.0507 15.8523 17.4701C15.8845 17.8895 15.5702 18.2558 15.1507 18.2881L5.92962 18.9974Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * ArrowDiagonalDownLeft icon
 * Variants: outline, fill, duotone
 */
export function ArrowDiagonalDownLeft({
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

ArrowDiagonalDownLeft.displayName = "ArrowDiagonalDownLeft";
ArrowDiagonalDownLeft.variants = AVAILABLE;
