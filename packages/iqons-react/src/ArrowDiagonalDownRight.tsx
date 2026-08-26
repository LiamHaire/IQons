import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M11.0001 17.75C11.4143 17.75 17.7501 17.4142 17.7501 17V11C17.7501 10.5858 17.4143 10.25 17.0001 10.25C16.5859 10.25 16.2501 10.5858 16.2501 11V15.1895L7.53034 6.46973C7.23746 6.17684 6.76269 6.17686 6.46979 6.46973C6.1769 6.76262 6.1769 7.23738 6.46979 7.53027L15.1895 16.25H11.0001C10.5859 16.25 10.2501 16.5858 10.2501 17C10.2501 17.4142 10.5859 17.75 11.0001 17.75Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M19.0001 21C20.1046 21 21.0001 20.1045 21.0001 19V5C21.0001 3.89545 20.1046 3.00003 19.0001 3H5.00006C3.89549 3 3.00006 3.89543 3.00006 5V19C3.00006 20.1046 3.89549 21 5.00006 21H19.0001ZM10.0001 16.75C9.58585 16.75 9.25007 16.4142 9.25006 16C9.25006 15.5858 9.58585 15.25 10.0001 15.25H14.1895L7.46979 8.53027C7.1769 8.23738 7.1769 7.76262 7.46979 7.46973C7.76268 7.17686 8.23745 7.17684 8.53033 7.46973L15.2501 14.1895V10C15.2501 9.58579 15.5858 9.25 16.0001 9.25C16.4142 9.25003 16.7501 9.58581 16.7501 10V16C16.7501 16.3885 16.4546 16.7079 16.0762 16.7461C16.0503 16.7486 10.0258 16.75 10.0001 16.75Z" fill="currentColor"/>`,
  duotone: `<path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M11.0001 17.75C11.4143 17.75 17.7501 17.4142 17.7501 17V11C17.7501 10.5858 17.4143 10.25 17.0001 10.25C16.5859 10.25 16.2501 10.5858 16.2501 11V15.1895L7.53034 6.46973C7.23746 6.17684 6.76269 6.17686 6.46979 6.46973C6.1769 6.76262 6.1769 7.23738 6.46979 7.53027L15.1895 16.25H11.0001C10.5859 16.25 10.2501 16.5858 10.2501 17C10.2501 17.4142 10.5859 17.75 11.0001 17.75Z" fill="currentColor"/>`,
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
