import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 3C14.4665 3 15.25 3.7835 15.25 4.75V7.5H18.5C19.4665 7.5 20.25 8.2835 20.25 9.25V19.5C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25C3 19.8358 3.33579 19.5 3.75 19.5V12.25C3.75 11.2835 4.5335 10.5 5.5 10.5H8.75V4.75C8.75 3.7835 9.5335 3 10.5 3H13.5ZM5.5 12C5.36193 12 5.25 12.1119 5.25 12.25V19.5H8.75V12H5.5ZM10.5 4.5C10.3619 4.5 10.25 4.61193 10.25 4.75V19.5H13.75V4.75C13.75 4.61193 13.6381 4.5 13.5 4.5H10.5ZM15.25 19.5H18.75V9.25C18.75 9.11193 18.6381 9 18.5 9H15.25V19.5Z" fill="currentColor"/>`,
  fill: `<path d="M13.25 4C13.8023 4 14.25 4.44772 14.25 5V19.5H15.5V9C15.5 8.44772 15.9477 8 16.5 8H19C19.5523 8 20 8.44772 20 9V19.5H20.25C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25C3 19.8358 3.33579 19.5 3.75 19.5H4V12C4 11.4477 4.44772 11 5 11H7.5C8.05228 11 8.5 11.4477 8.5 12V19.5H9.75V5C9.75 4.44772 10.1977 4 10.75 4H13.25Z" fill="currentColor"/>`,
  duotone: `<path d="M4.5 12.25C4.5 11.6977 4.94772 11.25 5.5 11.25H9.5V20.25H4.5V12.25Z" fill="currentColor" fill-opacity="0.2"/>
<path d="M14.5 8.25H18.5C19.0523 8.25 19.5 8.69772 19.5 9.25V20.25H14.5V8.25Z" fill="currentColor" fill-opacity="0.2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 3C14.4665 3 15.25 3.7835 15.25 4.75V7.5H18.5C19.4665 7.5 20.25 8.2835 20.25 9.25V19.5C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25C3 19.8358 3.33579 19.5 3.75 19.5V12.25C3.75 11.2835 4.5335 10.5 5.5 10.5H8.75V4.75C8.75 3.7835 9.5335 3 10.5 3H13.5ZM5.5 12C5.36193 12 5.25 12.1119 5.25 12.25V19.5H8.75V12H5.5ZM10.5 4.5C10.3619 4.5 10.25 4.61193 10.25 4.75V19.5H13.75V4.75C13.75 4.61193 13.6381 4.5 13.5 4.5H10.5ZM15.25 19.5H18.75V9.25C18.75 9.11193 18.6381 9 18.5 9H15.25V19.5Z" fill="currentColor"/>`,
};

const AVAILABLE = ["outline","fill","duotone"] as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * ChartBar icon
 * Variants: outline, fill, duotone
 */
export function ChartBar({
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

ChartBar.displayName = "ChartBar";
ChartBar.variants = AVAILABLE;
