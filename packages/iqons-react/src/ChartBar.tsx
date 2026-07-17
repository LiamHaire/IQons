import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
  outline: `<path fill-rule="evenodd" clip-rule="evenodd" d="M15.25 8.5H20.25V20.5H21.25C21.6642 20.5 22 20.8358 22 21.25C22 21.6642 21.6642 22 21.25 22H2.75C2.33579 22 2 21.6642 2 21.25C2 20.8358 2.33579 20.5 2.75 20.5H3.75V11.5H8.75V2H15.25V8.5ZM5.25 20.5H8.75V13H5.25V20.5ZM10.25 20.5H13.75V3.5H10.25V20.5ZM15.25 20.5H18.75V10H15.25V20.5Z" fill="currentColor"/>`,
  fill: `<path d="M15 20.5H16V9H21V20.5H21.25C21.6642 20.5 22 20.8358 22 21.25C22 21.6642 21.6642 22 21.25 22H2.75C2.33579 22 2 21.6642 2 21.25C2 20.8358 2.33579 20.5 2.75 20.5H4V12H9V20.5H10V2H15V20.5Z" fill="currentColor"/>`,
  duotone: `<path d="M4.5 12.25H9.5V21.25H4.5V12.25Z" fill="currentColor" fill-opacity="0.15"/>
<path d="M9.5 2.75H14.5V21.25H9.5V2.75Z" fill="currentColor" fill-opacity="0.15"/>
<path d="M14.5 9.25H19.5V21.25H14.5V9.25Z" fill="currentColor" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.25 8.5H20.25V20.5H21.25C21.6642 20.5 22 20.8358 22 21.25C22 21.6642 21.6642 22 21.25 22H2.75C2.33579 22 2 21.6642 2 21.25C2 20.8358 2.33579 20.5 2.75 20.5H3.75V11.5H8.75V2H15.25V8.5ZM5.25 20.5H8.75V13H5.25V20.5ZM10.25 20.5H13.75V3.5H10.25V20.5ZM15.25 20.5H18.75V10H15.25V20.5Z" fill="currentColor"/>`,
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
