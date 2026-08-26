import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M12.9999 17.75C12.5857 17.75 6.24994 17.4142 6.24994 17V11C6.24994 10.5858 6.58575 10.25 6.99994 10.25C7.41415 10.25 7.74994 10.5858 7.74994 11V15.1895L16.4697 6.46973C16.7625 6.17684 17.2373 6.17686 17.5302 6.46973C17.8231 6.76262 17.8231 7.23738 17.5302 7.53027L8.81049 16.25H12.9999C13.4142 16.25 13.7499 16.5858 13.7499 17C13.7499 17.4142 13.4142 17.75 12.9999 17.75Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M4.99994 21C3.8954 21 2.99994 20.1045 2.99994 19V5C2.99994 3.89545 3.8954 3.00003 4.99994 3H18.9999C20.1045 3 20.9999 3.89543 20.9999 5V19C20.9999 20.1046 20.1045 21 18.9999 21H4.99994ZM13.9999 16.75C14.4141 16.75 14.7499 16.4142 14.7499 16C14.7499 15.5858 14.4142 15.25 13.9999 15.25H9.81049L16.5302 8.53027C16.8231 8.23738 16.8231 7.76262 16.5302 7.46973C16.2373 7.17686 15.7626 7.17684 15.4697 7.46973L8.74994 14.1895V10C8.74994 9.58579 8.41415 9.25 7.99994 9.25C7.58575 9.25003 7.24994 9.58581 7.24994 10V16C7.24994 16.3885 7.54537 16.7079 7.92377 16.7461C7.94897 16.7486 13.9742 16.75 13.9999 16.75Z" fill="currentColor"/>`,
  duotone: `<path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M12.9999 17.75C12.5857 17.75 6.24994 17.4142 6.24994 17V11C6.24994 10.5858 6.58575 10.25 6.99994 10.25C7.41415 10.25 7.74994 10.5858 7.74994 11V15.1895L16.4697 6.46973C16.7625 6.17684 17.2373 6.17686 17.5302 6.46973C17.8231 6.76262 17.8231 7.23738 17.5302 7.53027L8.81049 16.25H12.9999C13.4142 16.25 13.7499 16.5858 13.7499 17C13.7499 17.4142 13.4142 17.75 12.9999 17.75Z" fill="currentColor"/>`,
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
