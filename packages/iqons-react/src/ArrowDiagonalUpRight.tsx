import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path d="M11.0001 6.25C11.4143 6.25 17.7501 6.58579 17.7501 7V13C17.7501 13.4142 17.4143 13.75 17.0001 13.75C16.5859 13.75 16.2501 13.4142 16.2501 13V8.81055L7.53034 17.5303C7.23746 17.8232 6.76269 17.8231 6.46979 17.5303C6.1769 17.2374 6.1769 16.7626 6.46979 16.4697L15.1895 7.75H11.0001C10.5859 7.75 10.2501 7.41421 10.2501 7C10.2501 6.58579 10.5859 6.25 11.0001 6.25Z" fill="currentColor"/>`,
  fill: `<path fill-rule="evenodd" clip-rule="evenodd" d="M19.0001 3C20.1046 3.00003 21.0001 3.89545 21.0001 5V19C21.0001 20.1045 20.1046 21 19.0001 21H5.00006C3.89549 21 3.00006 20.1046 3.00006 19V5C3.00006 3.89543 3.89549 3 5.00006 3H19.0001ZM10.0001 7.25C9.58585 7.25 9.25006 7.58579 9.25006 8C9.25006 8.41421 9.58585 8.75 10.0001 8.75H14.1895L7.46979 15.4697C7.17689 15.7626 7.17689 16.2374 7.46979 16.5303C7.76268 16.8231 8.23745 16.8232 8.53033 16.5303L15.2501 9.81055V14C15.2501 14.4142 15.5858 14.75 16.0001 14.75C16.4142 14.75 16.7501 14.4142 16.7501 14V8C16.7501 7.5858 16.4142 7.25003 16.0001 7.25H10.0001Z" fill="currentColor"/>`,
  duotone: `<path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M11.0001 6.25C11.4143 6.25 17.7501 6.58579 17.7501 7V13C17.7501 13.4142 17.4143 13.75 17.0001 13.75C16.5859 13.75 16.2501 13.4142 16.2501 13V8.81055L7.53034 17.5303C7.23746 17.8232 6.76269 17.8231 6.46979 17.5303C6.1769 17.2374 6.1769 16.7626 6.46979 16.4697L15.1895 7.75H11.0001C10.5859 7.75 10.2501 7.41421 10.2501 7C10.2501 6.58579 10.5859 6.25 11.0001 6.25Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * ArrowDiagonalUpRight icon
 * Variants: outline, fill, duotone
 */
export function ArrowDiagonalUpRight({
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

ArrowDiagonalUpRight.displayName = "ArrowDiagonalUpRight";
ArrowDiagonalUpRight.variants = AVAILABLE;
